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


//ver();
//SEARCH();
cerrarDetalles(galeria);
cierre();

