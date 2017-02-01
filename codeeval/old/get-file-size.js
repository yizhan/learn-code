// nodejs get file size from path

var fs  = require("fs");
// var filePath = fs.readFileSync('./').toString();
var filePath = './index.html';
fs.stat(filePath, function(err, stats) {
    console.log(stats["size"]);
})
