
//HTML CONTENIDO ENCABEZADO
let contenido_up = `
        <div class="encabezado">
            <img class="logo" src="./img/blocks.png" alt="">
            <input class="buscar">
            <button>OFERTAS</button>
            <img class="carrito" src="./img/squares.png" alt="">
        </div>


        <ul class="menu">
            <!---Opciones de menú -->
            <li>CATEGORIA</li>
            <li>CATEGORIA</li>
            <li>CATEGORIA</li>
            <li>CATEGORIA</li>
            <li>CATEGORIA</li>
        </ul>

`
let up =  document.querySelector("header");

up.innerHTML = contenido_up; 
