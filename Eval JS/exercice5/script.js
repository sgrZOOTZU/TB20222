var form_inscription= document.querySelector('#inscription');
var champ_nom = form_inscription.elements["nom"];
var champ_prenom = form_inscription.elements["prenom"];
var champ_email = form_inscription.elements["mail"];
var champ_cp = form_inscription.elements["cp"];
var form_OK = true;
/////////////////////////////REGEX/////////////////////////////
var nom = new RegExp("^[A-z]+$");
var prenom = new RegExp("^[A-z]+$");
var cp = new RegExp("^[\d]+$");
var mail = new RegExp("^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$");
/////////////////////////////REGEX/////////////////////////////
form_inscription.addEventListener('submit', (e)=>{

console.log(e.target);

if(champ_cp.value.length != 5 || isNaN(champ_cp.value)){
    cp("^[\d]+$");
    alert("Veuillez entrez un code postale à 5 chiffres s.v.p.")
}else if(!form_OK){
    e.preventDefault();
}

if(champ_nom = ""){
    nom("^[A-z]+$");
    alert("Veuillez renseigner votre Nom s.v.p.");
}else if(!form_OK){
    e.preventDefault();
}

if(champ_prenom = ""){
    prenom("^[A-z]+$");
    alert("Veuillez renseigner votre Prénom s.v.p.");
}else if(!form_OK){
    e.preventDefault();
}

if(!champ_email.value.includes("@" || ".")){
    mail("^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$");
    alert("Veuillez renseigner une adresse E-mail valide s.v.p.");
    e.preventDefault();
}

})

function valid (event) {
    
}

form_inscription.addEventListener('submit', valid)