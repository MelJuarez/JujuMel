import { Jujudata } from "../js/JujuMel_data.js";
import { SEARCH } from "../js/main.js";

//Galeria con los productos ordenados por categoria

function Aretes (){

    let clasificar = "arete"
    let aaa = Jujudata.map(function(objeto){
        return objeto.categorias
    })
    console.log(aaa)

    Jujudata.forEach( element =>{
   
        if(element["categorias"] == "arete"){

            let Lacaja = document.querySelector(".Aretes")

            let item = document.createElement("div")
            item.classList.add("C")
            item.id="producto"
                item.innerHTML = `
                    <img class="articulo" src="${element.imagen}" alt="">     
                    <a  class = "btn_ver">ver</a>
                    <p class="clave" >${element.nombre}</p>                
                `
            Lacaja.appendChild(item)
        // console.log(element.categorias)    <div class="titulo">Parejas</div>  
            console.log("Correcto")
        }else{
           
            console.log("Incorrecto")
        }

        
    }) 

};

Aretes();
SEARCH();

function mostrar_artículo(){
        console.log("olaa")

        Jujudata.forEach( element =>{

            console.log(element.nombre)
            if(element["categorias"] == "arete"){

                let eldom = document.querySelector(".ver")
                eldom.innerHTML=`
                    <p>${element.nombre}</p> 
                `

                //}console.log(element.nombre)
            }
        })

}

document.querySelector(".btn_ver").addEventListener("click",mostrar_artículo)



//EJECUTANDO FUNCIONES ********************************************************

//Aretes();