let ham = document.getElementById("v-hamburger");
let s1 = document.getElementById("section-1");
let s2 = document.getElementById("section-2");
let s3 = document.getElementById("section-3");
let bottomfooter = document.getElementById("foot");
let nav = document.getElementById("topnav");
let close = document.getElementById("ham_icon");
let rf = document.getElementById("rf_icon");


document.addEventListener("DOMContentLoaded", function(){
    console.log("laoded");
    ham.style.display = "none";
    s1.style.display = "flex";
    s2.style.display = "flex";
    s3.style.display = "flex";
    rf.style.display = "flex";
    rf.style.backgroundImage = "url('../assets/logo.png')";
    rf.style.backgroundSize = "cover";
    close.style.backgroundImage = "url('../assets/red-hamburger.png')";
    close.style.backgroundSize = "cover";
    close.style.backgroundSize = "60%";
    close.style.backgroundRepeat = "no-repeat";
    close.style.margin = "6%";
    close.style.marginRight = "-2%";
});


function hamburgerToggle() {
    
    if (ham.style.display === "block") {
        ham.style.display = "none";
        rf.style.display = "flex";
        rf.style.backgroundImage = "url('../assets/logo.png')";
        rf.style.backgroundSize = "cover";
        s1.style.display = "flex";
        s2.style.display = "flex";
        s3.style.display = "flex";
        bottomfooter.style.display = "block";
        nav.style.backgroundColor = "transparent";
        close.style.backgroundImage = "url('../assets/red-hamburger.png')";
        close.style.backgroundSize = "cover";
        close.style.backgroundSize = "60%";
        close.style.backgroundRepeat = "no-repeat";
        close.style.margin = "6%";
        close.style.marginRight = "-2%";

    } else {
        ham.style.display = "block";
        rf.style.display = "none";
        s1.style.display = "none";
        s2.style.display = "none";
        s3.style.display = "none";
        bottomfooter.style.display = "none";
        nav.style.backgroundColor = "#FEFBF4";
        close.style.backgroundImage = "url('../assets/close.png')";
        close.style.backgroundSize = "cover";
        close.style.backgroundSize = "100%";
        close.style.backgroundRepeat = "no-repeat";
        close.style.margin = "16%";
        close.style.marginRight = "10%";

    }
}