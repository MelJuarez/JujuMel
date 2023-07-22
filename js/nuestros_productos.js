import { Jujudata } from "./JujuMel_data.js";
import { SEARCH } from "./main.js";
 

    function queee (){

      let galeria_1 = document.querySelector(".galeria1")
     

    Jujudata.forEach( element =>{    

          let item = document.createElement("div")
          item.classList.add("C")
          item.id="producto"
              item.innerHTML = `
                  <img class="articulo" src="${element.imagen}" alt="">     
                  <a  class = "btn_ver">ver</a>
                  <p class="clave" >${element.nombre}</p>                
              `

          galeria_1.appendChild(item)

          
         
    })

  };

  queee();

  Jujudata.forEach( element =>{
     

    let galeria_1 = document.querySelector(".galeria1")


      let item = document.createElement("div")
      item.classList.add("C")
      item.id="producto"
          item.innerHTML = `
              <img class="articulo" src="${element.imagen}" alt="">     
              <a  class = "btn_ver">ver</a>
              <p class="clave" >${element.nombre}</p>                
          `

      galeria_1.appendChild(item)

      
     
})

    function SEARCH (){

      console.log("queeeeee")
      
      document.addEventListener("keyup", e=>{
  
          if (e.target.matches(".buscar")){
        
              if (e.key ==="Escape")e.target.value = ""
        
              document.querySelectorAll("#producto").forEach(Element =>{
        
                  Element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                    ?Element.classList.remove("filtro")
                    :Element.classList.add("filtro")
              })
        
          }
        
        
        })
  }


   
  //SEARCH();

