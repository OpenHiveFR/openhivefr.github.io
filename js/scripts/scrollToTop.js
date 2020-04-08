let bttButton = document.getElementById("bttButton");

let frontier = (document.getElementById("intro").style.height +
                document.getElementsByTagName("header")[0].style.height +
                document.getElementsByTagName("main")[0].style.marginTop +
                document.getElementsByTagName("main")[0].style.paddingTop + 
                document.getElementsByTagName("hr")[0].style.marginTop +
                document.getElementsByTagName("hr")[0].style.marginBottom +
                document.getElementsByTagName("hr")[0].style.height);

window.onscroll = function() {
     makeButtonAppear();
}

function makeButtonAppear() {
    if (document.documentElement.scrollTop > frontier) {
       bttButton.style.display = "block";
   } else {
       bttButton.style.display = "none";
   }
}

bttButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.documentElement.scrollTop = 0;
});