#!//home/ec2-user//.nvm/versions/node/v10.21.0/bin/node
var array = process.argv.slice(2);
var temp;
for (var i = 0; i < (array.length-1); i++){
    
    for (var j =  0; j < (array.length-1); j++){
        
        if (array[j+1] > array[j]){
            temp = array[j];
            array[j] = array [j+1];
            array[j+1] = temp;
        }
    }
}
console.log(array.join(' '));