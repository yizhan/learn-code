testA = -1;

//  !5, who pick 5 will loose
// !9 !8

var canWinNim = function(n) {
    if (n <= 0) {
        return false;
    } else if (n === 1) {
        return false;
    }

    var output = n / 4
    function isInt(n) {
       return n % 1 === 0;
    }
    return isInt(output) ;
};

canWinNim(testA);
