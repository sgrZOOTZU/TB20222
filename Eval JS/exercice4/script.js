// Prix unitaire + quantité commandée//
var tot = pu * qte;
// Affiche le prix à payer
var pap = tot - rem;
// La remise
var rem = 0;

// Code

var pu = window.prompt("Veuillez choisir le prix unitaire d'un produit :");
var qte = window.prompt("Veuillez entrer une quantité :");

if(ControlData(pu, qte)){

    function Remise(tot){
        var tot = pu * qte;
        var pap = 0;
        var rem = 0;

        if(tot>=100 && tot<=200){
            rem = tot*0.05;
            pap = tot - rem;
            document.write("Une remise de 5% est offerte, soit " + rem + " euros en moins sur votre prix d'achats. Le prix avec remise est de  : " + pap + " euros." );
            return pap;
        }
        if(tot>200){
            rem = tot*0.1;
            pap = tot - rem;
            document.write("</br> Une remise de 10% est offerte, soit " + rem + " euros en moins sur votre prix d'achats. Le prix avec remise est de : " + pap + " euros. ");
            return pap;
        }
        else{
            rem = 0;
            pap = tot - rem;
            document.write("</br> La remise est de 0%. Le prix à payer est toujours de " + tot + " euros.");
            return pap; 
        }     
    }

    function Port(){
        var port = 0;
        var result = 0;
        var renpap = Remise(pap);
            if((renpap)>500){
                document.write("</br> Aucun frais de port n'est ajouté");
            } else {
                port = (renpap) * 0.02;
                result = (renpap) + port;
                    if (port<6){
                        port = 6;
                        result = (renpap) + port;
                        document.write("</br> Les frais de port sont de 6 euros minimum donc le prix total est de : " + result + " euros.");
                    } else  { document.write("</br> Des frais de port à hauteur de 2% s'ajoutent au prix remisé. Le prix total est de : " + result.toFixed(2) + " euros. ");}
                }            
    }
    (Port());
}
// Controler les valeurs entrer par l'utilisateurs
function ControlData(pu, qte){
    try {
        if(isNaN(pu)) throw "Entrer un Prix Unitaire correct";
        if(isNaN(qte)) throw "Entrer une Quantité correct";
        if(parseFloat(pu) == NaN) throw "Le Prix Unitaire n'est pas correct";
        if(parseFloat(qte) != parseInt(qte)) throw "La Quantité doit être un nombre entier";
        
    }
    catch(error){
        alert(error);
        return;
    }
    return true;
}