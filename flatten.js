var myObj = [5, [22], [[14]], [[4]],[5,6]];
var newObj = [];
for(i =0;i<myObj.length;i++){
  if(myObj[i] instanceof Array){
    for(j=0;j<myObj[i].length;j++){
      if (myObj[i][j] instanceof Array) {
        for(k=0;k<myObj[i][j].length;k++){
          newObj.push(myObj[i][j][k]);
        }
      }
      else {
        newObj.push(myObj[i][j]);
      }

    }
  }else{
    newObj.push(myObj[i]);
  }
}
console.log(newObj);
