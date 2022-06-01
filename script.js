const container = document.querySelector("#container");
const regen = document.querySelector(".regen");
const reset = document.querySelector(".reset");
const rainbowButton = document.querySelector(".rainbow");

let rainbow = false;




reset.addEventListener("click", clearBoard);


rainbowButton.addEventListener("click", setRainbow);

regen.addEventListener("click", ()=>{
    let numBoxes = prompt("Enter the grid size Ex. 16x16","16");
    if (!isNaN(numBoxes) && numBoxes > 1){
        clearBoard();
        generateBoard(numBoxes);
    }else{
        alert("Please enter valid number");
    }
})

function setHover(){
    if(!this.classList.contains("hover")){
        this.classList.add("hover");
        if(rainbow){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor= "#"+randomColor;
        }else{
            this.style.backgroundColor= "black";
        }

    }
}

function setRainbow(){
    if(!rainbow){
        rainbow = true; 
        clearBoard();
    }else{
        rainbow = false;
    }
}

function clearBoard(){
    let boxes = document.querySelectorAll(".square")
    boxes.forEach(box => {
        if(box.classList.contains("hover")){
            box.classList.remove("hover");
            box.style.backgroundColor ="White";
        }
    });
}



function generateBoard(boxNum = 16){

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

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

