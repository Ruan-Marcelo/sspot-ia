const themeBtn = document.getElementById('themeToggleBtn');
const themeIcon = themeBtn.querySelector('.theme-icon');
const themeText = themeBtn.querySelector('.theme-text');

function toggleTheme(animated=true){
  document.body.classList.toggle('dark-theme');

  if(document.body.classList.contains('dark-theme')){
    themeIcon.style.transform = 'rotate(360deg)';
    themeIcon.textContent = '☀️';
    
    themeText.style.opacity = 0;
    setTimeout(() => {
      themeText.style.opacity = 1;
    }, 200);

    localStorage.setItem('theme','dark');
  } else {
    themeIcon.style.transform = 'rotate(-360deg)';
    themeIcon.textContent = '🌙';
    
    themeText.style.opacity = 0;
    setTimeout(() => {
      themeText.style.opacity = 1;
    }, 200);

    localStorage.setItem('theme','light');
  }

  setTimeout(() => {
    themeIcon.style.transform = 'rotate(0deg)';
  }, 500);
}

if(localStorage.getItem('theme') === 'dark'){
  document.body.classList.add('dark-theme');
  themeIcon.textContent = '☀️';
} else {
  themeIcon.textContent = '🌙';
}

themeBtn.addEventListener('click', () => toggleTheme());

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const links = document.querySelectorAll(".custom-link");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active-link");
  }
});

//animação about.html
const faders = document.querySelectorAll(".fade-in");

const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".img-click").forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src;

    document.body.style.overflow = "hidden";
  });
});

// fechar no X
document.querySelector(".close").onclick = fecharModal;

// fechar tocando fora
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    fecharModal();
  }
});

function fecharModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}