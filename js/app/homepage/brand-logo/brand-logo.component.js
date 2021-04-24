import {bring_nav_bar_to_display} from '../../nav-bar/nav-bar.component.js'
import {arorizeCircle} from '../welcome-circle/welcome-circle.component.js'

export function flyout_brand_logo_corner(){
    return new Promise((resolve)=>{
        let brandLogo= document.getElementById("brand-logo");
        setTimeout(()=>{
            brandLogo.style.width="10%";
            brandLogo.style.margin="0";
            resolve("brand logo moved");
            // bring_nav_bar_to_display();
            // document.getElementById("welcome-circle").style.display="block";
            // arorizeCircle();
        }, 1200)
    })
}