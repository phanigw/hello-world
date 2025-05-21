document.addEventListener('DOMContentLoaded', () => {
    const wordsData = [
        { word: "Serendipity", meaning: "The occurrence and development of events by chance in a happy or beneficial way." },
        { word: "Ephemeral", meaning: "Lasting for a very short time." },
        { word: "Ubiquitous", meaning: "Present, appearing, or found everywhere." },
        { word: "Mellifluous", meaning: "Pleasant and musical to hear." },
        { word: "Quintessential", meaning: "Representing the most perfect or typical example of a quality or class." },
        { word: "Petrichor", meaning: "A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather." },
        { word: "Surreptitious", meaning: "Kept secret, especially because it would not be approved of." },
        { word: "Ineffable", meaning: "Too great or extreme to be expressed or described in words." },
        { word: "Sonder", meaning: "The realization that each random passerby is living a life as vivid and complex as your own." },
        { word: "Limerence", meaning: "The state of being infatuated or obsessed with another person, typically experienced involuntarily." }
    ];

    const wordDisplay = document.getElementById('word-display');
    const meaningDisplay = document.getElementById('meaning-display');
    const newWordBtn = document.getElementById('new-word-btn');
    const showMeaningBtn = document.getElementById('show-meaning-btn');

    let currentWord = null;

    function getRandomWord() {
        return wordsData[Math.floor(Math.random() * wordsData.length)];
    }

    function displayWord() {
        currentWord = getRandomWord();
        wordDisplay.textContent = currentWord.word;
        meaningDisplay.textContent = currentWord.meaning;
        meaningDisplay.style.display = 'none'; // Hide meaning initially
    }

    newWordBtn.addEventListener('click', displayWord);

    showMeaningBtn.addEventListener('click', () => {
        if (currentWord) {
            meaningDisplay.style.display = 'block';
        }
    });

    // Initial word display on page load
    displayWord();
});
