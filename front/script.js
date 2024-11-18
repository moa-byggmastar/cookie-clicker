const cookie = document.getElementById('cookie')
let clicks = 0
const showScore = document.getElementById('clicks')
const upgrade = document.getElementById('upgrade')

cookie.addEventListener('click', () => {
    clicks++;
    showScore.innerHTML = clicks;
    console.log("cock2")
    if (clicks >= 50) {
        upgrade.style.backgroundColor = "#d92323"
        console.log("cock1")
    }

});
function UpgradeFunction() {

}

<<<<<<< HEAD
cookie.addEventListener('click', () => {
    clicks++
    showScore.innerHTML = clicks
})
=======
>>>>>>> origin/emrick
