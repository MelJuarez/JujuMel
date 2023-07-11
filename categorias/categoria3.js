import { Jujudata } from "../js/JujuMel_data.js";

function Bizuteria (){

    let clasificar = "bizuteria"

    Jujudata.forEach( element =>{

        if(element["categorias"] == clasificar){

            let Lacaja = document.querySelector(".Bizuteria")

            let item = document.createElement("div")
            item.classList.add("C")
                item.innerHTML = `
                    <img src="${element.imagen}" alt="">
                    <a href="./visualizar.html">
                        ver
                    </a>
                `
            Lacaja.appendChild(item)
        }else{
            
        }
    })
}

Bizuteria();