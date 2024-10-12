const bouton = document.getElementsByClassName("btn")[0]
bouton.addEventListener("click",function(){
    const txt= document.getElementById("text")
    if (txt){
        txt.remove()

    }
    else {const div = document.createElement("div")
        div.id="text"
        div.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio tempora, veritatis assumenda sapiente laboriosam quod enim possimus laborum vero distinctio error, dicta modi, laudantium repellendus et vitae doloribus. Doloribus, fugit."
        document.body.appendChild(div)
    }
    
    
})