document.addEventListener('DOMContentLoaded', () => {
    const sidebarMenu = document.getElementById('sidebar-menu');
    const questionsContainer = document.getElementById('questions-container');
    const examTitle = document.getElementById('exam-title');
    const examSubtitle = document.getElementById('exam-subtitle');

    function safeHTML(str) {
        if (!str) return '';
        let s = String(str)
            .replace(/<b>/gi, '___B___')
            .replace(/<\/b>/gi, '___/B___')
            .replace(/<br>/gi, '___BR___')
            .replace(/<i>/gi, '___I___')
            .replace(/<\/i>/gi, '___/I___');
        s = s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        s = s.replace(/___B___/g, '<b>')
             .replace(/___\/B___/g, '</b>')
             .replace(/___BR___/g, '<br>')
             .replace(/___I___/g, '<i>')
             .replace(/___\/I___/g, '</i>');
        return s;
    }

    // Inicializáljuk az oldalsávot
    function renderSidebar() {
        let html = '<a href="#" class="exam-link puska-btn" id="puska-btn">📚 Összefoglaló Puska</a>';
        for (const [year, exams] of Object.entries(examData)) {
            html += `<div class="year-group">
                        <div class="year-title">${year}</div>`;
            
            exams.forEach((exam, index) => {
                html += `<a href="#" class="exam-link" data-year="${year}" data-index="${index}">${safeHTML(exam.title)}</a>`;
            });
            
            html += `</div>`;
        }
        sidebarMenu.innerHTML = html;

        // Puska gomb eseménykezelője
        document.getElementById('puska-btn').addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.exam-link').forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            renderCheatSheet();
        });

        // Eseménykezelők a linkekre
        document.querySelectorAll('.exam-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.exam-link').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');

                const year = e.target.getAttribute('data-year');
                const index = e.target.getAttribute('data-index');
                loadExam(year, index);
            });
        });
    }

    // Betölt egy vizsgát
    function loadExam(year, index) {
        const exam = examData[year][index];
        examTitle.textContent = `${year} - ${exam.title}`;
        examSubtitle.textContent = `Összesen ${exam.questions.length} feladat`;
        
        let html = '';

        // Kérdések kategorizálása
        const theoryQuestions = exam.questions.filter(q => q.type === 'theory');
        const tfQuestions = exam.questions.filter(q => q.type === 'true-false');
        const calcQuestions = exam.questions.filter(q => q.type === 'calculation');

        const renderQuestion = (q, i) => {
            let cardHtml = `<div class="card" id="q-${q.id}">`;
            cardHtml += `<div class="question-text"><b>${i + 1}.</b> ${safeHTML(q.text)}</div>`;

            if (q.type === 'calculation') {
                cardHtml += `<div class="options-grid" id="options-${q.id}">`;
                ['a', 'b', 'c', 'd'].forEach(opt => {
                    const isCorrect = (opt === q.correctOption) ? 'correct static-correct' : '';
                    cardHtml += `<div class="option-btn ${isCorrect}"><span class="option-letter">${opt})</span> ${safeHTML(q.options[opt])}</div>`;
                });
                cardHtml += `</div>`;
            } else if (q.type === 'true-false') {
                cardHtml += `<div class="options-grid true-false-grid" id="options-${q.id}">`;
                ['i', 'h'].forEach(opt => {
                    const label = (opt === 'i') ? 'Igaz' : 'Hamis';
                    const isCorrect = (opt === q.correctOption) ? 'correct static-correct' : '';
                    cardHtml += `<div class="option-btn ${isCorrect}"><span class="option-letter">${opt.toUpperCase()}</span> ${label}</div>`;
                });
                cardHtml += `</div>`;
            }

            cardHtml += `<div class="solution-box visible" id="solution-${q.id}">`;
            if (q.formula) cardHtml += `<div class="formula-box">${safeHTML(q.formula)}</div>`;
            if (q.explanation) cardHtml += `<div class="explanation-text">${safeHTML(q.explanation)}</div>`;
            cardHtml += `</div></div>`;
            return cardHtml;
        };

        if (theoryQuestions.length > 0) {
            html += '<h2 class="section-heading">Kifejtős / Elméleti feladatok</h2>';
            theoryQuestions.forEach((q, i) => html += renderQuestion(q, i));
        }
        if (tfQuestions.length > 0) {
            html += '<h2 class="section-heading">Igaz-Hamis Teszt</h2>';
            tfQuestions.forEach((q, i) => html += renderQuestion(q, i));
        }
        if (calcQuestions.length > 0) {
            html += '<h2 class="section-heading">Számolásos Feladatok</h2>';
            calcQuestions.forEach((q, i) => html += renderQuestion(q, i));
        }

        questionsContainer.innerHTML = html;

        if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
            MathJax.typesetPromise([questionsContainer]).catch(function (err) {
                console.error("MathJax rendering error: ", err);
            });
        }
    }

    // Puska megjelenítése
    function renderCheatSheet() {
        examTitle.textContent = '📚 Összefoglaló Puska';
        examSubtitle.textContent = 'Törvények, definíciók és képletek gyűjteménye az összes vizsgából';
        
        let theoryHtml = '<h2 class="section-heading">Törvények és Definíciók</h2>';
        let formulaHtml = '<h2 class="section-heading">Képletgyűjtemény</h2>';
        
        let uniqueTheories = new Set();
        let uniqueFormulas = new Set();
        let theoryIndex = 1;
        let formulaIndex = 1;

        for (const [year, exams] of Object.entries(examData)) {
            exams.forEach(exam => {
                exam.questions.forEach(q => {
                    if (q.type === 'theory') {
                        if (!uniqueTheories.has(q.text)) {
                            uniqueTheories.add(q.text);
                            theoryHtml += `<div class="card">`;
                            theoryHtml += `<div class="question-text"><b>${theoryIndex}.</b> ${safeHTML(q.text)}</div>`;
                            if (q.formula) theoryHtml += `<div class="formula-box">${safeHTML(q.formula)}</div>`;
                            if (q.explanation) theoryHtml += `<div class="explanation-text">${safeHTML(q.explanation)}</div>`;
                            theoryHtml += `</div>`;
                            theoryIndex++;
                        }
                    } else if (q.type === 'calculation') {
                        if (q.formula && !uniqueFormulas.has(q.formula)) {
                            uniqueFormulas.add(q.formula);
                            formulaHtml += `<div class="card">`;
                            // Feladat kontextusként
                            formulaHtml += `<div class="question-text"><b>${formulaIndex}.</b> ${safeHTML(q.text)}</div>`;
                            formulaHtml += `<div class="formula-box" style="font-size: 1.2rem; text-align: center;">${safeHTML(q.formula)}</div>`;
                            formulaHtml += `</div>`;
                            formulaIndex++;
                        }
                    }
                });
            });
        }
        
        if (theoryIndex === 1) theoryHtml = '';
        if (formulaIndex === 1) formulaHtml = '';

        questionsContainer.innerHTML = theoryHtml + formulaHtml;

        if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
            MathJax.typesetPromise([questionsContainer]).catch(function (err) {
                console.error("MathJax rendering error: ", err);
            });
        }
    }

    renderSidebar();
});
