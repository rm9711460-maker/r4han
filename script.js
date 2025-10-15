const foods = [
  {
    name: "Croissant",
    img: "Croissant,_whole-1.jpg",
    bahan: [
      "500 gr tepung terigu protein tinggi",
      "10 gr garam",
      "50 gr gula pasir",
      "10 gr ragi instan",
      "300 ml susu dingin",
      "250 gr mentega dingin"
    ],
    cara: [
      "Campur tepung, garam, gula, ragi dan susu, uleni hingga kalis.",
      "Pipihkan adonan, masukkan mentega di tengah lalu lipat dan giling berlapis.",
      "Istirahatkan di kulkas 1 jam lalu bentuk segitiga.",
      "Gulung, fermentasi 30 menit lalu panggang 200°C selama 15-20 menit."
    ],
    deskripsi: "Roti berlapis renyah khas Prancis yang populer untuk sarapan."
  },
  {
    name: "Ratatouille",
    img: "ratatouille.jpg",
    bahan: [
      "1 terong, 1 zucchini, 1 paprika merah, 1 paprika kuning",
      "2 tomat besar, 3 siung bawang putih, 1 bawang bombay",
      "Minyak zaitun, garam, lada, dan herba Provence"
    ],
    cara: [
      "Iris semua sayur tipis-tipis.",
      "Tumis bawang dan bawang putih hingga harum.",
      "Tata sayur melingkar di atas saus tomat dan panggang 180°C selama 40 menit."
    ],
    deskripsi: "Hidangan sayur panggang penuh warna dari Provence yang menyehatkan."
  },
  {
    name: "Crème Brûlée",
    img: "creme-brulee.jpg",
    bahan: [
      "500 ml krim kental",
      "5 kuning telur",
      "100 gr gula",
      "1 sdt ekstrak vanila",
      "Gula tambahan untuk karamelisasi"
    ],
    cara: [
      "Panaskan krim dan vanila, lalu tuang perlahan ke kuning telur dan gula yang sudah dikocok.",
      "Tuang ke ramekin dan panggang bain-marie 150°C selama 40 menit.",
      "Dinginkan, taburi gula, lalu bakar hingga karamelnya terbentuk."
    ],
    deskripsi: "Puding lembut dengan lapisan gula karamel yang renyah di atasnya."
  },
  {
    name: "Coq au Vin",
    img: "Coq-au-Vin-Recipe-3.jpg",
    bahan: [
      "1 ekor ayam potong-potong",
      "200 gr jamur kancing",
      "200 ml wine merah",
      "1 wortel, 1 bawang bombay, 2 siung bawang putih",
      "Minyak zaitun, garam, lada"
    ],
    cara: [
      "Tumis bawang dan ayam hingga kecokelatan.",
      "Tambahkan wine, wortel, dan jamur.",
      "Rebus perlahan selama 1 jam hingga ayam empuk dan kuah mengental."
    ],
    deskripsi: "Ayam dimasak dengan wine merah khas pedesaan Prancis."
  },
  {
    name: "Baguette",
    img: "baguette.jpg",
    bahan: [
      "500 gr tepung terigu protein tinggi",
      "10 gr garam",
      "10 gr ragi instan",
      "300 ml air hangat"
    ],
    cara: [
      "Campur semua bahan hingga kalis.",
      "Fermentasi 1 jam, bentuk panjang, lalu proofing lagi 30 menit.",
      "Panggang suhu 220°C selama 25 menit hingga garing."
    ],
    deskripsi: "Roti panjang renyah di luar dan lembut di dalam, ikon roti Prancis."
  }
];

const container = document.getElementById('menu');
container.innerHTML = foods.map(food => `
  <div class="card">
    <img src="${food.img}" alt="${food.name}">
    <div class="card-content">
      <h2>${food.name}</h2>
      <p>${food.deskripsi}</p>
      <h3>Bahan:</h3>
      <ul>${food.bahan.map(b => `<li>${b}</li>`).join('')}</ul>
      <h3>Cara Membuat:</h3>
      <ol>${food.cara.map(c => `<li>${c}</li>`).join('')}</ol>
    </div>
  </div>
`).join('');