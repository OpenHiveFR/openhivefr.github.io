let switchSpan = document.getElementById("langSwitch");

switchSpan.addEventListener("click", function(event) {
    let switchSpan = document.getElementById("langSwitch");

    if (switchSpan.dataset.chosenLang == 'fr') {
        switchSpan.dataset.chosenLang = 'en';
        
        document.getElementById('aoc').style.display = 'block';
        document.getElementById('translation').style.display = 'none';

        document.getElementById('fr').setAttribute('class', 'unchosenLang');
        document.getElementById('en').setAttribute('class', 'chosenLang');
    } else {
        switchSpan.dataset.chosenLang = 'fr';
        
        document.getElementById('aoc').style.display = 'none';
        document.getElementById('translation').style.display = 'block';

        document.getElementById('fr').setAttribute('class', 'chosenLang');
        document.getElementById('en').setAttribute('class', 'unchosenLang');
    }
});