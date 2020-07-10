#!//home/ec2-user//.nvm/versions/node/v10.21.0/bin/node
const facto = process.argv[2]
var resultat = 1;

for (let cpt = 1; cpt <= facto ; cpt++){
    resultat = resultat*cpt;

}
console.log(resultat);


function factorielle(nb){
   if (nb == 0)
      return 1;
   else
      return nb * factorielle(nb - 1);
}

resultat = factorielle(facto);
console.log(resultat);