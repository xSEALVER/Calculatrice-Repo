document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prévenir la soumission du formulaire pour affichage de l'alerte
    event.preventDefault();

    // Vérifier la validité du formulaire
    if (this.checkValidity()) {
        alert('Formulaire soumis avec succès !');
    } else {
        alert('Veuillez corriger les erreurs dans le formulaire.');
    }
});