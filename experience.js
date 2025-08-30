const experienceData = {
    "experience": [
        {
            "title": "Co-Leader",
            "company": "Kaushik Shresth AI Community",
            "date": "25 Jan 2023 - Present",
            "description": "Administrating the community and helping the community grow.",
            "responsibilities": [
                "Helping people learn about programming and AI.",
                "Helping people with their projects.",
                "Sorting out issues and helping people with their queries.",
                "Since January 2025, I am doing nothing more than an administrator."
            ]
        },
        {
            "title": "Founder & Owner",
            "company": "To be announced",
            "date": "Soon",
            "description": "To be announced",
            "responsibilities": [
                "To be announced"
            ]
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const experienceContainer = document.querySelector('.experience-container');
    experienceData.experience.forEach(exp => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item cyber-frame';
        var content = "";
        if (exp.description === undefined) {
            content = `
                <div class="experience-header">
                    <h2 class="cyber-text">> ${exp.title}</h2>
                    <div class="experience-date">${exp.date}</div>
                </div>
                <h3 class="cyber-text">> ${exp.company}</h3>
                <ul class="cyber-list">
                    ${exp.responsibilities.map(resp => `<li>> ${resp}</li>`).join('')}
                </ul>
            `;
        } else {
            content = `
                <div class="experience-header">
                    <h2 class="cyber-text">> ${exp.title}</h2>
                    <div class="experience-date">${exp.date}</div>
                </div>
                <h3 class="cyber-text">> ${exp.company}</h3>
                <p class="cyber-paragraph">> ${exp.description}</p>
                <ul class="cyber-list">
                    ${exp.responsibilities.map(resp => `<li>> ${resp}</li>`).join('')}
                </ul>
            `;
        }
        experienceItem.innerHTML = content;
        experienceContainer.appendChild(experienceItem);
    });
});



