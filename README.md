<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nos Services - Vente & Maintenance Scolaire</title>

    <!-- ============ CSS ============ -->
    <style>
        /* ----- RESET & BASE ----- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Roboto, system-ui, sans-serif;
            background: #f4f7fc;
            color: #1e293b;
            padding: 2rem 1rem;
            line-height: 1.6;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
        }

        /* ----- EN-TÊTE ----- */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 3px solid #2563eb;
        }

        .header h1 {
            font-size: 2rem;
            color: #0f172a;
        }

        .header h1 span {
            color: #2563eb;
        }

        .cart-badge {
            background: #2563eb;
            color: #fff;
            padding: 0.5rem 1.2rem;
            border-radius: 40px;
            font-weight: 600;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 4px 8px rgba(37, 99, 235, 0.25);
        }

        .cart-badge span {
            background: #fff;
            color: #2563eb;
            padding: 0.1rem 0.6rem;
            border-radius: 20px;
            font-size: 0.9rem;
        }

        /* ----- GRILLE DES SERVICES ----- */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }

        .service-card {
            background: #ffffff;
            border-radius: 24px;
            padding: 1.8rem 1.5rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            border: 1px solid #e9edf4;
            display: flex;
            flex-direction: column;
        }

        .service-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 14px 34px rgba(0, 0, 0, 0.10);
        }

        .service-card .icon {
            font-size: 2.8rem;
            margin-bottom: 0.5rem;
        }

        .service-card h3 {
            font-size: 1.4rem;
            margin-bottom: 0.4rem;
            color: #0f172a;
        }

        .service-card .price {
            font-size: 1.8rem;
            font-weight: 700;
            color: #2563eb;
            margin: 0.3rem 0 0.2rem;
        }

        .service-card .price small {
            font-size: 0.9rem;
            font-weight: 400;
            color: #64748b;
        }

        .service-card .desc {
            color: #475569;
            font-size: 0.95rem;
            margin: 0.5rem 0 1rem;
            flex-grow: 1;
        }

        .service-card ul {
            list-style: none;
            margin: 0.5rem 0 1.2rem;
            font-size: 0.9rem;
        }

        .service-card ul li {
            padding: 0.25rem 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .service-card ul li::before {
            content: "✔️";
            color: #16a34a;
        }

        .btn {
            display: inline-block;
            background: #2563eb;
            color: #fff;
            border: none;
            padding: 0.7rem 1.2rem;
            border-radius: 40px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
            text-align: center;
            width: 100%;
            margin-top: auto;
        }

        .btn:hover {
            background: #1d4ed8;
        }

        .btn:active {
            transform: scale(0.97);
        }

        .btn-secondary {
            background: #e2e8f0;
            color: #1e293b;
        }

        .btn-secondary:hover {
            background: #cbd5e1;
        }

        .btn-success {
            background: #16a34a;
        }

        .btn-success:hover {
            background: #15803d;
        }

        /* ----- PANIER RÉCAPITULATIF ----- */
        .cart-section {
            background: #ffffff;
            border-radius: 24px;
            padding: 1.8rem 2rem;
            margin-top: 2.5rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
            border: 1px solid #e9edf4;
        }

        .cart-section h2 {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            font-size: 1.4rem;
            margin-bottom: 1rem;
        }

        .cart-items {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            margin-bottom: 1.2rem;
            min-height: 40px;
        }

        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f8fafc;
            padding: 0.6rem 1rem;
            border-radius: 12px;
            border-left: 4px solid #2563eb;
        }

        .cart-item .remove-btn {
            background: #fee2e2;
            border: none;
            color: #b91c1c;
            padding: 0.2rem 0.7rem;
            border-radius: 40px;
            font-weight: 600;
            cursor: pointer;
            font-size: 0.8rem;
            transition: background 0.2s;
        }

        .cart-item .remove-btn:hover {
            background: #fecaca;
        }

        .cart-total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.3rem;
            font-weight: 700;
            border-top: 2px solid #e2e8f0;
            padding-top: 1rem;
            margin-top: 0.3rem;
        }

        .cart-total span:last-child {
            color: #2563eb;
        }

        .cart-actions {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 1rem;
        }

        .cart-actions .btn {
            width: auto;
            padding: 0.7rem 2.2rem;
        }

        .empty-message {
            color: #94a3b8;
            font-style: italic;
            padding: 0.5rem 0;
        }

        /* ----- TOAST (notification) ----- */
        .toast {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: #0f172a;
            color: #fff;
            padding: 0.8rem 1.8rem;
            border-radius: 40px;
            font-weight: 500;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
            transform: translateY(100px);
            opacity: 0;
            transition: transform 0.4s ease, opacity 0.4s ease;
            z-index: 999;
        }

        .toast.show {
            transform: translateY(0);
            opacity: 1;
        }

        /* ----- RESPONSIVE ----- */
        @media (max-width: 640px) {
            .header {
                flex-direction: column;
                align-items: stretch;
            }
            .cart-badge {
                justify-content: center;
            }
            .cart-actions .btn {
                width: 100%;
                text-align: center;
            }
        }
    </style>
</head>

<body>

    <div class="container">

        <!-- ===== EN-TÊTE ===== -->
        <header class="header">
            <h1>🔧 <span>Services</span> Scolaires</h1>
            <div class="cart-badge">
                🛒 Panier
                <span id="cartCount">0</span>
            </div>
        </header>

        <!-- ===== GRILLE DES SERVICES ===== -->
        <section class="services-grid" id="servicesGrid">
            <!-- Carte 1 : Installation -->
            <div class="service-card" data-id="install" data-name="Installation Logiciels" data-price="29.90">
                <div class="icon">💻</div>
                <h3>Installation Logiciels</h3>
                <div class="price">29,90 € <small>forfait</small></div>
                <p class="desc">
                    Installation complète de votre suite bureautique, IDE, antivirus et drivers.
                </p>
                <ul>
                    <li>Suite Office / LibreOffice</li>
                    <li>Environnement de développement (VS Code, Python, etc.)</li>
                    <li>Antivirus + pare-feu</li>
                </ul>
                <button class="btn" data-action="add">➕ Ajouter</button>
            </div>

            <!-- Carte 2 : Maintenance Express -->
            <div class="service-card" data-id="maintenance" data-name="Maintenance Express" data-price="12.90">
                <div class="icon">⚡</div>
                <h3>Maintenance Express</h3>
                <div class="price">12,90 € <small>/ mois</small></div>
                <p class="desc">
                    Intervention rapide en cas de panne, nettoyage, optimisation et mise à jour.
                </p>
                <ul>
                    <li>Assistance à distance (chat / téléphone)</li>
                    <li>Mises à jour automatiques</li>
                    <li>Nettoyage du système</li>
                </ul>
                <button class="btn" data-action="add">➕ Ajouter</button>
            </div>

            <!-- Carte 3 : Pack Gold (Installation + Maintenance 1 an) -->
            <div class="service-card" data-id="packgold" data-name="Pack Gold (Installation + 1 an)" data-price="149.00">
                <div class="icon">⭐</div>
                <h3>Pack Gold</h3>
                <div class="price">149,00 € <small>/ an</small></div>
                <p class="desc">
                    Le combo gagnant : installation complète + maintenance illimitée pendant 1 an.
                </p>
                <ul>
                    <li>Tout ce qu'inclut Installation</li>
                    <li>Maintenance illimitée (12 mois)</li>
                    <li>Priorité au support</li>
                </ul>
                <button class="btn btn-success" data-action="add">⭐ Ajouter</button>
            </div>
        </section>

        <!-- ===== PANIER RÉCAPITULATIF ===== -->
        <section class="cart-section" id="cartSection">
            <h2>🛒 Votre sélection</h2>

            <div class="cart-items" id="cartItems">
                <div class="empty-message">Aucun service sélectionné pour l'instant.</div>
            </div>

            <div class="cart-total">
                <span>Total TTC</span>
                <span id="cartTotal">0,00 €</span>
            </div>

            <div class="cart-actions">
                <button class="btn btn-secondary" id="emptyCartBtn">🗑️ Vider le panier</button>
                <button class="btn btn-success" id="checkoutBtn">✅ Passer la commande</button>
            </div>
        </section>

    </div>

    <!-- ===== TOAST (notification) ===== -->
    <div class="toast" id="toast"></div>

    <!-- ============ JAVASCRIPT ============ -->
    <script>
        (function() {
            'use strict';

            // ----- ÉTAT -----
            let cart = []; // chaque élément : { id, name, price }

            // ----- RÉFÉRENCES DOM -----
            const cartItemsEl = document.getElementById('cartItems');
            const cartTotalEl = document.getElementById('cartTotal');
            const cartCountEl = document.getElementById('cartCount');
            const emptyCartBtn = document.getElementById('emptyCartBtn');
            const checkoutBtn = document.getElementById('checkoutBtn');
            const toastEl = document.getElementById('toast');

            // ----- TOAST -----
            let toastTimeout = null;

            function showToast(message) {
                toastEl.textContent = message;
                toastEl.classList.add('show');
                clearTimeout(toastTimeout);
                toastTimeout = setTimeout(() => {
                    toastEl.classList.remove('show');
                }, 2500);
            }

            // ----- RENDU DU PANIER -----
            function renderCart() {
                // 1. Vider le conteneur
                cartItemsEl.innerHTML = '';

                // 2. Si panier vide
                if (cart.length === 0) {
                    cartItemsEl.innerHTML = '<div class="empty-message">Aucun service sélectionné pour l\'instant.</div>';
                    cartTotalEl.textContent = '0,00 €';
                    cartCountEl.textContent = '0';
                    return;
                }

                // 3. Afficher chaque article
                let total = 0;
                cart.forEach((item, index) => {
                    total += item.price;

                    const div = document.createElement('div');
                    div.className = 'cart-item';
                    div.innerHTML = `
                        <span><strong>${item.name}</strong> — ${item.price.toFixed(2)} €</span>
                        <button class="remove-btn" data-index="${index}">✕ Retirer</button>
                    `;
                    cartItemsEl.appendChild(div);
                });

                // 4. Mettre à jour le total et le compteur
                cartTotalEl.textContent = total.toFixed(2).replace('.', ',') + ' €';
                cartCountEl.textContent = cart.length;

                // 5. Ajouter les écouteurs sur les boutons "Retirer"
                document.querySelectorAll('.remove-btn').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        const idx = parseInt(this.dataset.index, 10);
                        removeFromCart(idx);
                    });
                });
            }

            // ----- AJOUTER AU PANIER -----
            function addToCart(id, name, price) {
                // Vérifier si déjà présent (on n'autorise pas les doublons pour simplifier)
                const exists = cart.some(item => item.id === id);
                if (exists) {
                    showToast(`⚠️ "${name}" est déjà dans votre panier.`);
                    return;
                }

                cart.push({ id, name, price });
                renderCart();
                showToast(`✅ "${name}" ajouté au panier !`);
            }

            // ----- RETIRER DU PANIER (par index) -----
            function removeFromCart(index) {
                if (index < 0 || index >= cart.length) return;
                const removed = cart[index];
                cart.splice(index, 1);
                renderCart();
                showToast(`🗑️ "${removed.name}" retiré.`);
            }

            // ----- VIDER LE PANIER -----
            function emptyCart() {
                if (cart.length === 0) {
                    showToast('ℹ️ Le panier est déjà vide.');
                    return;
                }
                cart = [];
                renderCart();
                showToast('🗑️ Panier vidé.');
            }

            // ----- PASSER LA COMMANDE (simulation) -----
            function checkout() {
                if (cart.length === 0) {
                    showToast('❌ Votre panier est vide. Ajoutez des services !');
                    return;
                }

                const total = cart.reduce((sum, item) => sum + item.price, 0);
                const names = cart.map(item => item.name).join(', ');
                showToast(`✅ Commande validée ! Services : ${names} — Total : ${total.toFixed(2)} €`);

                // (Optionnel) On pourrait vider le panier après commande :
                // cart = [];
                // renderCart();
            }

            // ----- GESTION DES CLICS SUR "AJOUTER" -----
            function setupAddButtons() {
                document.querySelectorAll('[data-action="add"]').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        const card = this.closest('.service-card');
                        if (!card) return;

                        const id = card.dataset.id;
                        const name = card.dataset.name;
                        const price = parseFloat(card.dataset.price);

                        if (!id || !name || isNaN(price)) {
                            showToast('⚠️ Erreur : données du service invalides.');
                            return;
                        }

                        addToCart(id, name, price);
                    });
                });
            }

            // ----- INIT -----
            function init() {
                setupAddButtons();

                emptyCartBtn.addEventListener('click', emptyCart);
                checkoutBtn.addEventListener('click', checkout);

                // Rendu initial (panier vide)
                renderCart();
            }

            // Lancer l'application quand le DOM est prêt
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
            } else {
                init();
            }

        })();
    </script>

</body>
</html>
