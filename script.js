document.addEventListener('DOMContentLoaded', function() {
   
    const body = document.body;
    const toggleBtn = document.getElementById('darkModeToggle');
    const darkModeKey = 'adnCoffeeDarkMode';
    const darkModeIcon = document.getElementById('darkModeIcon'); 

    
    function setMode(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            darkModeIcon.textContent = '🌙'; 
            localStorage.setItem(darkModeKey, 'true');
        } else {
            body.classList.remove('dark-mode');
            darkModeIcon.textContent = '☀️';
            localStorage.setItem(darkModeKey, 'false');
        }
    }

   
    const savedMode = localStorage.getItem(darkModeKey);
    if (savedMode === 'true') {
        setMode(true);
    } else if (savedMode === null) {
        
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setMode(true);
        } else {
            setMode(false);
        }
    } else {
         setMode(false);
    }

    
    toggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        setMode(!isDark);
    });



    const backToTopBtn = document.getElementById("backToTopBtn");

   
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
     
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    }

    const form = document.querySelector('#contact-form form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }

        const name = document.getElementById('validationCustom01').value.trim();
        const email = document.getElementById('validationCustom02').value.trim();
        const subject = document.getElementById('validationCustom03').value.trim() || 'Pesan dari situs Adn Coffee';
        const message = document.getElementById('validationCustom04').value.trim();

        const to = 'adncoffe165@gmail.com';
        const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`;
        const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
    });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}


document.getElementById('currentYear').textContent = new Date().getFullYear();

