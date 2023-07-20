import { Jujudata } from "./JujuMel_data.js";
import { mostrarDetalles } from "./main.js";
import { cerrarDetalles } from "./main.js";
import { cierre } from "./main.js";



let galeria = document.querySelector(".galeria1")

// Obtener el input del buscador y el div donde se mostrarán los resultados
const searchInput = document.getElementById("buscar");
const resultadosDiv = document.querySelector(".resultados");

// Evento para manejar la búsqueda
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const resultados = Jujudata.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm)
  );

  mostrarResultados(resultados);
});

// Función para mostrar los resultados del buscador
function mostrarResultados(resultados) {


  if (resultados.length === 0) {

    resultados.classList.add("NO")    
    
  } else {

    let gale2 = document.querySelector(".galeria2");
    gale2.classList.add("NOC");

    resultadosDiv.innerHTML = "";

    resultados.forEach((element) => {
      const item = document.createElement("div");
      item.classList.add("C");
      item.id = "producto";
      item.innerHTML = `
          <img  class="articulo" src="${element.imagen}" alt="">

          <div class="orden">
              <div class="detalle_info">
                  <p class="clave" >${element.nombre}</p>
                  <img class="corazon" src="./img/amor.png" alt="">
              </div> 
              <p class="money">Q. ${element.precio}</p>
          </div>                
      `;
      resultadosDiv.appendChild(item);

    

      item.addEventListener("click", () => { //Mostrar los productos a detalle
        mostrarDetalles(element,resultadosDiv);

       
    });

    });
  }
}


searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  // Si el término de búsqueda está vacío, no mostramos ningún resultado
  if (searchTerm === "") {
    resultadosDiv.innerHTML = "";

    let gale2 = document.querySelector(".galeria2");
    gale2.classList.remove("NOC");

    return;
    
  }

  let resultados = Jujudata.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm)
  );

  mostrarResultados(resultados);
});

/*function ver (){

  
  document.querySelectorAll("#producto").forEach(Element =>{
            
            
    Element.classList.add("oculto")

 })

  Jujudata.forEach( element =>{   


    
    let galeria_1 = document.querySelector(".galeria1")

        let item = document.createElement("div")
        item.classList.add("C")
        item.id="producto"
            item.innerHTML = `
                <img class="articulo" src="${element.imagen}" alt="">     
                <a  class = "btn_ver">ver</a>
                <p class="clave" >${element.nombre}</p>                
            `


        galeria_1.appendChild(item)

        
      



      

       
  })

};




function SEARCH (){

    console.log("queeeeee")
    
    document.addEventListener("keyup", e=>{

        if (e.target.matches(".buscar")){
      
            if (e.key ==="Escape")e.target.value = ""


            document.querySelectorAll("#producto").forEach(Element =>{
    

                Element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                  ?Element.classList.remove("filtro")
                  :Element.classList.add("filtro")

                  
                
                  
            })
      
        }
      
      
      })
      
        
     
}*/


ver();
SEARCH();
cerrarDetalles(galeria);
cierre();

/*const contenidoo_galeria1 = document.querySelector(".galeria1");
const galeria1Productos = contenidoo_galeria1.querySelectorAll(".C");

/*galeria1Productos.forEach((producto, index) => {
  if (index >= 4) {
    producto.style.display = "none";

  }
});*/

/*const todosLosProductos = document.querySelectorAll(".C");
todosLosProductos.forEach((element, index) =>  {


//element.style.display = "initial";

if (index >= 4) {
    //producto.style.display = "none";
    //element.classList.add("oculto");

  }
});


  item.addEventListener("click", () => { //Mostrar los productos a detalle
            mostrarDetalles(element,galeria_1);
        });


*/