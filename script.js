const boton=document.getElementById("btn")
const texto=document.getElementById("caja")
const listaContenedor=document.getElementById("lista")
function ejecutarBoton(){
   if (texto.value.trim()==""){
      texto.value=""
      alert("Debes de Ingresar tarea")
   }
   else {
      const contenedor=document.createElement("div")
      const parrafo=document.createElement("p")
      parrafo.textContent=texto.value
      parrafo.className=""
      contenedor.appendChild(parrafo)
      contenedor.className="elemento"
      const btn=document.createElement("button")
      btn.textContent="X"
      btn.className="btn"
      contenedor.appendChild(btn)
      listaContenedor.appendChild(contenedor)
      texto.value=""
      
      function eliminar(){
         contenedor.remove()
      }
      btn.addEventListener("click", eliminar)
   }
  

}
boton.addEventListener("click", ejecutarBoton)

