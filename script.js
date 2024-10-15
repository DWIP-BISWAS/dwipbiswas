
const skills = ["Web Developing", "HTML", "CSS", "Graphics Designing", "JavaScript", "Website Inspecting"];
let i = 0;
let j = 0;
let currentSkill = "";
let typing = true;

const skillsElement = document.getElementById("skills");

function typeSkill() {
    if (typing) {
        if (i < skills.length) {
            if (j < skills[i].length) {
                currentSkill += skills[i][j];
                skillsElement.textContent = "I'm a " + currentSkill;
                j++;
            } else {
                typing = false;
                setTimeout(() => {
                    typing = true;
                    i++;
                    j = 0;
                    currentSkill = "";
                    if (i >= skills.length) {
                        i = 0;
                    }
                }, 2000);
            }
        }
    } else {
        if (j > 0) {
            currentSkill = currentSkill.slice(0, -1);
            skillsElement.textContent = "I'm a " + currentSkill;
            j--;
        } else {
            typing = true;
            i++;
            j = 0;
            currentSkill = "";
            if (i >= skills.length) {
                i = 0;
            }
        }
    }
    setTimeout(typeSkill, 100);
}

typeSkill();
