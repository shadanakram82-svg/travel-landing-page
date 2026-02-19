/* ======================
   GSAP INTRO ANIMATIONS
====================== */

gsap.from(".navbar", {
    y: -40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".hero-left > *", {
    x: -80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 0.5
});

gsap.from(".blur-layer", {
    x: -200,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});


/* ======================
   AUTH MODAL LOGIC
====================== */

const loginBtn = document.getElementById("loginBtn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("loginModal");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");
const signupSubmit = document.getElementById("signupSubmit");


/* -------- RESET STATE -------- */
function resetToLogin() {
    signupForm.classList.remove("active");
    loginForm.classList.add
    ("active");

    gsap.set(loginForm, { opacity: 1, x: 0 });
    gsap.set(signupForm, { opacity: 0, x: 30 });
}


/* -------- OPEN MODAL -------- */
loginBtn.addEventListener("click", () => {
    resetToLogin();

    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");

    gsap.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
    );

    gsap.fromTo(
        modal,
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
    );
});


/* -------- CLOSE MODAL -------- */
overlay.addEventListener("click", closeModal);

function closeModal() {
    gsap.to(modal, {
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        onComplete: () => {
            modal.classList.add("hidden");
            overlay.classList.add("hidden");
        }
    });

    gsap.to(overlay, {
        opacity: 0,
        duration: 0.3
    });
}


/* -------- LOGIN → SIGNUP -------- */
goSignup.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(loginForm, {
        opacity: 0,
        x: -30,
        duration: 0.25,
        onComplete: () => {
            loginForm.classList.remove("active");
            signupForm.classList.add("active");

            gsap.fromTo(
                signupForm,
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.3 }
            );
        }
    });
});


/* -------- SIGNUP → LOGIN -------- */
goLogin.addEventListener("click", (e) => {
    e.preventDefault();
    switchToLogin();
});

function switchToLogin() {
    gsap.to(signupForm, {
        opacity: 0,
        x: 30,
        duration: 0.25,
        onComplete: () => {
            signupForm.classList.remove("active");
            loginForm.classList.add("active");

            gsap.fromTo(
                loginForm,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.3 }
            );
        }
    });
}


/* -------- SIGNUP SUBMIT → AUTO LOGIN -------- */
signupSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    // future backend signup logic yaha aayega
    switchToLogin();
});

/* -------- LOGIN FORM SUBMIT -------- */
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // future backend login logic yaha aayega
    console.log("Login submitted!");
});

/* -------- SIGNUP FORM SUBMIT -------- */
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
});






//   FOR TESTIMONIAL SECTION


const cards = document.querySelectorAll(".testimonial-card");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const closeBtn = document.querySelector(".close-btn");

cards.forEach(card => {
  card.addEventListener("click", () => {
    popup.style.display = "flex";
    popupText.innerText = card.getAttribute("data-review");
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

