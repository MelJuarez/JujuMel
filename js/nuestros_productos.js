import { Jujudata } from "./JujuMel_data.js";
import { SEARCH } from "./main.js";

    
//Galería con ofertas y productos más vendidos    
/*  let contenido_galeria1 = `

        <div class="producto C" id="producto">
            <img src="${Jujudata[16]["imagen"]}" alt="">
            <a href="#">ver</a>
            <p>${Jujudata[16]["nombre"]}</p>
        </div>

        <div class="producto C" id="producto">
            <img src="${Jujudata[9]["imagen"]}" alt="">
            <a href="#">ver</a>
            <p>${Jujudata[9]["nombre"]}</p>
        </div>

        <div class="producto C" id="producto">
            <img src="${Jujudata[2]["imagen"]}" alt="">
            <a href="#">ver</a>
            <p>${Jujudata[2]["nombre"]}</p>
        </div>

        <div class="producto C" id="producto">
            <img src="${Jujudata[17]["imagen"]}" alt="">
            <a href="#">ver</a>
            <p>${Jujudata[17]["nombre"]}</p>
        </div>

    `;*/

  
   
   

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

/*const contenidoo_galeria1 = document.querySelector(".contenido-galeria.galeria1");
const galeria1Productos = contenidoo_galeria1.querySelectorAll(".producto");

galeria1Productos.forEach((producto, index) => {
  if (index >= 4) {
    producto.style.display = "none";
  }
});*/

/*
    function mostrarProductosFiltrados(productos) {
      const resultadoBusqueda = document.querySelector(".resultado_busqueda");
      resultadoBusqueda.innerHTML = "";

  productos.forEach((producto) => {
    const productoHTML = `
      <div class="producto">
        <img src="${producto.imagen}" alt="">
        <a href="#">ver</a>
        <p>${producto.nombre}</p>
      </div>
    `;

  
    resultadoBusqueda.insertAdjacentHTML('beforeend', productoHTML);
  });
    }
    


   function BuscadorGeneral() {
    const buscarInput = document.querySelector(".buscar");
    const searchTerm = buscarInput.value.toLowerCase();
    const todosLosProductos = document.querySelectorAll(".producto");
    const productosFiltrados = [];
  
    todosLosProductos.forEach((producto) => {
      const productoNombre = producto.querySelector("p").textContent.toLowerCase();
      if (productoNombre.includes(searchTerm)) {
        producto.style.display = "block";
        const productId = producto.dataset.productId;
        const productoEncontrado = Jujudata.find((producto) => producto.nombre === parseInt(productId));
        productosFiltrados.push(productoEncontrado);
      } else {
        producto.style.display = "none";
      }
    });
  
    mostrarProductosFiltrados(productosFiltrados);
}

document.querySelector(".buscar").addEventListener("keyup", BuscadorGeneral);




 

  // Ocultar todos los productos al cargar la página
  const todosLosProductos = document.querySelectorAll(".producto");
  todosLosProductos.forEach((element) => {
  element.classList.add("oculto");
  });

  BuscadorGeneral(); */



    //cargar_galeria1();
    // <img src="./img/x.png" alt="">


