const cookie = document.getElementById('cookie')
let clicks = 0
const showScore = document.getElementById('clicks')


cookie.addEventListener('click', () => {
    clicks++
    showScore.innerHTML = clicks
})