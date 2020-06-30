let daysMenu = document.getElementById("daysMenu");

for (let i = 1; i <= 25; i++) {
    let newButton = document.createElement("BUTTON");
    
    newButton.setAttribute("class", "dayButton");
    
    newButton.dataset.day = i;
    
    newButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        let translationIFrame = document.getElementById("translation");
        let aocIFrame = document.getElementById("aoc");

        aocIFrame.setAttribute("src", "https://adventofcode.com/2019/day/"+event.target.dataset.day);
        translationIFrame.setAttribute("src", "translations/day/"+event.target.dataset.day+".html");

        let currentlyClicked = document.getElementById("clicked");
        
        if (currentlyClicked != null) {
            currentlyClicked.removeAttribute("id");
        }

        event.target.setAttribute("id", "clicked");
    });


    newButtonText = document.createTextNode(i);

    newButton.appendChild(newButtonText);

    daysMenu.appendChild(newButton);
}