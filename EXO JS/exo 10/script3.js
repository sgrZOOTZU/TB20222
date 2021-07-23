var tableau = new Array([10, 25, 14, 2, 58, 65, 84, 48, 32, 9,]);
document.write("Tableau initial : " + tableau + '</br>')

function triBulle(array) {
    for(let i = 0; i < array.length -1; i++)
{
    for(let j = 0; j < array.length -1 -i; j++){
        if(array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]]
        }
    }
}
return array
}
document.write("Tableau après : " + triBulle([10, 25, 14, 2, 58, 65, 84, 48, 32, 9,]))