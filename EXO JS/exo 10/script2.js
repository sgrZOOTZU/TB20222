function GetInteger(entier) 
{
    entier = parseInt(prompt("Entrer le nombre de poste que vous voulez."));
    return entier;
}
nombre = GetInteger();


function InitTab(Tab) 
{
    Tab = new Array(nombre);
    return Tab;
}
Tab = InitTab();


function saisie() 
{
    for (var i = 0; i < nombre; i++) 
    {
        Tab[i] = parseInt(prompt("Entrer un poste."))
    }
}


function AfficheTab() 
{
    for (var i = 0; i < nombre; i++) 
    {
        document.write("Le poste du tableau " + i + " est de : " + Tab[i] + '</br>');
    }
    document.write();
}


function RechercheTab() 
{
    var rang = parseInt(prompt("Entrer le rang d'un poste pour afficher son maximum."));
    if (rang < Tab.length) 
    {
        document.write('</br>' + "Le poste " + rang + " du tableau que vous avez saisi est de rang " + Tab[rang] + '</br>');
    } else 
    {
        var rang = parseInt(prompt("Entrer le rang d'un poste pour afficher sa moyenne."));
    }
}

function InfoTab(arr) {
    var somme = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
      somme += arr[i];
    }
    max = Math.max(...Tab)

    document.write('</br>' + "Le maximum des postes est de :  " + max + '</br>');
    document.write("La moyenne des postes est de : " + somme / arr.length);
  }

saisie();
AfficheTab();
RechercheTab();
InfoTab(Tab);