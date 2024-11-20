const cookie = document.querySelector('.cookie')
let clicks = 0
let markiplier = 1
const showScore = document.getElementById('clicks')
const upgrade = document.getElementById('upgrade')

cookie.ondragstart = () => {
    return false;
};

cookie.addEventListener('click', () => {
    clicks += markiplier;
    showScore.innerHTML = clicks;
    console.log("cock2")
    if (clicks >= 50) {
        upgrade.style.backgroundColor = "#ce4f4f"
        console.log("cock1")
    }

    if (clicks >= 200) {
        upgrade.innerHTML = "UPGRADE TO BAD APPLE"
    }
    if (clicks >= 5000) {
        upgrade.style.backgroundColor = "#FFFF00"
        upgrade.style.Color = "#000000"
        document.getElementById("upgrade").innerHTML = "UPGRADE TO  THE DOCTOR";
    }
});
function UpgradeFunction() {
    if (clicks >= 50 && clicks < 200) {
        markiplier = 4
        cookie.querySelector("img").src = "wmonster.png"
    }
    else if (clicks >= 200) {
        markiplier = 8
        cookie.querySelector("img").src = "badapplemonster.png"
    }
}
