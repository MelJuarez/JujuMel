import { Jujudata } from "../js/JujuMel_data.js";
import { SEARCH } from "../js/main.js";

function Collares (){

    let clasificar = "collares"

    //let aaa = Jujudata.map(function(objeto){
    //    return objeto.categorias
    //})
    //console.log(aaa)
    
    Jujudata.forEach( element =>{
   
        if(element["categorias"] == clasificar){

            let Lacaja = document.querySelector(".Collares")

            let item = document.createElement("div")
            item.classList.add("C")
            item.id="producto"
                item.innerHTML = `
                    <img src="${element.imagen}" alt="">     
                    <a href="#">ver</a>
                    <p class="clave" >${element.nombre}</p>
                `
            Lacaja.appendChild(item)
       
        }else{
            console.log("Incorrecto")
        }
    })

};

Collares();
SEARCH();