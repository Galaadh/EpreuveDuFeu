#!//home/ec2-user//.nvm/versions/node/v10.21.0/bin/node
var fs = require('fs');
var array = fs.readFileSync(process.argv[2]).toString().split("\n");
var array2 = fs.readFileSync(process.argv[3]).toString().split("\n");

function trouvercarre (tab1, tab2){

  for (var i = 0; i < tab2.length; i++){
    
     for (var j = 0; j < tab1.length; j++){
        
        var tmp = tab2[i].search(tab1[j]);

        if (tmp != (-1)){
          
          if ((-1) != tab2[i+1].search(tab1[j+1])){
            
            if ((-1) != tab2[i+2].search(tab1[j+2])){
              var tabfinal = [tmp, i];
              return tabfinal;
              
            }
          }
        }
     } 
  }
}
console.log(trouvercarre(array, array2));