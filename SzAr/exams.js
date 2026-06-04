document.addEventListener('DOMContentLoaded', () => {
    const navExamsBtn = document.getElementById('nav-exams');
    const navFlashcardsBtn = document.getElementById('nav-flashcards');
    const navMockExamBtn = document.getElementById('nav-mock-exam');
    
    const realExamsContainer = document.getElementById('real-exams-container');
    const flashcardsContainer = document.getElementById('cards-container');
    const mockExamContainer = document.getElementById('mock-exam-container');
    
    const examTabsContainer = document.getElementById('exam-tabs');
    const realExamContent = document.getElementById('real-exam-content');

    let currentExamId = null;

    if (navExamsBtn) {
        navExamsBtn.addEventListener('click', () => {
            navFlashcardsBtn.classList.remove('active');
            navMockExamBtn.classList.remove('active');
            navExamsBtn.classList.add('active');

            flashcardsContainer.style.display = 'none';
            mockExamContainer.style.display = 'none';
            realExamsContainer.style.display = 'block';

            renderExamTabs();
        });
    }

    function renderExamTabs() {
        examTabsContainer.innerHTML = '';
        
        const examKeys = Object.keys(examsData);
        if (examKeys.length === 0) {
            realExamContent.innerHTML = '<p>Még nincsenek feltöltött vizsgák.</p>';
            return;
        }

        examKeys.forEach((key, index) => {
            const btn = document.createElement('button');
            btn.className = 'tab-button';
            btn.innerText = examsData[key].title;
            btn.onclick = () => loadExam(key, btn);
            
            examTabsContainer.appendChild(btn);

            if (index === 0 && !currentExamId) {
                loadExam(key, btn);
            } else if (key === currentExamId) {
                btn.classList.add('active-tab');
            }
        });
    }

    function loadExam(examId, btnElement) {
        currentExamId = examId;
        
        // Update active tab style
        document.querySelectorAll('#exam-tabs .tab-button').forEach(btn => btn.classList.remove('active-tab'));
        if (btnElement) btnElement.classList.add('active-tab');

        const exam = examsData[examId];
        realExamContent.innerHTML = '';

        exam.questions.forEach((q, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.cursor = 'default';
            card.style.marginBottom = '20px';
            
            const qHeader = document.createElement('h3');
            qHeader.innerText = `${index + 1}. Feladat`;
            qHeader.style.color = 'var(--accent)';
            qHeader.style.marginBottom = '10px';
            
            const qText = document.createElement('p');
            qText.innerText = q.question;
            qText.style.fontWeight = 'bold';
            qText.style.marginBottom = '15px';
            
            card.appendChild(qHeader);
            card.appendChild(qText);

            if (q.type === 'multiple-choice') {
                const optionsList = document.createElement('ul');
                optionsList.style.listStyleType = 'none';
                optionsList.style.padding = '0';
                optionsList.style.marginBottom = '15px';

                q.options.forEach(opt => {
                    const li = document.createElement('li');
                    li.style.padding = '8px 12px';
                    li.style.margin = '5px 0';
                    li.style.background = 'var(--surface-0)';
                    li.style.borderRadius = '4px';
                    li.style.border = '1px solid var(--glass-border)';
                    li.innerText = opt;
                    optionsList.appendChild(li);
                });
                card.appendChild(optionsList);
            }

            const solutionDiv = document.createElement('div');
            solutionDiv.style.display = 'block';
            solutionDiv.style.marginTop = '15px';
            solutionDiv.style.padding = '15px';
            solutionDiv.style.background = 'rgba(16, 185, 129, 0.1)';
            solutionDiv.style.borderLeft = '4px solid var(--success)';
            solutionDiv.style.borderRadius = '4px';
            
            const correctAnsHeader = document.createElement('strong');
            correctAnsHeader.innerText = 'Helyes válasz(ok): ';
            correctAnsHeader.style.color = 'var(--success)';
            
            const correctAnsText = document.createElement('span');
            correctAnsText.innerText = q.correctAnswers.join(' | ');
            
            const explHeader = document.createElement('strong');
            explHeader.innerText = '\n\nMagyarázat: \n';
            explHeader.style.display = 'block';
            explHeader.style.marginTop = '10px';
            
            const explText = document.createElement('span');
            explText.innerText = q.explanation;
            
            solutionDiv.appendChild(correctAnsHeader);
            solutionDiv.appendChild(correctAnsText);
            solutionDiv.appendChild(explHeader);
            solutionDiv.appendChild(explText);

            card.appendChild(solutionDiv);

            realExamContent.appendChild(card);
        });
    }
});
