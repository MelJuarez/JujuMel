
//**************BUSCADOR************** */
export function SEARCH (){

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
}

let lacaja = document.querySelector(".Aretes");

//*************MOSTRAR PRODUCTOS********************* */

export function mostrarDetalles(producto,caja) {


    let Cajadetalles = document.createElement("div");
    Cajadetalles.classList.add("detalles");

    Cajadetalles.innerHTML = `

        <img class="articulo" src="${producto.imagen}" alt="">

        <section class="articulos">

            <div class="articuloC1">
                <h2>${producto.nombre}</h2>

                <div class="seleccionar">
                    <select id="talla-select">
                        ${producto.talla.map(talla => `<option value="${talla}">${talla}</option>`).join("")}
                    </select>
                    <select id="opciones-select">
                        ${producto.opciones.map(opcion => `<option value="${opcion}">${opcion}</option>`).join("")}
                    </select>
                </div>
                
            </div>

            <div class="articuloC2">
            <p>Q. ${producto.precio}</p>
                <div class="marcar">
                <img class="comprarr" src="./img/bagM.png" alt="">
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
 
         // Dentro de la función mostrarDetalles
         const marcarBtn = Cajadetalles.querySelector(".marcar .comprarr");
         marcarBtn.addEventListener("click", mostrarVentanaEmergente)
}

//let lacaja = document.querySelector(".Aretes");
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

    export function cierre(){


    document.addEventListener("click", element => {
        if (!element.target.closest(".detalles") && !element.target.closest(".C")) {
            cerrarDetalles();
        }
    });

    }

 

    export function mostrarVentanaEmergente(event) {
        console.log("akjsd")
        const productoImagen = event.target.closest(".detalles").querySelector(".articulo").src;
        const productoTalla = document.getElementById("talla-select").value;
        const productoOpcion = document.getElementById("opciones-select").value;
        const productoPrecio = event.target.closest(".detalles").querySelector(".articuloC2 p").textContent;
    
        // Crea la ventana emergente
        const ventanaEmergente = document.createElement("div");
        ventanaEmergente.classList.add("ventana-emergente");
    
        ventanaEmergente.innerHTML = `
            <span class="cerrar-ventana">&times;</span>
            <img class="articulo" src="${productoImagen}" alt="">
            <p>Talla: ${productoTalla}</p>
            <p>Opción: ${productoOpcion}</p>
            <p>Precio: ${productoPrecio}</p>
            <label for="email">Correo:</label>
            <input type="email" id="email" required>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" required>
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" required>
            <label for="pais">País:</label>
            <select id="pais" required>
                <option value="Guatemala">Guatemala</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Honduras">Honduras</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Panamá">Panamá</option>
                <option value="Belice">Belice</option>
                <option value="México">México</option>
            </select>
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" required>
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" required>
        `;
    
        document.body.appendChild(ventanaEmergente);
    
        // Agrega evento click al botón de cerrar ventana
        const cerrarVentanaBtn = ventanaEmergente.querySelector(".cerrar-ventana");
        cerrarVentanaBtn.addEventListener("click", () => {
            ventanaEmergente.remove();
        });
    }
    
