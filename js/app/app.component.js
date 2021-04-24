export function openPage(pageId, event){
    hideFrames();
    document.getElementById(pageId).style.display = "block";
    let tabLinks = document.getElementsByClassName("tabLinks");
    for (let i = 0;
        i < tabLinks.length;
        i++) {
            tabLinks[i].classList.remove("active")
    }
    event.currentTarget.classList.add("active");
}

export function hideFrames(){
    let frames = document.getElementsByClassName("frame");
    for (let i = 0;
        i < frames.length;
        i++) {
        frames[i].style.display = "none";
    }
}