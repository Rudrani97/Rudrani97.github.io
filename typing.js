const textArray = ["Software Engineer", "Web Developer", "Game Developer", "Cyber Forensic Investigator"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpan = null;

function type() {
    if (!typingSpan) {
        typingSpan = document.querySelector(".typing-text span");
    }

    const currentText = textArray[textArrayIndex];
    const currentChar = currentText.substring(0, charIndex);
    typingSpan.textContent = currentChar;

    if (!isDeleting && charIndex < currentText.length) {
        // Typing
        charIndex++;
        setTimeout(type, typingDelay);
    } else if (isDeleting && charIndex > 0) {
        // Erasing
        charIndex--;
        setTimeout(type, erasingDelay);
    } else if (charIndex === 0 && isDeleting) {
        // Switch to next word
        isDeleting = false;
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, typingDelay);
    } else {
        // Pause at end of word
        isDeleting = true;
        setTimeout(type, newTextDelay);
    }
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    type();

});


