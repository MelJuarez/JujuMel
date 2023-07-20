import { Jujudata } from "../js/JujuMel_data.js";
import { SEARCH } from "../js/main.js";
import { mostrarDetalles } from "../js/main.js";
import { cerrarDetalles } from "../js/main.js";
import { cierre } from "../js/main.js";


let SeccionCollares = document.querySelector(".Collares")
function Collares (){

    let clasificar = "collares"
    
    Jujudata.forEach( element =>{
   
        if(element["categorias"] == clasificar){

            let Lacaja = document.querySelector(".Collares")

            let item = document.createElement("div")
            item.classList.add("C")
            item.id="producto"
                item.innerHTML = `
                    <img  class="articulo" src="${element.imagen}" alt="">

                    <div class="orden">
                        <div class="detalle_info">
                            <p class="clave" >${element.nombre}</p>
                            <img class="corazon" src="./img/amor.png" alt="">
                        </div> 
                        <p class="money">Q. ${element.precio}</p>
                    </div>  
                `
            Lacaja.appendChild(item)

            item.addEventListener("click", () => { //Mostrar los productos a detalle
                mostrarDetalles(element,Lacaja);
            });
       
        }else{
            console.log("Incorrecto")
        }
    })

    document.body.appendChild(ventanaEmergente);
    
    // Agrega evento click al botón de cerrar ventana
    const cerrarVentanaBtn = ventanaEmergente.querySelector(".cerrar-ventana");
    cerrarVentanaBtn.addEventListener("click", () => {
        ventanaEmergente.remove();
    });
};

Collares();
SEARCH();
cerrarDetalles(SeccionCollares)
cierre();