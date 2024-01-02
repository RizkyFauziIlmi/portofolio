// Fungsi untuk menambahkan nol di depan angka jika kurang dari 10
const pad = (angka: number) => {
  return angka < 10 ? "0" + angka : angka;
};

export const detikKeStringWaktu = (detik: number) => {
  // Menghitung jam, menit, dan detik
  const jam = Math.floor(detik / 3600);
  const sisaDetik = detik % 3600;
  const menit = Math.floor(sisaDetik / 60);
  const detikSisa = sisaDetik % 60;

  // Mengonversi ke format string dengan format JJ:MM:DD
  const waktuString = pad(jam) + ":" + pad(menit) + ":" + pad(detikSisa);

  return waktuString;
};