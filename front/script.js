const cookie = document.querySelector('.cookie')
let clicks = 0
let markiplier = 1
const showScore = document.getElementById('clicks')
const upgrade = document.getElementById('upgrade')

cookie.ondragstart = () => {
  return false;
};

cookie.addEventListener('click', () => {
    clicks +=markiplier ;
    showScore.innerHTML = clicks;
    if (clicks >= 50 ){
        upgrade.style.backgroundColor = "#FFFFFF"
        document.getElementById("upgrade").innerHTML = "UPGRADE TO WHITE";
    }
    if (clicks >= 200){
        upgrade.style.backgroundColor = "#006400"
        document.getElementById("upgrade").innerHTML = "UPGRADE TO BAD APPLE";
    }
    if (clicks >= 500){
        upgrade.style.backgroundColor = "#FC0FC0"
        document.getElementById("upgrade").innerHTML = "UPGRADE TO PIPELINE PUNCH";
    }
    if (clicks >= 2000){
        upgrade.style.backgroundColor = "#F9D199"
        document.getElementById("upgrade").innerHTML = "UPGRADE TO PACIFIC PUNCH";
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
       if(clicks >= 2000 && clicks < 5000){
        markiplier = 20
        cookie.querySelector("img").src = "pacificpunchmonster.png"
       }
       
}
function kidneyStone() {
    let min = 5;
    let max = 2000;
    let rand = Math.floor(Math.random() * (max - min + 1) + min); // Generate random number between 5 - 2000
    if (clicks >= 10000) {
        clicks -= 10000; // Deduct clicks immediately
        alert(`KIDNEY STONE ATTACK HAHAHA! (You lost 10000 clicks) Remaining clicks: ${clicks}`);
    } else {
        alert("KIDNEY STONE ATTACK HAHAHA! (But you are broke so I won't tax you)");
    }

    showScore.innerHTML = clicks;
    setTimeout(kidneyStone, rand * 2000);
}

kidneyStone();
