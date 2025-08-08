const dialog = [
  "Haii Adindaaa",
  "Kemarin kan aku ada bilang kamu menang yaa",
  "Jadii, aku mau kasih hadiahh buat kamuu",
  "apakah kamu udah siapp??",
];

let index = 0;

function nextDialog() {
  const dialogText = document.getElementById("dialog-text");

  if (index < dialog.length) {
    dialogText.textContent = dialog[index];
    index++;
  } else if (index === dialog.length) {
    dialogText.textContent = "Klik next untuk hadiahnya yaaa!";
    index++; // supaya masuk ke tahap redirect di klik berikutnya
  } else {
    // Ini klik ke-3 ➜ redirect ke halaman hadiah
    window.location.href = "Hadiah.html";
  }
}

