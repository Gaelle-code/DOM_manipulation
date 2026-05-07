// 1. Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Text Manipulation
document.getElementById('changeTextBtn').addEventListener('click', () => {
    document.getElementById('mainParagraph').innerText = "You've successfully manipulated the DOM!";
});

// 3. Dropdown Toggle
document.getElementById('servicesLink').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('dropdownMenu').classList.toggle('show');
});

// 4. Nav Highlighting
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

