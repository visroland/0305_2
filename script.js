// Emotikonok tárolása egy tömbben
const emojis = ["😢", "😐", "😄"];

// Hozzáférés a HTML elemekhez
const emojiDiv = document.getElementById("emoji");
const emojiRange = document.getElementById("emojiRange");

// Csúszka változásának kezelése
emojiRange.addEventListener("input", function() {
    const emojiIndex = emojiRange.value;
    emojiDiv.textContent = emojis[emojiIndex];
});
