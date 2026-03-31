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
      themeText.textContent = "Claro";
      themeText.style.opacity = 1;
    }, 200);

    localStorage.setItem('theme','dark');
  } else {
    themeIcon.style.transform = 'rotate(-360deg)';
    themeIcon.textContent = '🌙';
    
    themeText.style.opacity = 0;
    setTimeout(() => {
      themeText.textContent = "Escuro";
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
  themeText.textContent = "Claro";
} else {
  themeIcon.textContent = '🌙';
  themeText.textContent = "Escuro";
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