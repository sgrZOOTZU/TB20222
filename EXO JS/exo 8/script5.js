var mot = prompt("Entrez un mot").substr();
var numVoyelles = 0;

for(var i = 0; i < mot.length; i++){
  if( mot[i] == "a" || mot[i] == "e" || mot[i] == "i"|| mot[i] == "o" ||mot[i] == "u" ||mot[i] == "y" ){
    numVoyelles++
  }
}

console.log(" Le mot contien " + numVoyelles + " voyelles")
document.write(" Le mot contien " + numVoyelles + " voyelles")