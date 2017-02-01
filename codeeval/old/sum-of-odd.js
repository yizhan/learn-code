var range = 100;

var sumOfOdd = 0;
var odd = true;
for (var i = 1; i< range; i++) {
  if (odd) {
    console.log(i);
    odd = false;
  } else {
    odd = true;
  }
}
