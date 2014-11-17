function biggestNumber(array){
    var biggest = array[0];
    for(var i = 1; i < array.length; i++){
        if(biggest < array[i]){
            biggest = array[i];
        }
    }
    return biggest;
}

function smallestNumber(array){
    var smallest = array[0];
    for(var i = 1; i < array.length; i++){
        if(smallest > array[i]){
            smallest = array[i];
        }
    }
    return smallest;
}
//-----------Shuffle Array----------------
function shuffleArray(array) {
    var currentIndex = array.length,temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;    }
    return array;
};
//Example:
var a=[34,5,26,9,17];
console.log(shuffleArray(a));