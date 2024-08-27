//funcion con valores de encriptacion
function encriptarTexto(texto){
    let textoEncriptado = texto.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

    return textoEncriptado;

}

//funcion con valores para desencriptar
function desencriptarTexto(texto){
    let textoDesencriptado =texto.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

    return textoDesencriptado;
}

//creamos la funcion para alternar visibilidad de los elementos 

function toggleOutputElements() {
    const resultado = document.getElementById("resultado").value.trim();
    const mensajeEncontrado = document.querySelector(".mensaje");
    const instrucciones = document.querySelector(".mensaje-instruccion");
    const figura= document.querySelector(".output-section img");
    const botonCopiar = document.getElementById("copiar-encriptado");
    const textAreaResultado = document.querySelector("textarea#resultado");

    if (resultado !== "") {
        mensajeEncontrado.style.display = 'none';
        instrucciones.style.display = 'none';
        figura.style.display = 'none';
        textAreaResultado.style.display = 'block';
        botonCopiar.style.display = 'block';
    } else {
        mensajeEncontrado.style.display = 'block';
        instrucciones.style.display = 'block';
        figura.style.display = 'block';
        textAreaResultado.style.display = 'none';
        botonCopiar.style.display = 'none';
    }
}

//enlace con boton Encriptar y su  funcion
document.getElementById('encriptar').addEventListener("click", function(){
    const inputTexto = document.getElementById("inputTexto").value;
    const textoEncriptado =encriptarTexto(inputTexto);
    document.getElementById("resultado").value =textoEncriptado;
    toggleOutputElements();
});

//enlace con boton desencriptar y su funcion

document.getElementById('desencriptar').addEventListener("click", function(){
    const inputTexto = document.getElementById("inputTexto").value;
    const textoDesencriptado =desencriptarTexto(inputTexto);
    document.getElementById("resultado").value =textoDesencriptado;
    toggleOutputElements();
}); 

//enlace con boton copiar  y su funcion

document.getElementById('copiar-encriptado').addEventListener("click",function(){
    const resultado = document.getElementById("resultado");
    resultado.select();
    resultado.setSelectionRange(0, 9999);

    //se copia el texto 
    navigator.clipboard.writeText(resultado.value).then(() => {

        // Cambia el texto del botón cuando se ha copiado un texto
        this.textContent  ="¡Texto copiado!";

        // Se restaura el texto despues de segundos

        setTimeout(()=>{
            this.textContent ="Copiar";

        },8000);

    });

});

//Condicionamiento de minusculas, impide su escritura.

document.getElementById("inputTexto").addEventListener("input", function() {
    this.value = this.value.toLowerCase();
    this.value = this.value.replace(/[^a-z\s]/g, '');
});


