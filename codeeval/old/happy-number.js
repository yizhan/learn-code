testA = '1';
testB = '7';
testC = '22';

function isHappyNumber(input, limit) {
    if (limit < 1) {
        return false;
    } else {
        limit--;
    }
    // var testNumber = Number(input);
    var testNumber = input;
    if (testNumber < 10) {
        var square = testNumber * testNumber;
        if (square == 1) {
            return true;
        }
    } else {
        var square =  testNumber;
    }

    var digitArray = square.toString().split('').map(function (digitInString) {
        return Number(digitInString);
    })

    var newNumberSum = 0;
    digitArray.map(function (digit) {
        newNumberSum = newNumberSum + digit * digit;
    });

    if (newNumberSum !== 1) {
        return (isHappyNumber(newNumberSum, limit));
    } else {
        return true;
    }
}

if (isHappyNumber(Number(testA), 20) === true) {
    console.log(1);
} else {
    console.log(0);
};
