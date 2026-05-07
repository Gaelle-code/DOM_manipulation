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

document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('mobile-show');
});

document.getElementById('itemInput').addEventListener('input', (e) => {
    document.getElementById('displayText').innerText = `Live Preview: ${e.target.value}`;
});

document.getElementById('addItemBtn').addEventListener('click', () => {
    const input = document.getElementById('itemInput');
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.innerText = input.value;
        // Requirement 8: Element Removal
        li.addEventListener('click', () => li.remove());
        document.getElementById('dynamicList').appendChild(li);
        input.value = "";
    }
});

document.getElementById('searchInput').addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(term) ? "block" : "none";
    });
});