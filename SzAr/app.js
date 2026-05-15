document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards-container");
    const categoryList = document.getElementById("category-list");
    const totalCardsSpan = document.getElementById("total-cards");

    let currentCategory = "Összes";
    let knownCards = JSON.parse(localStorage.getItem('knownCards')) || [];
    const hideKnownCheckbox = document.getElementById("hide-known-checkbox");

    // Ha a window.cardsData valamiért nem töltődött be
    if (!window.cardsData) {
        cardsContainer.innerHTML = "<p>Nincsenek elérhető kártyák a data.js fájlban.</p>";
        return;
    }

    // Kategóriák kigyűjtése
    const categories = ["Összes", ...new Set(window.cardsData.map(card => card.topic))];

    // Sidebar kategóriák renderelése
    categories.forEach(category => {
        const li = document.createElement("li");
        li.textContent = category;
        if (category === "Összes") li.classList.add("active");
        
        li.addEventListener("click", () => {
            document.querySelectorAll(".sidebar li").forEach(el => el.classList.remove("active"));
            li.classList.add("active");
            currentCategory = category;
            renderCards();
        });

        categoryList.appendChild(li);
    });
    
    // Szűrés változás
    if (hideKnownCheckbox) {
        hideKnownCheckbox.addEventListener("change", () => {
            renderCards();
        });
    }

    // Kártyák renderelése
    function renderCards() {
        cardsContainer.innerHTML = "";
        
        let filteredCards = window.cardsData.filter(c => {
            if (currentCategory !== "Összes" && c.topic !== currentCategory) return false;
            if (hideKnownCheckbox && hideKnownCheckbox.checked && knownCards.includes(c.id)) return false;
            return true;
        });

        totalCardsSpan.textContent = filteredCards.length;

        filteredCards.forEach(card => {
            const cardEl = document.createElement("div");
            cardEl.classList.add("card");
            
            if (knownCards.includes(card.id)) {
                cardEl.classList.add("known");
            }

            // Fejléc (Kategória és Pipa)
            const headerEl = document.createElement("div");
            headerEl.classList.add("card-header");

            const catEl = document.createElement("div");
            catEl.classList.add("card-category");
            catEl.textContent = card.topic;
            
            const btnKnown = document.createElement("button");
            btnKnown.classList.add("btn-known");
            btnKnown.innerHTML = "&#10003;"; // Unicode checkmark
            btnKnown.title = "Megjelölés tudottként";
            
            if (knownCards.includes(card.id)) {
                btnKnown.classList.add("active");
            }
            
            btnKnown.addEventListener("click", () => {
                if (knownCards.includes(card.id)) {
                    knownCards = knownCards.filter(id => id !== card.id);
                    btnKnown.classList.remove("active");
                    cardEl.classList.remove("known");
                } else {
                    knownCards.push(card.id);
                    btnKnown.classList.add("active");
                    cardEl.classList.add("known");
                }
                localStorage.setItem('knownCards', JSON.stringify(knownCards));
                
                if (hideKnownCheckbox && hideKnownCheckbox.checked) {
                    renderCards(); // Újra-renderelés ha el kell tűnnie
                }
            });
            
            headerEl.appendChild(catEl);
            headerEl.appendChild(btnKnown);

            // Kérdés
            const qEl = document.createElement("div");
            qEl.classList.add("card-question");
            qEl.textContent = card.question;

            // Gombok
            const btnAnswer = document.createElement("button");
            btnAnswer.classList.add("card-btn");
            btnAnswer.textContent = "Mutasd a választ";

            const btnExplain = document.createElement("button");
            btnExplain.classList.add("card-btn");
            btnExplain.textContent = "Miért? (Indoklás)";

            const btnMonkey = document.createElement("button");
            btnMonkey.classList.add("card-btn", "monkey-btn");
            btnMonkey.textContent = "Monkey brain (Egyszerűen)";

            // Gombokhoz tartozó tartalom
            const aEl = document.createElement("div");
            aEl.classList.add("card-answer");
            aEl.textContent = card.answer;

            const eEl = document.createElement("div");
            eEl.classList.add("card-explanation");
            eEl.innerHTML = "<strong>Magyarázat a jegyzetből:</strong><br>" + card.explanation;

            const mEl = document.createElement("div");
            mEl.classList.add("card-monkey-brain");
            mEl.innerHTML = "<strong>Közérthetően:</strong><br>" + (card.monkeyExplanation ? card.monkeyExplanation : "<em>Erre a kártyára még nem készült el a hétköznapi magyarázat...</em>");

            // Eseménykezelők
            btnAnswer.addEventListener("click", () => {
                aEl.classList.toggle("show");
                btnAnswer.textContent = aEl.classList.contains("show") ? "Válasz elrejtése" : "Mutasd a választ";
            });

            btnExplain.addEventListener("click", () => {
                eEl.classList.toggle("show");
                btnExplain.textContent = eEl.classList.contains("show") ? "Indoklás elrejtése" : "Miért? (Indoklás)";
            });

            btnMonkey.addEventListener("click", () => {
                mEl.classList.toggle("show");
                btnMonkey.textContent = mEl.classList.contains("show") ? "Monkey brain elrejtése" : "Monkey brain (Egyszerűen)";
            });

            cardEl.appendChild(headerEl);
            cardEl.appendChild(qEl);
            cardEl.appendChild(btnAnswer);
            cardEl.appendChild(aEl);
            cardEl.appendChild(btnExplain);
            cardEl.appendChild(eEl);
            cardEl.appendChild(btnMonkey);
            cardEl.appendChild(mEl);

            cardsContainer.appendChild(cardEl);
        });
    }

    // Kezdeti renderelés
    renderCards("Összes");
});
