const container = document.querySelector("#container");


function setHover(){
    this.classList.add("hover");
    console.log("CHANGED");
    this.removeEventListener("mouseover",setHover);
}


function generateBoard(boxNum = 16){

    let boxSize = 600/boxNum;

    for(let i =0; i<boxNum; i++){

        for(let n =0;n<boxNum;n++){
            let box = document.createElement("div");
            box.style.width = boxSize+"px";
            box.style.height = boxSize+"px";

            box.classList.add("square");
            box.addEventListener("mouseover", setHover);
            container.appendChild(box);


        }
    }

}

generateBoard();

