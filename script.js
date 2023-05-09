const textarea = document.querySelector(".text")
const mensajeTitulo = document.querySelector(".message__h3")
const imagenMensaje = document.querySelector(".message img")
const mensajeCodificado = document.querySelector(".message__p")
const copy = document.getElementById("copy")

//----------------------------------------
window.addEventListener("resize", changeMedia)

document.addEventListener("click", (e)=>{
   e.target.matches("#encriptar") && (textarea.value.length)  && encriptacion(textarea.value, 1)
   e.target.matches("#desencriptar") && (textarea.value.length)  && encriptacion(textarea.value)
   
   if(e.target.matches("#copy")){
      navigator.clipboard.writeText(mensajeCodificado.textContent)
      copy.textContent = "Copiado"

   setTimeout(() => copy.textContent = "Copiar", 2000)}
})
//--------------------------------------------------

function changeMedia() {
   (matchMedia("(min-width: 1000px)").matches) 
   ? imagenMensaje.classList.remove("d-none")
   : imagenMensaje.classList.add("d-none")
} changeMedia()

//--------------------------------------------------

function encriptacion (text, op = 0){
   const textoEncriptado = op ? encriptar(text.toLowerCase()) : desencriptar(text.toLowerCase())
   mensajeTitulo.innerHTML = "Mensaje Encontrado"
   mensajeCodificado.textContent = textoEncriptado
   copy.classList.remove("d-none")
   textarea.value = "";
}

function encriptar(text) {
   const texto = text.split("")
   for (let i = 0; i < texto.length; i++) {
     switch (texto[i]) {
      case "e": texto[i] = "enter"
         break;
      case "i": texto[i] = "imea"
         break;
      case "a": texto[i] = "ai"
         break;
      case "o": texto[i] = "ober"
         break;
      case "u": texto[i] = "ufat"
         break;
     } 
   }
   return texto.join("")
}

function desencriptar(text) {
   const texto = text.split(" ")
   let opciones = ["enter", "imea", "ai", "ober", "ufat"]

   if (texto.length > 1) {
      for (const key in texto) {
         for (const opcion of opciones) {
            texto[key] = texto[key].replaceAll(opcion, opcion[0])
         }
      }
   }
   else for (let opcion of opciones) {newText = texto.replace(opcion, opcion[0])}
   return texto.join(" ")
}