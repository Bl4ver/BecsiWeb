function createCard(cardData) {    
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-title"><h2>${cardData.title}</h2></div>
        <div class="card-description"><p>${cardData.description}</p></div>
        <div class="card-price"><p>${cardData.price} Ft</p></div>
    `;
    return card;
}

async function loadData() {
    fetch('../source/data/menu.json')
        .then(response => response.json())
        .then(data => {
            data.menu.forEach(cardData => {
                const container = document.querySelector(`[data-section="${cardData.section}"]`);
                if (container) {
                    container.appendChild(createCard(cardData));
                }
            });
        })
        .catch(error => {
            console.error('Error loading menu data:', error);         
        });
}

function setupToggleButtons() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const header = this.closest('.section-header');
            const cardHolder = header.nextElementSibling;
            
            if (cardHolder && cardHolder.classList.contains('card-holder')) {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                this.setAttribute('aria-expanded', !isExpanded);
                cardHolder.classList.toggle('collapsed');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setupToggleButtons();
});