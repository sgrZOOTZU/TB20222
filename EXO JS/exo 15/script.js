var magic=parseInt(Math.random()*100)

var proposition;

var ecoute_bouton=document.getElementById("button1");

ecoute_bouton.addEventListener("click",verif);


function verif() {
    var saisie = document.forms['champ'].elements['Verifier'].value;

    if (saisie>magic) {
        document.getElementById("icd").innerHTML="Trop grand! Essayes encore! ";
     } else if (saisie<magic) {
        document.getElementById("icd").innerHTML="Trop petit! Essayes encore!";
    }else if (saisie==magic) {
        document.getElementById("icd").innerHTML="Bien joué! Tu as trouvé! ";
    }
}