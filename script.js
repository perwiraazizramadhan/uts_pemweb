
        // Get references to elements
const popupContainer = document.querySelector('.popup-container');
const closePopupButton = document.querySelector('.close-popup-button');

// Loop melalui tombol popup dari 1 hingga 12
for (let i = 1; i <= 12; i++) {
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
    imageUrl: "scoopy.png",
    caption:
      "Desain: Honda Scoopy memiliki desain yang khas dengan tampilan retro-modern yang menarik perhatian. Itu dilengkapi dengan aksen-aksen vintage seperti lampu bulat, jok lebar, dan beberapa ornamen dekoratif. Desainnya yang menarik seringkali menjadi daya tarik utama bagi pembeli.",
    caption2: "asdasdasdad",
  },
  {
    imageUrl: "r6.png",
    caption: "kocok bujang",
    caption2: "asdasdasdad",
  },
  {
    imageUrl: "r6.png",
    caption: "kocok bujang",
    caption2: "asdasdasdad",
  },
  {
    imageUrl: "r6.png",
    caption: "kocok bujang",
    caption2: "asdasdasdad",
  },
  {
    imageUrl: "r6.png",
    caption: "kocok bujang",
    caption2: "asdasdasdad",
  },
  {
    imageUrl: "r6.png",
    caption: "kocok bujang",
    caption2: "asdasdasdad",
  },
  {
    imageUrl: "r6.png",
    caption: "kocok bujang",
    caption2: "asdasdasdad",
  },
  {
    imageUrl: "r6.png",
    caption: "kocok bujang",
    caption2: "asdasdasdad",
  },
  {
    imageUrl: "r6.png",
    caption: "kocok bujang",
    caption2: "asdasdasdad",
  },
  {
    imageUrl: "r6.png",
    caption: "kocok bujang",
    caption2: "asdasdasdad",
  },
  {
    imageUrl: "r6.png",
    caption: "kocok bujang",
    caption2: "asdasdasdad",
  },
  {
    imageUrl: "r6.png",
    caption: "kocok bujang",
    caption2: "asdasdasdad",
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


// Inisialisasi pop-up dengan konten awal (misalnya, indeks 0)
changePopupContent(0);
