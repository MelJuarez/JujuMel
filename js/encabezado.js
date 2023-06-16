
//HTML CONTENIDO ENCABEZADO
let contenido_up = `
        <div class="encabezado">
            <img class="logo" src="./img/blocks.png" alt="">
            <div class="search">
                <p>🔍︎</p>
                <input class="buscar">
            </div> 
            <button>OFERTAS !</button>
            <img class="carrito" src="./img/squares.png" alt="">
        </div>


        <ul class="menu">
            <!---Opciones de menú -->
            <li><a href="./categoria1.html">CATEGORIA1</a></li>
            <li><a href="#">CATEGORIA1</a></li>
            <li><a href="#">CATEGORIA1</a></li>
            <li><a href="#">CATEGORIA1</a></li>
            <li><a href="#">CATEGORIA1</a></li>
        </ul>

`
let up =  document.querySelector("header");

up.innerHTML = contenido_up; 
