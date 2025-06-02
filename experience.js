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
            "title": "Member, Developer & Mentor",
            "company": "H2I Team",
            "date": "8 Mar 2025 - 4 May 2025",
            "description": "Developing applications and mentoring the leader",
            "responsibilities": [
                "Developed H2I Team website.",
                "Built a portfolio template for every member.",
                "Discovered a flaw of telegram which can be exploited to get the phone number of any user.",
                "Helping and mentoring the leader and members."
            ]
        },
        {
            "title": "Founder & Owner",
            "company": "Rudrani",
            "date": "TBA - Present",
            "description": "Developing useful applications, websites and games.",
            "responsibilities": [
                "Developing a game named 'Treasure Hunters'",
                "Will offer Automation Services to businesses and individuals.",
                "Developing a website for Rudrani.",
                "Will work on a tool named 'Anadrishtam' to hide data in a way which can't be found."
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
