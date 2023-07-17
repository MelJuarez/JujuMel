import { Jujudata } from "../js/JujuMel_data.js";
import { SEARCH } from "../js/main.js";

function PortaAN (){

    let clasificar = "anteojos"

    Jujudata.forEach( element =>{

        if(element["categorias"] == clasificar){

            let Lacaja = document.querySelector(".PortaAnteojos")

            let item = document.createElement("div")
            item.classList.add("C")
            item.id="producto"
                item.innerHTML =`
                    <img src="${element.imagen}" alt="">
                    <a href="#">ver</a>
                    <p class="clave" >${element.nombre}</p>
                `
            Lacaja.appendChild(item)
        }else{

        }
    })
}

PortaAN();
SEARCH();