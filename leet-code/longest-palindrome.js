/**
 * @param {string} s
 * @return {number}
 */

function power_of_2(n) {
    if (typeof n !== 'number')
        return 'Not a number';

    return parseInt(n / 2) === n / 2;
}

var longestPalindrome = function(s) {
    var b = s.split('');
    var magicCharArray = [];
    var magicArray = [];

    b.forEach(function (val){
        // magicArray[val] = (magicArray[val] || 0) + 1;
        if (magicCharArray.indexOf(val) === -1) {
            magicCharArray.push(val)
        }

        magicArray[magicCharArray.indexOf(val)] = (magicArray[magicCharArray.indexOf(val)] || 0 ) + 1;
    });

    var oddFlag = false;
    var newmagcArray = magicArray.map(function (val) {
        if (val === 1 && !oddFlag) {
            oddFlag = true;
            return 1;
        } else if (val === 1 && oddFlag) {
            return 0;
        }

        if (!power_of_2(val)) {
            if (oddFlag) {
                return val - 1;
            }
            oddFlag = true;
            return val;
        } else {
            console.log('val', val);
            return val;
        }
    });

    var oneFlag = false;
    var output = newmagcArray.reduce(function (preV, curV, index) {
        if (!oneFlag) {
            if (preV === 1 || curV === 1) {
                oneFlag = true;
            }

            if (preV === 1  && curV === 1) {
                return curV;
            }
        } else {
            if (curV === 1) {
                return preV;
            }
        }

        return preV + curV;
    })

    console.log('magicArray', magicArray);
    console.log('newmagcArray', newmagcArray)

    return output
};

console.log(longestPalindrome("abccccdd"));

var a = 'zeusnilemacaronimaisanitratetartinasiaminoracamelinsuez'
console.log(a.length)