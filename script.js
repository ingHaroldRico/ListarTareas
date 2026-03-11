const boton=document.getElementById("btn")
const texto=document.getElementById("caja")
const listaContenedor=document.getElementById("lista")
function ejecutarBoton(){
   if(texto.value!=""){
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
      
      
      function eliminar(){
         contenedor.remove()
      }
      btn.addEventListener("click", eliminar)
   }
   else{
      alert("Debes de Ingresar tarea")
   }

}
boton.addEventListener("click", ejecutarBoton)

