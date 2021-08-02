var settingsmenu = document.querySelector(".setting-menue");
var darkBtn = document.getElementById("dark-btn");

function settingsMenueToggle(){
    settingsmenu.classList.toggle("setting-menue-height");
}

darkBtn.onclick= function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}