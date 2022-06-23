const minefield = document.getElementById("minefield-wrapper");
const play = document.getElementById("play-button");
const restart = document.getElementById("restart-button");
let box;

play.addEventListener("click", function() {

    minefield.innerHTML = null;

        for ( let i = 1; i <= 100; i++) {

           box = createNewBox(minefield, i);
            toggleClassOnClick(box, "active");

        }

        play.innerHTML = "Restart!";

});








    // Functions

function createNewBox(parentToAppend, content) {

    const newBox = document.createElement("div");
    newBox.classList.add("box");
    parentToAppend.append(newBox);
    newBox.innerHTML = content;
    return newBox;
};


function toggleClassOnClick(element, classToToggle) {

    let activeToggle = element.addEventListener("click", function() {

        element.classList.toggle(classToToggle);

        if (element.classList.contains(classToToggle)) {
            console.log(element.innerText);
        };


        return activeToggle;

    });
}