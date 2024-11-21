// Tuition Fee Calculator
function calculateFee() {
    const program = document.getElementById("program").value;
    const credits = document.getElementById("credits").value;
    if (credits) {
        const fee = program * credits;
        document.getElementById("feeResult").textContent = `Your estimated tuition fee is $${fee}.`;
    } else {
        document.getElementById("feeResult").textContent = "Please enter the number of credits.";
    }
}

// Inquiry Form Submission (simulated)
function sendInquiry() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("inquiryResult").textContent = "Thank you for your inquiry! We will contact you shortly.";
    } else {
        document.getElementById("inquiryResult").textContent = "Please fill out all fields.";
    }
}

// Scroll Animation
function scrollAnimation() {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;

        if (sectionTop < triggerBottom) {
            section.classList.add("scroll-animation");
        } else {
            section.classList.remove("scroll-animation");
        }
    });
}

// Trigger scroll animation on page load and scroll
window.addEventListener("scroll", scrollAnimation);
window.addEventListener("load", scrollAnimation);
