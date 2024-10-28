  function showInfo(type) {
    var title,
      content,
      images = [];
    if (type === "sertifikat") {
      title = "Sertifikat Web Programming";
      content =
        "Berikut adalah sertifikat yang telah saya peroleh:\n1. Sertifikat Juara Harapan 3 Lomba Tingkat Nasional Web Programming di Politeknik Negeri Jember.";
      images = [
        "image/Tim Eskalaber piagam.jpg",
        "image/Tim Eskalaber piagam-nama.jpg",
      ];
    } else if (type === "sertifikat2") {
      title = "Sertifikat Saya";
      content = "Sertifikat Kominfo";
      images = ["image/Sertifikat kominfo_page-0001.jpg"];
    }

    // Set judul dan konten modal
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalContent").innerText = content;

    // Kosongkan gambar sebelumnya
    var modalImagesContainer = document.getElementById("modalImages");
    modalImagesContainer.innerHTML = "";

    // Tambahkan gambar baru dengan gap
    images.forEach(function (imageUrl) {
      var imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.classList.add("w-80", "h-48", "rounded-lg", "object-cover"); // Sesuaikan ukuran gambar
      modalImagesContainer.appendChild(imgElement);
    });

    // Tampilkan modal
    document.getElementById("infoModal").classList.remove("hidden");
  }

  function closeModal() {
    document.getElementById("infoModal").classList.add("hidden");
  }

  // Modal Form
  document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk menutup modal (form)
    function closeModal() {
      document.getElementById("contactForm").classList.add("hidden");
    }

    // Event listener untuk button
    document.getElementById("contactBtn").addEventListener("click", function () {
      const form = document.getElementById("contactForm");
      if (form.classList.contains("hidden")) {
        form.classList.remove("hidden"); // Menampilkan form
      } else {
        form.classList.add("hidden"); // Menyembunyikan form
      }
    });
  });


// Animasi Fade In
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% dari elemen harus terlihat
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi
      }
    });
  }, options);

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  loader.classList.add("fade-out");

  setTimeout(() => {
    loader.style.display = "none"; // Sembunyikan loader setelah animasi
    content.style.display = "block"; // Tampilkan konten website
  }, 500); // Sesuaikan dengan durasi transisi
});



// Animasi Scroll
let lastScrollTop = 0; // Menyimpan posisi scroll terakhir
const scrollElement = document.getElementById("scrollElement");
let isVisible = false; // Menyimpan status visibilitas elemen

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Jika menggulir ke bawah
  if (currentScroll > lastScrollTop) {
    if (!isVisible) {
      // Hanya tampilkan jika tidak terlihat
      scrollElement.style.display = "block"; // Tampilkan elemen
      setTimeout(() => {
        scrollElement.style.opacity = "1"; // Set opasitas untuk tampil
      }, 10); // Delay kecil untuk memicu transisi
      isVisible = true; // Update status visibilitas
    }
  }
  // Jika menggulir ke atas
  else if (currentScroll < lastScrollTop) {
    if (isVisible) {
      // Hanya sembunyikan jika terlihat
      scrollElement.style.opacity = "0"; // Set opasitas untuk sembunyi
      setTimeout(() => {
        scrollElement.style.display = "none"; // Sembunyikan setelah efek hilang
      }, 500); // Waktu yang sama dengan durasi transisi
      isVisible = false; // Update status visibilitas
    }
  }

  // Update posisi scroll terakhir
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Untuk mencegah nilai negatif
});

 // Script untuk toggle menu pada mobile
 document.getElementById('menu-btn').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
});
function typeText(elementId, text, speed = 100) {
    try{
        const element = document.getElementById(elementId);
        let index = 0;
      
        function type() {
          if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
          }
        }
        type();
    } catch(e) {
        console.log(e)
    }
}

typeText('nama', 'Asyam Rafif Aubin Fawwaz', 150);
typeText('sub', 'Beginner Web Development', 100);


window.addEventListener('scroll', function() {
  let scrollPosition = window.pageYOffset;
  let line = document.querySelector('.line');

  // Adjust the amount of movement, e.g., scrollPosition * 0.5 
  line.style.transform = `translateX(${scrollPosition * 0.03}px)`; 
  line.style.width = `${scrollPosition * 1.4}px`;

});


document.addEventListener('scroll', () => {
  // Ambil semua elemen yang memiliki class 'animate-on-scroll'
  const elements = document.querySelectorAll('.animate-on-scroll');
  const screenHeight = window.innerHeight;

  elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;

      // Jika elemen berada dalam viewport, tambahkan class untuk animasi
      if (elementPosition < screenHeight - 100 && elementPosition > 0) {
          element.classList.add('opacity-100', 'scale-y-100');
      } else {
          element.classList.remove('opacity-100', 'scale-y-100');
          element.classList.add('opacity-0', 'scale-y-0');
      }
  });
});

    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenCards = [document.getElementById('hiddenCard1'), document.getElementById('hiddenCard2'), document.getElementById('hiddenCard3')];

    showMoreBtn.addEventListener('click', () => {
        hiddenCards.forEach(card => {
            card.classList.toggle('hidden');
        });

        // Toggle button text between 'Selengkapnya' and 'Sembunyikan', using .trim() to avoid extra spaces issue
        if (showMoreBtn.textContent.trim() === 'Selengkapnya') {
            showMoreBtn.textContent = 'Sembunyikan';
        } else {
            showMoreBtn.textContent = 'Selengkapnya';
        }
    });

