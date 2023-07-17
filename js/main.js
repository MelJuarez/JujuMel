export function SEARCH (){

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


SEARCH();