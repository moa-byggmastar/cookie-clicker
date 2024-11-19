const cookie = document.getElementById('cookie')
let clicks = 0
const showScore = document.getElementById('clicks')
const upgrade = document.getElementById('upgrade')

cookie.addEventListener('click', () => {
    clicks++;
    showScore.innerHTML = clicks;
    console.log("cock2")
    if (clicks >= 50) {
        upgrade.style.backgroundColor = "#ce4f4f"
        console.log("cock1")
    }

});
function UpgradeFunction() {

}