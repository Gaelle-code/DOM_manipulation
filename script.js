// 1. Theme Toggle with Icon Change
const themeBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

// 2. Text Manipulation
document.getElementById('changeTextBtn').addEventListener('click', () => {
    document.getElementById('mainParagraph').innerText = "DOM Manipulation Success!";
});

// 3. Dropdown Toggle
document.getElementById('servicesLink').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('dropdownMenu').classList.toggle('show');
});

// 4. Hamburger Toggle
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('mobile-show');
});

// 5. Input Live Preview (Red Text)
const input = document.getElementById('itemInput');
const preview = document.getElementById('displayText');

input.addEventListener('input', (e) => {
    preview.innerText = `Live Preview: ${e.target.value}`;
});

// 6. Dynamic List Add & Remove
document.getElementById('addItemBtn').addEventListener('click', () => {
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.innerText = input.value;
        li.classList.add('list-item');
        li.onclick = () => li.remove(); // Click to remove
        document.getElementById('dynamicList').appendChild(li);
        input.value = "";
        preview.innerText = "Live Preview: ";
    }
});

// 7. Search Functionality
document.getElementById('searchInput').addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(term) ? "" : "none";
    });
});

// 8. Activity Card Selection
const activityButtons = document.querySelectorAll('.activity-btn');
activityButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const activityName = e.target.parentElement.querySelector('h3').innerText;
        const itinerary = document.getElementById('itineraryList');
        const li = document.createElement('li');
        li.innerText = `Selected Activity: ${activityName}`;
        itinerary.appendChild(li);
    });
});