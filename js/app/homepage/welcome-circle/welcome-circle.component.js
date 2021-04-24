function getRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

const circle = document.getElementById("welcome-circle");

export function arorizeCircle() {
    return setInterval(range => {
        let r = getRandomNumber(range);
        let g = getRandomNumber(range);
        let b = getRandomNumber(range);
        circle.style.color = `rgb(${r},${g},${b})`;
        circle.style.boxShadow = `0px 0px 91px rgb(${r},${g},${b})`;
    }, 1000, 255);
}
