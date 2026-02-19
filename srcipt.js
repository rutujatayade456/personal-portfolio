// Typing Effect
const text = ["Frontend Developer", "Web Designer", "BCA Student"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
let speed = 100;

function typeEffect() {
    const typing = document.querySelector(".typing");
    currentText = text[i];

    if (!isDeleting) {
        typing.textContent = currentText.substring(0, j++);
        if (j > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typing.textContent = currentText.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(typeEffect, speed);
}

typeEffect();

// Smooth Scroll to Contact
function scrollToContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

// Contact Alert
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully ✅");
    this.reset();
});
// Scroll Animation
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }
    });
});
// Active Navbar Highlight
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-links a");

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(".nav-links a[href*=" + id + "]").classList.add("active");
            });
        }
    });
});
// Animate Skills
window.addEventListener("scroll", () => {
    const skills = document.querySelectorAll(".progress");

    skills.forEach(skill => {
        const position = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if(position < screenPosition){
            skill.style.width = skill.getAttribute("style").split(":")[1];
        }
    });
});
