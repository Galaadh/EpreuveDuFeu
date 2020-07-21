#!//home/ec2-user//.nvm/versions/node/v10.21.0/bin/node
var fs = require('fs');
var array = fs.readFileSync('s.txt').toString();
//----------------------------------------------TRANSFORMER FICHIER TXT EN TABLEAU CLEAN DE CHIFFRES
var regex = /_/g;
array = array.replace(regex, '0');
var regex2 = /[-,+,|]/g;
array = array.replace(regex2, '');
var regex3 = /\s/g;
array = array.replace(regex3, '');
array = array.split('');
var arraywork = array.map(Number);
array = arraywork;
//------------------------------------------------REFORMER LIGNES AVEC SOUS TABLEAUX
function TwoDimensional(arr, size) 
    {
      var res = []; 
      for(var i=0;i < arr.length;i = i+size)
      res.push(arr.slice(i,i+size));
      return res;
    }
array = TwoDimensional(array, 9);
//------------------------------------------------FONCTION TEST SI UN SEUL TROU PAR LIGNE ET REMPLACEMENT SI OUI
function testLigne(tab){
var cptzero = 0;
var total = 0;
var totalLigne = 0;
for (var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
        if (tab[i][j] == 0){
            cptzero++;
        }
    }
    if (cptzero == 1){
         total = 45;
         totalLigne = 0;

        for (var t = 0; t < 9; t++){
            totalLigne = totalLigne + tab[i][t];
        }
        totalLigne = total - totalLigne;
        for (var v = 0; v < 9; v++){
            if (tab[i][v] == 0){
                tab[i][v] = totalLigne;
            }
        }
    }
    cptzero = 0
}
return tab
}
//------------------------------------------------FONCTION TEST SI UN SEUL TROU PAR COLONNE ET REMPLACEMENT SI OUI
function testColonne(tab){
var cptzero = 0;
var total = 0;
var totalLigne = 0;
for (var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
        if (tab[j][i] == 0){
            cptzero++;
        }
    }
    if (cptzero == 1){
         total = 45;
         totalLigne = 0;

        for (var t = 0; t < 9; t++){
            //console.log(tab[t][i]);
            totalLigne = totalLigne + tab[t][i];
        }
        totalLigne = total - totalLigne;
        for (var v = 0; v < 9; v++){
            if (tab[v][i] == 0){
                tab[v][i] = totalLigne;
            }
        }
    }
    cptzero = 0
}
return tab
}
//-----------------------------------------------------------------FONCTION TEST SI UN SEUL TROU PAR CARRE ET REMPLACEMENT SI OUI
function testCarre (tab, ligne, colonne){
    var tmp = colonne;
    var tmp2 = ligne;
    var cptzero = 0;
    for (var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            if (tab[ligne][colonne] == 0){
                cptzero++;
            }
            colonne++;
        }
        ligne++;
        colonne = tmp;
    }
    ligne = tmp2;

    if (cptzero == 1){
        var total = 45;
        var totalc1 = 0;
        tmp = colonne;
        
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                
                totalc1 = totalc1 + tab[ligne][colonne];
                colonne++;
            }
            ligne++;
            colonne = tmp;
        }
        totalc1 = total - totalc1;
        ligne = tmp2;
        colonne = tmp;
        
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                if (tab[ligne][colonne] == 0){
                    tab[ligne][colonne] = totalc1;
                }
                colonne++;
            }
            ligne++;
            colonne = tmp;
        }
    }
    return tab;
}
//-----------------------------------------------------------------
function Chiffre(elem){
    return elem != 0;
}
//----------------------------------------------------------------FONCTION TEST LIGNE + COLONNE ET REMPLACE SI POSSIBLE
function testMix (tab){
    var tabTest = [];
    for (var i = 0; i < 9;i++){ //Boucles parcourent chaque chiffre du sudoku
        for (var j = 0; j < 9;j++){

            if (tab[i][j] == 0){
                tabTest = [1,2,3,4,5,6,7,8,9]
//-----------------TEST LIGNE      
                for (var c = 0; c < 9; c++){ //---Boucle ligne array
                    for (var cptTest = 0; cptTest < 9; cptTest++){ //---Boucle tableau Test
                        if (tabTest[cptTest] == tab[i][c]){
                            tabTest[cptTest] = 0;
                        }
                    }
                }
//-----------------TEST COLONNE
                for (var c = 0; c < 9; c++){ //---Boucle colonne array
                    for (var cptTest = 0; cptTest < 9; cptTest++){ //---Boucle tableau Test
                        if (tabTest[cptTest] == tab[c][j]){
                            tabTest[cptTest] = 0;
                        }
                    }
                }
                tabTest = tabTest.filter(Chiffre);
                tab[i][j] = tabTest[0];
            }          
        }
    }
    return tab;
}
//----------------------------------------------------------------------RESOLUTION SUDOKU
var somme = 0;
do {
    
    for (var i = 0; i < 9; i++){
        array = testLigne(array);
        array = testColonne(array);
    }
    
    array = testCarre(array, 0, 0);
    array = testCarre(array, 0, 3);
    array = testCarre(array, 0, 6);
    
    array = testCarre(array, 3, 0);
    array = testCarre(array, 3, 3);
    array = testCarre(array, 3, 6);
    
    array = testCarre(array, 6, 0);
    array = testCarre(array, 6, 3);
    array = testCarre(array, 6, 6);
    
    for (var i = 0; i < 9; i++){
        array = testLigne(array);
        array = testColonne(array);
    }

    array = testMix(array);

    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            somme += array[i][j];
        }
    }

} while (somme != 405);
//--------------------------------------------------REFORMER GRILLE TXT DU TABLEAU REMPLI ET AFFICHER RESULTAT
var virgule = /,/g;
array = array.toString().replace(virgule, '');
console.log(array.slice(0,3)+'|'+array.slice(3,6)+'|'+array.slice(6,9)+'\n'+array.slice(9,12)+'|'+array.slice(12,15)+'|'+array.slice(15,18)+'\n'+array.slice(18,21)+'|'+array.slice(21,24)+'|'+array.slice(24,27)+'\n'+'---+---+---'+'\n'+array.slice(27,30)+'|'+array.slice(30,33)+'|'+array.slice(33,36)+'\n'+array.slice(36,39)+'|'+array.slice(39,42)+'|'+array.slice(42,45)+'\n'+array.slice(45,48)+'|'+array.slice(48,51)+'|'+array.slice(51,54)+'\n'+'---+---+---'+'\n'+array.slice(54,57)+'|'+array.slice(57,60)+'|'+array.slice(60,63)+'\n'+array.slice(63,66)+'|'+array.slice(66,69)+'|'+array.slice(69,72)+'\n'+array.slice(72,75)+'|'+array.slice(75,78)+'|'+array.slice(78,81));