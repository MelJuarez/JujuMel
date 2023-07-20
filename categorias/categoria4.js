import { Jujudata } from "../js/JujuMel_data.js";
import { SEARCH, cierre } from "../js/main.js";
import { mostrarDetalles } from "../js/main.js";
import { cerrarDetalles } from "../js/main.js";

    let SeccionAnteojos = document.querySelector(".PortaAnteojos")


function PortaAN (){

    let clasificar = "anteojos"

    Jujudata.forEach( element =>{

        if(element["categorias"] == clasificar){

            let Lacaja = document.querySelector(".PortaAnteojos")

            let item = document.createElement("div")
            item.classList.add("C")
            item.id="producto"
                item.innerHTML =`
                    
                <img class="articulo" src="${element.imagen}" alt="">     
                      
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

        }
    })
}

PortaAN();
SEARCH();
cerrarDetalles(SeccionAnteojos);
cierre();