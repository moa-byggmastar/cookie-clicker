const cookie = document.querySelector('.cookie');
let clicks = 0;
let markiplier = 1;
const showScore = document.getElementById('clicks');
const upgrade = document.getElementById('upgrade');
let upgradeLevel = 1;

// Rebirth Variables
let rebirths = 0; // Track rebirth count
let rebirthMulti = 0;
let rebirthReq = 99999; // Initial rebirth requirement

// Rebirth Button
const rebirthButton = document.getElementById('rebirth');
rebirthButton.style.display = "none";

cookie.ondragstart = () => {
    return false;
};

cookie.addEventListener('click', () => {
    clicks += markiplier;
    showScore.innerHTML = clicks;

    updateUpgradeButton();
    updateRebirthButton(); // Check rebirth eligibility
});

function updateRebirthButton() {
    if (clicks >= rebirthReq) {
        rebirthButton.style.display = "block"; // Show button if eligible
        rebirthButton.innerHTML = `REBIRTH! (+1 Multiplier)`;
    } else {
        rebirthButton.style.display = "none"; // Hide button if not eligible
    }
}

rebirthButton.addEventListener('click', () => {
    if (clicks >= rebirthReq) {
        rebirths += 1; // Increment rebirth count
        rebirthMulti += 1; // Permanent multiplier
        clicks = 0; // Reset clicks
        rebirthReq = rebirthReq + 100000
        markiplier++
        alert(`YOU REBIRTHED MARKIPLIER: x${rebirthMulti}, Rebirths: ${rebirths}`);

        showScore.innerHTML = clicks;
        updateRebirthButton();
    }
});

function updateUpgradeButton() {
    console.log(clicks, upgradeLevel);
    if (clicks >= 50000 && upgradeLevel == 8) {
        upgrade.innerHTML = "UPGRADE TO THE MANGO LOCO";
        upgrade.style.backgroundColor = "#90D5FF";
        upgrade.style.color = "#001000";
    }
    else if (clicks >= 20000 && upgradeLevel == 7) {
        upgrade.innerHTML = "UPGRADE TO MONSTER MULE";
        upgrade.style.backgroundColor = "#3D2808";
        upgrade.style.color = "#FFFFFF";
    }
    else if (clicks >= 10000 && upgradeLevel == 6) {
        upgrade.innerHTML = "UPGRADE TO MONARCH";
        upgrade.style.backgroundColor = "#FA8072";
        upgrade.style.color = "#001000";
    }
    else if (clicks >= 5000 && upgradeLevel == 5) {
        upgrade.innerHTML = "UPGRADE TO DOCTOR";
        upgrade.style.backgroundColor = "#FFFF00";
        upgrade.style.color = "#001000";
    } else if (clicks >= 2000 && upgradeLevel == 4) {
        upgrade.innerHTML = "UPGRADE TO PACIFIC PUNCH";
        upgrade.style.backgroundColor = "#f6d7b0";
        upgrade.style.color = "#001000";
    } else if (clicks >= 500 && upgradeLevel == 3) {
        upgrade.innerHTML = "UPGRADE TO PIPELINE PUNCH";
        upgrade.style.backgroundColor = "#FF69B4";
        upgrade.style.color = "#001000";
    } else if (clicks >= 200 && upgradeLevel == 2) {
        upgrade.innerHTML = "UPGRADE TO BAD APPLE";
        upgrade.style.backgroundColor = "#006400";
        upgrade.style.color = "#FFFFFF";
    } else if (clicks >= 50 && upgradeLevel == 1) {
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
        if (clicks >= 50 && upgradeLevel == 1) {
            markiplier = 4 + rebirthMulti;
            upgradeLevel = upgradeLevel + 1;
            cookie.querySelector("img").src = "wmonster.png";
            Explosion();
        } else if (clicks >= 200 && upgradeLevel == 2) {
            markiplier = 8 + rebirthMulti;
            upgradeLevel = upgradeLevel + 1;
            cookie.querySelector("img").src = "badapplemonster.png";
            Explosion();
        } else if (clicks >= 500 && upgradeLevel == 3) {
            markiplier = 12 + rebirthMulti;
            upgradeLevel = upgradeLevel + 1;
            cookie.querySelector("img").src = "pipelinepunchmonster.png";
            Explosion();
        } else if (clicks >= 2000 && upgradeLevel == 4) {
            markiplier = 20 + rebirthMulti;
            upgradeLevel = upgradeLevel + 1;
            cookie.querySelector("img").src = "pacificpunchmonster.png";
            Explosion();
        } else if (clicks >= 5000 && upgradeLevel == 5) {
            markiplier = 30 + rebirthMulti;
            upgradeLevel = upgradeLevel + 1;
            cookie.querySelector("img").src = "vr46monster.png";
            Explosion();
        } else if (clicks >= 10000 && upgradeLevel == 6) {
            markiplier = 60 + rebirthMulti;
            upgradeLevel = upgradeLevel + 1;
            cookie.querySelector("img").src = "monarch.png";
            Explosion();
        } else if (clicks >= 20000 && upgradeLevel == 7) {
            markiplier = 120 + rebirthMulti;
            upgradeLevel = upgradeLevel + 1;
            cookie.querySelector("img").src = "monstermule.png";
            Explosion();
        } else if (clicks >= 50000 && upgradeLevel == 8) {
            markiplier = 360 + rebirthMulti;
            upgradeLevel = upgradeLevel + 1;
            cookie.querySelector("img").src = "mangoloco.png";
            Explosion();
        } else {
            upgrade.innerHTML = "NEXT UPGRADE LOCKED";
            upgrade.style.backgroundColor = "#3a3c3e";
            upgrade.style.color = "#FFFFFF";
            return;
        }

        showScore.innerHTML = clicks;
        updateUpgradeButton();
    });
}
function Explosion() {

    showScore.innerHTML = clicks;
    updateUpgradeButton();
function Explosion() {

    const explosion = document.createElement("img");
    explosion.src = "cool epic explosion reddit chungus keanu reeves.gif";
    explosion.alt = "Explosion";
    explosion.style.top = "50%";
    explosion.style.left = "50%";
    explosion.style.transform = "translate(-50%, -50%)";
    explosion.style.zIndex = "1000";
    explosion.style.width = "500px";
    explosion.style.position = "absolute";

    document.body.appendChild(explosion);
  
    document.body.appendChild(explosion);

    document.body.appendChild(explosion);

    setTimeout(() => {
        explosion.remove();
    }, 900);
}

function kidneyStone() {
    const rand = Math.floor(Math.random() * 1000) + 1;
    if (rand === 1) {
        const rand = Math.floor(Math.random() * 1000) + 1;
        if (rand === 1) {
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
        showScore.innerHTML = clicks;
    }
    showScore.innerHTML = clicks;
    showScore.innerHTML = clicks;
}


    setInterval(kidneyStone, 1000);
    kidneyStone();

    UpgradeFunction()


    const minionShopButton = document.getElementById('minion-shop-button');
    const minionDropdown = document.getElementById('minion-dropdown');
    const minionSelect = document.getElementById('minion-select');
    const buyMinionButton = document.getElementById('buy-minion');
    const activeMinionsDiv = document.getElementById('active-minions');


    const minions = {
        squirrel: { name: "Hyperactive Squirrel", cost: 1000, cps: 2 },
        gymbro: { name: "Gym Bro", cost: 5000, cps: 7 },
        gamer: { name: "Jittery Gamer", cost: 10000, cps: 20 }
    };

    let totalCPS = 0;



    minionShopButton.addEventListener('click', () => {
        if (minionDropdown.style.display === 'block') {
            minionDropdown.style.display = 'none';
        } else {
            minionDropdown.style.display = 'block';
        }
    });



const minionShopButton = document.getElementById('minion-shop-button');
const minionDropdown = document.getElementById('minion-dropdown');
const minionSelect = document.getElementById('minion-select');
const buyMinionButton = document.getElementById('buy-minion');
const activeMinionsDiv = document.getElementById('active-minions');

const minions = {
    squirrel: { name: "Hyperactive Squirrel", cost: 1000, cps: 2 },
    gymbro: { name: "Gym Bro", cost: 5000, cps: 7 },
    gamer: { name: "Jittery Gamer", cost: 10000, cps: 20 }
};

let totalCPS = 0;

    minionShopButton.addEventListener('click', () => {
        if (minionDropdown.style.display === 'block') {
            minionDropdown.style.display = 'none';
        } else {
            minionDropdown.style.display = 'block';
        }
    });


    function updateScore() {
        document.getElementById('clicks').textContent = clicks;
        document.getElementById('clicks').textContent = clicks;
        showScore.innerHTML = `${clicks}`;  // Update the displayed score
    }


    updateScore();


    buyMinionButton.addEventListener('click', () => {
        const selectedMinion = minionSelect.value;

function updateScore() {
    document.getElementById('clicks').textContent = clicks;
    document.getElementById('clicks').textContent = clicks;
    showScore.innerHTML = `${clicks}`;  // Update the displayed score
}

updateScore();

buyMinionButton.addEventListener('click', () => {
    const selectedMinion = minionSelect.value;

        if (selectedMinion && clicks >= minions[selectedMinion].cost) {
            clicks -= minions[selectedMinion].cost;
            totalCPS += minions[selectedMinion].cps;

            updateScore();


            if (selectedMinion && clicks >= minions[selectedMinion].cost) {
                clicks -= minions[selectedMinion].cost;
                totalCPS += minions[selectedMinion].cps;

                updateScore();


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
        updateScore();
    }, 1000);
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
    updateScore();
}, 1000)
