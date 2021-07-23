var entiers;
var moyenne=0;
var somme=0;
var i=0;

while (entiers!=0)
{
    var entiers=parseInt(prompt("Veuillez saisir un nombre entier (sélectionnez 0 pour stopper la saisie : "));
    somme = somme + entiers;
    i++;
    moyenne = somme/(i-1);
}

console.log("La somme des entiers est égale à : "+somme);

console.log("La moyenne de les entiers est égale à : "+moyenne);

console.log("Vous ave entré : "+(i-1)+"entiers");

document.write("La somme des entiers est égale à : "+somme+'</br>');

document.write("La moyenne de les entiers est égale à : " +moyenne+'</br>');

document.write("Vous avez entré : "+(i-1)+" entiers"+'</br>');