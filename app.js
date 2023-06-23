const textArea = document.getElementById('text')
const speakButton = document.getElementById('speak')
const voiceSelect = document.getElementById('voices')
const rateInput = document.getElementById('rate')

let voices = []

function populateVoices() {
    voices = speechSynthesis.getVoices()

    voices.forEach((voice, i) => {
        let option = document.createElement('option')
        option.value = i

        option.textContent = `${voice.name} (${voice.lang})`
        voiceSelect.appendChild(option)
    })
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)

// When we click on speak button
speakButton.addEventListener('click', () => {
    let text = textArea.value;
    // utterance means --> The word which write into the text box
    let utterance = new SpeechSynthesisUtterance(text)

    // Get selected voice
    let selectedVoiceIndex = voiceSelect.value
    utterance.voice = voices[selectedVoiceIndex]

    // Get rate
    utterance.rate = rateInput.value

    speechSynthesis.speak(utterance)
})