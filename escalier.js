#!//home/ec2-user//.nvm/versions/node/v10.21.0/bin/node
    var test = "#", temp = "empty", esca = process.argv[2]
    for (let CPT = 0; CPT != esca; CPT++){
            temp = test

        do {
            
            if (test.length == esca) {
                test = test
            } else {
            test = " " + test
            }
        } while ( test.length  < esca );
        console.log (test);
        test = temp + "#"
    }
    