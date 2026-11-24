const GENRE_EMOJI_MAP = {
    // Dimensions, Perspective & Movement
    '2d': '📐',
    '2d-plattformer': '🧱',
    '3d': '🧊',
    '3d-plattformer': '🤸',
    'egoperspektive': '👁️',
    'vogelperspektive': '🦅',
    'plattformer': '🍄',
    'präzisionsplatformer': '📌',
    'rätsel-plattformer': '🧲',
    'sidescroller': '➡️',
    'parkour': '🏃',

    // Visual Style & Presentation
    'pixel-art': '👾',
    'retro': '📼',
    'handgezeichnet': '✏️',
    'stilisiert': '🎨',
    'farbenfroh': '🌈',
    'kinoreif': '🎬',
    'comicbuch': '🗯️',
    'anime': '🌸',

    // Horror, Dark & Supernatural
    'horror': '👻',
    'lovecraft': '🐙',
    'psycho-horror': '🧠',
    'survival-horror': '🔦',
    'zombies': '🧟',
    'blut und verstümmelung': '🩸',
    'gewalt': '🪓',
    'düster': '🌑',
    'dystopie': '⛓️',
    'supernatural': '🕯️',
    'surreal': '🌀',
    'dark fantasy': '🦇',

    // Mystery, Detective & Narrative
    'mystery': '🔮',
    'detektiv': '🕵️',
    'detective': '🕵️',
    'ermittlung': '🔍',
    'verschwörung': '🕸️',
    'komplexe handlung': '📖',
    'erzählend': '✍️',
    'dialogreich': '💬',
    'visual novel': '📚',
    'choose your own adventure': '🔀',
    'bedeutsame entscheidungen': '⚖️',
    'verschiedene enden': '🏁',
    'atmosphärisch': '🌫️',
    'atmosphäre': '🌫️',

    // Action, Combat, Shooters & RPG
    'action': '💥',
    'abenteuer': '🧭',
    'action-abenteuer': '🏹',
    'erkundung': '🗺️',
    'open world': '🌍',
    'soulslike': '🔥',
    'schwer': '💀',
    'metroidvania': '🗝️',
    'dungeon crawler': '🛡️',
    'rollenspiel': '⚔️',
    'action-rollenspiel': '🗡️',
    'rundenbasierter kampf': '⏳',
    'strategie': '♟️',
    'kampfspiel': '🥊',
    "beat'em up": '👊',
    'ninja': '🥷',
    'assassinen': '🔪',
    'schleichspiel': '👣',
    'shooter': '🔫',
    'ego-shooter': '🎯',
    'boomer-shooter': '💣',
    'third-person-shooter': '🧨',
    'vogelperspektive-shooter': '🚁',

    // Roguelike, Cards & Puzzles
    'roguelike': '🔁',
    'roguelite': '🔄',
    'action-roguelike': '🌪️',
    'roguelike-deckbuilding': '🎴',
    'kartenspiel': '🃏',
    'würfel': '🎲',
    'rätsel': '🧩',
    'puzzle': '🧩',

    // Settings & Themes
    'cyberpunk': '🦾',
    'sci-fi': '🛸',
    'weltraum': '🪐',
    'steampunk': '⚙️',
    'hacking': '💻',
    'fantasy': '🧙',
    'magie': '✨',
    'drachen': '🐉',
    'elfen': '🧝',
    'mittelalter': '🏰',
    'historisch': '📜',

    // Humor, Vibe & Mature Content
    'humor': '😂',
    'witzig': '😆',
    'schwarzer humor': '😈',
    'dark humor': '😈',
    'niedlich': '🧸',
    'gemütlich': '☕',
    'gelegenheitsspiel': '🛋️',
    'kurz': '⏱️',
    'nacktheit': '🔞',
    'sexuelle inhalte': '💋',
    'weibliche hauptfigur': '🦸‍♀️',

    // Racing, Sports, Survival & Simulation
    'rennspiel': '🏎️',
    'kampfrennspiel': '🚓',
    'fahren': '🚗',
    'sport': '🏅',
    'skateboarden': '🛹',
    'angeln': '🎣',
    'survival': '🏕️',
    'basenbau': '🏗️',
    'kreaturensammler': '🐾',
    'simulation': '🎛️',
    'laufsimulation': '🚶',
    'lebenssimulation': '🏡',
    'management': '📊',
    'medizinische simulation': '🩺',
    'politiksimulation': '🏛️',

    // Audio & Rhythm
    'musik': '🎵',
    'rhythmus': '🥁',
    'guter soundtrack': '🎧',

    // Modes & Misc
    'einzelspieler': '👤',
    'singleplayer': '👤',
    'mehrspieler': '👥',
    'koop': '🤝',
    'online-koop': '🌐',
    'lokaler koop': '🎮',
    'pvp': '🆚',
    'point-&-click': '🖱️',
    'arcade': '🕹️',
    'indie': '💎',
    'remake': '🛠️',
    'early access': '🚧',
    'charakteranpassung': '👕',
    'schnell': '⚡',
    'physik': '⚛️'
};

// Ordered from most specific to most general for any new/unseen genres added later
const GENRE_KEYWORD_FALLBACKS = [
    ['lovecraft', '🐙'],
    ['cosmic horror', '🐙'],
    ['survival-horror', '🔦'],
    ['survival horror', '🔦'],
    ['psycho', '🧠'],
    ['horror', '👻'],
    ['zombie', '🧟'],
    ['souls', '🔥'],
    ['metroidvania', '🗝️'],
    ['deckbuild', '🎴'],
    ['roguelite', '🔄'],
    ['roguelike', '🔁'],
    ['kartenspiel', '🃏'],
    ['card', '🃏'],
    ['würfel', '🎲'],
    ['dice', '🎲'],
    ['detektiv', '🕵️'],
    ['detective', '🕵️'],
    ['ermittl', '🔍'],
    ['investig', '🔍'],
    ['myster', '🔮'],
    ['rätsel', '🧩'],
    ['puzzle', '🧩'],
    ['cyberpunk', '🦾'],
    ['steampunk', '⚙️'],
    ['sci-fi', '🛸'],
    ['scifi', '🛸'],
    ['weltraum', '🪐'],
    ['space', '🪐'],
    ['dark fantasy', '🦇'],
    ['fantasy', '🧙'],
    ['magie', '✨'],
    ['magic', '✨'],
    ['drach', '🐉'],
    ['dragon', '🐉'],
    ['elf', '🧝'],
    ['mittelalter', '🏰'],
    ['medieval', '🏰'],
    ['histor', '📜'],
    ['dungeon', '🛡️'],
    ['rundenbasiert', '⏳'],
    ['turn-based', '⏳'],
    ['turn based', '⏳'],
    ['action-rpg', '🗡️'],
    ['action rpg', '🗡️'],
    ['action-rollenspiel', '🗡️'],
    ['rollenspiel', '⚔️'],
    ['rpg', '⚔️'],
    ['strateg', '♟️'],
    ['boomer', '💣'],
    ['ego-shooter', '🎯'],
    ['first-person shooter', '🎯'],
    ['fps', '🎯'],
    ['shooter', '🔫'],
    ['beat', '👊'],
    ['kampfrenn', '🚓'],
    ['kampf', '🥊'],
    ['fight', '🥊'],
    ['ninja', '🥷'],
    ['assassin', '🔪'],
    ['schleich', '👣'],
    ['stealth', '👣'],
    ['parkour', '🏃'],
    ['plattformer', '🍄'],
    ['platformer', '🍄'],
    ['sidescroll', '➡️'],
    ['point', '🖱️'],
    ['visual novel', '📚'],
    ['entscheidung', '⚖️'],
    ['choice', '⚖️'],
    ['ende', '🏁'],
    ['ending', '🏁'],
    ['handlung', '📖'],
    ['story', '📖'],
    ['narrativ', '✍️'],
    ['dialog', '💬'],
    ['atmosph', '🌫️'],
    ['surreal', '🌀'],
    ['dystop', '⛓️'],
    ['düster', '🌑'],
    ['supernatural', '🕯️'],
    ['schwarzer humor', '😈'],
    ['dark humor', '😈'],
    ['humor', '😂'],
    ['comedy', '😂'],
    ['witzig', '😆'],
    ['funny', '😆'],
    ['gemütlich', '☕'],
    ['cozy', '☕'],
    ['niedlich', '🧸'],
    ['cute', '🧸'],
    ['gelegenheit', '🛋️'],
    ['casual', '🛋️'],
    ['soundtrack', '🎧'],
    ['rhythm', '🥁'],
    ['musik', '🎵'],
    ['music', '🎵'],
    ['skate', '🛹'],
    ['renn', '🏎️'],
    ['rac', '🏎️'],
    ['fahr', '🚗'],
    ['driv', '🚗'],
    ['sport', '🏅'],
    ['angel', '🎣'],
    ['fish', '🎣'],
    ['basenbau', '🏗️'],
    ['build', '🏗️'],
    ['survival', '🏕️'],
    ['management', '📊'],
    ['tycoon', '📊'],
    ['medizin', '🩺'],
    ['medical', '🩺'],
    ['politik', '🏛️'],
    ['politic', '🏛️'],
    ['laufsim', '🚶'],
    ['walking sim', '🚶'],
    ['lebenssim', '🏡'],
    ['life sim', '🏡'],
    ['simulat', '🎛️'],
    ['online-koop', '🌐'],
    ['online co-op', '🌐'],
    ['lokaler koop', '🎮'],
    ['local co-op', '🎮'],
    ['koop', '🤝'],
    ['co-op', '🤝'],
    ['coop', '🤝'],
    ['mehrspieler', '👥'],
    ['multiplayer', '👥'],
    ['einzelspieler', '👤'],
    ['singleplayer', '👤'],
    ['single-player', '👤'],
    ['pvp', '🆚'],
    ['open world', '🌍'],
    ['offene welt', '🌍'],
    ['erkund', '🗺️'],
    ['explor', '🗺️'],
    ['abenteuer', '🧭'],
    ['adventure', '🧭'],
    ['action', '💥'],
    ['pixel', '👾'],
    ['retro', '📼'],
    ['handgezeichnet', '✏️'],
    ['hand-drawn', '✏️'],
    ['stilisiert', '🎨'],
    ['stylized', '🎨'],
    ['anime', '🌸'],
    ['comic', '🗯️'],
    ['arcade', '🕹️'],
    ['indie', '💎'],
    ['hack', '💻'],
    ['blut', '🩸'],
    ['gore', '🩸'],
    ['blood', '🩸'],
    ['gewalt', '🪓'],
    ['violen', '🪓'],
    ['schwer', '💀'],
    ['hard', '💀'],
    ['schnell', '⚡'],
    ['fast', '⚡'],
    ['physik', '⚛️'],
    ['physics', '⚛️'],
    ['remake', '🛠️'],
    ['remaster', '🛠️'],
    ['early access', '🚧'],
    ['farm', '🌾'],
    ['craft', '⚒️'],
    ['vampir', '🧛'],
    ['pirat', '🏴‍☠️'],
    ['robot', '🤖'],
    ['mech', '🤖'],
    ['kochen', '🍳'],
    ['cook', '🍳'],
    ['kletter', '🧗'],
    ['climb', '🧗'],
    ['2d', '📐'],
    ['3d', '🧊']
];

function getGenreEmoji(genre) {
    if (!genre) return '🏷️';
    const normalized = genre.trim().toLowerCase();

    if (Object.prototype.hasOwnProperty.call(GENRE_EMOJI_MAP, normalized)) {
        return GENRE_EMOJI_MAP[normalized];
    }

    for (const [keyword, emoji] of GENRE_KEYWORD_FALLBACKS) {
        if (normalized.includes(keyword)) {
            return emoji;
        }
    }

    return '🏷️';
}

function showSummary(image) {
    const summaryDiv = document.getElementById('summary');
    summaryDiv.style.display = 'block';

    const summaryBackground = document.getElementById('summary-background');
    const summaryTitle = document.getElementById('summary-title');
    const summaryText = document.getElementById('summary-text');
    
    const statPlaytime = document.getElementById('stat-playtime');
    const statAchievements = document.getElementById('stat-achievements');

    summaryTitle.textContent = image.getAttribute('data-title');
    summaryText.innerHTML = image.getAttribute('data-summary');

    const backgroundImage = image.getAttribute('data-img');
    summaryBackground.src = backgroundImage;
    
    const playtime = image.getAttribute('data-playtime');
    if (playtime && playtime !== 'undefined') {
        statPlaytime.style.display = 'inline-block';
        statPlaytime.textContent = '🕒 ' + playtime + 'h';
    } else {
        statPlaytime.style.display = 'none';
    }

    const achievements = image.getAttribute('data-achievements');
    if (achievements && achievements !== 'undefined') {
        statAchievements.style.display = 'inline-block';
        
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
    
    const summaryGenres = document.getElementById('summary-genres');
    if (summaryGenres) {
        summaryGenres.innerHTML = '';
        const categoriesAttr = image.getAttribute('data-categories');
        if (categoriesAttr) {
            const categories = JSON.parse(categoriesAttr);
            summaryGenres.style.display = 'flex';
            categories.forEach(category => {
                const span = document.createElement('span');
                span.classList.add('stat-box');
                span.textContent = `${getGenreEmoji(category)} ${category}`;
                summaryGenres.appendChild(span);
            });
        } else {
            summaryGenres.style.display = 'none';
        }
    }

    summaryDiv.scrollIntoView({ behavior: 'smooth' });
}

function addGame(title, summary, imgTierList, imgSummaryCard, tier, year, playtime, achievements, categories, tierScore = 0) {
    let row;
    const normalizedTier = tier.toUpperCase();
    switch (normalizedTier) {
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
    img.setAttribute('data-tier', normalizedTier);
    img.setAttribute('data-tierscore', tierScore ?? 0);
    
    if (playtime) img.setAttribute('data-playtime', playtime);
    if (achievements) img.setAttribute('data-achievements', achievements);
    if (categories && categories.length > 0) {
        img.setAttribute('data-categories', JSON.stringify(categories));
    }

    img.setAttribute('onclick', 'showSummary(this)');

    card.appendChild(img);
    row.appendChild(card);
}

let currentYearFilter = 'all';
let currentGenreFilter = 'all';
let currentSortMode = 'score';

const TIER_ORDER = ['S', 'A', 'B', 'C', 'D', 'F', 'DNF'];
const TIER_COLORS = {
    S: '#FF3043',
    A: '#FCA574',
    B: '#D4D45E',
    C: '#7D964C',
    D: '#6BD5DA',
    F: '#AD8DE0',
    DNF: '#555555'
};
const TIER_WEIGHTS = {
    S: 6,
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    F: 1
};

function parsePlaytime(value) {
    if (value === null || value === undefined || value === '' || value === 'undefined') return 0;
    const n = parseFloat(value);
    return !isNaN(n) && n > 0 ? n : 0;
}

function parseAchievements(value) {
    if (!value || value === 'undefined') return null;
    const parts = String(value).split('/');
    if (parts.length !== 2) return null;
    const earned = parseFloat(parts[0]);
    const total = parseFloat(parts[1]);
    if (isNaN(earned) || isNaN(total) || total <= 0) return null;
    return {
        earned,
        total,
        percent: Math.round((earned / total) * 100),
        isComplete: earned >= total
    };
}

function scoreToTier(avgWeight) {
    if (avgWeight >= 5.5) return 'S';
    if (avgWeight >= 4.5) return 'A';
    if (avgWeight >= 3.5) return 'B';
    if (avgWeight >= 2.5) return 'C';
    if (avgWeight >= 1.5) return 'D';
    return 'F';
}

function formatHours(hours) {
    return hours.toLocaleString('de-DE', {
        minimumFractionDigits: hours % 1 === 0 ? 0 : 1,
        maximumFractionDigits: 1
    }) + 'h';
}

function getGameCategories(gameImage) {
    const categoriesAttr = gameImage.getAttribute('data-categories');
    if (!categoriesAttr) return [];
    try {
        const parsed = JSON.parse(categoriesAttr);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        return [];
    }
}

function getGenreCountsForYear(year) {
    const allGameImages = document.querySelectorAll('.games img');
    const counts = new Map();
    let totalInYear = 0;

    allGameImages.forEach(gameImage => {
        if (year === 'all' || gameImage.dataset.year === year) {
            totalInYear++;
            const seenInGame = new Set();
            getGameCategories(gameImage).forEach(category => {
                if (!seenInGame.has(category)) {
                    seenInGame.add(category);
                    counts.set(category, (counts.get(category) || 0) + 1);
                }
            });
        }
    });

    return { counts, totalInYear };
}

function updateUrlParams() {
    try {
        const params = new URLSearchParams();
        params.set('year', currentYearFilter);
        if (currentGenreFilter !== 'all') {
            params.set('genre', currentGenreFilter);
        }
        if (currentSortMode !== 'score') {
            params.set('sort', currentSortMode);
        }
        window.history.pushState({}, '', '?' + params.toString());
    } catch (e) {
        // Ignore history restrictions on file:// URLs
    }
}

function updateYearButtonsUI() {
    document.querySelectorAll('.year-filters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById('filter-' + currentYearFilter);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateGenreToggleUI(counts, totalInYear) {
    const toggleBtn = document.getElementById('genre-filter-toggle');
    const labelSpan = document.getElementById('genre-filter-label');
    const clearBtn = document.getElementById('genre-filter-clear');
    if (!toggleBtn || !labelSpan) return;

    if (currentGenreFilter === 'all') {
        labelSpan.textContent = `🏷️ Alle Genres (${totalInYear})`;
        toggleBtn.classList.remove('has-selection');
        if (clearBtn) clearBtn.style.display = 'none';
    } else {
        const count = counts.get(currentGenreFilter) || 0;
        labelSpan.textContent = `${getGenreEmoji(currentGenreFilter)} ${currentGenreFilter} (${count})`;
        toggleBtn.classList.add('has-selection');
        if (clearBtn) clearBtn.style.display = 'inline-block';
    }
}

function renderGenreDropdownOptions(searchTerm = '') {
    const optionsList = document.getElementById('genre-options-list');
    if (!optionsList) return;

    const { counts, totalInYear } = getGenreCountsForYear(currentYearFilter);
    const query = searchTerm.trim().toLowerCase();

    optionsList.innerHTML = '';

    // Show "Alle Genres" at top when search is empty or matches "alle genres"
    if (!query || 'alle genres'.includes(query)) {
        const allOption = document.createElement('div');
        allOption.className = 'genre-option' + (currentGenreFilter === 'all' ? ' selected' : '');
        allOption.setAttribute('role', 'option');
        allOption.setAttribute('data-genre', 'all');

        const nameSpan = document.createElement('span');
        nameSpan.className = 'genre-option-name';
        nameSpan.textContent = '🏷️ Alle Genres';

        const countSpan = document.createElement('span');
        countSpan.className = 'genre-option-count';
        countSpan.textContent = totalInYear;

        allOption.appendChild(nameSpan);
        allOption.appendChild(countSpan);
        allOption.addEventListener('click', () => {
            filterByGenre('all');
            closeGenreDropdown();
        });
        optionsList.appendChild(allOption);
    }

    // Only genres with count > 0 in the currently filtered year appear in counts
    const sortedGenres = [...counts.entries()]
        .filter(([genre]) => !query || genre.toLowerCase().includes(query))
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'de'));

    sortedGenres.forEach(([genre, count]) => {
        const option = document.createElement('div');
        option.className = 'genre-option' + (currentGenreFilter === genre ? ' selected' : '');
        option.setAttribute('role', 'option');
        option.setAttribute('data-genre', genre);

        const nameSpan = document.createElement('span');
        nameSpan.className = 'genre-option-name';
        nameSpan.textContent = `${getGenreEmoji(genre)} ${genre}`;

        const countSpan = document.createElement('span');
        countSpan.className = 'genre-option-count';
        countSpan.textContent = count;

        option.appendChild(nameSpan);
        option.appendChild(countSpan);
        option.addEventListener('click', () => {
            filterByGenre(genre);
            closeGenreDropdown();
        });
        optionsList.appendChild(option);
    });

    if (optionsList.children.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'genre-empty-state';
        empty.textContent = 'Kein Genre gefunden';
        optionsList.appendChild(empty);
    }
}

function openGenreDropdown() {
    const dropdown = document.getElementById('genre-dropdown');
    const toggleBtn = document.getElementById('genre-filter-toggle');
    const searchInput = document.getElementById('genre-search-input');
    if (!dropdown || !toggleBtn) return;

    dropdown.style.display = 'block';
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (searchInput) {
        searchInput.value = '';
        renderGenreDropdownOptions('');
        searchInput.focus();
    } else {
        renderGenreDropdownOptions('');
    }
}

function closeGenreDropdown() {
    const dropdown = document.getElementById('genre-dropdown');
    const toggleBtn = document.getElementById('genre-filter-toggle');
    if (!dropdown || !toggleBtn) return;

    dropdown.style.display = 'none';
    toggleBtn.setAttribute('aria-expanded', 'false');
}

function applyFilters(updateUrl = true) {
    const { counts, totalInYear } = getGenreCountsForYear(currentYearFilter);

    // If the selected genre does not exist in the currently filtered year, reset to 'all'
    if (currentGenreFilter !== 'all' && !counts.has(currentGenreFilter)) {
        currentGenreFilter = 'all';
    }

    const allGameImages = document.querySelectorAll('.games img');
    allGameImages.forEach(gameImage => {
        const card = gameImage.parentElement;
        const matchesYear = currentYearFilter === 'all' || gameImage.dataset.year === currentYearFilter;
        const matchesGenre = currentGenreFilter === 'all' || getGameCategories(gameImage).includes(currentGenreFilter);

        if (matchesYear && matchesGenre) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    updateYearButtonsUI();
    updateGenreToggleUI(counts, totalInYear);

    const searchInput = document.getElementById('genre-search-input');
    renderGenreDropdownOptions(searchInput ? searchInput.value : '');

    if (updateUrl) {
        updateUrlParams();
    }
    updateStatsPanel();
}

function sortGames(mode, updateUrl = true) {
    currentSortMode = mode || 'score';
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect && sortSelect.value !== currentSortMode) {
        sortSelect.value = currentSortMode;
    }

    const rows = document.querySelectorAll('.games');
    rows.forEach(row => {
        const cards = Array.from(row.children);
        cards.sort((cardA, cardB) => {
            const imgA = cardA.querySelector('img');
            const imgB = cardB.querySelector('img');
            if (!imgA || !imgB) return 0;

            const titleA = imgA.getAttribute('data-title') || '';
            const titleB = imgB.getAttribute('data-title') || '';
            const scoreA = parseFloat(imgA.getAttribute('data-tierscore')) || 0;
            const scoreB = parseFloat(imgB.getAttribute('data-tierscore')) || 0;

            if (currentSortMode === 'playtime') {
                const timeA = parsePlaytime(imgA.getAttribute('data-playtime'));
                const timeB = parsePlaytime(imgB.getAttribute('data-playtime'));
                if (timeB !== timeA) return timeB - timeA;
                return scoreB - scoreA || titleA.localeCompare(titleB, 'de');
            }

            if (currentSortMode === 'achievements') {
                const achA = parseAchievements(imgA.getAttribute('data-achievements'));
                const achB = parseAchievements(imgB.getAttribute('data-achievements'));
                const pctA = achA ? achA.percent : -1;
                const pctB = achB ? achB.percent : -1;
                if (pctB !== pctA) return pctB - pctA;
                const earnedA = achA ? achA.earned : -1;
                const earnedB = achB ? achB.earned : -1;
                if (earnedB !== earnedA) return earnedB - earnedA;
                return scoreB - scoreA || titleA.localeCompare(titleB, 'de');
            }

            if (currentSortMode === 'title') {
                return titleA.localeCompare(titleB, 'de');
            }

            // Default: 'score'
            if (scoreB !== scoreA) return scoreB - scoreA;
            return titleA.localeCompare(titleB, 'de');
        });

        cards.forEach(card => row.appendChild(card));
    });

    if (updateUrl) {
        updateUrlParams();
    }
}

function toggleStatsPanel(forceOpen) {
    const panel = document.getElementById('stats-panel');
    const toggleBtn = document.getElementById('stats-toggle');
    if (!panel || !toggleBtn) return;

    const shouldOpen = typeof forceOpen === 'boolean'
        ? forceOpen
        : (panel.style.display === 'none' || !panel.style.display);

    panel.style.display = shouldOpen ? 'flex' : 'none';
    toggleBtn.classList.toggle('active', shouldOpen);
    toggleBtn.setAttribute('aria-expanded', String(shouldOpen));

    if (shouldOpen) {
        updateStatsPanel();
    }
}

function createTierPill(tier) {
    const pill = document.createElement('span');
    pill.className = 'stats-tier-pill';
    pill.style.backgroundColor = TIER_COLORS[tier] || '#555';
    pill.textContent = tier;
    return pill;
}

function createKpiCard(label, value, subtext) {
    const card = document.createElement('div');
    card.className = 'stats-kpi-card';

    const labelEl = document.createElement('div');
    labelEl.className = 'stats-kpi-label';
    labelEl.textContent = label;

    const valueEl = document.createElement('div');
    valueEl.className = 'stats-kpi-value';
    valueEl.textContent = value;

    const subEl = document.createElement('div');
    subEl.className = 'stats-kpi-sub';
    subEl.textContent = subtext;

    card.appendChild(labelEl);
    card.appendChild(valueEl);
    card.appendChild(subEl);
    return card;
}

function updateStatsPanel() {
    const panel = document.getElementById('stats-panel');
    if (!panel) return;

    const contextEl = document.getElementById('stats-context');
    const kpisEl = document.getElementById('stats-kpis');
    const tierChartEl = document.getElementById('stats-tier-chart');
    const genreChartEl = document.getElementById('stats-genre-chart');
    const genreChartTitleEl = document.getElementById('stats-genre-chart-title');
    const bestGenresEl = document.getElementById('stats-best-genres');
    const worstGenresEl = document.getElementById('stats-worst-genres');
    const bestTitleEl = document.getElementById('stats-best-genres-title');
    const worstTitleEl = document.getElementById('stats-worst-genres-title');

    if (!kpisEl || !tierChartEl || !genreChartEl || !bestGenresEl || !worstGenresEl) return;

    // Collect currently visible games (matching active year + genre filters)
    const visibleGames = [];
    document.querySelectorAll('.games img').forEach(img => {
        if (img.parentElement && img.parentElement.style.display !== 'none') {
            visibleGames.push({
                title: img.getAttribute('data-title') || '',
                tier: (img.getAttribute('data-tier') || '').toUpperCase(),
                playtime: parsePlaytime(img.getAttribute('data-playtime')),
                achievements: parseAchievements(img.getAttribute('data-achievements')),
                categories: getGameCategories(img)
            });
        }
    });

    // Context header
    if (contextEl) {
        const yearLabel = currentYearFilter === 'all' ? 'Alle Jahre' : currentYearFilter;
        const genreLabel = currentGenreFilter === 'all'
            ? ''
            : ` · ${getGenreEmoji(currentGenreFilter)} ${currentGenreFilter}`;
        contextEl.textContent = `📊 Statistiken · ${yearLabel}${genreLabel}`;
    }

    // Aggregate metrics
    const totalGames = visibleGames.length;
    const tierCounts = {};
    TIER_ORDER.forEach(t => { tierCounts[t] = 0; });

    let totalHours = 0;
    let trackedHoursGames = 0;
    let topPlayedGame = null;
    let completedCount = 0;
    let trackedAchGames = 0;
    let achPercentSum = 0;
    let ratedCount = 0;
    let ratingSum = 0;

    const genreStats = new Map();

    visibleGames.forEach(game => {
        if (Object.prototype.hasOwnProperty.call(tierCounts, game.tier)) {
            tierCounts[game.tier]++;
        }

        const weight = TIER_WEIGHTS[game.tier];
        if (weight) {
            ratedCount++;
            ratingSum += weight;
        }

        if (game.playtime > 0) {
            totalHours += game.playtime;
            trackedHoursGames++;
            if (!topPlayedGame || game.playtime > topPlayedGame.playtime) {
                topPlayedGame = game;
            }
        }

        if (game.achievements) {
            trackedAchGames++;
            achPercentSum += game.achievements.percent;
            if (game.achievements.isComplete) {
                completedCount++;
            }
        }

        const seenCats = new Set();
        game.categories.forEach(cat => {
            if (seenCats.has(cat)) return;
            seenCats.add(cat);
            if (currentGenreFilter !== 'all' && cat === currentGenreFilter) return;

            if (!genreStats.has(cat)) {
                genreStats.set(cat, { genre: cat, count: 0, ratedCount: 0, ratingSum: 0 });
            }
            const entry = genreStats.get(cat);
            entry.count++;
            if (weight) {
                entry.ratedCount++;
                entry.ratingSum += weight;
            }
        });
    });

    const avgRating = ratedCount > 0 ? ratingSum / ratedCount : 0;
    const avgTierLabel = ratedCount > 0 ? `Ø ${scoreToTier(avgRating)}-Tier (${avgRating.toFixed(1)}/6)` : 'Keine Wertung';

    // Determine adaptive minimum game count for genre ratings
    const minRatedForRanking = totalGames >= 25 ? 3 : (totalGames >= 10 ? 2 : 1);
    const ratedGenres = [...genreStats.values()]
        .filter(g => g.ratedCount >= minRatedForRanking)
        .map(g => ({ ...g, avg: g.ratingSum / g.ratedCount }));

    // Fallback to >= 1 if threshold leaves nothing
    const effectiveMin = ratedGenres.length > 0 ? minRatedForRanking : 1;
    const rankingPool = ratedGenres.length > 0
        ? ratedGenres
        : [...genreStats.values()]
            .filter(g => g.ratedCount >= 1)
            .map(g => ({ ...g, avg: g.ratingSum / g.ratedCount }));

    const sortedBest = [...rankingPool].sort((a, b) => b.avg - a.avg || b.count - a.count || a.genre.localeCompare(b.genre, 'de'));
    const topRatedGenre = sortedBest[0] || null;

    // 1. Render KPI cards
    kpisEl.innerHTML = '';
    kpisEl.appendChild(createKpiCard(
        '🎮 Spiele',
        String(totalGames),
        avgTierLabel
    ));
    kpisEl.appendChild(createKpiCard(
        '🕒 Spielzeit',
        totalHours > 0 ? formatHours(totalHours) : '–',
        topPlayedGame
            ? `Top: ${topPlayedGame.title} (${formatHours(topPlayedGame.playtime)})`
            : `${trackedHoursGames} Spiele mit Spielzeit`
    ));
    kpisEl.appendChild(createKpiCard(
        '🏆 100% Spiele',
        String(completedCount),
        trackedAchGames > 0
            ? `von ${trackedAchGames} getrackt (Ø ${Math.round(achPercentSum / trackedAchGames)}%)`
            : 'Keine Achievements getrackt'
    ));
    kpisEl.appendChild(createKpiCard(
        currentGenreFilter === 'all' ? '⭐ Bestes Genre' : '⭐ Bestes Co-Genre',
        topRatedGenre ? `${getGenreEmoji(topRatedGenre.genre)} ${topRatedGenre.genre}` : '–',
        topRatedGenre
            ? `Ø ${scoreToTier(topRatedGenre.avg)}-Tier (${topRatedGenre.avg.toFixed(1)}) · ${topRatedGenre.count} ${topRatedGenre.count === 1 ? 'Spiel' : 'Spiele'}`
            : 'Zu wenige Daten'
    ));

    // 2. Render Tier Distribution chart
    tierChartEl.innerHTML = '';
    const maxTierCount = Math.max(1, ...TIER_ORDER.map(t => tierCounts[t]));
    TIER_ORDER.forEach(tier => {
        const count = tierCounts[tier];
        const pct = totalGames > 0 ? Math.round((count / totalGames) * 100) : 0;
        const barWidth = Math.round((count / maxTierCount) * 100);

        const row = document.createElement('div');
        row.className = 'stats-bar-row tier-row';

        const pill = createTierPill(tier);

        const track = document.createElement('div');
        track.className = 'stats-bar-track';
        const fill = document.createElement('div');
        fill.className = 'stats-bar-fill';
        fill.style.width = `${barWidth}%`;
        fill.style.backgroundColor = TIER_COLORS[tier];
        track.appendChild(fill);

        const meta = document.createElement('span');
        meta.className = 'stats-bar-meta';
        meta.textContent = `${count} (${pct}%)`;

        row.appendChild(pill);
        row.appendChild(track);
        row.appendChild(meta);
        tierChartEl.appendChild(row);
    });

    // 3. Render Top Genres chart (clickable!)
    if (genreChartTitleEl) {
        genreChartTitleEl.textContent = currentGenreFilter === 'all' ? 'Top Genres' : 'Top Co-Genres';
    }
    genreChartEl.innerHTML = '';
    const topGenres = [...genreStats.values()]
        .sort((a, b) => b.count - a.count || a.genre.localeCompare(b.genre, 'de'))
        .slice(0, 8);

    if (topGenres.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'stats-empty';
        empty.textContent = 'Keine weiteren Genres vorhanden';
        genreChartEl.appendChild(empty);
    } else {
        const maxGenreCount = Math.max(1, topGenres[0].count);
        topGenres.forEach(g => {
            const avgTier = g.ratedCount > 0 ? scoreToTier(g.ratingSum / g.ratedCount) : 'DNF';
            const barWidth = Math.round((g.count / maxGenreCount) * 100);

            const row = document.createElement('div');
            row.className = 'stats-bar-row clickable';
            row.title = `Nach "${g.genre}" filtern`;
            row.addEventListener('click', () => filterByGenre(g.genre));

            const label = document.createElement('span');
            label.className = 'stats-bar-label';
            label.textContent = `${getGenreEmoji(g.genre)} ${g.genre}`;

            const track = document.createElement('div');
            track.className = 'stats-bar-track';
            const fill = document.createElement('div');
            fill.className = 'stats-bar-fill';
            fill.style.width = `${barWidth}%`;
            fill.style.backgroundColor = TIER_COLORS[avgTier];
            track.appendChild(fill);

            const meta = document.createElement('span');
            meta.className = 'stats-bar-meta';
            const countText = document.createElement('span');
            countText.textContent = String(g.count);
            meta.appendChild(countText);
            meta.appendChild(createTierPill(avgTier));

            row.appendChild(label);
            row.appendChild(track);
            row.appendChild(meta);
            genreChartEl.appendChild(row);
        });
    }

    // 4. Render Best & Lowest Rated Genres (disjoint split so no duplicates)
    const minHint = effectiveMin > 1 ? ` (min. ${effectiveMin} Spiele)` : '';
    if (bestTitleEl) {
        bestTitleEl.innerHTML = '';
        bestTitleEl.appendChild(document.createTextNode(currentGenreFilter === 'all' ? '🏆 Beste Genres' : '🏆 Beste Co-Genres'));
        if (minHint) {
            const sub = document.createElement('span');
            sub.className = 'stats-card-subtitle';
            sub.textContent = minHint;
            bestTitleEl.appendChild(sub);
        }
    }
    if (worstTitleEl) {
        worstTitleEl.innerHTML = '';
        worstTitleEl.appendChild(document.createTextNode(currentGenreFilter === 'all' ? '📉 Niedrigste Genres' : '📉 Niedrigste Co-Genres'));
        if (minHint) {
            const sub = document.createElement('span');
            sub.className = 'stats-card-subtitle';
            sub.textContent = minHint;
            worstTitleEl.appendChild(sub);
        }
    }

    const bestCount = Math.min(5, Math.ceil(sortedBest.length / 2));
    const bestSlice = sortedBest.slice(0, bestCount);
    const bestNames = new Set(bestSlice.map(g => g.genre));
    const worstSlice = [...rankingPool]
        .filter(g => !bestNames.has(g.genre))
        .sort((a, b) => a.avg - b.avg || b.count - a.count || a.genre.localeCompare(b.genre, 'de'))
        .slice(0, 5);

    const renderRankingList = (container, items) => {
        container.innerHTML = '';
        if (items.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'stats-empty';
            empty.textContent = 'Nicht genug bewertete Genres';
            container.appendChild(empty);
            return;
        }
        items.forEach(g => {
            const avgTier = scoreToTier(g.avg);
            const row = document.createElement('div');
            row.className = 'stats-ranking-row';
            row.title = `Nach "${g.genre}" filtern`;
            row.addEventListener('click', () => filterByGenre(g.genre));

            const left = document.createElement('div');
            left.className = 'stats-ranking-left';
            const name = document.createElement('span');
            name.className = 'stats-ranking-name';
            name.textContent = `${getGenreEmoji(g.genre)} ${g.genre}`;
            left.appendChild(name);

            const right = document.createElement('div');
            right.className = 'stats-ranking-right';
            const count = document.createElement('span');
            count.className = 'stats-ranking-count';
            count.textContent = `${g.avg.toFixed(1)} · (${g.count})`;
            right.appendChild(count);
            right.appendChild(createTierPill(avgTier));

            row.appendChild(left);
            row.appendChild(right);
            container.appendChild(row);
        });
    };

    renderRankingList(bestGenresEl, bestSlice);
    renderRankingList(worstGenresEl, worstSlice);
}

function filterGames(year) {
    currentYearFilter = year || 'all';
    applyFilters(true);
}

function filterByGenre(genre) {
    currentGenreFilter = genre || 'all';
    applyFilters(true);
}

function initFilters() {
    const toggleBtn = document.getElementById('genre-filter-toggle');
    const clearBtn = document.getElementById('genre-filter-clear');
    const dropdown = document.getElementById('genre-dropdown');
    const searchInput = document.getElementById('genre-search-input');
    const wrapper = document.getElementById('genre-filter-wrapper');

    if (toggleBtn && dropdown && !toggleBtn.dataset.bound) {
        toggleBtn.dataset.bound = 'true';

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (dropdown.style.display === 'none' || !dropdown.style.display) {
                openGenreDropdown();
            } else {
                closeGenreDropdown();
            }
        });

        if (clearBtn) {
            clearBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                filterByGenre('all');
                closeGenreDropdown();
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                renderGenreDropdownOptions(e.target.value);
            });

            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeGenreDropdown();
                    toggleBtn.focus();
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    const firstOption = document.querySelector('#genre-options-list .genre-option');
                    if (firstOption) {
                        firstOption.click();
                    }
                }
            });
        }

        document.addEventListener('click', (e) => {
            if (wrapper && !wrapper.contains(e.target)) {
                closeGenreDropdown();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dropdown.style.display !== 'none') {
                closeGenreDropdown();
            }
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const yearFromUrl = urlParams.get('year');
    const genreFromUrl = urlParams.get('genre');
    const sortFromUrl = urlParams.get('sort');

    if (yearFromUrl) {
        currentYearFilter = yearFromUrl;
    }
    if (genreFromUrl) {
        currentGenreFilter = genreFromUrl;
    }
    if (sortFromUrl && ['score', 'playtime', 'achievements', 'title'].includes(sortFromUrl)) {
        sortGames(sortFromUrl, false);
    }

    applyFilters(false);
}