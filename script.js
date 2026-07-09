function afficher(id){

    let contenu = document.getElementById(id);

    if(contenu.style.display === "block"){
        contenu.style.display = "none";
    }
    else{
        contenu.style.display = "block";
    }

}
