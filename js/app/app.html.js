import {homepage} from './homepage/homepage.html.js'
import {brandLogo} from './homepage/brand-logo/brand-logo.html.js'
import {navBar} from './nav-bar/nav-bar.html.js'
import {welcomeCircle} from './homepage/welcome-circle/welcome-circle.html.js'
import {homepageContent} from './homepage/homepage-content/homepage-content.html.js'
import {aboutpage} from './aboutpage/about.html.js'
import {aboutPageContent} from './aboutpage/aboutpage-content/aboutpage-content.html.js'
import {parallexImg} from './aboutpage/parallex-image/parallex-image.html.js'

let app= document.getElementById("app-root");
app.innerHTML+=navBar;
app.innerHTML+=homepage;
app.innerHTML+=aboutpage;

let home= document.getElementById("home");
home.innerHTML+=brandLogo;
home.innerHTML+=welcomeCircle;
home.innerHTML+=homepageContent;

let about= document.getElementById("about");
about.innerHTML+=parallexImg;
about.innerHTML+=aboutPageContent;