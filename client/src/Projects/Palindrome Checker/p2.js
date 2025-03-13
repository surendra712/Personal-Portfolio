document.getElementById("check").addEventListener("click", function() {
    const inputWord = document.getElementById("word").value;
    const cleanedWord = inputWord.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    
    let resultText;
    if (cleanedWord === reversedWord) {
        resultText = `"${inputWord.toUpperCase()}" is a palindrome.`;
    } else {
        resultText = `"${inputWord.toUpperCase()}" is not a palindrome.`;
    }
    
    document.getElementById("result").textContent = resultText;
});
