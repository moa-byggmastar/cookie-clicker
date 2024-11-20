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
       if(clicks >= 500 && clicks < 2000){
        markiplier = 12
        cookie.querySelector("img").src = "pipelinepunchmonster.png"
       }
       if(clicks >= 2000 && clicks < 5000){
        markiplier = 20
        cookie.querySelector("img").src = "pacificpunchmonster.png"
       }
       if(clicks >= 5000 && clicks < 10000){
        markiplier = 40
        cookie.querySelector("img").src = "vr46monster.png"
       }
       
}
function kidneyStone() {
    const rand = Math.floor(Math.random() * 1000) + 1;
    if (rand === 6) {
        if (clicks > 0) { 
            if (clicks >= 10000) {
                clicks -= 10000; 
                alert(`KIDNEY STONE ATTACK HAHAHA! (You lost 10000 clicks) Remaining clicks: ${clicks}`);
            } else {
                alert("KIDNEY STONE ATTACK HAHAHA! (But you are broke so I won't tax you)");
            }
        } 
        
    }
   
        showScore.innerHTML = clicks; 
    }
    // setTimeout(rand);
    setInterval(rand, 1000)


kidneyStone();

