// Global State
let currentLang = 'en';
let currentCategory = null;
let currentApp = null;
let currentTutorial = null;
let currentStepIndex = 0;

// Static Translations for UI Elements
const uiTranslations = {
    heroTitle: { en: "Explore Korea's Best Apps", ko: "한국 최고의 앱 둘러보기", zh: "探索韩国最好的应用" },
    heroSubtitle: { en: "Master essential life services with our easy step-by-step guides.", ko: "쉬운 단계별 가이드로 필수 생활 서비스를 마스터하세요.", zh: "通过我们简单的分步指南掌握基本的生活服务。" },
    categoryTitle: { en: "Select a Category", ko: "카테고리 선택", zh: "选择一个类别" },
    backToCategories: { en: "Back to Categories", ko: "카테고리로 돌아가기", zh: "返回类别" },
    backToApps: { en: "Back to Apps", ko: "앱 목록으로 돌아가기", zh: "返回应用列表" },
    exitTutorial: { en: "Exit Tutorial", ko: "튜토리얼 종료", zh: "退出教程" },
    tutorialsTitle: { en: "Tutorials", ko: "튜토리얼", zh: "教程" },
    stepOf: { en: "Step {0} of {1}", ko: "{1}단계 중 {0}단계", zh: "第 {0} 步，共 {1} 步" },
    prev: { en: "Prev", ko: "이전", zh: "上一步" },
    next: { en: "Next", ko: "다음", zh: "下一步" },
    finish: { en: "Finish", ko: "완료", zh: "完成" },
    dictionary: { en: "Dictionary", ko: "단어 사전", zh: "词典" },
    searchPlaceholder: { en: "Search a word...", ko: "단어 검색...", zh: "搜索一个词..." },
    downloadApp: { en: "Download", ko: "다운로드", zh: "下载" }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Setup Language Listener
    const langSelect = document.getElementById('langSelect');
    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateUI();
    });

    // Initial render
    renderDashboard();
    updateUI();
});

// View Navigation
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
}

function goBackToDashboard() {
    switchView('view-dashboard');
}

function goBackToAppList() {
    switchView('view-app-list');
}

function goBackToAppDetail() {
    switchView('view-app-detail');
}

// Update UI Texts
function updateUI() {
    // Update Static Texts
    document.getElementById('heroTitle').textContent = uiTranslations.heroTitle[currentLang];
    document.getElementById('heroSubtitle').textContent = uiTranslations.heroSubtitle[currentLang];
    document.getElementById('categoryTitle').textContent = uiTranslations.categoryTitle[currentLang];
    document.getElementById('lblBackToList').textContent = uiTranslations.backToCategories[currentLang];
    document.getElementById('lblBackToApps').textContent = uiTranslations.backToApps[currentLang];
    document.getElementById('lblExitTutorial').textContent = uiTranslations.exitTutorial[currentLang];
    document.getElementById('lblTutorialsTitle').textContent = uiTranslations.tutorialsTitle[currentLang];
    document.getElementById('modalTitle').textContent = uiTranslations.dictionary[currentLang];
    document.getElementById('glossarySearch').placeholder = uiTranslations.searchPlaceholder[currentLang];
    
    // Re-render current view to reflect language changes
    if(document.getElementById('view-dashboard').classList.contains('active')) renderDashboard();
    if(document.getElementById('view-app-list').classList.contains('active')) renderAppList(currentCategory);
    if(document.getElementById('view-app-detail').classList.contains('active')) renderAppDetail(currentApp);
    if(document.getElementById('view-tutorial').classList.contains('active')) renderTutorialStep();
    if(document.getElementById('glossaryModal').classList.contains('active')) renderGlossary();
}

// Render Dashboard (Categories)
function renderDashboard() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = '';
    
    const icons = {
        'second_hand': '♻️',
        'shopping': '🛍️',
        'delivery': '🍔',
        'transportation': '🚕'
    };

    appData.categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => openCategory(cat.id);
        
        card.innerHTML = `
            <div class="category-icon">${icons[cat.id] || '📱'}</div>
            <div class="category-name">${cat.name[currentLang]}</div>
        `;
        grid.appendChild(card);
    });
}

function openCategory(categoryId) {
    currentCategory = categoryId;
    renderAppList(categoryId);
    switchView('view-app-list');
}

// Render App List
function renderAppList(categoryId) {
    const container = document.getElementById('appListContainer');
    container.innerHTML = '';
    
    const catName = appData.categories.find(c => c.id === categoryId).name[currentLang];
    document.getElementById('appListTitle').textContent = catName;

    const apps = appData.apps.filter(a => a.category_id === categoryId);
    
    apps.forEach(app => {
        const card = document.createElement('div');
        card.className = 'app-card';
        card.onclick = () => openAppDetail(app);
        
        card.innerHTML = `
            <img src="${app.icon_url}" alt="${app.name}">
            <div class="app-info">
                <h3>${app.name}</h3>
                <p>${app.tutorials.length} ${uiTranslations.tutorialsTitle[currentLang]}</p>
            </div>
            <div class="app-chevron">›</div>
        `;
        container.appendChild(card);
    });
}

function openAppDetail(app) {
    currentApp = app;
    renderAppDetail(app);
    switchView('view-app-detail');
}

// Render App Detail
function renderAppDetail(app) {
    const header = document.getElementById('appDetailHeader');
    header.innerHTML = `
        <img src="${app.icon_url}" alt="${app.name}">
        <div>
            <h2>${app.name}</h2>
            <div class="download-links">
                <a href="${app.download_links.android}" target="_blank" class="btn-download" onclick="event.stopPropagation()">Android</a>
                <a href="${app.download_links.ios}" target="_blank" class="btn-download" onclick="event.stopPropagation()">iOS</a>
            </div>
        </div>
    `;

    const tutList = document.getElementById('tutorialListContainer');
    tutList.innerHTML = '';
    
    app.tutorials.forEach(tut => {
        const item = document.createElement('div');
        item.className = 'tutorial-item';
        item.onclick = () => startTutorial(tut);
        item.innerHTML = `
            <span>${tut.title[currentLang]}</span>
            <span>▶</span>
        `;
        tutList.appendChild(item);
    });
}

// Tutorial Viewer Logic
function startTutorial(tutorial) {
    currentTutorial = tutorial;
    currentStepIndex = 0;
    renderTutorialStep();
    switchView('view-tutorial');
}

function renderTutorialStep() {
    if(!currentTutorial) return;
    
    const step = currentTutorial.steps[currentStepIndex];
    const totalSteps = currentTutorial.steps.length;

    // Image & Highlight
    document.getElementById('tutorialImage').src = step.image_url;
    
    const highlight = document.getElementById('highlightBox');
    if(step.highlight_area) {
        highlight.style.display = 'block';
        highlight.style.left = step.highlight_area.x + '%';
        highlight.style.top = step.highlight_area.y + '%';
        highlight.style.width = step.highlight_area.width + '%';
        highlight.style.height = step.highlight_area.height + '%';
    } else {
        highlight.style.display = 'none';
    }

    // Text Content
    document.getElementById('tutorialDesc').textContent = step.description[currentLang];
    
    let stepText = uiTranslations.stepOf[currentLang].replace('{0}', currentStepIndex + 1).replace('{1}', totalSteps);
    document.getElementById('stepIndicator').textContent = stepText;

    // Buttons
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    
    btnPrev.textContent = uiTranslations.prev[currentLang];
    btnPrev.disabled = currentStepIndex === 0;
    
    if(currentStepIndex === totalSteps - 1) {
        btnNext.textContent = uiTranslations.finish[currentLang];
    } else {
        btnNext.textContent = uiTranslations.next[currentLang];
    }
}

function nextStep() {
    if(currentStepIndex < currentTutorial.steps.length - 1) {
        currentStepIndex++;
        renderTutorialStep();
    } else {
        goBackToAppDetail(); // Finish
    }
}

function prevStep() {
    if(currentStepIndex > 0) {
        currentStepIndex--;
        renderTutorialStep();
    }
}

// Glossary Modal Logic
function openGlossary() {
    document.getElementById('glossaryModal').classList.add('active');
    renderGlossary();
}

function closeGlossary(e) {
    if (e.target.id === 'glossaryModal' || e.target.classList.contains('modal-close')) {
        document.getElementById('glossaryModal').classList.remove('active');
    }
}

function renderGlossary(filterText = '') {
    const list = document.getElementById('glossaryList');
    list.innerHTML = '';
    
    const lowerFilter = filterText.toLowerCase();
    const filtered = appData.glossary.filter(item => {
        return item.ko.toLowerCase().includes(lowerFilter) || 
               item.en.toLowerCase().includes(lowerFilter) || 
               item.zh.toLowerCase().includes(lowerFilter);
    });

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'glossary-item';
        div.innerHTML = `
            <div class="glossary-ko">${item.ko}</div>
            <div class="glossary-trans">${currentLang === 'zh' ? item.zh : item.en}</div>
        `;
        list.appendChild(div);
    });
}

function filterGlossary() {
    const text = document.getElementById('glossarySearch').value;
    renderGlossary(text);
}
