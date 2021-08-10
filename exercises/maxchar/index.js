// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     const chars = {};


//     for (i = 0; i < str.lenght; i++) {
//         if (chars[char]) {
//             chars[char]++
//         } else {
//             chars[char] = 1;
//         }
//     }
// }

// // for (let char of str) {
// //     chars[char] = chars[char] + 1 || 1;
// //    return chars
// // }

// // }

//version #1

const string = "Hello There!"
const chars = {};

for (let char of string) {
    if ( !chars[char]) {
        chars[char] = 1;
    } else {
        chars[char]++
    }
}

console.log(chars)

// version #2
const strings = "Hello There!"
const charss = {};

for (cha of strings) {
    charss[cha] = charss[cha] + 1 || 1;
}
console.log(charss)

module.exports = maxChar;
