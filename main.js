const button = document.getElementById("button");
const phraseElement = document.getElementById("phrase");
const phrasesIndex  = [
    "Acredite nos seus sonhos e eles se tornarão realidade.",
    "A sorte sempre sorri para os corajosos.",
    "Grandes desafios trazem grandes recompensas.",
    "Uma jornada de mil milhas começa com um simples passo.",
    "Acredite no poder da persistência e conquiste o impossível.",
    "A vida é uma aventura, aproveite cada momento dela.",
    "Acredite na sua intuição, ela sempre aponta o caminho certo.",
    "Com otimismo e determinação, você alcançará suas metas.",
    "O sucesso está na simplicidade das suas escolhas.",
    "Seja a mudança que você deseja ver no mundo.",
]

function toggle() {
    document.querySelector(".screen1").classList.toggle("hide")
    document.querySelector(".screen2").classList.toggle("hide")
}


luck.addEventListener('click', handleTryClick)
button.addEventListener("click", handleResetClick);


function handleTryClick(event) {
    setRandomPhrase()
    toggle();
}

function handleResetClick() {
    toggle();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setRandomPhrase() {
    const randomIndex = getRandomInt(0, phrasesIndex.length - 1);
    const randomPhrase = phrasesIndex[randomIndex];
    document.getElementById("phrase").textContent = randomPhrase;
}

