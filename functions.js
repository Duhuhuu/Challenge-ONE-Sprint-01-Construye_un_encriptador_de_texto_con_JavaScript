
var textoEncriptado;
//Funcion para encriptar el mensaje del texto 
function encriptar (){
   
    //Obtengo el texto del mensaje del usuario.
    var texto = document.querySelector("#input-texto").value;
    //Encripto el mensaje que el usuario puso.
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
    textoEncriptado = textoCifrado;
    document.querySelector("#input-texto").value = " ";
    


}


//Funcion para desencriptar el mensaje del texto.
function desencriptar (){ 
    
    //obtengo el texto encriptado
    var texto = textoEncriptado;
    //Desencripto del texto ya optenido anteriormente.
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".textEncryp").value = textoCifrado; 
    document.querySelector("#input-texto").value;

}

function copyText() {
    
    /* Obten el Texto del Input */
    var copyText = document.getElementById("msg");
   
    /* Selecciona el Texto del Area a copiar */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* Para Dispositivos Moviles */
   
     /* Copea el texto dentro del input*/
    navigator.clipboard.writeText(copyText.value);
   
    /* Alerta de texto copiado */
    alert("Texto Copiado: " + copyText.value);
   }
   

