var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('India2011.csv'),
    output: process.stdout,
    terminal: false
});
var jsonArr =[];
var count =0;
var heading = [];
rd.on('line', function(line) {
  var  value = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  if(count == 0){
    heading = value;
    count = count + 1;
    console.log(heading);
    }else {
      if(value[4] == 'Total' && value[5] == 'All ages'){
        var t = new Object();
        t[heading[1]] = value[1];
        t[heading[6]] = value[6];
        t[heading[7]] = value[7];
        t[heading[8]] = value[8];
        jsonArr.push(t);
      }
  }
    //console.log(jsonArr);
});
rd.on('close',function(){
  // var writerStream = fs.createWriteStream('output.json');
  // writerStream.write(JSON.stringify(jsonArr),'UTF8');
  fs.writeFileSync('output.json', JSON.stringify(jsonArr), 'utf8',
    function(err){console.log(err);});
});
