const navBar=document.getElementById("nav-bar");
let pageYOffsetPlus;

export function bring_nav_bar_to_display(){
    navBar.style.bottom=0;
}

export function collapse_navBar(){
    if (window.pageYOffset > pageYOffsetPlus) {
        navBar.style.bottom = "-3.7rem";
    } else {
        navBar.style.bottom = "0";
    }
    pageYOffsetPlus = window.pageYOffset;
}

export function toggleTheme(){
    document.getElementById("theme-changer").addEventListener("change", event=>{
        document.body.classList.toggle("dark-mode");
    })
}