let array = [1, 1129, 69, 31, 45];
let arrayFin = [];

function threeLargestNumber(array){
	for(i = 0; i < 3; i++){
    let max = Math.max(...array);
    arrayFin.push(max);
    array.splice(array.indexOf(max), 1);
	}
 let sortedArrFin = arrayFin.sort((a, b) => a - b);
 return sortedArrFin
}

 console.log(threeLargestNumber(array));
// Merci de ne pas effacer la ligne en dessous.
exports.threeLargestNumbers =  threeLargestNumbers;
