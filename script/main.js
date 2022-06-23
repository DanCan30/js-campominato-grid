
    // Link variables to DOM elements
const minefield = document.getElementById("minefield-wrapper");
const play = document.getElementById("play-button");

    // Add onclick function on button element
play.addEventListener("click", function() {

        // Pick the value of the option to set the difficulty
    let diffLevel = document.querySelector("#difficulty-selector").value;

        // Make the playing board visible
    minefield.classList.remove("disabled");

        // Create a new playing board every time the user press on the button
    minefield.innerHTML = null;

        // Depending on the difficulty choosen, set the number of box in the grid
    let boxNumber = diffSelector(diffLevel);

        for ( let i = 1; i <= boxNumber; i++) {
                // Create boxes and give them a dimension depending on the difficulty
            let box = createNewBox(minefield, i, diffLevel, boxNumber);
                    // Give an onclick function on the boxes to make them change background color on click
                toggleClassOnClick(box, "active");
            };
        
        // Change the text on the button
    play.innerHTML = "Restart!";
});






                                        // Functions

    // Function for the creation on the boxes depending on the difficulty
function diffSelector(diffValue) {

    let boxNumber;

        // If the difficulty is easy create 100 boxes
    if (diffValue == "easy") {
        boxNumber = 100;
        
        // If the difficulty is medium create 81 boxes
    } else if (diffValue =="medium") {
        boxNumber = 81;
    } else {
        
        // If the difficulty is hard create 49 boxes
        boxNumber = 49;
    };

        // Return the value on boxNumber
    return boxNumber;

}
    // Function for the creation on the boxes and for give them style
function createNewBox(parentToAppend, content, difficulty) {

        // Create a div
    const newBox = document.createElement("div");
        // Give the box a content
    newBox.innerHTML = content;


        // Change the box dimension depending on the difficulty
    if (difficulty == "easy") {     
        newBox.classList.add("box", "easy-box");
    } else if (difficulty == "medium") {     
        newBox.classList.add("box", "medium-box");
    } else {
        newBox.classList.add("box", "hard-box");
    }

        // Append the divs to the parent in the DOM
    parentToAppend.append(newBox);

        // Return the element
    return newBox;
};

    // Function to toggle the color of boxes on click
function toggleClassOnClick(element, classToToggle) {

        // Create an onclick event for the boxes
    let activeToggle = element.addEventListener("click", function() {

            // Add or remove the class with background changes
        element.classList.toggle(classToToggle);

            // If the box has the class that change his background print it on console
        if (element.classList.contains(classToToggle)) {
            console.log(element.innerText);
        };

            // Return the eventListener
        return activeToggle;

    });
}
