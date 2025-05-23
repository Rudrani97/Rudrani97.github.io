document.addEventListener('DOMContentLoaded', () => {
    const typingTexts = document.querySelectorAll('.typing-text');
    let currentIndex = 0;

    // Initially hide all text
    typingTexts.forEach(text => {
        text.style.opacity = '0';
        text.setAttribute('data-text', text.textContent);
        text.textContent = '';
    });

    function typeText(element, text, index) {
        if (index < text.length) {
            element.style.opacity = '1';
            element.textContent = text.substring(0, index + 1);
            setTimeout(() => typeText(element, text, index + 1), 100);
        } else {
            currentIndex++;
            if (currentIndex < typingTexts.length) {
                setTimeout(() => {
                    typeText(typingTexts[currentIndex], typingTexts[currentIndex].getAttribute('data-text'), 0);
                }, 1000);
            }
        }
    }

    // Start typing animation
    if (typingTexts.length > 0) {
        typeText(typingTexts[0], typingTexts[0].getAttribute('data-text'), 0);
    }
});