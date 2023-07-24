import { Jujudata } from "./JujuMel_data.js";
import { mostrarDetalles } from "./main.js";
import { cerrarDetalles } from "./main.js";
import { cierre } from "./main.js";
import { carrito } from "./main.js";


const titleOur = document.querySelector(".contenedor");
const searchInput = document.getElementById("buscar");
const resultadosDiv = document.querySelector(".resultados");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === "") {
    resultadosDiv.innerHTML = "";
    document.querySelector(".galeria2").classList.remove("NOC");
    titleOur.classList.remove("hide")
    return;
  }

  const resultados = Jujudata.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm)
  );

  mostrarResultados(resultados);
});

function mostrarResultados(resultados) {
  resultadosDiv.innerHTML = "";
 

  if (resultados.length === 0) {
    resultadosDiv.classList.add("NO");
    document.querySelector(".galeria2").classList.remove("NOC");
  } else {

    titleOur.classList.add("hide");

    resultadosDiv.classList.remove("NO");
    resultados.forEach((element) => {
      const item = document.createElement("div");
      item.classList.add("C");
      item.id = "producto";
      item.innerHTML = `
        <img  class="articulo" src="${element.imagen}" alt="">
        <div class="orden">
          <div class="detalle_info">
            <p class="clave">${element.nombre}</p>
            <img class="corazon" src="./img/amor.png" alt="">
          </div> 
          <p class="money">Q. ${element.precio}</p>
        </div>                
      `;
      resultadosDiv.appendChild(item);

      item.addEventListener("click", () => {
        mostrarDetalles(element, resultadosDiv);
      });
      
    });
  }
}

export function actualizarAcumulado() {
  const bolsasImg = document.querySelector(".bolsas");
  const acumulado = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  bolsasImg.setAttribute("data-acumulado", acumulado);
}

cerrarDetalles(document.querySelector(".galeria1"));
cierre();

cerrarDetalles(galeria);
//cierre();

