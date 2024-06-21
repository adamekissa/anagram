function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    const string1LCArray = makeSortedLCLettersArray(string1);
    const string2LCArray = makeSortedLCLettersArray(string2);
    for (let i = 0; i < string1.length; i++) {
        if (string1LCArray[i] !== string2LCArray[i]) {
            return false;
        }
    }
    return true;

}

function makeSortedLCLettersArray(string) {
    return string.toLowerCase().split("").sort();
}

export { isAnagram, makeSortedLCLettersArray }


// Function anagram (STRING11, STRING2){

//     check if both STRINGS length, if not equal
//          Return false
//     Make both string1 and string2 lower case
//     split both strings by an empty string in to two separate arrays
//     sort both arrays alphabetically
//     Loop through 
//         IF array1[i] is NOT equal array2[i]
//             RETURN false
//     RETURN true
//     }