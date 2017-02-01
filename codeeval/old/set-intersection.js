var testA = '1,2,3,4;4,5,6';
var testB = '20,21,22;45,46,47';
var testC = '7,8,9;8,9,10,11,12';
var testD = '93,94,95,96,97,98,99,100,101,102;72,73,74,75,76,77,78,79';

function findInterSection (input) {
    var testArraySetsString = input.split(';');
    var arrayOne = testArraySetsString[0].split(',').map(function(value) {
        return Number(value);
    });
    var arrayTwo = testArraySetsString[1].split(',').map(function(value) {
        return Number(value);
    });

    var outputArray = [];
    var intersections = arrayOne.filter(function(n) {
        return arrayTwo.indexOf(n) != -1
    });

    console.log(intersections.toString());
}

findInterSection(testC);

/* worng design
function addNumberToArrayAscend (interSectionNumber) {
    if (outputArray.length > 0 && outputArray[0] > interSectionNumber) {
        outputArray.unshift(interSectionNumber);
    } else {
        outputArray.push(interSectionNumber);
    }
}

testArraySets.forEach(function (eachSet, index) {
    numbersInSet = eachSet.split(',');
    if (index == 0) {
        var interSectionNumber = numbersInSet[numbersInSet.length - 1];
        if (outputArray.indexOf(interSectionNumber) === -1) {
            addNumberToArrayAscend(Number(interSectionNumber));
        }
    } else {
        var interSectionNumber = numbersInSet[0];
        if (outputArray.indexOf(interSectionNumber) === -1) {
            addNumberToArrayAscend(Number(interSectionNumber));
        }
    }

});
*/
