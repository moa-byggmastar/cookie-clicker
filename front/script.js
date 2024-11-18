const cookie = document.getElementById('cookie')
let clicks = 0
let markiplier = 1
const showScore = document.getElementById('clicks')
const upgrade = document.getElementById('upgrade')

cookie.addEventListener('click', () => {
    clicks +=markiplier ;
    showScore.innerHTML = clicks;
    if (clicks >= 50 ){
        upgrade.style.backgroundColor = "#d92323"
    }
    if (clicks >= 200){
        upgrade.style.backgroundColor = "#006400"
    }
    if (clicks >= 500){
        upgrade.style.backgroundColor = "#FC0FC0"
    }
});
function UpgradeFunction(){
    if (clicks >= 50 && clicks < 200){
     markiplier = 4
     cookie.querySelector("img").src = "wmonster.png"
    }
     if(clicks >= 200 && clicks < 500){
        markiplier = 8
        cookie.querySelector("img").src = "badapplemonster.png"
       }
       if(clicks >= 500 && clicks < 2000){
        markiplier = 12
        cookie.querySelector("img").src = "pipelinepunchmonster.png"
       }
    
}
 

