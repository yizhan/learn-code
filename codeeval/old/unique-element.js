var testA = '1,1,1,2,2,3,3,4,4';
var testB = '2,3,4,5,5';

function uniqueElement(input) {
    var inputArray = input.split(',');
    var outputArray = [];
    var outputString = ''
    inputArray.forEach(function (elem, index) {
        if (outputArray.indexOf(elem) === -1) {
            outputArray.push(elem);
            if (index == 0) {
                outputString = outputString + elem;
            } else {
                outputString = outputString + ',' + elem;
            }
        }
    })
    console.log(outputString);
}

uniqueElement(testA);
