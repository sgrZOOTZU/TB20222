function validateForm() {

    if(document.getElementById('societer').value == '') {
      document.getElementById('erreur1').innerHTML = 'Le nom de la société doit contenir au minimum 1 caractère';
      alert("Le nom de la société doit contenir au minimum 1 caractère")
      return false;
    }
    if(document.getElementById('contact').value == '') {
        document.getElementById('erreur2').innerHTML = 'La personne à contacter doit contenir au minimum 1 caractère';
        alert("La personne à contacter doit contenir au minimum 1 caractère")
        return false;
    }
    if(document.getElementById('codepostal').value == '') {
        document.getElementById('erreur3').innerHTML = 'Le code postal doit contenir au maximum 5 chiffres';
        alert("Le code postal doit contenir au maximum 5 chiffres")
        return false;
    }
    if(document.getElementById('ville').value == '') {
        document.getElementById('erreur4').innerHTML = 'Votre ville doit contenir au moins 1 caractère';
        alert("Votre ville doit contenir au moins 1 caractère")
        return false;
    }
    if(document.getElementById('email').value == '') {
        document.getElementById('erreur5').innerHTML = 'Votre email doit contenir au moins 1 arobase-@-';
        alert("Votre email doit contenir au moins 1 arobase-@-")
        return false;
    }
}