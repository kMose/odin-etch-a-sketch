

createSketchBox(100);




document.querySelector(".sketch-resizer").addEventListener("click", () => {
    let size = prompt("How big do you want this sketchpad. <= 100 please!")

    if(size > 100){
        alert("Too big! Try again!");
        return;
    }

    clearSketchBox();
    createSketchBox(size);

});


function boxTouched(boxElement){
    boxElement.classList.add("touched-by-user");
}

function clearSketchBox(){
    let element = document.querySelector(".sketch-box");
    element.remove();
}

function createSketchBox(size){
    
    let container = document.querySelector(".container");

    let sketchBox = document.createElement("div");
    sketchBox.classList.add("sketch-box");
    container.appendChild(sketchBox);
    let newLine = document.createElement("div");

    for (let i = 0; i < size; i++){
        // Creates a container to hold a line of boxes.
        newLine = document.createElement("div");
        newLine.classList.add("line");
        sketchBox.appendChild(newLine);
        
        for(let j = 0; j < size; j++){
            // Creates the divs that are appended to the newLine div.
            box = document.createElement("div");
            box.classList.add("box")
            newLine.appendChild(box);
        }
    }

    boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover", () => boxTouched(box)));
}
