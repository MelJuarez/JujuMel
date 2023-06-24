
//HTML CONTENIDO ENCABEZADO
let contenido_up = `
        <div class="encabezado">
            <img class="logo" src="./img/logo.png" alt="">
            <div class="search">
                <p>🔍︎</p>
                <input class="buscar">
            </div> 
            <button>OFERTAS !</button>
            <img class="carrito" src="./img/bag.png" alt="">
        </div>


        <ul class="menu">
            <!---Opciones de menú -->
            <li class="uno"><a href="./categoria1.html">CATEGORIA 1</a></li>
            <li class="dos"><a href="#">CATEGORIA 2</a></li>
            <li class="tres"><a href="#">CATEGORIA 3</a></li>
            <li class="cuatro"><a href="#">CATEGORIA 4</a></li>
            <li class="cinco"><a href="#">CATEGORIA 5</a></li>
        </ul>

`
let up =  document.querySelector("header");

up.innerHTML = contenido_up; 
