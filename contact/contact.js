let ham = document.getElementById("v-hamburger");
let title = document.getElementById("title-wrapper");
let form = document.getElementById("form-wrapper");
let bottomfooter = document.getElementById("foot");
let nav = document.getElementById("topnav");
let cross = document.getElementById("ham_icon");
let rf = document.getElementById("rf_icon");


document.addEventListener("DOMContentLoaded", function(){
    console.log("laoded");
    ham.style.display = "none";
    rf.style.display = "flex";
    rf.style.backgroundImage = "url('../assets/logo.png')";
    rf.style.backgroundSize = "cover";
    title.style.display = "block";
    form.style.display = "block";
    cross.style.backgroundImage = "url('../assets/red-hamburger.png')";
    cross.style.backgroundSize = "cover";
    cross.style.backgroundSize = "60%";
    cross.style.backgroundRepeat = "no-repeat";
    cross.style.margin = "6%";
    cross.style.marginRight = "-2%";
});


function hamburgerToggle() {
    
    if (ham.style.display === "block") {
        ham.style.display = "none";
        rf.style.display = "flex";
        rf.style.backgroundImage = "url('../assets/logo.png')";
        rf.style.backgroundSize = "cover";
        title.style.display = "block";
        form.style.display = "block";
        bottomfooter.style.display = "block";
        nav.style.backgroundColor = "transparent";
        cross.style.backgroundImage = "url('../assets/red-hamburger.png')";
        cross.style.backgroundSize = "cover";
        cross.style.backgroundSize = "60%";
        cross.style.backgroundRepeat = "no-repeat";
        cross.style.margin = "6%";
        cross.style.marginRight = "-2%";

    } else {
        ham.style.display = "block";
        rf.style.display = "none";
        title.style.display = "none";
        form.style.display = "none";
        bottomfooter.style.display = "none";
        nav.style.backgroundColor = "#FEFBF4";
        cross.style.backgroundImage = "url('../assets/close.png')";
        cross.style.backgroundSize = "cover";
        cross.style.backgroundSize = "100%";
        cross.style.backgroundRepeat = "no-repeat";
        cross.style.margin = "16%";
        cross.style.marginRight = "10%";
    }
}