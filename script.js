        // Get references to elements
const popupContainer = document.querySelector('.popup-container');
const closePopupButton = document.querySelector('.close-popup-button');

// Loop melalui tombol popup dari 1 hingga 12
for (let i = 1; i <= 13; i++) {
  const popupButton = document.querySelector(`.popup-button${i}`);
  if (popupButton) {
    popupButton.addEventListener('click', function () {
      popupContainer.style.display = 'flex';
      // Tambahkan logika lainnya untuk mengganti konten popup jika diperlukan
    });
  }
}

// Add an event listener to the "Close" button in the popup
closePopupButton.addEventListener('click', function () {
  popupContainer.style.display = 'none';
});


// Data untuk mengganti gambar dan teks
const popupData = [
  {
    imageUrl: "gambar2.webp",
    caption:
      "Desain: Honda Scoopy memiliki desain yang khas dengan tampilan retro-modern yang menarik perhatian. Itu dilengkapi dengan aksen-aksen vintage seperti lampu bulat, jok lebar, dan beberapa ornamen dekoratif. Desainnya yang menarik seringkali menjadi daya tarik utama bagi pembeli.",
    caption2: "ini motor terbaik untuk sks (sistem kebut semalam)",
  },
  {
    imageUrl: "r6.png",
    caption:
      "Yamaha R6 pertama kali diperkenalkan pada tahun 1999 sebagai model yang mengikuti kesuksesan Yamaha YZF-R1. Model ini dirancang untuk balap dan digunakan dalam berbagai kompetisi balap, termasuk kejuaraan Supersport World dan balap jalan raya.",
    caption2: "ini motor terbaik untuk sks (siste kebut semalam)",
  },
  {
    imageUrl: "aerox.png",
    caption:
      "Yamaha Aerox adalah sepeda motor skutik (scooter) yang diproduksi oleh Yamaha Motor Corporation. Aerox merupakan salah satu varian skutik sport yang dikenal dengan desain modern, fitur canggih, dan kinerja yang baik.",
    caption2: "ini motor terbaik untuk sks (siste kebut semalam)",
  },
  {
    imageUrl: "beat.png",
    caption:
      "Honda Beat adalah sepeda motor skutik (scooter) yang diproduksi oleh Honda Motor Co., Ltd. Beat adalah salah satu skutik yang terkenal karena ukurannya yang kecil, ringan, dan hemat bahan bakar. ",
    caption2: "ini motor terbaik untuk sks (siste kebut semalam)",
  },
  {
    imageUrl: "adv.png",
    caption:
      "Honda ADV (sering disebut Honda X-ADV) adalah sepeda motor yang unik dan serbaguna yang diproduksi oleh Honda Motor Co., Ltd. Ini adalah model crossover atau adventure scooter yang menggabungkan elemen-elemen skutik dan sepeda motor petualangan. ",
    caption2: "ini motor terbaik untuk sks (siste kebut semalam)",
  },
  {
    imageUrl: "cbr.png",
    caption:
      "Honda CBR adalah serangkaian sepeda motor sport yang diproduksi oleh Honda Motor Co., Ltd. CBR adalah singkatan dari  sepeda motor dalam seri CBR ini dikenal dengan desain sporty, kinerja tinggi, dan berbagai model yang disesuaikan dengan berbagai kebutuhan pengendara. ",
    caption2: "ini motor terbaik untuk sks (sistem kebut semalam)",
  },
  {
    imageUrl: "nmax.png",
    caption:
      "Yamaha NMAX adalah sepeda motor skutik (scooter) yang diproduksi oleh Yamaha Motor Corporation. NMAX adalah model skutik premium yang dikenal dengan desain elegan, kinerja yang baik, dan beragam fitur canggih.",
    caption2: "ini motor terbaik untuk sks (sistem kebut semalam)",
  },
  {
    imageUrl: "xmax.png",
    caption:
      "Yamaha XMAX adalah sepeda motor skutik mewah dan premium yang diproduksi oleh Yamaha Motor Corporation. Ini adalah salah satu model dalam keluarga Maxi Scooter Yamaha, yang dikenal dengan desain yang elegan, kinerja tinggi, dan berbagai fitur canggih. ",
    caption2: "ini motor terbaik untuk sks (sistem kebut semalam)",
  },
  {
    imageUrl: "r1.png",
    caption:
      "Yamaha YZF-R1 adalah salah satu sepeda motor sport kelas atas yang diproduksi oleh Yamaha Motor Corporation. Ini adalah model yang dirancang untuk kinerja tinggi dan digunakan dalam kompetisi balap, termasuk Kejuaraan Dunia Superbike dan balap road racing.",
    caption2: "ini motor terbaik untuk sks (sistem kebut semalam)",
  },
  {
    imageUrl: "har.png",
    caption:
      "Harley-Davidson adalah produsen sepeda motor ikonik asal Amerika yang didirikan pada tahun 1903. Merek ini dikenal dengan sepeda motor berkubikasi besar, desain klasik, dan budaya kustomisasi yang kuat. Mesin V-Twin khas mereka menghasilkan torsi besar dan karakter unik. Harley-Davidson telah menjadi simbol kebebasan dan petualangan dalam budaya pop Amerika. Merek ini memiliki penggemar yang sangat setia dan komunitas yang besar di seluruh dunia. Meskipun menghadapi perubahan dan tantangan pasar, warisan dan keberadaan ikonik Harley-Davidson terus berlanjut, memengaruhi budaya sepeda motor dan lebih dari itu.",
    caption2: "ini motor terbaik untuk sks (sistem kebut semalam)",
  },
  {
    imageUrl: "vario.png",
    caption:
      "Honda Vario adalah sepeda motor skutik yang diproduksi oleh Honda Motor Co., Ltd. Vario dikenal dengan desain modern, performa yang handal, dan kenyamanan berkendara yang tinggi. Desain Vario mencerminkan gaya yang modern dan ergonomi yang nyaman. Model ini seringkali memiliki fitur-fitur seperti lampu LED, panel instrumen digital, dan peningkatan pada desain bodi yang menghadirkan tampilan yang menarik. Vario seringkali dilengkapi dengan berbagai pilihan mesin, mulai dari mesin 110 cc hingga 150 cc tergantung pada pasar dan modelnya. Mesin-mesin ini dirancang untuk memberikan kombinasi yang baik antara efisiensi bahan bakar dan performa yang baik untuk penggunaan sehari-hari di perkotaan. Sepeda motor ini juga menawarkan kenyamanan berkendara yang tinggi dengan suspensi yang nyaman dan posisi duduk yang ergonomis. Vario seringkali memiliki ruang penyimpanan di bawah jok yang memungkinkan pengendara menyimpan barang-barang pribadi atau helm. Keandalan dan kualitas konstruksi Honda Vario telah memenangkan hati pengendara di seluruh dunia. Mesinnya yang handal dan pemeliharaan yang relatif mudah membuatnya menjadi pilihan yang baik untuk penggunaan sehari-hari. Selain itu, beberapa model Vario dilengkapi dengan fitur-fitur canggih seperti sistem pengereman ABS, sistem kontrol traksi, dan fitur konektivitas Bluetooth. Honda Vario telah menjadi salah satu sepeda motor skutik terpopuler di pasar sepeda motor global dan terus diperbarui dengan teknologi terkini dan peningkatan desain untuk memenuhi tuntutan pengendara masa kini.",
    caption2: "ini motor terbaik untuk sks (sistem kebut semalam)",
  },
  {
    imageUrl: "lexi.png",
    caption:
      "Yamaha Lexi adalah sepeda motor skutik yang diproduksi oleh Yamaha Motor Corporation. Lexi menawarkan kombinasi yang menarik antara desain yang elegan, performa yang handal, dan fitur-fitur canggih. Lexi memiliki desain modern dengan bodi aerodinamis dan tampilan yang menonjol. Model ini seringkali dilengkapi dengan lampu LED dan panel instrumen digital yang canggih untuk memberikan tampilan yang futuristik dan berkelas. Mesinnya biasanya berkapasitas sekitar 125 cc hingga 155 cc, tergantung pada pasar dan modelnya. Mesin ini dirancang untuk memberikan tenaga yang cukup untuk berkendara di berbagai kondisi, baik di perkotaan maupun di luar kota. Lexi juga menawarkan kenyamanan yang tinggi dalam hal posisi duduk yang nyaman, suspensi yang baik, dan ruang penyimpanan yang luas di bawah jok. Fitur-fitur ini membuat Lexi sangat cocok untuk penggunaan sehari-hari. Sejumlah fitur canggih seringkali tersedia, termasuk sistem pengereman ABS, sistem pengisian daya USB, dan fitur-fitur konektivitas yang memungkinkan pengendara terhubung dengan smartphone mereka. Keandalan Yamaha dan reputasi mereka dalam kualitas konstruksi juga membuat Lexi menjadi pilihan yang menarik. Pengendara dapat mengandalkan performa yang handal dan pemeliharaan yang relatif mudah. Lexi telah menjadi salah satu skutik populer di berbagai pasar, terutama di Asia Tenggara. Model ini menawarkan gaya dan kinerja yang mampu memenuhi kebutuhan pengendara yang mencari sepeda motor skutik yang mewah dan praktis. Dengan kombinasi desain elegan, kinerja yang andal, dan fitur-fitur canggih, Yamaha Lexi adalah pilihan menarik dalam kategori skutik premium.",
    caption2: "ini motor terbaik untuk sks (sistem kebut semalam)",
  },
  {
    imageUrl: "lexi.png",
    caption:
      "Yamaha Lexi adalah sepeda motor skutik yang diproduksi oleh Yamaha Motor Corporation. Lexi menawarkan kombinasi yang menarik antara desain yang elegan, performa yang handal, dan fitur-fitur canggih. Lexi memiliki desain modern dengan bodi aerodinamis dan tampilan yang menonjol. Model ini seringkali dilengkapi dengan lampu LED dan panel instrumen digital yang canggih untuk memberikan tampilan yang futuristik dan berkelas. Mesinnya biasanya berkapasitas sekitar 125 cc hingga 155 cc, tergantung pada pasar dan modelnya. Mesin ini dirancang untuk memberikan tenaga yang cukup untuk berkendara di berbagai kondisi, baik di perkotaan maupun di luar kota. Lexi juga menawarkan kenyamanan yang tinggi dalam hal posisi duduk yang nyaman, suspensi yang baik, dan ruang penyimpanan yang luas di bawah jok. Fitur-fitur ini membuat Lexi sangat cocok untuk penggunaan sehari-hari. Sejumlah fitur canggih seringkali tersedia, termasuk sistem pengereman ABS, sistem pengisian daya USB, dan fitur-fitur konektivitas yang memungkinkan pengendara terhubung dengan smartphone mereka. Keandalan Yamaha dan reputasi mereka dalam kualitas konstruksi juga membuat Lexi menjadi pilihan yang menarik. Pengendara dapat mengandalkan performa yang handal dan pemeliharaan yang relatif mudah. Lexi telah menjadi salah satu skutik populer di berbagai pasar, terutama di Asia Tenggara. Model ini menawarkan gaya dan kinerja yang mampu memenuhi kebutuhan pengendara yang mencari sepeda motor skutik yang mewah dan praktis. Dengan kombinasi desain elegan, kinerja yang andal, dan fitur-fitur canggih, Yamaha Lexi adalah pilihan menarik dalam kategori skutik premium.",
    caption2: "ini motor terbaik untuk sks (sistem kebut semalam)",
  },
];

// Fungsi untuk mengganti konten pop-up
function changePopupContent(index) {
  const popupImage = document.querySelector('.popup-content img');
  const popupCaption = document.querySelector('.popup-content .popup-caption');
  const popupCaption2 = document.querySelector(".popup-content .popup-caption2");
  

  if (index >= 0 && index < popupData.length) {
    popupImage.src = popupData[index].imageUrl;
    popupImage.alt = `Image ${index + 1}`;
    popupCaption.textContent = popupData[index].caption;
    popupCaption2.textContent = popupData[index].caption2;
  }
}

// Tambahkan event listener untuk tombol Close
closePopupButton.addEventListener('click', () => {
  // Sembunyikan pop-up atau lakukan tindakan penutupan lainnya
  // (misalnya, mengubah properti CSS display)
});

// Contoh: Ganti konten pop-up ketika tombol tertentu diklik
// Ubah dari getElementsByClassName ke querySelectorAll
const changeButton1 = document.querySelectorAll('.popup-button1');
changeButton1.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(0); // Ganti dengan indeks data yang sesuai
  });
});

const changeButton2 = document.querySelectorAll('.popup-button2');
changeButton2.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(1); // Ganti dengan indeks data yang sesuai
  });
});

const changeButton3 = document.querySelectorAll('.popup-button3');
changeButton3.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(2); // Ganti dengan indeks data yang sesuai
  });
});
const changeButton4 = document.querySelectorAll('.popup-button4');
changeButton4.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(3); // Ganti dengan indeks data yang sesuai
  });
});
const changeButton5 = document.querySelectorAll('.popup-button5');
changeButton5.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(4); // Ganti dengan indeks data yang sesuai
  });
});
const changeButton6 = document.querySelectorAll('.popup-button6');
changeButton6.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(5); // Ganti dengan indeks data yang sesuai
  });
});
const changeButton7 = document.querySelectorAll('.popup-button7');
changeButton7.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(6); // Ganti dengan indeks data yang sesuai
  });
});
const changeButton8 = document.querySelectorAll('.popup-button8');
changeButton8.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(7); // Ganti dengan indeks data yang sesuai
  });
});
const changeButton9 = document.querySelectorAll('.popup-button9');
changeButton9.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(8); // Ganti dengan indeks data yang sesuai
  });
});
const changeButton10 = document.querySelectorAll('.popup-button10');
changeButton10.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(9); // Ganti dengan indeks data yang sesuai
  });
});
const changeButton11 = document.querySelectorAll('.popup-button11');
changeButton11.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(10); // Ganti dengan indeks data yang sesuai
  });
});
const changeButton12 = document.querySelectorAll('.popup-button12');
changeButton12.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(11); // Ganti dengan indeks data yang sesuai
  });
});
const changeButton13 = document.querySelectorAll('.popup-button13');
changeButton13.forEach(button => {
  button.addEventListener('click', () => {
    changePopupContent(12); // Ganti dengan indeks data yang sesuai
  });
});


// Inisialisasi pop-up dengan konten awal (misalnya, indeks 0)
changePopupContent(0);
