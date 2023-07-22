
//HTML CONTENIDO ENCABEZADO
let contenido_up = `
        <div class="encabezado">
            <img class="logo" src="./img/logo.png" alt="">
            <div class="search">
                <p>🔍︎</p>
                <input class="buscar" type="text" name="buscar" id="buscar">
            </div> 
        </div>

        <main class="menu_flotante">

        <div class="minibox">
            <a href="./index.html">
                <img class= "bolsas" src="./img/bag.png" alt="">
                <p class="texto">Bag</p>
            </a>
            
        </div>

           
        <div class="minibox">
            <a href="./index.html">
                <img src="./img/casa.png" alt="">
                <p class="texto">Home</p>
            </a>
            
        </div>
        
        <div class="minibox">
            <a href="./index.html">
                <img src="./img/descuento.png" alt="">
                <p class="texto">Offers</p>
           </a>
          
        </div>

        <div class="minibox">
            <a href="./index.html">
                <img src="./img/corazon.png" alt="">
                <p class="texto">Wishlist</p>
            </a>
            
        </div>
       
    </main>

        <ul class="menu">
            <!---Opciones de menú -->
            <li class="uno"><a href="./categoria1.html">ARETES</a></li>
            <li class="dos"><a href="./categoria2.html">TEJIDOS</a></li>
            <li class="tres"><a href="./categoria3.html">BIZUTERÍA</a></li>
            <li class="cuatro"><a href="./categoria4.html">PORTA ANTEOJOS</a></li>
            <li class="cinco"><a href="./categoria5.html">COLLARES</a></li>
        </ul>

`
let up =  document.querySelector("header");

up.innerHTML = contenido_up; 


let carrito = [];

function actualizarBurbuja() {
  const bolsasImg = document.querySelector(".bolsas");
  const burbuja = document.createElement("span");
  burbuja.classList.add("burbuja");
  burbuja.textContent = carrito.length;
  bolsasImg.appendChild(burbuja);
}