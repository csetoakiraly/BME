/**
 * Analízis 2 - Interaktív Tananyag Keretrendszer
 * Verzió: 2.1 (Golyóálló navigáció + Dinamikus haladás)
 */

// Olyan eseménykezelőt használunk, ami navigáció (vissza gomb) után is mindig lefut
window.onpageshow = function(event) {
    initAnalysisApp();
};

function initAnalysisApp() {
    // --- 1. GLOBÁLIS FUNKCIÓK: Éjszakai mód ---
    const themeToggle = document.getElementById('themeToggle');
    const updateThemeUI = () => {
        const isDark = localStorage.getItem('theme') === 'dark';
        document.body.classList.toggle('dark-mode', isDark);
        if (themeToggle) {
            themeToggle.innerText = isDark ? '☀️ Világos mód' : '🌙 Éjszakai mód';
        }
    };

    if (themeToggle) {
        themeToggle.onclick = () => {
            const willBeDark = !document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', willBeDark ? 'dark' : 'light');
            updateThemeUI();
        };
    }
    updateThemeUI();

    // --- 2. HALADÁS SZÁMÍTÁSA ÉS UI FRISSÍTÉSE ---
    const updateGlobalUI = () => {
        const totalChapters = 13;
        let globalCompletedChapters = 0;

        for (let i = 1; i <= totalChapters; i++) {
            // Százalék számítása feladatonkénti pipák alapján
            const isChDone = localStorage.getItem(`chapter_${i}_done`) === 'true';
            const totalTasks = parseInt(localStorage.getItem(`chapter_${i}_total_tasks`)) || 0;
            
            let completedTasksCount = 0;
            for (let t = 0; t < totalTasks; t++) {
                if (localStorage.getItem(`ch_${i}_task_${t}_done`) === 'true') completedTasksCount++;
            }
            
            // Ha a fejezet le van zárva, 100%, különben a pipák aránya
            let percent = isChDone ? 100 : (totalTasks > 0 ? Math.round((completedTasksCount / totalTasks) * 100) : 0);
            
            if (isChDone || percent === 100) globalCompletedChapters++;

            // Dashboard elemek frissítése (ha léteznek az oldalon)
            const ring = document.getElementById(`ring-${i}`);
            const pLabel = document.getElementById(`percent-${i}`);
            const sLabel = document.getElementById(`status-${i}`);

            if (ring) ring.style.strokeDashoffset = 113 - (113 * percent) / 100;
            if (pLabel) pLabel.innerText = percent + "%";
            if (sLabel) {
                if (isChDone || percent === 100) sLabel.innerText = 'Befejezve';
                else if (percent > 0) sLabel.innerText = `Folyamatban (${percent}%)`;
                else sLabel.innerText = 'Nincs elkezdve';
            }

            // Sidebar pipa frissítése
            const checkEl = document.getElementById(`sidebar-check-${i}`);
            if (checkEl) checkEl.style.display = (isChDone || percent === 100) ? 'flex' : 'none';
        }

        // Globális haladás sáv (Sidebar alja)
        const totalPercent = Math.round((globalCompletedChapters / totalChapters) * 100);
        if (document.getElementById('totalPercent')) document.getElementById('totalPercent').innerText = `${totalPercent}%`;
        if (document.getElementById('totalProgressBar')) document.getElementById('totalProgressBar').style.width = `${totalPercent}%`;
    };

    // --- 3. FEJEZET SPECIFIKUS LOGIKA ---
    // Csak akkor fut le, ha a chapter.php-n vagyunk és az adatok elérhetőek
    if (typeof allTasks !== 'undefined' && typeof chapterId !== 'undefined') {
        
        const steppers = document.querySelectorAll('.multi-stepper');
        const taskChecks = document.querySelectorAll('.js-task-done-check');
        const finishBtn = document.getElementById('finishBtn');
        const statusWrapper = document.getElementById('statusWrapper');

        // Feladatok számának rögzítése a Dashboard számára
        localStorage.setItem(`chapter_${chapterId}_total_tasks`, steppers.length);

        // A. Léptetők inicializálása
        // A. Léptetők inicializálása (Kumulatív mód)
        steppers.forEach((stepper, tIdx) => {
            const taskSteps = allTasks[tIdx].steps;
            const content = stepper.querySelector('.js-step-content');
            const progress = stepper.querySelector('.js-progress-fill');
            const indicator = stepper.querySelector('.js-step-indicator');
            const nextBtn = stepper.querySelector('.js-next-btn');
            const prevBtn = stepper.querySelector('.js-prev-btn');

            let savedStep = parseInt(localStorage.getItem(`ch_${chapterId}_task_${tIdx}_step`)) || 1;
            let currentStep = Math.min(savedStep - 1, taskSteps.length - 1);

            const updateStepper = () => {
                if (!content) return;

                // Üresre töröljük, majd felépítjük az összes eddigi lépést
                let accumulatedHTML = "";
                for (let i = 0; i <= currentStep; i++) {
                    accumulatedHTML += `
                        <div class="step-item animate-fade-in" style="margin-bottom: 25px; padding: 15px; border-left: 3px solid var(--main-color); background: rgba(var(--main-color-rgb), 0.05); border-radius: 0 8px 8px 0;">
                            <div style="font-size: 0.8rem; color: var(--main-color); font-weight: bold; margin-bottom: 5px;">${i + 1}. LÉPÉS</div>
                            ${taskSteps[i]}
                        </div>
                    `;
                }
                
                content.innerHTML = accumulatedHTML;

                // UI frissítés
                if (indicator) indicator.innerText = `${currentStep + 1} / ${taskSteps.length}`;
                if (progress) progress.style.width = `${((currentStep + 1) / taskSteps.length) * 100}%`;
                if (prevBtn) prevBtn.disabled = currentStep === 0;
                if (nextBtn) nextBtn.disabled = currentStep === taskSteps.length - 1;

                localStorage.setItem(`ch_${chapterId}_task_${tIdx}_step`, currentStep + 1);
                
                // MathJax renderelés az egész konténerre
                if (window.MathJax && window.MathJax.typesetPromise) {
                    MathJax.typesetPromise([content]).catch(err => console.error(err));
                }
            };

            if (nextBtn) {
                nextBtn.onclick = () => { 
                    if(currentStep < taskSteps.length - 1) { 
                        currentStep++; 
                        updateStepper(); 
                        // Automatikus görgetés az új lépéshez
                        setTimeout(() => {
                            content.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }, 100);
                    }
                };
            }
            if (prevBtn) prevBtn.onclick = () => { if(currentStep > 0) { currentStep--; updateStepper(); }};

            updateStepper();
        });

        // B. Feladat pipák kezelése
        taskChecks.forEach(check => {
            const tIdx = check.dataset.taskIndex;
            const storageKey = `ch_${chapterId}_task_${tIdx}_done`;
            
            check.checked = localStorage.getItem(storageKey) === 'true';
            if (check.checked) check.closest('.task-container').classList.add('is-completed');

            check.onchange = () => {
                localStorage.setItem(storageKey, check.checked);
                check.closest('.task-container').classList.toggle('is-completed', check.checked);
                
                // Ha kiveszünk egy pipát, a fejezet globális befejezését is töröljük
                if (!check.checked) localStorage.removeItem(`chapter_${chapterId}_done`);
                
                updateGlobalUI();
                updateFinishUI();
            };
        });

        // C. Befejezés gomb állapota
        const updateFinishUI = () => {
            const isChapterDone = localStorage.getItem(`chapter_${chapterId}_done`) === 'true';
            if (finishBtn) finishBtn.style.display = isChapterDone ? 'none' : 'block';
            if (statusWrapper) statusWrapper.style.display = isChapterDone ? 'block' : 'none';
        };

        if (finishBtn) {
            finishBtn.onclick = () => {
                localStorage.setItem(`chapter_${chapterId}_done`, 'true');
                updateGlobalUI();
                updateFinishUI();
            };
        }

        const undoBtn = document.getElementById('undoBtn');
        if (undoBtn) {
            undoBtn.onclick = () => {
                localStorage.removeItem(`chapter_${chapterId}_done`);
                updateGlobalUI();
                updateFinishUI();
            };
        }

        updateFinishUI();
    }

    // Kezdő UI frissítés minden oldalon
    updateGlobalUI();
}

// --- 7. WOLFRAMALPHA INTEGRÁCIÓ ---
const wolframBtns = document.querySelectorAll('.js-wolfram-btn');
wolframBtns.forEach(btn => {
    btn.onclick = () => {
        const query = btn.dataset.query;
        // A WolframAlpha bemeneti URL-je
        const url = `https://www.wolframalpha.com/input/?i=${query}`;
        window.open(url, '_blank'); // Megnyitás új lapon
    };
});


document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('theory-menu-toggle');
    const menuList = document.getElementById('theory-menu');

    if (menuBtn && menuList) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Ne záródjon be azonnal
            menuList.classList.toggle('active');
        });

        // Ha mellé kattintunk, záródjon be
        document.addEventListener('click', function() {
            menuList.classList.remove('active');
        });
    }
});
