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
    if (clicks >= 1 && clicks < 200) {
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
    let min = 5;
    let max = 2000;
    let rand = Math.floor(Math.random() * (max - min + 1) + min); // Generate random number between 5 - 2000
    if (clicks > 0) { 
        if (clicks >= 10000) {
            clicks -= 10000; 
            alert(`KIDNEY STONE ATTACK HAHAHA! (You lost 10000 clicks) Remaining clicks: ${clicks}`);
        } else {
            alert("KIDNEY STONE ATTACK HAHAHA! (But you are broke so I won't tax you)");
        }

        showScore.innerHTML = clicks; 
    }
    setTimeout(rand);
}

kidneyStone();
    

const minions = {
    squirrel: { name: "Hyperactive Squirrel", cost: 100, cps: 1 },
    gymbro: { name: "Gym Bro", cost: 500, cps: 5 },
    gamer: { name: "Jittery Gamer", cost: 1000, cps: 10 }
  };
  
  let cps = 0; 
  

  const minionSelect = document.getElementById('minion-select');
  const buyMinionButton = document.getElementById('buy-minion');
  const activeMinionsDiv = document.getElementById('active-minions');
  
  
  buyMinionButton.addEventListener('click', () => {
    const selectedMinion = minionSelect.value;
  
    if (selectedMinion && clicks >= minions[selectedMinion].cost) {
      
      clicks -= minions[selectedMinion].cost;
      showScore.innerHTML = clicks;
  
      
      cps += minions[selectedMinion].cps;
  
    
      const newMinion = document.createElement('p');
      newMinion.textContent = `${minions[selectedMinion].name} (+${minions[selectedMinion].cps} CPS)`;
      activeMinionsDiv.appendChild(newMinion);
  
      alert(`You bought ${minions[selectedMinion].name}! CPS is now ${cps}.`);
    } else {
      alert("Not enough clicks to buy this minion!");
    }
  });
  
  
