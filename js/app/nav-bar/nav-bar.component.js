const navBar = document.getElementById("nav-bar");
window.addEventListener("resize", () => {
    navBar.style.removeProperty("top");
    navBar.style.removeProperty("bottom");
})
let pageYOffsetPlus;

export function bring_nav_bar_to_display(){
    navBar.style.bottom=0;
}

export function collapse_navBar(){
    if (window.visualViewport.width > window.visualViewport.height) {
        if (window.pageYOffset > pageYOffsetPlus) {
            navBar.style.top = "-3.7rem";
        } else {
            navBar.style.top = "0rem";
        }
    }
    else {
        if (window.pageYOffset > pageYOffsetPlus) {
            navBar.style.bottom = "-3.7rem";
        } else {
            navBar.style.bottom = "0rem";
        }
    }
    pageYOffsetPlus = window.pageYOffset;
}

export function toggleTheme(){
    document.getElementById("theme-changer").addEventListener("change", event=>{
        document.body.classList.toggle("dark-mode");
    })
}