let daysMenuSwitch = document.getElementById("daysMenuSwitch");

function clickOnSwitch() {
    document.getElementById("daysMenuSwitch").click();
}

daysMenuSwitch.addEventListener('click', function() {

    let switchElement = document.getElementById("daysMenuSwitch");
    let daysMenu = document.getElementById('daysMenu');
    let darkMask = document.getElementById('darkMask');

    if (switchElement.dataset.active == '0') {
        switchElement.dataset.active = '1';

        darkMask.setAttribute("class", "activated");
        daysMenu.setAttribute("class", "activated");

        switchElement.setAttribute("class", "activated shortText");

        for (button of daysMenu.childNodes) {
            button.addEventListener("click", clickOnSwitch);
        }

        darkMask.addEventListener("click", clickOnSwitch);
    } else {
        switchElement.dataset.active = '0';

        darkMask.setAttribute("class", "");
        daysMenu.setAttribute("class", "");

        switchElement.setAttribute("class", "shortText");

        for (button of daysMenu.children) {
            button.removeEventListener("click", clickOnSwitch);
        }

        darkMask.removeEventListener("click", clickOnSwitch);
    }
});