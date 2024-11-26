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
    } else if (clicks >= 50 && upgradeLevel == 0) {
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
            Explosion()
        } else if (clicks >= 200 && upgradeLevel == 1) {
            markiplier = 8;
            upgradeLevel = upgradeLevel + 1
            cookie.querySelector("img").src = "badapplemonster.png"
            Explosion()
        } else if (clicks >= 500 && upgradeLevel == 2) {
            markiplier = 12;
            upgradeLevel = upgradeLevel + 1
            cookie.querySelector("img").src = "pipelinepunchmonster.png"
            Explosion()
        } else if (clicks >= 2000 && upgradeLevel == 3) {
            markiplier = 20;
            upgradeLevel = upgradeLevel + 1
            cookie.querySelector("img").src = "pacificpunchmonster.png"
            Explosion()
        } else if (clicks >= 5000 && upgradeLevel == 4) {
            markiplier = 30;
            upgradeLevel = upgradeLevel + 1
            cookie.querySelector("img").src = "vr46monster.png"
            Explosion()
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
function Explosion() {
    // Create a new img element
    const explosion = document.createElement("img");
    explosion.src = "cool epic explosion reddit chungus keanu reeves.gif";
    explosion.alt = "Explosion";
    explosion.style.top = "50%";
    explosion.style.left = "50%";
    explosion.style.transform = "translate(-50%, -50%)";
    explosion.style.zIndex = "1000";
    explosion.style.width = "500px";
    explosion.style.position = "absolute";

    // Append the explosion to the body
    document.body.appendChild(explosion);

    // Remove the explosion after 900 milliseconds
    setTimeout(() => {
        explosion.remove();
    }, 900);
}

function kidneyStone() {
    const rand = Math.floor(Math.random() * 2000) + 1; // 1/2000 chance
    if (rand === 1) { // If the random number is 1, the "attack" begins
        if (clicks > 0) {
            if (clicks >= 10000) {
                clicks -= 10000;
                alert(`KIDNEY STONE ATTACK HAHAHA! (You lost 10000 clicks) Remaining clicks: ${clicks}`);
            } else {
                alert("KIDNEY STONE ATTACK HAHAHA! (But you are broke so I won't tax you)");
            }
        }
    }
    showScore.innerHTML = clicks; // Update the score display
}

// Run the function every second
setInterval(kidneyStone, 1000);
kidneyStone();

UpgradeFunction()



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
