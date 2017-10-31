
var wordUser = prompt("Ingresa tu palabra");
//pedir frase a usuario
var crypted = "";
//donde guardaremos mensaje codificado
var word = "";
/* guardaremos las palabras decodificadas del usuario
la funcion cipher esta encriptando la palabra ingresada de acuerdo el codigo ascii*/

function cipher(wordUser) {
    //la funcion cipher ocupa como parametro la variable
    for (i = 0; i < wordUser.length; i++) {
        //para modificar cada elemento del string
        var letters = wordUser.charCodeAt(i);
        //nos regresa el valor en ascii

        if (letters >= 97 && letters <= 122) {
            /* si el codigo ascii, es mayor a 97 al 122 se encuentran las letras minusculas ya que 97 corresponde a la a minuscula en el codigo Ascii y 122 es el valor de la letra z en minuscula*/

            crypted += String.fromCharCode((letters - 97 + 33) % 26 + 97);
            /* para las minusculas se tomaran los datos del codigo de Ascii con el valor de 97 sumarle el modulo de 33 que son los espacios a la derecha del abc, modulo de 26, su total da a 7 + 97. Se ocupa String para extraer las letras de los codigos ascii, el resultado de la operacion es un numero y tengo que transformarlo a letras por eso se ocupa el String*/
        } else {
            crypted += String.fromCharCode((letters - 65 + 33) % 26 + 65);
            /*para las mayusculas se tomaran los datos del codigo de Ascii que corresponde a la A mayuscula a 65 */
        }

    }
    return alert(" Tu Mensaje Encriptado Es:  " + crypted)
    /*para que nos de un alert se concatenara el mensaje siguiente " Tu Mensaje Encriptado Es:  " +  la variable de crypted*/
}

cipher(wordUser);
/*se manda llamar el parametro que el usuario proporciono*/

/*Ahí termina la primera funcion*/


function decipher(crypted) {
    /*se inicia la nueva funcion de desencriptar*/

    for (i = 0; i < crypted.length; i++) {
        /*se ocupa for ya que nos esta pidiendo transformar o cambiar elementos*/

        var lettersCode = crypted.charCodeAt(i);
        /*como es otra funcion y no confundirme se le nombro lettersCode, ya que ya había una variable letters, se pone el argumentos en encriptado con el codigo Ascii y el indice*/

        if (lettersCode >= 97 && lettersCode <= 122) {
            /*si letters es mayor o igual a 97 que corresponde al valor de a minuscula, y que la variable de lettersCode sea mayor o igual que el 122 que es la z en minuscula*/

            word += String.fromCharCode((lettersCode - 97 - 33 + 26) % 26 + 97);
            /*para las minusculas se tomaran los datos del codigo de Ascii con el valor de 97 menos el modulo de 33 que son los espacios a la derecha del abc, modulo de 26 más 97. 
            Se resta por que ahora se esta regresando los espacios que se avanzaron*/

        } else {
            word += String.fromCharCode((letterCode - 65 - 33 + 26) % 26 + 65);
            /*para las mayusculas se tomaran los datos del codigo de Ascii que corresponde a la A mayuscula con valor a 65 menos 33*/

        }


    }

    return document.write("Tu Palabra original Es: " + word);
    /*return siempre va una llave antes de que termine la funcion. Concatenar "Tu Palabra original Es: " + word */


}

decipher(crypted);
/*se manda llamar el parametro*/