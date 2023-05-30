window.onload = function (){

    let buttons = document.getElementsByClassName("btn")
    let body = document.getElementById("body")
    for(i = 0; i < buttons.length; i++ ){
        let button = buttons[i]
        button.addEventListener("click", function(){
            let classess = body.classList
            classess.remove(classess.item(0))
            classess.add(button.id)
            console.log(classess)
        })
    }
}