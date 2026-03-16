

// Testimonials slider
const cards = document.querySelectorAll('.testimonials__card');
let current = 0;

function showCard(index) {
    cards.forEach(card => card.classList.remove('active'));
    cards[index].classList.add('active');
}

document.querySelectorAll('.testimonials__next').forEach(btn => {
    btn.addEventListener('click', () => {
        current = (current + 1) % cards.length;
        showCard(current);
    });
});

document.querySelectorAll('.testimonials__prev').forEach(btn => {
    btn.addEventListener('click', () => {
        current = (current - 1 + cards.length) % cards.length;
        showCard(current);
    });
});

// FAQ Accordion
document.querySelectorAll('.faq__item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});

function openMenu() {
    document.querySelector('.modal').classList.add('is-open');
}

function closeMenu() {
    document.querySelector('.modal').classList.remove('is-open');
}