import { Jujudata } from "../js/JujuMel_data.js";

function Tejidos (){

    let clasificar = "tejido"
    let aaa = Jujudata.map(function(objeto){
        return objeto.categorias
    })
    console.log(aaa)
    
    Jujudata.forEach( element =>{
   
        if(element["categorias"] == clasificar){

            let Lacaja = document.querySelector(".Tejidos")

            let item = document.createElement("div")
            item.classList.add("C")
                item.innerHTML = `
                    <img src="${element.imagen}" alt="">     
                    <a href="#">ver</a>
                `
            Lacaja.appendChild(item)
       
        }else{
            console.log("Incorrecto")
        }
    })

};

Tejidos();