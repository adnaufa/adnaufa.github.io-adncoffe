document.addEventListener('DOMContentLoaded', function() {
    // =======================================================
    // 1. FUNGSI MODE GELAP/TERANG
    // =======================================================
    const body = document.body;
    const toggleBtn = document.getElementById('darkModeToggle');
    const darkModeKey = 'adnCoffeeDarkMode';
    const darkModeIcon = document.getElementById('darkModeIcon'); // Ambil elemen icon

    // Fungsi untuk Mengatur Mode
    function setMode(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            darkModeIcon.textContent = '🌙'; // Ganti ke Bulan
            localStorage.setItem(darkModeKey, 'true');
        } else {
            body.classList.remove('dark-mode');
            darkModeIcon.textContent = '☀️'; // Ganti ke Matahari
            localStorage.setItem(darkModeKey, 'false');
        }
    }

    // Cek preferensi saat halaman dimuat
    const savedMode = localStorage.getItem(darkModeKey);
    if (savedMode === 'true') {
        setMode(true);
    } else if (savedMode === null) {
        // Set default mode berdasarkan preferensi sistem user
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setMode(true);
        } else {
            setMode(false);
        }
    } else {
         setMode(false);
    }

    // Event listener untuk tombol toggle
    toggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        setMode(!isDark);
    });


    // =======================================================
    // 2. FUNGSI KEMBALI KE ATAS (Visibility)
    // =======================================================
    const backToTopBtn = document.getElementById("backToTopBtn");

    // Ketika user melakukan scroll, jalankan fungsi scrollFunction
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      // Tampilkan tombol jika posisi scroll di atas 400px
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
}); // <-- Ini adalah kurung kurawal penutup untuk DOMContentLoaded!

// Fungsi untuk menggeser halaman ke paling atas
// Diletakkan sebagai fungsi global agar bisa dipanggil oleh onclick di HTML
function topFunction() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE dan Opera
}


document.getElementById('currentYear').textContent = new Date().getFullYear();
