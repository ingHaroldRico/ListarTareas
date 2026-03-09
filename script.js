const boton=document.getElementById("btn")
const texto=document.getElementById("caja")
const listaContenedor=document.getElementById("lista")
function ejecutarBoton(){
   if(texto.value!=""){
      const parrafo=document.createElement("p")
      parrafo.textContent=texto.value
      listaContenedor.appendChild(parrafo)
   }
   else{
      alert("Debes de Ingresar tarea")
   }

}
boton.addEventListener("click", ejecutarBoton)