import { Jujudata } from "../js/JujuMel_data.js";

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

Collares();