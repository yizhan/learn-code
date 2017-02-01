testA = "5";
testB = "12";

testArray = [testA, testB];

var total = 0;
testArray.forEach(function (inputNumber) {
  total = total + Number(inputNumber);
})

console.log(total);
