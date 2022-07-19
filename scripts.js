

let container = document.querySelector(".container");
let newLine = document.createElement("div");

    
for (let i = 0; i < 32; i++){
    // Creates a container to hold a line of boxes.
    newLine = document.createElement("div");
    newLine.classList.add("line");
    container.appendChild(newLine);
    
    for(let j = 0; j < 32; j++){
         // Creates the divs that are appended to the newLine div.
        box = document.createElement("div");
        box.classList.add("box")
        newLine.appendChild(box);
    }
}

boxes = document.querySelectorAll(".box");

boxes.forEach(box => box.addEventListener("mouseover", () => boxTouched(box)));


function boxTouched(boxElement){
    boxElement.classList.add("touched-by-user");
}