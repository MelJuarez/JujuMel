
//HTML CONTENIDO ENCABEZADO
let contenido_up = `
        <div class="encabezado">
            <img class="logo" src="./img/logo.png" alt="">
            <div class="search">
                <p>🔍︎</p>
                <input class="buscar">
            </div> 
            <button>OFERTAS !</button>

            <a class="inicio" href="index.html">
                <img src="./img/casa.png" alt="">
            </a>

            <img class="carrito" src="./img/bag.png" alt="">
        </div>


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
