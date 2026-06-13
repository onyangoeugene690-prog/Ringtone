document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Dynamic Navigation Active State
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Page 10: Energy Consumption Calculator
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            const watts = parseFloat(document.getElementById('watts').value) || 0;
            const hours = parseFloat(document.getElementById('hours').value) || 0;
            const rate = parseFloat(document.getElementById('rate').value) || 0;

            const dailyKwh = (watts * hours) / 1000;
            const monthlyCost = dailyKwh * 30 * rate;

            document.getElementById('calcResult').innerHTML = `
                <p>Daily Consumption: <strong>${dailyKwh.toFixed(2)} kWh</strong></p>
                <p>Estimated Monthly Cost: <strong>$${monthlyCost.toFixed(2)}</strong></p>
            `;
        });
    }

    // Page 11: Interactive Safety Quiz
    const quizBtn = document.getElementById('quizBtn');
    if (quizBtn) {
        quizBtn.addEventListener('click', () => {
            const q1 = document.querySelector('input[name="q1"]:checked');
            const q2 = document.querySelector('input[name="q2"]:checked');
            let score = 0;

            if (q1 && q1.value === 'water') score++;
            if (q2 && q2.value === 'off') score++;

            document.getElementById('quizResult').innerHTML = `
                <p>You scored <strong>${score}/2</strong>!</p>
                <p>${score === 2 ? 'Excellent! You know your safety protocols.' : 'Please review our safety page to stay safe!'}</p>
            `;
        });
    }
});
