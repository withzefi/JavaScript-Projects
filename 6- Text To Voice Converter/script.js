let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');


window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Set default voice

    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Change voice when user selects a different option
voiceSelect.addEventListener('change', () => {
    speech.voice = voices[parseInt(voiceSelect.value)]; // Parse string to integer
});

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});
