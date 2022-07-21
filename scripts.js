let crazyColorMode = false;
let pencilMode = false;
let customColorMode = false;
let brushColorDropdown = document.querySelector("#color-selector");
let size = 50;

createSketchBox(size);

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


// Button Listener to toggle crazy color mode.
document.querySelector(".crazy-color-button").addEventListener("click", () => {
    pencilMode = false;
    customColorMode = false;
    
    if (!crazyColorMode)
        crazyColorMode = true;
    else
        crazyColorMode = false

    console.log(`crazymode = ${crazyColorMode}`);
});


// Button Listener to toggle pencil mode.
document.querySelector(".pencil-mode-button").addEventListener("click", () => {
    crazyColorMode = false;
    customColorMode = false;
    
    if (!pencilMode)
        pencilMode = true;
    else
        pencilMode = false

    console.log(`pencil mode = ${pencilMode}`);
});

// Listener for brush change dropdown menu.
brushColorDropdown.addEventListener("change", () => {
    crazyColorMode = false;
    pencilMode = false;
    
    if (!pencilMode)
        customColorMode = true;
    else
        customColorMode = false;

    console.log(`custom color mode = ${customColorMode}`);
});


// Listener for clear button
document.querySelector(".clear-button").addEventListener("click", () => {
    clearSketchBox()
    createSketchBox(size);

    let boxElement = document.querySelectorAll(".box");
    boxSize = Math.round(500/size);

    console.log(size);

    boxElement.forEach(box => {
        box.style.height = `${boxSize}px`;
        box.style.width = `${boxSize}px`;
    });
});


// Sketch resizer
// Adds an event listener to the sketch resize button. Prompts user for desired size.
// Resizes the css height/width element so the boxes fit evenly within the sketchpad.
document.querySelector(".sketch-resizer").addEventListener("click", () => {
    size = prompt("How many cells do you want in the sketchpad? Default is 50. Max is 100.");

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
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let customColor = brushColorDropdown.value;

    if (!crazyColorMode && !pencilMode)
    boxElement.style.backgroundColor = "rgb(0, 0, 0)";

    if (crazyColorMode)
        boxElement.style.backgroundColor = `#${randomColor}`;

    if (customColorMode)
        boxElement.style.backgroundColor = `${customColor}`;

    if (pencilMode){
        // parses background-color into 3 integer variables

        if (boxElement.style.backgroundColor == "")
        {
            boxElement.style.backgroundColor = `rgb(225, 225, 225)`;
        }

        let rgbArray = boxElement.style.backgroundColor.split(",");
        let r = parseInt(rgbArray[0].substring(4), 10);
        let g = parseInt(rgbArray[1], 10);
        let b = parseInt(rgbArray[2], 10);

        // Darkens the RGB color by 10%
        if (r >= 25) r -= 25;
        if (g >= 25) g -= 25;
        if (b >= 25) b -= 25;
        if (r < 24) r = 0;
        if (g < 24) g = 0;
        if (b < 24) b = 0;

        boxElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
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
