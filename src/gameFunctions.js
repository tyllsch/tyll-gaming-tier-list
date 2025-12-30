// Function to display the game summary
function showSummary(image) {
    const summaryDiv = document.getElementById('summary');
    summaryDiv.style.display = 'block';

    const summaryBackground = document.getElementById('summary-background');
    const summaryTitle = document.getElementById('summary-title');
    const summaryText = document.getElementById('summary-text');
    
    // New Elements
    const statPlaytime = document.getElementById('stat-playtime');
    const statAchievements = document.getElementById('stat-achievements');

    summaryTitle.textContent = image.getAttribute('data-title');
    summaryText.innerHTML = image.getAttribute('data-summary');

    const backgroundImage = image.getAttribute('data-img');
    summaryBackground.src = backgroundImage;
    
    // --- HANDLING PLAYTIME ---
    const playtime = image.getAttribute('data-playtime');
    if (playtime && playtime !== 'undefined') {
        statPlaytime.style.display = 'inline-block';
        statPlaytime.textContent = '🕒 ' + playtime;
    } else {
        statPlaytime.style.display = 'none';
    }

    // --- HANDLING ACHIEVEMENTS ---
    const achievements = image.getAttribute('data-achievements');
    if (achievements && achievements !== 'undefined') {
        statAchievements.style.display = 'inline-block';
        
        // Auto-calculate percentage if format is "number/number"
        let displayText = '🏆 ' + achievements;
        const parts = achievements.split('/');
        if (parts.length === 2) {
            const earned = parseFloat(parts[0]);
            const total = parseFloat(parts[1]);
            if (!isNaN(earned) && !isNaN(total) && total > 0) {
                const percent = Math.round((earned / total) * 100);
                displayText += ` (${percent}%)`;
            }
        }
        statAchievements.textContent = displayText;
    } else {
        statAchievements.style.display = 'none';
    }

    summaryDiv.scrollIntoView({ behavior: 'smooth' });
}

// Updated addGame with 2 new OPTIONAL parameters at the end
function addGame(title, summary, imgTierList, imgSummaryCard, tier, year, playtime, achievements) {
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
    // Ensure flex is set to fix the layout bug you had earlier
    card.style.display = 'flex'; 
    card.style.flexShrink = '0';

    const img = document.createElement('img');
    img.width = 90;
    img.height = 90;
    img.src = imgTierList;
    img.setAttribute('data-title', title);
    img.setAttribute('data-summary', summary);
    img.setAttribute('data-img', imgSummaryCard);
    img.setAttribute('data-year', year);
    
    // Set new attributes if they exist
    if (playtime) img.setAttribute('data-playtime', playtime);
    if (achievements) img.setAttribute('data-achievements', achievements);

    img.setAttribute('onclick', 'showSummary(this)');

    card.appendChild(img);
    row.appendChild(card);
}

function filterGames(year) {
    const allGameImages = document.querySelectorAll('.games img');

    allGameImages.forEach(gameImage => {
        const card = gameImage.parentElement; 

        if (year === 'all' || gameImage.dataset.year === year) {
            // FIX from previous step included here
            card.style.display = 'flex'; 
        } else {
            card.style.display = 'none';
        }
    });
}