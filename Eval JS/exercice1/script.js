var inf20 = 0;
var supp40 = 0;
var entr2040 =0;
var personnes;

//Mon petit do -- ré -- mi -- fa -- sol -- la -- si -- dodo --//
do {
    personnes = parseInt(prompt("veuillez saisir des âges. \nLa saisie s'arrête dès la saisie d'un centaire."));
    console.log(personnes);
    
    if ( personnes <20) {
        inf20++;
    }   
    if ((personnes >=40 ) && (personnes <=100)) {
        entr2040++;
    }
    if ( personnes > 40) {
        supp40++;
    }
}


while (personnes < 100);
//INFERIEUR -- 20 -- JEUNES
console.log("Il y a" + inf20 + "jeune(s) de moins de 20ans.");
document.write('<br>' + "Il y a" + inf20 + "jeune(s) de moins de 20ans." + '<br>');
//MID -- 20-40 -- ADULTES
console.log("Il y a" + entr2040 + "d'adulte(s) entre 20 et 40ans.");
document.write('<br>' + "Il y a" + entr2040 + "d'adulte(s) entre 20 et 40ans." + '<br>');
//SUPP -- 40 -- VIEUX
console.log("Il y a" + supp40 + "personne(s) de plus de 40ans.");
document.write('<br>' + "Il y a" + supp40 + "personne(s) de plus de 40ans." + '<br>');