let contenido_footer = `
<P class="contac">CONTACTANOS</P>
<div class="Estructura">

    <div class="redes">       
        <div class="colum1">
            <div class="red">
                <img src="./img/insta.png" alt="">
                <a href="https://www.instagram.com/">Instagram</a>
            </div>

            <div class="red">
                <img src="./img/face.png" alt="">
                <a href="https://www.instagram.com/">Facebook</a>
            </div>

            <div class="red">
                <img src="./img/twitter.png" alt="">
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
        <img src="./img/bag.png" alt="">
        <a href="#">Ver Carrito</a>

    </div>
</div>

`
let footer = document.querySelector("footer");

footer.innerHTML = contenido_footer;

//<P>CONTACTANOS</P>