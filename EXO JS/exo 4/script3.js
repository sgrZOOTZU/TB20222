var nombre;
var i = 0;
var moyenne = 0;
var somme = 0;

while (nombre != 0)
{
    nombre = parseInt(prompt("Entrez des nombres entiers :\n on arrête la saisie avec la valeur 0"));
    somme = somme + nombre;
    i++ 
    moyenne = somme / (i - 1);
}


console.log("La somme est : " + somme + '</br>');
document.write("La somme est : " + somme + '</br>');
console.log("La moyenne est : " + moyenne);
document.write("La moyenne est : " + moyenne);