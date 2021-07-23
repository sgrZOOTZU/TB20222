//Calculette//

var nombre1 = prompt("Entre un premier nombre")
var nombre2 = prompt("Entre un deuxième nombre")
var nombre3 = prompt("Entre un opérateur: (+,-,* ou /)")

switch(nombre3)
{
    case '+' :
        a = Number(nombre1) + Number(nombre2)
        alert("Le résultat de votre opération est : " + a )
    break

    case '-' :
        a = Number(nombre1) - Number(nombre2)
        alert("Le résultat de votre opération est : " + a ) 
    break

    case '*' :
        a = Number(nombre1) * Number(nombre2)
        alert("Le résultat de votre opération est : " + a )
    break

    case '/' :
        a = Number(nombre1) / Number(nombre2)
        if( nombre1 ==0 || nombre2 ==0){
            alert("Il y a une ERREUR!")
        }else{
            alert("Le résultat de l'opération est " + a )
        }
    break;
}