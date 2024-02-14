// function play() {
//     //step1 hide the home section
//     const home = document.getElementById('home').classList;
//     home.add('hidden')
//     // step2 show the playground section
//     const playGround = document.getElementById('play-ground').classList;
//     playGround.remove('hidden')
// }

function startGame() {
    const alphabet = getRandomAlphabet();
    console.log(alphabet);
    let word = document.getElementById('word');
    word.innerText = alphabet;
    console.log(word);
    const backGroundColor = document.getElementById(alphabet);
    backGroundColor.style.background = "orange"
}


function play() {
    hideElementById('home');
    showElementById('play-ground')
    startGame()
  
}

