import { Jujudata } from "../js/JujuMel_data.js";
import { SEARCH } from "../js/main.js";
import { mostrarDetalles } from "../js/main.js";
import { cerrarDetalles } from "../js/main.js";
import { cierre } from "../js/main.js";
import { mostrarVentanaEmergente } from "../js/main.js";


//Galeria con los productos ordenados por categoria

    let SeccionAretes = document.querySelector(".Aretes")

function Aretes (){

    Jujudata.forEach( element =>{
   
        if(element["categorias"] == "arete"){

            let Lacaja = document.querySelector(".Aretes")

            let item = document.createElement("div")
            item.classList.add("C")
            item.id="producto"
                item.innerHTML = `

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

//    <a  class = "btn_ver">ver</a> 

Aretes();
SEARCH(); //Buscador individual
cerrarDetalles(SeccionAretes);
cierre();

// --size: 200px;
//<div class="heart"></div> 
