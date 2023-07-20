
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
            <input class="marcar" type="checkbox">
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
        if (elemento !== detallesContainer) {
            elemento.classList.add("oculto");
        }
    });
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
