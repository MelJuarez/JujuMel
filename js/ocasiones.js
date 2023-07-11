import { Jujudata } from "./JujuMel_data.js";

//galeria2
let contenido_categorias = `
    <h1>¡BUSCA LA OCASIÓN IDEAL!</h1>

    <div class="categorias">

        <div class="C" id="uno">
            <img src="${Jujudata[6]["imagen"]}" alt="">
            <div class="titulo">Parejas</div>           
           
        </div>

        <div class="C" id="dos">
            <img src="${Jujudata[18]["imagen"]}" alt="">
            <div class="titulo">Bautizo</div>           
            
        </div>

        <div class="C" id="tres">
            <img src="${Jujudata[12]["imagen"]}" alt="">
            <div class="titulo">Amistad</div>           
            
        </div>

        <div class="C" id="dos">
            <img src="${Jujudata[11]["imagen"]}" alt="">
            <div class="titulo">Da un Regalo</div>           
         
        </div>

    </div>
`
let galeria_2 =  document.querySelector(".galeria2")
galeria_2.innerHTML = contenido_categorias;

//<a href="#">ver</a>