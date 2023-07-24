import { Jujudata } from "../js/JujuMel_data.js";
import { SEARCH } from "../js/main.js";
import { mostrarDetalles } from "../js/main.js";
import { cerrarDetalles } from "../js/main.js";
import { cierre } from "../js/main.js";
import { agregarAlCarrito, actualizarAcumulado } from "../js/main.js";
import { mostrarVentanaEmergente } from "../js/main.js";


SEARCH();

// Obtener la sección donde se mostrarán los productos de la categoría "aretes"
const SeccionAretes = document.querySelector(".Aretes");

// Función para mostrar los productos de la categoría "aretes"
function mostrarAretes() {
  Jujudata.forEach((element) => {
    if (element.categorias === "arete") {
      let Lacaja = document.querySelector(".Aretes");

      let item = document.createElement("div");
      item.classList.add("C");
      item.setAttribute("data-id", element.id); // Agregamos el atributo data-id con el ID del producto
      item.innerHTML = `
        <img class="articulo" src="${element.imagen}" alt="">     
        <div class="orden">
          <div class="detalle_info">
            <p class="clave">${element.nombre}</p>
            <img class="corazon" src="./img/amor.png" alt="">
          </div> 
          <p class="money">Q. ${element.precio}</p>
        </div>  
      `;

      Lacaja.appendChild(item);

      item.addEventListener("click", () => {
        mostrarDetalles(element, Lacaja);
      });
    }
  });
}

mostrarAretes();



// Evento al hacer clic en el botón "comprarr"
document.addEventListener("click", (e) => {
  // ... Código para agregar productos al carrito ...
  if (e.target.classList.contains("comprarr")) {
    const productoDiv = e.target.closest(".C");


    //const idProducto = parseInt(productoDiv.id.split("-")[1]);
    const idProducto = parseInt(productoDiv.getAttribute("data-id"));
    const productoSeleccionado = Jujudata.find((producto) => producto.id === idProducto);

    if (productoSeleccionado) {
      const tallaSelect = productoDiv.querySelector("#talla-select");
      const opcionSelect = productoDiv.querySelector("#opciones-select");
      const cantidadInput = productoDiv.querySelector("#cantidad-input");

      const tallaSeleccionada = tallaSelect.value;
      const opcionSeleccionada = opcionSelect.value;
      const cantidadSeleccionada = parseInt(cantidadInput.value);

      if (isNaN(cantidadSeleccionada) || cantidadSeleccionada <= 0) {
        mostrarMensaje("Ingrese una cantidad válida");
        return;
      }

      agregarAlCarrito(productoSeleccionado, tallaSeleccionada, opcionSeleccionada, cantidadSeleccionada);
      mostrarMensaje("Producto añadido a la bolsa con éxito");
      actualizarAcumulado();
    }  
    cerrarDetalles(SeccionAretes);
    cierre();
  }
});
