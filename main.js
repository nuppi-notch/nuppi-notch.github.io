// Language (English is in the HTML, Indonesian here) and the hero notch,
// which opens on hover like the real one and shuts when the pointer leaves.
(function () {
  "use strict";

  var id = {
    "nav.features": "Fitur",
    "nav.privacy": "Privasi",
    "cta.short": "Unduh",
    "cta.main": "Unduh untuk Windows",
    "cta.trailer": "Tonton trailer",
    "hero.kicker": "Gratis untuk Windows 10 dan 11",
    "hero.title": "Notch hidup<br>untuk Windows.",
    "hero.lead": "Pulau hitam kecil di atas layarmu. Arahkan kursor ke sana untuk musik dan lirik, timer fokus, to-do, file, clipboard, jadwal salat, dan widget. Kopi si kucing ikut berjaga.",
    "hero.fine": "Gratis · installer 5,5 MB · tanpa akun, tanpa hak admin",
    "trailer.caption": "Semua yang terlihat adalah aplikasinya sendiri, digambar oleh renderer-nya dengan data contoh.",
    "features.kicker": "Isi notch-nya",
    "features.title": "Semua yang kamu cek berkali-kali sehari, cukup sekali arahkan kursor.",
    "f.home.t": "Beranda yang kamu atur sendiri",
    "f.home.p": "Grid berisi jam, hal paling mendesak saat ini (rapat, salat berikutnya, tugas jatuh tempo, lagu yang diputar), dan widget kecil untuk baterai, Wi-Fi, cuaca, CPU, minum, dan lainnya. Geser, ubah ukuran, tambah, dan hapus.",
    "f.music.t": "Musik dengan lirik tersinkron",
    "f.music.p": "Lagu yang sedang diputar dari Spotify, YouTube Music di browser, atau pemutar apa pun yang memakai kontrol media Windows. Geser posisi lagu, acak, volume, dan lirik yang menjaga baris aktif tetap di tengah.",
    "f.focus.t": "Fokus, ditemani suara hujan",
    "f.focus.p": "Ronde pomodoro yang tetap jalan walau PC tidur, grafik tujuh hari, dan streak. Suara hujan, ombak, angin, atau dengung lembut di latar, dibuat lewat kode dan diulang oleh Windows, jadi tidak memakan CPU.",
    "f.todo.t": "To-do yang mengerti bahasamu",
    "f.todo.p": "Ketik “rapat besok 9” atau “call mom in 2h”, waktunya langsung terisi. Tugas berulang, checklist, tambah cepat dari mana saja dengan Ctrl+Alt+N, dan Google Calendar-mu dengan tombol Gabung untuk Meet, Zoom, dan Teams.",
    "f.shelf.t": "Rak untuk file dan clipboard",
    "f.shelf.p": "Jatuhkan file, link, teks, atau gambar ke notch, lalu tarik keluar nanti; filemu tidak pernah dipindah. Riwayat clipboard terenkripsi yang bisa dicari dan melewati password manager, plus snippet untuk ditempel lagi.",
    "f.prayer.t": "Jadwal salat, dihitung di PC-mu",
    "f.prayer.p": "1.151 kota atau lokasimu sendiri, tujuh metode perhitungan, tanggal Hijriah, dan pengingat. Saat Ramadan: hitung mundur imsak dan buka puasa, serta pengingat sahur.",
    "f.widgets.t": "Widget sekilas pandang",
    "f.widgets.p": "Cuaca, pemakaian PC, minggu ini, jam dunia, hitung mundur, fase bulan, dan lainnya. Saat tertutup, notch tetap kecil dan hanya mengintip ketika ada sesuatu.",
    "g.kopi.t": "Kopi si kucing",
    "g.kopi.p": "Berkedip, mengikuti kursor, tidur siang, mendengkur saat dielus, dan bereaksi pada musik, fokus, baterai, dan lainnya.",
    "g.ask.t": "Tanya AI",
    "g.ask.p": "Pilih teks di mana saja lalu tekan Ctrl+Alt+Q untuk meringkas, memperbaiki, menerjemahkan, atau membalas. Pakai provider-mu sendiri: OpenAI, Gemini, Groq, OpenRouter, Ollama.",
    "g.ocr.t": "Salin teks dari layar",
    "g.ocr.p": "Ctrl+Alt+T, tarik kotak, dan teksnya sudah di clipboard. Offline, dengan OCR Windows.",
    "g.notify.t": "Notifikasi",
    "g.notify.p": "Notifikasi Windows tampil di notch, dengan aturan per aplikasi dan mode privasi. Kode sekali pakai disembunyikan dan bisa disalin dengan satu klik.",
    "g.overlay.t": "Overlay sistem",
    "g.overlay.p": "Volume, kecerahan, Caps Lock, bahasa input, charger, Wi-Fi, dan headphone, tampil di tempat matamu sudah melihat.",
    "g.looks.t": "Tampilan sesukamu",
    "g.looks.p": "Island atau mengambang, mode minimal, Glass, warna aksen, bahasa Indonesia atau Inggris. Semua pengaturan langsung berlaku.",
    "light.kicker": "Ringan dari awal",
    "light.title": "Native, kecil, dan diam saat tidak dilihat.",
    "s.size": "ukuran aplikasi",
    "s.mem": "memori saat diam",
    "s.cpu": "CPU saat diam",
    "s.web": "web view",
    "light.note": "Ditulis dengan Go dan digambar dengan Direct2D. Tanpa Electron, tanpa WebView, tanpa polling di latar.",
    "privacy.kicker": "Privasi",
    "privacy.title": "Datamu tetap di PC-mu.",
    "p.1": "Tanpa akun, tanpa analytics, tanpa telemetri.",
    "p.2": "Riwayat clipboard, chat, dan API key dienkripsi dengan DPAPI Windows.",
    "p.3": "Jaringan hanya dipakai oleh fitur yang kamu nyalakan: lirik, cuaca, kalender, Tanya AI, dan cek update.",
    "p.4": "Setiap fitur bisa dimatikan sepenuhnya, dan datamu bisa diekspor atau dihapus dari Pengaturan.",
    "dl.title": "Taruh Kopi di atas layarmu.",
    "dl.p": "Gratis untuk Windows 10 (1809 ke atas) dan Windows 11. Installer-nya per pengguna, dan Nuppi mengecek update sendiri.",
    "dl.smartscreen": "Build-nya belum ditandatangani, jadi SmartScreen mungkin memperingatkan: pilih Info selengkapnya, lalu Tetap jalankan. Setiap rilis mencantumkan SHA-256-nya.",
    "foot.releases": "Rilis",
    "foot.formerly": "Dulu bernama Atap"
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var en = {};
  nodes.forEach(function (n) { en[n.getAttribute("data-i18n")] = n.innerHTML; });
  var meta = { en: document.title, id: "Nuppi — notch hidup untuk Windows" };

  function apply(lang) {
    var dict = lang === "id" ? id : en;
    nodes.forEach(function (n) {
      var v = dict[n.getAttribute("data-i18n")];
      if (v != null) n.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.title = meta[lang];
    document.querySelectorAll(".lang [data-l]").forEach(function (s) {
      s.classList.toggle("on", s.getAttribute("data-l") === lang);
    });
  }

  var lang = "en";
  try { lang = localStorage.getItem("lang") || ""; } catch (e) { lang = ""; }
  if (lang !== "en" && lang !== "id") {
    lang = /^id\b/i.test(navigator.language || "") ? "id" : "en";
  }
  apply(lang);

  document.querySelector(".lang").addEventListener("click", function () {
    lang = lang === "en" ? "id" : "en";
    apply(lang);
    try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
  });

  // The notch starts as its closed peek and opens once, like the real one
  // does when the pointer arrives; then it stays open so the page shows
  // what is inside.
  var notch = document.querySelector(".notch");
  if (notch && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    notch.classList.add("shut");
    setTimeout(function () { notch.classList.remove("shut"); }, 900);
  }
})();
