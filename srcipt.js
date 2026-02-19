// ================= TYPING EFFECT =================
const text = ["Frontend Developer", "Web Designer", "BCA Student"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
let speed = 100;

function typeEffect() {
    const typing = document.querySelector(".typing");
    if (!typing) return;

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


// ================= THEME TOGGLE =================
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
}


// ================= SMOOTH SCROLL =================
function scrollToContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}


// ================= CONTACT FORM =================
const form = document.getElementById("contactForm");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Message Sent Successfully ✅");
        this.reset();
    });
}


// ================= SCROLL ANIMATION =================
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


// ================= ACTIVE NAVBAR =================
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-links a");

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove("active"));

            const activeLink = document.querySelector(".nav-links a[href*='" + id + "']");
            if(activeLink){
                activeLink.classList.add("active");
            }
        }
    });
});


// ================= SKILL ANIMATION =================
window.addEventListener("scroll", () => {
    const skills = document.querySelectorAll(".progress");

    skills.forEach(skill => {
        const position = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if(position < screenPosition){
            skill.style.width = skill.getAttribute("data-width");
        }
    });
});


// ================= HAMBURGER MENU =================
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(toggle){
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// ================= SCROLL PROGRESS BAR =================
window.addEventListener("scroll", () => {
    const scrollBar = document.querySelector(".scroll-progress");
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    if(scrollBar){
        scrollBar.style.width = scrolled + "%";
    }
});
