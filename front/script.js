const cookie = document.querySelector('.cookie')
let clicks = 0
let markiplier = 1
const showScore = document.getElementById('clicks')
const upgrade = document.getElementById('upgrade')
let upgradeLevel = 0

cookie.ondragstart = () => {
    return false;
};

cookie.addEventListener('click', () => {
    clicks += markiplier;
    showScore.innerHTML = clicks;

    updateUpgradeButton();

});

function updateUpgradeButton() {
    console.log(clicks, upgradeLevel)
    if (clicks >= 5000 && upgradeLevel == 4) {
        upgrade.innerHTML = "UPGRADE TO THE DOCTOR";
        upgrade.style.backgroundColor = "#FFFF00";
        upgrade.style.color = "#001000";
    } else if (clicks >= 2000 && upgradeLevel == 3) {
        upgrade.innerHTML = "UPGRADE TO PACIFIC PUNCH";
        upgrade.style.backgroundColor = "#f6d7b0";
        upgrade.style.color = "#001000";
    } else if (clicks >= 500 && upgradeLevel == 2) {
        upgrade.innerHTML = "UPGRADE TO PIPELINE PUNCH";
        upgrade.style.backgroundColor = "#FF69B4";
        upgrade.style.color = "#001000";
    } else if (clicks >= 200 && upgradeLevel == 1) {
        upgrade.innerHTML = "UPGRADE TO BAD APPLE";
        upgrade.style.backgroundColor = "#006400";
        upgrade.style.color = "#FFFFFF";
    } else if (clicks >= 50 && upgradeLevel  == 0) {
        upgrade.innerHTML = "UPGRADE TO WHITE MONSTER";
        upgrade.style.backgroundColor = "#FFFFFF";
        upgrade.style.color = "#001000";
    } else {
        upgrade.innerHTML = "NEXT UPGRADE LOCKED";
        upgrade.style.backgroundColor = "#3a3c3e";
        upgrade.style.color = "#FFFFFF";
    }
}


function UpgradeFunction() {
       upgrade.addEventListener('click', () => {
        if (clicks >= 50 && upgradeLevel == 0) {
            markiplier = 4; 
            upgradeLevel = upgradeLevel + 1
             cookie.querySelector("img").src = "wmonster.png"
        } else if (clicks >= 200 && upgradeLevel == 1) {
            markiplier = 8;
            upgradeLevel = upgradeLevel + 1
            cookie.querySelector("img").src = "badapplemonster.png"
        } else if (clicks >= 500 && upgradeLevel == 2) {
            markiplier = 12;
            upgradeLevel = upgradeLevel + 1
            cookie.querySelector("img").src = "pipelinepunchmonster.png"
        } else if (clicks >= 2000 && upgradeLevel == 3) {
            markiplier = 20;
            upgradeLevel = upgradeLevel + 1
            cookie.querySelector("img").src = "pacificpunchmonster.png"
        } else if (clicks >= 5000 && upgradeLevel == 4) {
            markiplier = 30;
            upgradeLevel = upgradeLevel + 1
              cookie.querySelector("img").src = "vr46monster.png"

        } else {
            upgrade.innerHTML = "NEXT UPGRADE LOCKED";
            upgrade.style.backgroundColor = "#3a3c3e";
            upgrade.style.color = "#FFFFFF";
            return; 
        }
    
        showScore.innerHTML = clicks; // Update the score display
        updateUpgradeButton(); // Update button appearance after upgrade
    });
}

// function kidneyStone() {
//     const rand = Math.floor(Math.random() * 1000) + 1;
//     if (rand === 6) {
//         if (clicks > 0) { 
//             if (clicks >= 10000) {
//                 clicks -= 10000; 
//                 alert(`KIDNEY STONE ATTACK HAHAHA! (You lost 10000 clicks) Remaining clicks: ${clicks}`);
//             } else {
//                 alert("KIDNEY STONE ATTACK HAHAHA! (But you are broke so I won't tax you)");
//             }
//         } 
        
//     }
   
//         showScore.innerHTML = clicks; 
//     }
//     // setTimeout(rand);
//     setInterval(rand, 1000)


// kidneyStone();

UpgradeFunction()
