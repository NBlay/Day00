let array = (1, 3, 1, 2);
let targetSum = 4;

function twoNumberSum(array, targetSum){
	for(let i = 0; i < array.length; i++){
 		for(let j = 1; j < array.length; j++){
  		temp = array[i]+array[j];
 			if(temp == targetSum){
      	return [array[i],array[j]];
    	}
  	}
	}
  return [];
}

console.log(twoNumberSum([1, 3, 1, 2], 4));

// Merci de ne pas effacer la ligne en dessous.
exports.twoNumberSum =  twoNumberSum;
