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

//     showScore.innerHTML = clicks;
// }
// setTimeout(rand);
// setInterval(rand, 1000)


// kidneyStone();




































const minionSelect = document.getElementById('minion-select');
const buyMinionButton = document.getElementById('buy-minion');
const activeMinionsDiv = document.getElementById('active-minions');

const minions = {
    squirrel: { name: "Hyperactive Squirrel", cost: 100, cps: 2 },
    gymbro: { name: "Gym Bro", cost: 500, cps: 7 },
    gamer: { name: "Jittery Gamer", cost: 1000, cps: 20 }
};

let totalCPS = 0;

function updateScore() {
    showScore.innerHTML = `Clicks: ${clicks}`;  // Update the displayed score
}


updateScore();

buyMinionButton.addEventListener('click', () => {
    const selectedMinion = minionSelect.value;

    if (selectedMinion && clicks >= minions[selectedMinion].cost) {
        clicks -= minions[selectedMinion].cost;
        updateScore();  

        totalCPS += minions[selectedMinion].cps;

        const newMinion = document.createElement('p');
        newMinion.textContent = `${minions[selectedMinion].name} (+${minions[selectedMinion].cps} CPS)`;
        activeMinionsDiv.appendChild(newMinion);

        alert(`You bought ${minions[selectedMinion].name}! CPS is now ${totalCPS}.`);
    } else {
        alert("Not enough clicks to buy this minion!");
    }
});


setInterval(() => {
    clicks += totalCPS;  
}, 1000);
