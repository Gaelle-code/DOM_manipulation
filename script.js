// 1. Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Text Manipulation
document.getElementById('changeTextBtn').addEventListener('click', () => {
    document.getElementById('mainParagraph').innerText = "You've successfully manipulated the DOM!";
});

