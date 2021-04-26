import './app/app.html.js'
import { openPage, hideFrames } from './app/app.component.js'
import { flyout_brand_logo_corner } from './app/homepage/brand-logo/brand-logo.component.js'
import { bring_nav_bar_to_display, collapse_navBar, toggleTheme } from './app/nav-bar/nav-bar.component.js'
import { arorizeCircle } from './app/homepage/welcome-circle/welcome-circle.component.js'
import {bring3DEffect} from './app/aboutpage/parallex-image/parallex-image.component.js'

let arorizeSession;

function main() {

    // Hiding all frames and activating home.
    
    hideFrames();
    document.getElementById("home").style.display="block";

    // Animate home page
    flyout_brand_logo_corner()
        .then(message => {
            setTimeout(message => {
                bring_nav_bar_to_display();
                console.log(message);
            }, 200, message);
            return "navBar moved";
        })
        .then(message => {
            setTimeout(message => {
                document.getElementById("welcome-circle").style.display = "flex";
                arorizeSession = arorizeCircle();
                console.log(message);
                console.log("circle moved");
            }, 600, message)
        })
        .then(() => {
            setTimeout(() => {
                document.getElementById("homepage-content").style.display = "block";
                document.body.style.overflow = "auto";
            }, 1200);
        })
        .then(() => {
            setTimeout(() => {
                document.getElementById("brand-logo").style.animation = "none";
            }, 1000);
        })
    // Page open by on click from nav-bar
    window.openPage = openPage;
    window.onscroll=collapse_navBar;
    toggleTheme();
    bring3DEffect();
}

main();