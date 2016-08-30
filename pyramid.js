
for(i=1;i<=5;i++){
  var print ="";
  for(j=5-i;j>0;j--){
    print = print + " ";
  }
  for(k=2*i-1;k>0;k--){
    print = print + "*";
  }
  console.log(print);
}
