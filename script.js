document.addEventListener('DOMContentLoaded', function() {
    

    function populateSelects() {
        const companySizeSelect = document.querySelector('select[name="companySize"]');
        const countrySelect = document.querySelector('select[name="country"]');
        const industrySelect = document.querySelector('select[name="industry"]');

        if (companySizeSelect) {
            const companySizes = ['1-10', '11-50', '51-200', '201-500', '500+'];
            companySizes.forEach(size => {
                const option = document.createElement('option');
                option.value = size;
                option.textContent = size;
                companySizeSelect.appendChild(option);
            });
        }

        if (countrySelect) {
            const countries = ['India', 'USA', 'Canada', 'UK', 'Australia', 'Germany', 'France'];
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country;
                option.textContent = country;
                countrySelect.appendChild(option);
            });
        }

        if (industrySelect) {
            const industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing'];
            industries.forEach(industry => {
                const option = document.createElement('option');
                option.value = industry;
                option.textContent = industry;
                industrySelect.appendChild(option);
            });
        }
    }

    

    populateSelects();
 
});

document.getElementById('caseStudyForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Array of celebration emojis
    const emojis = ['✨', '❄️', '🎉'];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d', '#f7d794'];

    // Create 20 emojis
    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'celebration-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        const duration = Math.random() * 2 + 2;
        emoji.style.animationDuration = duration + 's';
        emoji.style.top = '-' + (Math.random() * 100) + 'px';
        emoji.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), duration * 1000);
    }

    // Create 30 confetti pieces
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 2 + 2;
        confetti.style.animationDuration = duration + 's';
        confetti.style.top = '-' + (Math.random() * 100) + 'px';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), duration * 1000);
    }

   
    const popup = document.getElementById('successPopup');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000); 

    
});