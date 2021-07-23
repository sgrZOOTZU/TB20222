//Nom&Prénom//

var n = 1;

do{
    var prenom = prompt("Saisissez un max de prénom, vous au N°" + n + " ou Clic sur Annuler pour arrêter la saisie.");
    n = n + 1;
   console.log( prenom + "</br>");

} while (prenom);

console.log(n-2)