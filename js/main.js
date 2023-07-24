
export let carrito = [];

//**************BUSCADOR************** */
/*export function SEARCH (){

    /*console.log("queeeeee")
    const titleOur = document.querySelector(".our");

    document.addEventListener("keyup", e=>{          
        if (e.target.matches(".buscar")){                             

            if (e.key ==="Escape")e.target.value = ""
            
            document.querySelectorAll(".C").forEach(Element =>{
      
                Element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                  ?Element.classList.remove("filtro")
                  :Element.classList.add("filtro")
            });
        }        
    });*/
   /* const titleOur = document.querySelector(".our");
  const inputBuscar = document.querySelector(".buscar");

  // Evento input para detectar cambios en el cuadro de búsqueda en tiempo real
  inputBuscar.addEventListener("input", () => {
    const searchText = inputBuscar.value.toLowerCase().trim();
    
    // Mostrar u ocultar el título según el contenido del cuadro de búsqueda
    if (searchText !== "") {
     
    } else {
      titleOur.classList.add("hide");
      //titleOur.classList.remove("hide");
    }

    document.querySelectorAll(".C").forEach((element) => {
      const content = element.textContent.toLowerCase();
      const shouldShow = content.includes(searchText);
      element.classList.toggle("filtro", !shouldShow);
    });
  });

  // Evento keyup para detectar si se presiona la tecla "Escape" para limpiar el cuadro de búsqueda
  inputBuscar.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      inputBuscar.value = "";
      titleOur.classList.add("hide");
      alert("ya wey")

      document.querySelectorAll(".C").forEach((element) => {
        element.classList.remove("filtro");
      });
      
    }
  });
  }*/

export function cierre(){


    document.addEventListener("click", element => {
        if (!element.target.closest(".detalles") && !element.target.closest(".C")) {
            cerrarDetalles();
        }
    });

  }


// Función para mostrar el mensaje emergente en pantalla
function mostrarMensaje(mensaje) {
  
    const mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("mensaje-emergente");
    mensajeDiv.textContent = mensaje;

    actualizarAcumulado();
  
    // Agregar el mensaje al documento
    document.body.appendChild(mensajeDiv);
  
    // Configurar un temporizador para eliminar el mensaje después de unos segundos
    setTimeout(() => {
      mensajeDiv.remove();
    }, 2000); // El mensaje se eliminará después de 3 segundos (ajusta este valor según tus preferencias)

   
  }


 // Función para actualizar el acumulado en el ícono de "bolsas"
export function actualizarAcumulado() {      
        const bolsasImg = document.getElementById("bolsas-img");
        const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
      
        // Verificar si el elemento con clase "burbuja" existe antes de intentar eliminarlo
        const burbujaExistente = bolsasImg.querySelector(".burbuja");
        if (burbujaExistente) {
          bolsasImg.removeChild(burbujaExistente);
        }
      
        if (carritoGuardado && carritoGuardado.length > 0) {
          const carritoCantidad = carritoGuardado.reduce((total, producto) => total + producto.cantidad, 0);
          const burbuja = document.createElement("div");
          burbuja.classList.add("burbuja");
          burbuja.textContent = carritoCantidad;
          bolsasImg.appendChild(burbuja);
        }
    }
    
  const titleOur = document.querySelector(".contenedor")

export function mostrarCarrito() {
    const carritoDiv = document.createElement("div");
    carritoDiv.classList.add("carrito");
      
    if (carrito.length === 0) {
      mostrarMensaje("No hay productos en el carrito :c")
      carritoDiv.textContent = "No hay productos en el carrito.";
        } else {
          let totalCompra = 0;
      
          carrito.forEach((producto) => {

             // Verificar que el producto tenga cantidad y precio válidos
              if (producto.cantidad && producto.precio && !isNaN(producto.cantidad) && !isNaN(producto.precio)) {
                // Crear elementos para cada producto en el carrito y calcular el total
                const productoDiv = document.createElement("div");
                productoDiv.classList.add("producto");
                productoDiv.innerHTML = `
                  <img src="${producto.imagen}" alt="${producto.nombre}">
                  <div class="carritotexto">
                    <h4>${producto.nombre} - </h4>
                    <h5>${producto.cantidad} x Q. ${producto.precio}</h5>
                    <p>Total: Q. ${producto.cantidad * producto.precio}</p>
                  </div>
                `;
                totalCompra += producto.cantidad * producto.precio;

                const quitarBtn = document.createElement("button");
                quitarBtn.textContent = "Quitar";
                quitarBtn.addEventListener("click", () => {
                  quitarDelCarrito(producto);
                });
                productoDiv.appendChild(quitarBtn);

                carritoDiv.appendChild(productoDiv);
              }
          });

           // Agregamos el total de compra al final del carritoDiv
           const totalDiv = document.createElement("div");
           totalDiv.classList.add("total");
           totalDiv.textContent = `Total a pagar: Q. ${totalCompra}`;
           carritoDiv.appendChild(totalDiv);


          // Agregamos el botón para finalizar la compra si hay productos válidos en el carrito
          if (totalCompra > 0) {
            const finalizarCompraBtn = document.createElement("button");
            finalizarCompraBtn.textContent = "Finalizar compra";
            finalizarCompraBtn.addEventListener("click", () => {
              mostrarVentanaEmergente();
            });
            carritoDiv.appendChild(finalizarCompraBtn);
          }        
    
            const detalleDiv = document.querySelector(".detalle");
            if (detalleDiv) {
              detalleDiv.innerHTML = ""; // Vaciamos el contenido previo de detalleDiv
              detalleDiv.appendChild(carritoDiv); // Agregamos el carritoDiv a detalleDiv
            }
          
          // Agregamos el botón "Cerrar" para cerrar el carrito
          const cerrarBtn = document.createElement("button");
          cerrarBtn.textContent = "Cerrar";
          cerrarBtn.addEventListener("click", () => {
            titleOur.classList.remove("RemoverC")
            detalleDiv.innerHTML = ""; // Vaciamos el contenido previo de detalleDiv
          
          });
      
          carritoDiv.appendChild(cerrarBtn);        
        }
      
      
      }



      
 // Agregar evento al botón de "bolsas" para mostrar el carrito
 document.querySelector(".bolsas").addEventListener("click", () => {
   
    mostrarCarrito();
    titleOur.classList.add("RemoverC")
  
  });



export function mostrarVentanaEmergente() {
        const ventanaEmergente = document.createElement("div");
        ventanaEmergente.classList.add("ventana-emergente");
      
        // Contenido del formulario para finalizar la compra
        const formulario = document.createElement("form");
      
        const correoLabel = document.createElement("label");
        correoLabel.textContent = "Correo electrónico:";
        const correoInput = document.createElement("input");
        correoInput.type = "email";
        correoInput.name = "correo";
        correoInput.required = true;
      
        const apellidosLabel = document.createElement("label");
        apellidosLabel.textContent = "Apellidos:";
        const apellidosInput = document.createElement("input");
        apellidosInput.type = "text";
        apellidosInput.name = "apellidos";
        apellidosInput.required = true;
      
        const nombresLabel = document.createElement("label");
        nombresLabel.textContent = "Nombres:";
        const nombresInput = document.createElement("input");
        nombresInput.type = "text";
        nombresInput.name = "nombres";
        nombresInput.required = true;
      
        const paisLabel = document.createElement("label");
        paisLabel.textContent = "País:";
        const paisSelect = document.createElement("select");
        paisSelect.name = "pais";
        paisSelect.required = true;
        const paises = ["Guatemala", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panamá"];
        paises.forEach((pais) => {
          const opcion = document.createElement("option");
          opcion.value = pais;
          opcion.textContent = pais;
          paisSelect.appendChild(opcion);
        });
      
        const ciudadLabel = document.createElement("label");
        ciudadLabel.textContent = "Ciudad:";
        const ciudadInput = document.createElement("input");
        ciudadInput.type = "text";
        ciudadInput.name = "ciudad";
        ciudadInput.required = true;
      
        const direccionLabel = document.createElement("label");
        direccionLabel.textContent = "Dirección:";
        const direccionInput = document.createElement("input");
        direccionInput.type = "text";
        direccionInput.name = "direccion";
        direccionInput.required = true;
      
        const telefonoLabel = document.createElement("label");
        telefonoLabel.textContent = "Teléfono:";
        const telefonoInput = document.createElement("input");
        telefonoInput.type = "tel";
        telefonoInput.name = "telefono";
        telefonoInput.required = true;
      
        const metodoPagoLabel = document.createElement("label");
        metodoPagoLabel.textContent = "Método de pago:";
        const metodoPagoSelect = document.createElement("select");
        metodoPagoSelect.name = "metodoPago";
        metodoPagoSelect.required = true;
        const metodosPago = ["Visa", "Mastercard", "PayPal", "Otro"];
        metodosPago.forEach((metodo) => {
          const opcion = document.createElement("option");
          opcion.value = metodo;
          opcion.textContent = metodo;
          metodoPagoSelect.appendChild(opcion);
        });
        
      
        const comprarBtn = document.createElement("button");
        comprarBtn.textContent = "Finalizar Compra";
        comprarBtn.addEventListener("click", () => {
          mostrarMensaje("Compra exitosa");
          carrito = []; // Vaciamos el carrito al finalizar la compra
          actualizarAcumulado();
          //mostrarCarrito(); // Mostramos el carrito nuevamente vacío
          
          document.querySelectorAll(".C").forEach((elemento) => {
            elemento.style.display = "none";
          });

        
            ventanaEmergente.remove();

            // Limpiar la ventana emergente antes de cerrarla
            formulario.reset();

            setTimeout(() => {
              window.location.href = "index.html";
            }, 1500); // 3000 milisegundos = 3 segundos
         
            
          // Regresar al inicio
            //window.scrollTo(0, 0);
        });
      
        formulario.appendChild(correoLabel);
        formulario.appendChild(correoInput);
        formulario.appendChild(apellidosLabel);
        formulario.appendChild(apellidosInput);
        formulario.appendChild(nombresLabel);
        formulario.appendChild(nombresInput);
        formulario.appendChild(paisLabel);
        formulario.appendChild(paisSelect);
        formulario.appendChild(ciudadLabel);
        formulario.appendChild(ciudadInput);
        formulario.appendChild(direccionLabel);
        formulario.appendChild(direccionInput);
        formulario.appendChild(telefonoLabel);
        formulario.appendChild(telefonoInput);
        formulario.appendChild(metodoPagoLabel);
        formulario.appendChild(metodoPagoSelect);
        formulario.appendChild(comprarBtn);
      
        // Calculamos el total de la compra para mostrarlo en el formulario
        let totalCompra = 0;
        carrito.forEach((producto) => {
          if (producto.cantidad && producto.precio && !isNaN(producto.cantidad) && !isNaN(producto.precio)) {
            totalCompra += producto.cantidad * producto.precio;
          }
        });
      
  function cerrarVentanaEmergente() {
          ventanaEmergente.style.display = "none";
        }
        
        // Crear botón "Cerrar"
        const cerrarBtn = document.createElement("button");
        cerrarBtn.textContent = "Seguir comprando";
        cerrarBtn.addEventListener("click", cerrarVentanaEmergente);

        const totalDiv = document.createElement("div");
        totalDiv.classList.add("total");
        totalDiv.textContent = `Total a pagar: Q. ${totalCompra}`;
        formulario.appendChild(totalDiv);
      


        formulario.appendChild(cerrarBtn);
        ventanaEmergente.appendChild(formulario);
        document.body.appendChild(ventanaEmergente);

        
    
      }
      

  // Función para quitar un producto del carrito
function quitarDelCarrito(producto) {
    const index = carrito.indexOf(producto);
    if (index !== -1) {
      carrito.splice(index, 1);
      mostrarCarrito();
      mostrarMensaje("Producto eliminado del carrito");
      actualizarAcumulado(); // Actualizamos el acumulado al quitar un producto
    }
  }
  

//*************MOSTRAR PRODUCTOS********************* */


export function mostrarDetalles(producto,caja) {
    let detalleDiv;
    let Cajadetalles = document.createElement("div");
    Cajadetalles.classList.add("detalles");

    Cajadetalles.innerHTML = `

        <img class="articulo" src="${producto.imagen}" alt="">
        <section class="articulos">
            <div class="articuloC1">
                <h2>${producto.nombre}</h2>
                <h3>Categoria: ${producto.categorias}</h3>
                <div class="seleccionar">
                    <select id="talla-select">
                        ${producto.talla.map(talla => `<option value="${talla}">${talla}</option>`).join("")}
                    </select>
                    <select id="opciones-select">
                        ${producto.opciones.map(opcion => `<option value="${opcion}">${opcion}</option>`).join("")}
                    </select>
                    <input type="number" id="cantidad-input" value="1" min="1">

                </div>
                
            </div>

            <div class="articuloC2">
            <p>Q. ${producto.precio}</p>
                <div class="marcar">
                <img class="comprarr" src="./img/bagM.png" id="comprarr" alt="">
                </div>
            </div>

        </section>
        
    `;

    // Ocultar todos los divs de
    caja.querySelectorAll(".C").forEach(element => {
        element.style.display = "none";
    });

    caja.appendChild(Cajadetalles);


    // Ocultar los demás elementos
    let todosLosProductos = document.querySelectorAll("#producto");
    todosLosProductos.forEach(elemento => {
        if (elemento !== Cajadetalles) {
            elemento.classList.add("oculto");
        }
    });
 
  //

    // Dentro de la función mostrarDetalles
    const marcarBtn = Cajadetalles.querySelector(".marcar .comprarr");
    marcarBtn.textContent = "Añadir al carrito";
    marcarBtn.addEventListener("click", () => {
    const tallaSelect = Cajadetalles.querySelector("#talla-select");
    const opcionSelect = Cajadetalles.querySelector("#opciones-select");
    const cantidadInput = Cajadetalles.querySelector("#cantidad-input");

    const tallaSeleccionada = tallaSelect.value;
    const opcionSeleccionada = opcionSelect.value;
    const cantidadSeleccionada = parseInt(cantidadInput.value);

      //carrito.push(producto); // Añadimos el producto al carrito
      agregarAlCarrito(producto, tallaSeleccionada, opcionSeleccionada, cantidadSeleccionada);
      mostrarMensaje("Producto añadido a la bolsa con éxito");   
      actualizarAcumulado();
    
  });

  detalleDiv = document.querySelector(".detalle");
}


//***************CIERRA DETALLE DE PRODUCTOS **************/
export function cerrarDetalles(categoria) {
    let detalles = document.querySelector(".detalles");
    if (detalles) {
        detalles.remove();        
        categoria.querySelectorAll(".C").forEach(element => {
            element.style.display = "block";
        });
    }    
}

/****************************** */

function actualizarBurbuja() {
    const bolsasImg = document.querySelector(".bolsas");
    const burbuja = document.createElement("span");
    //const burbuja = document.createElement(".burbuja");
  
  
    if (carrito.length === 0) {
      burbuja.style.display = "none";
    } else {
      burbuja.style.display = "block";
      burbuja.textContent = carrito.length;
    }
  
    burbuja.classList.add("burbuja");
    burbuja.textContent = carrito.length;
    bolsasImg.appendChild(burbuja);
  }


      // Evento al hacer clic en el botón "comprarr"
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("comprarr")) {
      const productoDiv = e.target.closest(".C");
      const idProducto = parseInt(productoDiv.id.split("-")[1]);
      const productoSeleccionado = Jujudata.find((producto) => producto.id === idProducto);
  
      if (productoSeleccionado) {
        const cantidadInput = productoDiv.querySelector("#cantidad-input");
        const cantidad = parseInt(cantidadInput.value);

        if (isNaN(cantidad) || cantidad <= 0) {
          mostrarMensaje("Ingrese una cantidad válida");
          return;
        }

        carrito.push({
          id: productoSeleccionado.id,
          nombre: productoSeleccionado.nombre,
          precio: productoSeleccionado.precio,
          cantidad: 1,
        });
  
        mostrarMensaje("Producto añadido a la bolsa con éxito");
        mostrarCarrito(); // Mostrar el carrito después de agregar un producto
        actualizarAcumulado(); 
      }
    }
  });


  export function agregarAlCarrito(producto, talla, opcion, cantidadSeleccionada) {
    if (isNaN(cantidadSeleccionada) || cantidadSeleccionada <= 0) {
      mostrarMensaje("La cantidad seleccionada no es válida.");
      return;
    }
  
    const productoEnCarrito = carrito.find(
      (item) => item.id === producto.id && item.talla === talla && item.opcion === opcion);
  
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += cantidadSeleccionada;
    } else {
      carrito.push({ ...producto, talla, opcion, cantidad: cantidadSeleccionada });
    }
    actualizarAcumulado();

    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  