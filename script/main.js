const minefield = document.getElementById("minefield-wrapper");
const play = document.getElementById("play-button");

play.addEventListener("click", function() {

    if(isEmpty(minefield) === true) {
        for ( let i = 1; i <= 100; i++) {
            box = createNewBox(minefield, i);
        }
    }

    });












    // Functions

function createNewBox(parentToAppend, content) {

    const newBox = document.createElement("div");
    newBox.classList.add("box");
    parentToAppend.append(newBox);
    newBox.innerHTML = content;
    return newBox;
};



function isEmpty(element) {

    let empty = false;

    if (element.children.length ===0 ) {
        empty = true;
    }
    return empty;

};
