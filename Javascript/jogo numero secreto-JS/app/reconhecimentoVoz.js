//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#speech_recognition

const elementoChute = document.getElementById('chute');

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recongnition = new SpeechRecognition();
recongnition.lang = 'pt-Br';
recongnition.start();

recongnition.addEventListener('result', onSpeak);

function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeChute(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChute(chute){
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `;
}