let daysMenu = document.getElementById("daysMenu");

let translatedDays = 3;

for (let i = 0; i <= translatedDays; i++) {
    let newButton = document.createElement("BUTTON");
    
    newButton.setAttribute("class", "dayButton");
    
    newButton.dataset.day = i;
    
    newButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        localStorage.setItem('selectedDay', i);
        
        let translationIFrame = document.getElementById("translation");
        let aocIFrame = document.getElementById("aoc");

        if (i == 0) {
            aocIFrame.setAttribute("src", "https://adventofcode.com/2020/about");
        } else {
           aocIFrame.setAttribute("src", "https://adventofcode.com/2020/day/"+event.target.dataset.day); 
        }
        
        translationIFrame.setAttribute("src", "translations/day/"+event.target.dataset.day+".html");
        
        let currentlyClicked = document.getElementById("clicked");
        
        if (currentlyClicked != null) {
            currentlyClicked.removeAttribute("id");
        }

        event.target.setAttribute("id", "clicked");
    });
    
    newButtonText = document.createTextNode("["+i+"]");

    newButton.appendChild(newButtonText);

    daysMenu.appendChild(newButton);
}

if (localStorage.getItem('selectedDay') !== null) {
    daysMenu.children[localStorage.getItem('selectedDay')].click();
} else {
    daysMenu.children[0].click();
}