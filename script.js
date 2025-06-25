function showInfo(type) {
    var title, content, images = [];

    if (type === "sertifikat") {
        title = "Sertifikat Web Programming (EPIM)";
        content = "Berikut adalah sertifikat yang telah saya peroleh: Sertifikat Juara Harapan 3 Lomba Tingkat Nasional Web Programming di Politeknik Negeri Jember.";
        images = [
            "image/Tim Eskalaber B sertifikat.jpg",
            "image/Tim Eskalaber piagam-nama.jpg"
        ];
    } else if (type === "sertifikat2") {
        title = "Sertifikat Kominfo";
        content = "Sertifikat Kominfo seminar digital yang menunjukkan partisipasi aktif dalam pengembangan kompetensi digital.";
        images = ["image/Sertifikat kominfo_page-0001.jpg"];
    } else if (type === "sertifikat3") {
        title = "Sertifikat Film Moderasi Beragama (PAISLOVE JATIM)";
        content = "Berikut adalah sertifikat yang telah saya peroleh: Sertifikat Juara 2 Tingkat Provinsi Jawa Timur dalam kompetisi film moderasi beragama.";
        images = ["image/sertifikat-sejati.jpg"];
    } else if (type === "sertifikat4") {
        title = "Piagam Lomba Desain UI/UX";
        content = "Berikut adalah sertifikat yang telah saya peroleh: Sertifikat Juara 3 dalam kompetisi desain UI/UX yang menunjukkan kemampuan dalam merancang antarmuka pengguna.";
        images = ["image/hummatect.jpg"];
    }

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalContent").innerText = content;

    var modalImagesContainer = document.getElementById("modalImages");
    modalImagesContainer.innerHTML = "";

    if (images.length === 1) {
        modalImagesContainer.className = "flex justify-center mb-6";
    } else {
        modalImagesContainer.className = "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6";
    }

    images.forEach(function (imageUrl) {
        var imgContainer = document.createElement("div");
        imgContainer.classList.add("group", "relative", "overflow-hidden", "rounded-xl", "shadow-lg", "hover:shadow-2xl", "transition-all", "duration-300");
        if (images.length === 1) {
            imgContainer.classList.add("max-w-md");
        }

        var imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.classList.add("w-full", "h-64", "object-cover", "transition-transform", "duration-300", "group-hover:scale-105");
        imgElement.alt = "Certificate Image";

        var overlay = document.createElement("div");
        overlay.classList.add("absolute", "inset-0", "bg-gradient-to-t", "from-black/20", "to-transparent", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300");

        imgContainer.appendChild(imgElement);
        imgContainer.appendChild(overlay);
        modalImagesContainer.appendChild(imgContainer);
    });

    var modal = document.getElementById("infoModal");
    var modalContainer = document.getElementById("modalContainer");

    modal.classList.remove("hidden");
    modalContainer.classList.add("modal-enter");

    setTimeout(() => {
        modalContainer.classList.remove("modal-enter");
    }, 300);
}

        function closeModal() {
            var modal = document.getElementById("infoModal");
            var modalContainer = document.getElementById("modalContainer");
            
            // Add exit animation
            modalContainer.classList.add("modal-exit");
            
            // Hide modal after animation completes
            setTimeout(() => {
                modal.classList.add("hidden");
                modalContainer.classList.remove("modal-exit");
            }, 300);
        }

        // Close modal when pressing Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

  // Modal Form
  document.addEventListener("DOMContentLoaded", function () {
    function closeModal() {
      document.getElementById("contactForm").classList.add("hidden");
    }

    document.getElementById("contactBtn").addEventListener("click", function () {
      const form = document.getElementById("contactForm");
      if (form.classList.contains("hidden")) {
        form.classList.remove("hidden"); 
      } else {
        form.classList.add("hidden"); 
      }
    });
  });

  window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loader").classList.add("fade-out");
    }, 1000); // Loader hilang setelah 1 detik
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const options = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.1, // 10% dari elemen harus terlihat
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
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
  }, 500); 
});



// Animasi Scroll
let lastScrollTop = 0; 
const scrollElement = document.getElementById("scrollElement");
let isVisible = false; 

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    if (!isVisible) {
      scrollElement.style.display = "block"; 
      setTimeout(() => {
        scrollElement.style.opacity = "1"; 
      }, 10); 
      isVisible = true; 
    }
  }
  // Jika menggulir ke atas
  else if (currentScroll < lastScrollTop) {
    if (isVisible) {
      scrollElement.style.opacity = "0"; 
      setTimeout(() => {
        scrollElement.style.display = "none"; 
      }, 500); 
      isVisible = false; 
    }
  }

  // Update posisi scroll terakhir
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

 // Script untuk toggle menu pada mobile
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
function typeText(elementId, text, speed = 100) {
  try {
    const element = document.getElementById(elementId);
    let index = 0;

    // Membuat elemen cursor
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    element.appendChild(cursor); // Menambahkan cursor di akhir konten

    function type() {
      if (index < text.length) {
        element.innerHTML = text.substring(0, index + 1) + cursor.outerHTML; // Menambahkan teks dan cursor
        index++;
        setTimeout(type, speed);
      } else {
        cursor.style.animation = 'none'; // Menghentikan animasi blinking setelah selesai mengetik
      }
    }
    type();
  } catch (e) {
    console.log(e);
  }
}

// Mengaktifkan fungsi ketik untuk elemen-elemen
typeText('nama', 'Asyam Rafif Aubin Fawwaz', 150);
typeText('sub', 'Beginner Web Development', 150);


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
const hiddenCards = [
  document.getElementById('hiddenCard1'),
  document.getElementById('hiddenCard2'),
];

showMoreBtn.addEventListener('click', () => {
  hiddenCards.forEach(card => {
    card.classList.toggle('hidden');
  });

  showMoreBtn.textContent = 
    showMoreBtn.textContent.trim() === 'Selengkapnya' 
      ? 'Sembunyikan' 
      : 'Selengkapnya';
});
