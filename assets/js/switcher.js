/* --------------- toggle switcher ------------ */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// hide switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        (document.querySelector(".style-switcher").classList.remove("open"));
    }
});

/* --------------- toggle switcher color ------------ */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    localStorage.setItem("color", color);
    changeColor();
}

function changeColor() {
    alternateStyles.forEach((style) => {
        if (localStorage.getItem("color") === style.getAttribute("title"))
            style.removeAttribute("disabled");
        else
            style.setAttribute("disabled", "true");
    })
}

// checkig if 'color' key exists
if (localStorage.getItem("color") !== null)
    changeColor();
