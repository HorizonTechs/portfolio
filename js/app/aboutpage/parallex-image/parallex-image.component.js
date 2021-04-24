export function bring3DEffect(){
    let house = document.getElementById("house");
    let fog = document.getElementById("fog");
    let mountainFront = document.getElementById("mountain-front");
    let mountainBack = document.getElementById("mountain-back");
    let cloud = document.getElementById("cloud");
    let moon = document.getElementById("moon");
    let sky = document.getElementById("sky");

    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        moon.style.top = scrollY * 1.05 + 'px';
        cloud.style.top = scrollY * 1 + 'px';
        cloud.style.right = scrollY * 0.4 + 'px';
        mountainBack.style.top = scrollY * 0.8 + 'px';
        mountainFront.style.top = scrollY * 0.6 + 'px';
        fog.style.top = scrollY * 0.4 + 'px';
    })
}