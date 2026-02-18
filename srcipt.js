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

