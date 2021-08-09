// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // solution #1

    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

module.exports = reverse;

function reverseTwo(str) {
    // solution #2
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;

}