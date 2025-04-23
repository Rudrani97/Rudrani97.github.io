const skillsData = {
    "skills": [
        {
            "category": "Programming Languages",
            "items": [
                {
                    "name": "JavaScript",
                    "icon": "devicon-javascript-plain",
                    "level": 100
                },
                {
                    "name": "Python",
                    "icon": "devicon-python-plain",
                    "level": 85
                },
                {
                    "name": "Java",
                    "icon": "devicon-java-plain",
                    "level": 70
                },
                {
                    "name": "C++",
                    "icon": "devicon-cplusplus-plain",
                    "level": 30
                },
                {
                    "name": "C",
                    "icon": "devicon-c-plain",
                    "level": 35
                }
            ]
        },
        {
            "category": "Web Development",
            "items": [
                {
                    "name": "HTML5",
                    "icon": "devicon-html5-plain",
                    "level": 85
                },
                {
                    "name": "CSS3",
                    "icon": "devicon-css3-plain",
                    "level": 60
                },
                {
                    "name": "NodeJS",
                    "icon": "devicon-nodejs-plain",
                    "level": 90
                },
                {
                    "name": "ExpressJS",
                    "icon": "devicon-express-original",
                    "level": 80
                },
                {
                    "name": "ThreeJS",
                    "icon": "devicon-threejs-original",
                    "level": 10
                },
                {
                    "name": "MongoDB",
                    "icon": "devicon-mongodb-plain",
                    "level": 70
                }
            ]
        },
        {
            "category": "Tools & Technologies",
            "items": [
                {
                    "name": "Firebase",
                    "icon": "devicon-firebase-plain",
                    "level": 80
                },
                {
                    "name": "Godot",
                    "icon": "devicon-godot-plain",
                    "level": 25
                },
                {
                    "name": "Gimp",
                    "icon": "devicon-gimp-plain",
                    "level": 45
                }
            ]
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.querySelector('.skills-container');
    skillsData.skills.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category cyber-frame';
        
        const content = `
            <h2 class="cyber-text">> ${category.category}</h2>
            <div class="skill-grid">
                ${category.items.map(skill => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <i class="${skill.icon}"></i>
                            <span>${skill.name}</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-level" style="--width: ${skill.level}%"></div>
                        </div>
                        <span class="skill-percentage">${skill.level}%</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        categoryDiv.innerHTML = content;
        skillsContainer.appendChild(categoryDiv);
    });
});