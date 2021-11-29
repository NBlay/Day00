let string = 'acaabb';

function firstNonRepeatedCharacter(string) {
    for (let i = 0; i < string.length; i++) {
        let c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            let final = string.indexOf(c);
            return final;
        }
    }
    return null;
}

console.log(firstNonRepeatedCharacter(string));


// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
