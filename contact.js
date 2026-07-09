const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Votre message a été envoyé avec succès !");

    form.reset();
});