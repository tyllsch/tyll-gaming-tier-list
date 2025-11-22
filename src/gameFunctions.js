// gameFunctions.js

// Function to display the game summary
function showSummary(image) {
    const summaryDiv = document.getElementById('summary');
    summaryDiv.style.display = 'block';

    const summaryBackground = document.getElementById('summary-background');
    const summaryTitle = document.getElementById('summary-title');
    const summaryText = document.getElementById('summary-text');
    
    summaryTitle.textContent = image.getAttribute('data-title');
    summaryText.innerHTML = image.getAttribute('data-summary');

    const backgroundImage = image.getAttribute('data-img');
    summaryBackground.src = backgroundImage;

    summaryDiv.scrollIntoView({ behavior: 'smooth' });
}

// Function to add a new game card to the tier list
function addGame(title, summary, imgTierList, imgSummaryCard, tier, year) {
    let row;
    switch (tier.toUpperCase()) {
        case 'S':
            row = document.querySelector('.label[style*="background-color:#FF3043"]').parentNode.querySelector('.games');
            break;
        case 'A':
            row = document.querySelector('.label[style*="background-color:#FCA574"]').parentNode.querySelector('.games');
            break;
        case 'B':
            row = document.querySelector('.label[style*="background-color:#D4D45E"]').parentNode.querySelector('.games');
            break;
        case 'C':
            row = document.querySelector('.label[style*="background-color:#7D964C"]').parentNode.querySelector('.games');
            break;
        case 'D':
            row = document.querySelector('.label[style*="background-color:#6BD5DA"]').parentNode.querySelector('.games');
            break;
        case 'F':
            row = document.querySelector('.label[style*="background-color:#AD8DE0"]').parentNode.querySelector('.games');
            break;
        case 'DNF':
            row = document.querySelector('.label[style*="background-color:#242424"]').parentNode.querySelector('.games');
            break;
        default:
            console.error('Invalid tier');
            return;
    }

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.visibility = 'visible';

    const img = document.createElement('img');
    img.width = 90;
    img.height = 90;
    img.src = imgTierList;
    img.setAttribute('data-title', title);
    img.setAttribute('data-summary', summary);
    img.setAttribute('data-img', imgSummaryCard);
    img.setAttribute('data-year', year)
    img.setAttribute('onclick', 'showSummary(this)');

    card.appendChild(img);
    row.appendChild(card);
}

function filterGames(year) {
    const allGameImages = document.querySelectorAll('.games img');

    allGameImages.forEach(gameImage => {
        const card = gameImage.parentElement; 

        if (year === 'all' || gameImage.dataset.year === year) {
            card.style.display = 'inline-block'; 
        } else {
            card.style.display = 'none';
        }
    });
}