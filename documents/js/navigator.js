function changeDocList(idx){
    let langBtn = document.getElementById("l-switch")
    console.log(langBtn.textContent)

    let doc_number = 10
    let data = document.getElementsByClassName("doc-content")
    var arr = Array.prototype.slice.call(data)
    
    // List Update
    if (langBtn.textContent === "한글"){
        arr.forEach(element => {
            var order = element.getAttribute("data-order")
            if ( (idx-1)*doc_number < order && order <= idx*doc_number){
                if (element.classList.contains("kor-text")){
                    // Korean -> Reveal
                    //console.log(element.classList[0])
                    element.style.display = "inline-block"
                } else { element.style.display = "none" }
            } else { element.style.display = "none" }
        });
    } else { // English
        arr.forEach(element => {
            var order = element.getAttribute("data-order")
            if ( (idx-1)*doc_number < order && order <= idx*doc_number){
                if (element.classList.contains("kor-text")){
                    // Korean -> Reveal
                    //console.log(element.classList[0])
                    element.style.display = "inline-block"
                } else { element.style.display = "none" }
            } else { element.style.display = "none" }
        });
    }

    updateNavigatorButtons(idx)
}


function updateNavigatorButtons(idx){
    // reset state of navigator button
    var navClickedButton = document.getElementsByClassName("navigator-clicked")
    navClickedButton[0].classList.add("navigator-unclicked")
    navClickedButton[0].classList.remove("navigator-clicked")

    // change state of the navigator button of the clicked index
    var navUnclickedButtons = document.getElementsByClassName("navigator-unclicked")
    navUnclickedButtons[idx-1].classList.add("navigator-clicked")
    navUnclickedButtons[idx-1].classList.remove("navigator-unclicked")
}