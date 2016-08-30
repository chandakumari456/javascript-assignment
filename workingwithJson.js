var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
console.log(">>>>>>>>>>>>>>>>> programmer  >>>>>>>>");
myFunction('Programmer');
console.log(">>>>>>>>>>>>>>>>> sorting  >>>>>>>>");
sort();
console.log(">>>>>>>>>>>>>>>>> arranging >>>>>>>>");
reArrange1();

 // The function returns all the object with occupation 'Programmer'
    function myFunction(p) {
          for(i=0;i<myObj.length;i++){
            if(myObj[i].occupation == p){
              console.log(myObj[i]);
            }
          }
    }

    //sort method descending order
    function sort() {
          for(i=0;i<myObj.length-1;i++){
            var min = myObj[i];
            for(j=i+1;j<myObj.length;j++){
              if(min.age < myObj[j].age){
                 var temp = min;
                 min = myObj[j];
                 myObj[j] = temp;
              }
            }
            myObj[i] = min;
          }
          for(i=0;i<myObj.length;i++){
            console.log(myObj[i]);
          }
    }

  function reArrange1(){
    var jsonObj1 ={};
    var jsonObj2 = {};
    var jsonArr1 = [];
    var jsonArr2 = [];
    for(i=0;i<myObj.length;i++){
      if(myObj[i].occupation == 'Team Leader'){
        jsonArr1.push({
          name:myObj[i].name,
          age:myObj[i].age
        });
      }
      if(myObj[i].occupation == 'Programmer'){
        jsonArr2.push({
          name:myObj[i].name,
          age:myObj[i].age
        });
      }
    }
    console.log(jsonArr1);
    console.log(jsonArr2);
    jsonObj1 = {'Team Leader':jsonArr1,Programmer:jsonArr2};
    console.log(jsonObj1);

  }
