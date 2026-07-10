<?php
// src/Models/Installation.php

require_once __DIR__ . '/../Core/Model.php';

class Installation extends Model {
    protected $table = 'installation';
    
    /**
     * Créer une nouvelle demande d'installation
     */
    public function create($data) {
        $reference = 'INST-' . date('Y') . '-' . str_pad(rand(1, 9999), 4, '0', STR_PAD_LEFT);
        
        $query = "INSERT INTO installation (
            reference_install, id_commande, id_client, id_technicien,
            date_demande, date_prevue, heure_prevue, adresse_intervention,
            instructions_specifiques, statut, frais_installation
        ) VALUES (
            :reference, :id_commande, :id_client, :id_technicien,
            NOW(), :date_prevue, :heure_prevue, :adresse,
            :instructions, 'En attente', :frais
        )";
        
        $stmt = $this->db->prepare($query);
        
        return $stmt->execute([
            ':reference' => $reference,
            ':id_commande' => $data['id_commande'] ?? null,
            ':id_client' => $data['id_client'],
            ':id_technicien' => $data['id_technicien'] ?? null,
            ':date_prevue' => $data['date_prevue'],
            ':heure_prevue' => $data['heure_prevue'] ?? null,
            ':adresse' => $data['adresse_intervention'],
            ':instructions' => $data['instructions'] ?? null,
            ':frais' => $data['frais_installation'] ?? 0
        ]);
    }
    
    /**
     * Récupérer les installations d'un client
     */
    public function getByClient($clientId) {
        $query = "SELECT i.*, u.nom, u.prenom, u.telephone as tech_telephone,
                  u2.nom as client_nom, u2.prenom as client_prenom
                  FROM installation i
                  LEFT JOIN utilisateur u ON i.id_technicien = u.id_utilisateur
                  LEFT JOIN client c ON i.id_client = c.id_client
                  LEFT JOIN utilisateur u2 ON c.id_client = u2.id_utilisateur
                  WHERE i.id_client = :client_id
                  ORDER BY i.date_demande DESC";
        
        $stmt = $this->db->prepare($query);
        $stmt->execute([':client_id' => $clientId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    /**
     * Récupérer les installations assignées à un technicien
     */
    public function getByTechnicien($techId) {
        $query = "SELECT i.*, u.nom, u.prenom, u.telephone
                  FROM installation i
                  LEFT JOIN client c ON i.id_client = c.id_client
                  LEFT JOIN utilisateur u ON c.id_client = u.id_utilisateur
                  WHERE i.id_technicien = :tech_id
                  AND i.statut NOT IN ('Terminée', 'Annulée')
                  ORDER BY i.date_prevue ASC";
        
        $stmt = $this->db->prepare($query);
        $stmt->execute([':tech_id' => $techId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    /**
     * Mettre à jour le statut d'une installation
     */
    public function updateStatut($id, $statut, $rapport = null) {
        $query = "UPDATE installation SET 
                  statut = :statut,
                  date_realisation = CASE 
                      WHEN :statut IN ('Terminée', 'Annulée') 
                      THEN NOW() 
                      ELSE date_realisation 
                  END,
                  rapport_final = COALESCE(:rapport, rapport_final)
                  WHERE id_installation = :id";
        
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            ':id' => $id,
            ':statut' => $statut,
            ':rapport' => $rapport
        ]);
    }
    
    /**
     * Obtenir les statistiques des installations
     */
    public function getStats() {
        $query = "SELECT 
                    COUNT(*) as total,
                    SUM(CASE WHEN statut = 'En attente' THEN 1 ELSE 0 END) as en_attente,
                    SUM(CASE WHEN statut = 'Planifiée' THEN 1 ELSE 0 END) as planifiee,
                    SUM(CASE WHEN statut = 'En cours' THEN 1 ELSE 0 END) as en_cours,
                    SUM(CASE WHEN statut = 'Terminée' THEN 1 ELSE 0 END) as terminee,
                    SUM(CASE WHEN statut = 'Annulée' THEN 1 ELSE 0 END) as annulee
                  FROM installation";
        
        $stmt = $this->db->query($query);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    
    /**
     * Vérifier la disponibilité d'un technicien pour une date donnée
     */
    public function checkTechnicienDisponibilite($techId, $date, $heure) {
        $query = "SELECT COUNT(*) as total
                  FROM installation
                  WHERE id_technicien = :tech_id
                  AND date_prevue = :date
                  AND heure_prevue = :heure
                  AND statut NOT IN ('Terminée', 'Annulée')";
        
        $stmt = $this->db->prepare($query);
        $stmt->execute([
            ':tech_id' => $techId,
            ':date' => $date,
            ':heure' => $heure
        ]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        return $result['total'] == 0;
    }
}
