let cartCounter = 0;

function addCart() {
    cartCounter++;
    document.getElementById('cartCount').textContent = cartCounter;
}

document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const foodCards = document.querySelectorAll('.food-card');
    const searchInput = document.getElementById('searchInput');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');

            foodCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedCategory === 'todos' || cardCategory === selectedCategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        foodCards.forEach(card => {
            const title = card.querySelector('.food-title').textContent.toLowerCase();
            const desc = card.querySelector('.food-desc').textContent.toLowerCase();

            if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});