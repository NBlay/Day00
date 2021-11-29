let str1 = 'abcd';
let str2 = 'yabd';

function levDist(str1, str2){
   const distance = Array(str2.length + 1).fill(null).map(() =>
   Array(str1.length + 1).fill(null));
   for (let i = 0; i <= str1.length; i += 1) {
      distance[0][i] = i;
   }
   for (let j = 0; j <= str2.length; j += 1) {
      distance[j][0] = j;
   }
   for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
         let indicateur = str1[i - 1] === str2[j - 1] ? 0 : 1;
         distance[j][i] = Math.min(
            distance[j][i - 1] + 1, // deletion
            distance[j - 1][i] + 1, // insertion
            distance[j - 1][i - 1] + indicateur, // substitution
         );
      }
   }
   return distance[str2.length][str1.length];
};
console.log(levDist(str1, str2));

// Merci de ne pas effacer la ligne en dessous.
exports.levDist =  levDist;
// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
