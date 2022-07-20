


createSketchBox(50);



// Button listener to toggle grid boxes.
document.querySelector(".grid-button").addEventListener("click", () => {
    let boxElement = document.querySelectorAll(".box");

    boxElement.forEach(box => {
        if(box.style.border)
        box.style.border = "";
        else
            box.style.border = "1px solid black";  
    });

});


// Sketch resizer
// Adds an event listener to the sketch resize button. Prompts user for desired size.
// Resizes the css height/width element so the boxes fit evenly within the sketchpad.
document.querySelector(".sketch-resizer").addEventListener("click", () => {
    let size = prompt("How many cells do you want in the sketchpad? Default is 50. Max is 100.");

    if(size === ""){
        size = 50;
    }

    if(size > 100){
        alert("Too big! Try again!");
        return;
    }

    clearSketchBox();
    createSketchBox(size);


    let boxElement = document.querySelectorAll(".box");
    boxSize = Math.round(500/size);

    boxElement.forEach(box => {
        box.style.height = `${boxSize}px`;
        box.style.width = `${boxSize}px`;
    });

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
