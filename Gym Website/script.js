document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "rgba(10, 10, 10, 0.95)";
      header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
      header.style.background = "rgba(10, 10, 10, 0.8)";
      header.style.boxShadow = "none";
    }
  });

  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Check if the link is an internal anchor
      if (this.hash !== "") {
        e.preventDefault();
        const targetId = this.hash;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for sticky header
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Jab user scroll karke facilities section pe jaye toh cards thoda move honge
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // trainer cards aur testimonial cards
  const cards = document.querySelectorAll(
    ".facility-card, .plan-card, .trainer-card, .testimonial-card",
  );
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
  });

  console.log("Gym Website Scripts Active!");
});

function toggleModal() {
  const modal = document.getElementById("loginModal");
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;
  const phone = document.getElementById("userPhone").value;
  const msgBox = this.querySelector("textarea");
  const message = msgBox ? msgBox.value : "";

  const newLead = {
    name: name,
    email: email,
    phone: phone,
    message: message,
    time: new Date().toISOString(),
  };

  let existingLeads = localStorage.getItem("hexGymLeads");
  let leadsArr = existingLeads ? JSON.parse(existingLeads) : [];
  leadsArr.push(newLead);
  localStorage.setItem("hexGymLeads", JSON.stringify(leadsArr));

  console.log("naya lead aaya:", newLead);

  alert(
    "Thanks " +
      name +
      "! Humne aapki details receive kar li hai, jaldi contact karenge.",
  );
  this.reset();
});

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const parentItem = btn.parentElement;
    const isAlreadyOpen = parentItem.classList.contains("open");

    for (let i = 0; i < faqButtons.length; i++) {
      faqButtons[i].parentElement.classList.remove("open");
    }

    if (!isAlreadyOpen) {
      parentItem.classList.add("open");
    }
  });
});
