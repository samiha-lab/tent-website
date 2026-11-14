var hamburger = document.querySelector(".hamburger");
var cross = document.querySelector(".cross");
var navlist = document.querySelector(".nav-list");

cross.style.display ="none";

function togglemenu() {

    navlist.classList.toggle("show");

    if (navlist.classList.contains("show")) {

        hamburger.style.display = "none";
        cross.style.display = "inline-block";

    }

    else {

        hamburger.style.display = "inline-block";
        cross.style.display = "none";

    }

}




