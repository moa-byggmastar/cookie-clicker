const cookie = document.getElementById('cookie')
let clicks = 0
let markiplier = 1
const showScore = document.getElementById('clicks')
const upgrade = document.getElementById('upgrade')

cookie.addEventListener('click', () => {
    clicks +=markiplier ;
    showScore.innerHTML = clicks;
    if (clicks >= 50){
        upgrade.style.backgroundColor = "#d92323"
    }

});
function UpgradeFunction(){
    if (clicks >= 50 && clicks < 200){
     markiplier = 4
     cookie.querySelector("img").src = "wmonster.png"
    }
    else if(clicks >= 200){
        markiplier = 8
        cookie.querySelector("img").src = "badapplemonster.png"
       }
}

