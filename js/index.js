// function play() {
//     //step1 hide the home section
//     const home = document.getElementById('home').classList;
//     home.add('hidden')
//     // step2 show the playground section
//     const playGround = document.getElementById('play-ground').classList;
//     playGround.remove('hidden')
// }
let i = 0;
let life = 5;
function keyHandelar(event) {
    const playerPressed = event.key;
    const word = document.getElementById('word');
    const currentWord = word.innerText;
    console.log(playerPressed, currentWord)
    // if (playerPressed != currentWord) {
    //     document.getElementById(playerPressed).classList.add('bg-red-400');
    // }
    if (playerPressed === currentWord) {
        // document.getElementById(playerPressed).classList.remove('bg-red-400');
        removeBg(playerPressed)
        let score = document.getElementById('score');
        let finalScore = document.getElementById('final-score')
        i = i + 1;
        score.innerText = i
        finalScore.innerText = i
        startGame();
    }
    else {
        life = life-1;
        let l=document.getElementById('life')
        l.innerText = life;
        if (life === 0) {
            hideElementById('play-ground');
            showElementById('score-card')
        }
    }
    
    if (playerPressed ==='Escape') {
            hideElementById('play-ground');
            showElementById('score-card')
        }
    
    
}
document.addEventListener('keyup' ,keyHandelar)

function startGame() {
    const alphabet = getRandomAlphabet();
    console.log(alphabet);
    let word = document.getElementById('word');
    word.innerText = alphabet;
    console.log(word);
    // const backGroundColor = document.getElementById(alphabet);
    // backGroundColor.style.background = "orange"
   setBg(alphabet)
    
}
document.getElementById('play-again').addEventListener('click',play)

function play() {
    hideElementById('home');
    showElementById('play-ground')
    startGame()
  
}

