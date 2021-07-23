//TABLLEAUKAERZIG HAIGH LIA //
var tableau = [];
var taille = parseInt(prompt("Veuillez définir le nombre d'élèves."));

for(var i = 0; i < taille; i++){
    contenue = prompt("Veuillez entrer les noms des èléves.")

    tableau.push(contenue);
    document.write('Élève n° ' + (i+1) + ' - ' + tableau[i] + '</br>')
}