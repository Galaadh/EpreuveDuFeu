var fs = require('fs');
var array = fs.readFileSync('process.argv[3]').toString().split("\n");
var searchword = process.argv[2].split('');
var tabfinal = array.slice();
// ------------------------------------------------------ SEPARER LES MOTS DU FICHIER TXT EN SOUS TABLEAU DE CARACTERES SI MEME TAILLE QUE MOT RECHERCHE
for (var i = 0; i < array.length; i++){

        if (array[i].length == searchword.length ){

            array[i] = array[i].split('');
        }
    }
// -------------------------------------------------------
// ------------------------------------------------------- FAIRE TEST POUR SAVOIR SI ANAGRAMME
 for (var t = 0; t < array.length; t++){                 //BOUCLE POUR LA TAILLE DU TABLEAU MULTI

        for (var m = 0; m <= array[m].length; m++){       // BOUCLE POUR LA TAILLE DU SOUS TABLEAU

            for (var k = 0; k < searchword.length; k++){ // BOUCLE POUR LA TAILLE DU MOT RECHERCHE

                if (searchword[k] == array[t][m]){

                    array[t][m] = array[t][m].replace(array[t][m], '');

                }
            }
        }
 }
//----------------------------------------------------------
//---------------------------------------------------------- REFORME LES MOTS DU TABLEAU MULTI (DELETE SOUS TABLEAU)
for (var i = 0; i < array.length; i++){

        if (array[i].length == searchword.length ){

            array[i] = array[i].join('');

        }
    }
//-----------------------------------------------------------
//----------------------------------------------------------- AFFICHER CONCORDANCE
for (var z = 0; z < array.length; z++){

    if (array[z] == ''){

        console.log(tabfinal[z]);

    }
}