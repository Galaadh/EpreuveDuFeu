#!//home/ec2-user//.nvm/versions/node/v10.21.0/bin/node
const string = process.argv[2];
const array = string.split('');
var final = "";
var special = /[!?:;,.]/g;
var space = " ";
final = final + array[0];
for (let CPT = 1; CPT < array.length; CPT++){
    
    if (array[CPT-1] != (space || special)){
        if (array[CPT-1] == array[CPT-1].toUpperCase()){
            final = final + array[CPT].toLowerCase();
            array[CPT] = array[CPT].toLowerCase();
        } else {
            final = final + array[CPT].toUpperCase();
            array[CPT] = array[CPT].toUpperCase();
        }
    }
    
    if (array[CPT-1] == space ){
        if (array[CPT-2] == array[CPT-2].toUpperCase()){
            final = final + array[CPT].toLowerCase();
            array[CPT] = array[CPT].toLowerCase();
            
        } else {
            final = final + array[CPT].toUpperCase();
            array[CPT] = array[CPT].toUpperCase();
        }
    }
}
console.log(final);