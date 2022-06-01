const container = document.querySelector("#container");
const regen = document.querySelector(".regen");
const reset = document.querySelector(".reset");



reset.addEventListener("click", clearBoard);

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
        console.log("CHANGED");
    }

    
}

function clearBoard(){
    let boxes = document.querySelectorAll(".square")
    boxes.forEach(box => {
        box.classList.remove("hover");

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

