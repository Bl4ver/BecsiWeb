function createCard(cardData) {    
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    const h1Title = document.createElement('h1');
    h1Title.textContent = cardData.title;
    cardTitle.appendChild(h1Title);

    const cardDesc = document.createElement('div');
    cardDesc.classList.add('card-description');
    const pDesc = document.createElement('p');
    pDesc.textContent = cardData.description;
    cardDesc.appendChild(pDesc);

    const cardPrice = document.createElement('div');
    cardPrice.classList.add('card-price');
    const pPrice = document.createElement('p');
    pPrice.textContent = cardData.price + " Ft";
    cardPrice.appendChild(pPrice);

    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    card.appendChild(cardPrice);

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