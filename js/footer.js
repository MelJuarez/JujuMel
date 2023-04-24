let contenido_footer = `
<div class="redes">
    <P>CONTACTANOS</P>

    <div class="colum1">
        <div class="red">
            <img src="./img/squares.png" alt="">
            <a href="https://www.instagram.com/">Instagram</a>
        </div>

        <div class="red">
            <img src="./img/squares.png" alt="">
            <a href="https://www.instagram.com/">Facebook</a>
        </div>

        <div class="red">
            <img src="./img/squares.png" alt="">
            <a href="https://www.instagram.com/">Twitter</a>
        </div>
    
</div>

</div>

    <div class="info">
    <a href="#">ABOUT US</a>
    <a href="#">MISION</a>
    <a href="#">VISION</a>
    </div>

    <div class="compra">
    <img src="./img/squares.png" alt="">
    <a href="#">Ver Carrito</a>

</div>

`
let footer = document.querySelector("footer");

footer.innerHTML = contenido_footer;