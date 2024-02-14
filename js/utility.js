function hideElementById(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}
function showElementById(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}

function getRandomAlphabet() {
    //get or create alphabet array
    const alphaString = 'abcdefghijklmnopqrstuvwxyz'
    const alphaArr = alphaString.split('')
    // get random index between 0-25;
    const mathRandom = Math.random() * 25;
    const index = Math.round(mathRandom);
    const alphabet = alphaArr[index];
    return alphabet;
}
function setBg(elementId) {
    document.getElementById(elementId).classList.add('bg-orange-400');
}
function removeBg(elementId) {
    document.getElementById(elementId).classList.remove('bg-orange-400');
}