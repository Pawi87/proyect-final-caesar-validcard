var numberCard = prompt("Ingrese los digitos de su tarjeta");
//el usuario ingresa su numero
var array = [];
//metemos aqui los numero para poder ocupar reverse
var inverse = [];
//aqui se guardan los numeros al reves
var numberImp = 0;
//almacena la suma de los numeros impares
var numberPar = 0;


function isValidCard() {

    if (numberCard.length === 0) {
        alert("porfavor ingrese un numero valido para poder continuar")
    }
    for (i = 0; i < numberCard.length; i++) {
        array.push(numberCard[i]);
        //con este for metemos los numeros en array
    }
    inverse = array.reverse();
    //ya que estan dentro aplicamos reverse para que los ponga alreves
    console.log(inverse);
    for (i = 0; i < inverse.length; i++) {
        if (i % 2 === 0) {
            //como en el video no se toma el indice 0 entonces los pares son impares 
            numberImp += parseInt(inverse[i]); //se van sumando los numeros en la variable
        } else {
            var mult = parseInt(inverse[i]) * 2;
            var numberCard = prompt("Ingrese los digitos de su tarjeta"); //el usuario ingresa su numero
            var array = []; //metemos aqui los numero para poder ocupar reverse
            var inverse = []; //aqui se guardan los numeros al reves
            var numberImp = 0; //almacena la suma de los numeros impares
            var numberPar = 0;


            function isValidCard() {

                if (numberCard.length === 0) {
                    alert("porfavor ingrese un numero valido para poder continuar")
                }
                for (i = 0; i < numberCard.length; i++) {
                    array.push(numberCard[i]); //con este for metemos los numeros en array
                }
                inverse = array.reverse(); //ya que estan dentro aplicamos reverse para que los ponga alreves
                console.log(inverse);
                for (i = 0; i < inverse.length; i++) {
                    if (i % 2 === 0) { //como en el video no se toma el indice 0 entonces los pares son impares 
                        numberImp += parseInt(inverse[i]); //se van sumando los numeros en la variable
                    } else {
                        var mult = parseInt(inverse[i]) * 2; //los que son pares se multiplican por 2
                    }
                }

                console.log(mult);
                console.log(numberImp);
            }

            isValidCard();
            //los que son pares se multiplican por 2
        }
    }

    console.log(mult);
    console.log(numberImp);
}

isValidCard();
