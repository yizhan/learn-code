// 389. Find the Difference
// Input:
// s = "abcd"
// t = "abcde"
//
// Output:
// e

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s.split('').forEach(function(schar) {
        t = t.replace(schar, '');
    })

    return t
};

console.log(findTheDifference('abcd', 'abcde'));
