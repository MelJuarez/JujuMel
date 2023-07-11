import { Jujudata } from "../js/JujuMel_data.js";

function PortaAN (){

    let clasificar = "anteojos"

    Jujudata.forEach( element =>{

        if(element["categorias"] == clasificar){

            let Lacaja = document.querySelector(".PortaAnteojos")

            let item = document.createElement("div")
            item.classList.add("C")
                item.innerHTML =`
                    <img src="${element.imagen}" alt="">
                    <a href="#">ver</a>
                `
            Lacaja.appendChild(item)
        }else{

        }
    })
}

PortaAN();