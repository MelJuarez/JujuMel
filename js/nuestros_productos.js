import { Jujudata } from "./JujuMel_data.js";

    
//Galería con ofertas y productos más vendidos    
    let contenido_galeria1 = `

        <div class="producto" id="uno">
            <img src="${Jujudata[16]["imagen"]}" alt="">
            <a href="#">ver</a>
        </div>

        <div class="producto" id="dos">
            <img src="${Jujudata[9]["imagen"]}" alt="">
            <a href="#">ver</a>
        </div>

        <div class="producto" id="dos">
            <img src="${Jujudata[2]["imagen"]}" alt="">
            <a href="#">ver</a>
        </div>

        <div class="producto" id="dos">
            <img src="${Jujudata[17]["imagen"]}" alt="">
            <a href="#">ver</a>
        </div>

    `;

    let galeria_1 = document.querySelector(".galeria1")
    galeria_1.innerHTML = contenido_galeria1;


//No está en uso****************************************************
    function cargar_galeria1(){

        let galeria_1 = document.querySelector(".galeria1")

        Jujudata.forEach(element =>  {
            let item = document.createElement("div");
            item.classList.add("producto")

            item.innerHTML=`
                <img src="${element["imagen"]}" alt="">
                <a href="#">ver</a>
            `
            console.log("ola")
            galeria_1.appendChild(item)
        })
    }
    //cargar_galeria1();
    // <img src="./img/x.png" alt="">


