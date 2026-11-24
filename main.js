// Language (English is in the HTML, Indonesian here) and the hero notch,
// which opens once on load like the real one when the pointer arrives.
(function () {
  "use strict";

  var id = {
    "skip": "Lewati ke konten",
    "sim.hint": "Coba: klik tab-nya",
    "nav.day": "Sehari dengan Nuppi",
    "nav.ai": "Tanya AI",
    "nav.bench": "Benchmark",
    "nav.privacy": "Privasi",
    "cta": "Unduh untuk Windows",
    "hero.title": "Notch hidup<br>untuk Windows.",
    "hero.lead": "Pulau hitam kecil di atas layarmu. Arahkan kursor ke sana untuk musik dan lirik, timer fokus, to-do, Tanya AI, file dan clipboard, jadwal salat, serta widget. Kopi si kucing ikut berjaga.",
    "hero.fine": "Gratis · Windows 10 dan 11 · 5,6 MB · tanpa akun",
    "film.note": "36 detik, dipotong mengikuti musik. Semua yang terlihat adalah aplikasinya sendiri, digambar oleh renderer-nya dengan data contoh.",
    "day.title": "Sehari dengan Nuppi",
    "day.intro": "Ia diam tertutup di tepi atas layar dan terbuka saat kamu arahkan kursor. Begini isinya sepanjang hari kerja.",
    "s1.when": "Pagi",
    "s1.t": "Fokus, ditemani hujan",
    "s1.p": "Ronde pomodoro yang tetap jalan walau PC tidur, grafik tujuh hari, dan streak. Suara hujan, ombak, angin, atau dengung lembut di latar, dibuat lewat kode dan diulang oleh Windows, jadi tidak memakan CPU.",
    "s2.when": "Sebelum makan siang",
    "s2.t": "Harimu dalam satu daftar",
    "s2.p": "Ketik “rapat besok 9” atau “call mom in 2h”, waktunya langsung terisi. Checklist di dalam tugas, tagihan berulang, tambah cepat dari mana saja dengan Ctrl+Alt+N, dan Google Calendar-mu dengan tombol Gabung untuk Meet, Zoom, dan Teams.",
    "s3.when": "Habis makan siang",
    "s3.t": "Beranda yang kamu atur sendiri",
    "s3.p": "Jam, satu hal yang paling penting saat ini (rapat, salat berikutnya, tugas jatuh tempo, lagu yang diputar), dan widget kecil yang bisa kamu geser, ubah ukuran, tambah, dan hapus.",
    "s4.when": "Sore",
    "s4.t": "Musik, lengkap dengan liriknya",
    "s4.p": "Apa pun yang diputar lewat kontrol media Windows (Spotify, YouTube Music di browser, dan lainnya) dengan geser posisi, acak, volume, dan lirik tersinkron yang menjaga baris aktif di tengah. Nyalakan lirik di notch tertutup, dan baris yang sedang dinyanyikan muncul tepat di bawahnya.",
    "s5.when": "Menjelang Asar",
    "s5.t": "Jadwal salat, dihitung di PC-mu",
    "s5.p": "1.151 kota atau lokasimu sendiri, tujuh metode perhitungan, tanggal Hijriah, dan pengingat. Saat Ramadan: hitung mundur imsak dan buka puasa, serta pengingat sahur.",
    "s6.when": "Sepanjang hari",
    "s6.t": "Rak untuk file dan clipboard",
    "s6.p": "Jatuhkan file, link, teks, atau gambar ke notch, lalu tarik keluar nanti; filemu tidak pernah dipindah. Riwayat clipboard terenkripsi, bisa dicari, dan melewati password manager. Simpan snippet untuk ditempel lagi.",
    "ai.title": "Tanya AI, untuk teks yang kamu pilih",
    "ai.p": "Pilih teks di aplikasi apa pun lalu tekan <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>Q</kbd>. Teksnya masuk ke notch dengan Ringkas, Perbaiki, Terjemahkan, dan Balas sekali klik. Minta dengan kalimat biasa, dan ia bisa memasang pengingat dan to-do atau memulai timer, masing-masing bisa dibatalkan. Pakai provider-mu sendiri: OpenAI, Gemini, Groq, OpenRouter, atau model lokal lewat Ollama atau LM Studio. Key tetap di PC-mu, terenkripsi.",
    "ai.1.b": "1. Pilih teks, tekan pintasannya.",
    "ai.1": "Teksnya datang dengan empat aksi cepat.",
    "ai.2.b": "2. Sekali klik.",
    "ai.2": "Email klien, diringkas jadi tiga poin.",
    "ai.3.b": "3. Minta ia bertindak.",
    "ai.3": "“Ingatkan aku balas hari Jumat jam 9” langsung memasang pengingat, bisa dibatalkan.",
    "themes.title": "Tujuh tema, digambar dengan kode",
    "themes.intro": "Pilih tampilan di Pengaturan, dan notch, setiap halaman, serta Pengaturan langsung mengikutinya. Tidak ada file gambar di baliknya, jadi tema tidak membebani apa pun saat notch diam. Glass membuat kaca buram di atas desktop, dan Chameleon mengikuti mode terang atau gelap Windows.",
    "t.kopi": "Hitam pekat, tampilan asli",
    "t.paper": "Kertas hangat dan tinta cokelat",
    "t.brutal": "Garis hitam tegas, bayangan keras",
    "t.afterglow": "Ungu menuju jingga",
    "t.monolith": "Hitam-putih murni",
    "kopi.title": "Kopi menemanimu",
    "kopi.intro": "Kucing hitam 24 piksel yang tinggal di notch dan bereaksi pada apa yang kamu lakukan. Elus dia dan dia mendengkur.",
    "m.idle": "Mengawasi keadaan",
    "m.music": "Mengangguk mengikuti musikmu",
    "m.notif": "Siaga saat ada notifikasi",
    "m.happy": "Bersorak saat tugasmu beres",
    "m.sleep": "Tidur di malam hari dan saat kamu fokus",
    "m.tired": "Lesu saat baterai hampir habis",
    "bench.title": "Diukur, bukan dijanjikan",
    "bench.p": "Notch yang selalu ada di layar harus hemat. Setiap malam, sebuah tes menjalankan build rilis di mesin Windows yang bersih, menunggunya tenang, mengukur CPU dan memori dari luar prosesnya, dan gagal bila ada angka yang melewati batasnya.",
    "more.title": "Dan hal-hal kecil",
    "x.ocr.t": "Salin teks dari layar",
    "x.ocr": "Ctrl+Alt+T, tarik kotak, dan teksnya sudah di clipboard. Offline, dengan OCR Windows.",
    "x.notif.t": "Notifikasi",
    "x.notif": "Notifikasi WhatsApp, Telegram, dan lainnya tampil di notch, dengan isi pesan sampai dua baris. Pilih tampilkan judul dan isi, judul saja, atau nama aplikasi saja. Kode sekali pakai tetap tersembunyi sampai kamu salin.",
    "x.over.t": "Overlay sistem",
    "x.over": "Volume, kecerahan, Caps Lock, bahasa input, charger, Wi-Fi, dan headphone, tampil di tempat matamu sudah melihat.",
    "x.wid.t": "Widget",
    "x.wid": "Cuaca, pemakaian PC, baterai headset dan mouse, minggu ini, jam dunia, hitung mundur, dan fase bulan.",
    "x.water.t": "Minum",
    "x.water": "Target harian dengan pengingat yang menunggu sampai ronde fokusmu selesai.",
    "x.look.t": "Tampilan sesukamu",
    "x.look": "Tujuh tema, dari Kopi yang hitam pekat sampai Paper yang hangat dan Brutal yang tegas, plus Chameleon yang ikut mode terang atau gelap Windows. Island atau mengambang, mode minimal, warna aksen, bahasa Indonesia atau Inggris. Semua pengaturan langsung berlaku.",
    "privacy.title": "Datamu tetap di PC-mu",
    "p.1": "Tanpa akun, tanpa analytics, tanpa telemetri.",
    "p.2": "Riwayat clipboard, chat, dan API key dienkripsi dengan DPAPI Windows.",
    "p.3": "Jaringan hanya dipakai oleh fitur yang kamu nyalakan: lirik, cuaca, kalender, Tanya AI, dan cek update.",
    "p.4": "Setiap fitur bisa dimatikan sepenuhnya, dan datamu bisa diekspor atau dihapus dari Pengaturan.",
    "get.title": "Taruh Kopi di atas layarmu",
    "get.p": "Gratis untuk Windows 10 (1809 ke atas) dan Windows 11. Terpasang hanya untuk akunmu, tanpa hak admin, dan mengecek update sendiri.",
    "get.fine": "Versi Microsoft Store ditandatangani Microsoft dan diperbarui lewat Store. Installer-nya belum ditandatangani, jadi SmartScreen mungkin memperingatkan: pilih Info selengkapnya, lalu Tetap jalankan. Setiap rilis mencantumkan SHA-256-nya.",
    "foot.releases": "Semua rilis",
    "foot.privacy": "Kebijakan privasi",
    "foot.formerly": "Dulu bernama Atap"
  };
  // The benchmark table's own strings (written by scripts/site-bench.py).
  var benchID = window.NUPPI_BENCH_ID || {};
  for (var k in benchID) { id[k] = benchID[k]; }

  var nodes = document.querySelectorAll("[data-i18n]");
  var en = {};
  nodes.forEach(function (n) { en[n.getAttribute("data-i18n")] = n.innerHTML; });
  var titles = { en: document.title, id: "Nuppi — notch hidup untuk Windows" };

  function apply(lang) {
    var dict = lang === "id" ? id : en;
    nodes.forEach(function (n) {
      var v = dict[n.getAttribute("data-i18n")];
      if (v != null) n.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.title = titles[lang];
    document.querySelectorAll(".lang [data-l]").forEach(function (s) {
      s.classList.toggle("on", s.getAttribute("data-l") === lang);
    });
  }

  var lang = "";
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

  // The notch starts as its closed peek and opens once, then stays open.
  var notch = document.querySelector(".notch");
  if (notch && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    notch.classList.add("shut");
    setTimeout(function () { notch.classList.remove("shut"); }, 900);
  }

  // The simulation: each tab of the notch shows that page's render. Tabs
  // are real buttons placed over the image from sim.json (positions in
  // the image's CSS pixels), so they work with the keyboard too.
  var simImg = document.getElementById("sim-img");
  var simTabs = document.querySelector(".sim-tabs");
  var stage = document.querySelector(".notch-stage");
  if (!simImg || !simTabs || !window.fetch) return;
  var pages = [], current = "home";
  var alts = {
    home: "Home: the clock with Kopi, the song playing and small widgets",
    music: "Music: the song playing with its album art and controls",
    focus: "Focus: a timer with rain on and a seven-day chart",
    todo: "To-do: tasks with a checklist, a repeating bill and the next event",
    shelf: "Shelf: files to drag out later and the clipboard history",
    water: "Water: today's glasses against the daily goal",
    prayer: "Prayer times for Jakarta with the next prayer",
    widgets: "Widgets: weather and PC usage",
    ask: "Ask AI: a client's email summed up in three points",
    notify: "Notifications from WhatsApp in the notch"
  };

  function hintH() {
    var hint = stage.querySelector(".sim-hint");
    return hint ? hint.getBoundingClientRect().height + 8 : 0;
  }

  function byId(id) {
    for (var i = 0; i < pages.length; i++) if (pages[i].id === id) return pages[i];
    return null;
  }

  // The stage takes the open page's height and eases to the next one, so
  // the notch grows and shrinks like the app's and the text below glides
  // instead of jumping.
  function fit() {
    var p = byId(current);
    if (!p) return;
    notch.style.width = "min(" + p.size[0] + "px, 100%)";
    var room = stage.getBoundingClientRect().width;
    var h = p.size[1] * Math.min(1, room / p.size[0]);
    var px = Math.ceil(h + hintH()) + "px";
    stage.style.height = px;
    document.documentElement.style.setProperty("--stage-h", px); // the phone bar sits below it
  }

  function show(id, focus) {
    var p = byId(id);
    if (!p) return;
    current = id;
    simImg.src = "media/sim/" + p.src;
    simImg.width = p.size[0];
    simImg.height = p.size[1];
    simImg.alt = alts[id] || p.title;
    simTabs.innerHTML = "";
    p.tabs.forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "sim-tab";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", t.id === id ? "true" : "false");
      b.setAttribute("aria-label", (byId(t.id) || {}).title || t.id);
      b.tabIndex = t.id === id ? 0 : -1;
      b.style.left = (t.box[0] / p.size[0] * 100) + "%";
      b.style.top = (t.box[1] / p.size[1] * 100) + "%";
      b.style.width = (t.box[2] / p.size[0] * 100) + "%";
      b.style.height = (t.box[3] / p.size[1] * 100) + "%";
      b.addEventListener("click", function () { show(t.id, true); });
      simTabs.appendChild(b);
      if (focus && t.id === id) b.focus();
    });
    fit();
  }

  // Left and right move between tabs, like a tab list should.
  simTabs.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    var i = pages.indexOf(byId(current));
    i = (i + (e.key === "ArrowRight" ? 1 : pages.length - 1)) % pages.length;
    show(pages[i].id, true);
    e.preventDefault();
  });
  window.addEventListener("resize", fit);

  fetch("media/sim/sim.json").then(function (r) { return r.json(); }).then(function (list) {
    pages = list;
    list.forEach(function (p) {
      new Image().src = "media/sim/" + p.src; // warm the cache: switches are instant
    });
    // "#notch-ask" opens the notch on that page (a link can point at one).
    var m = /^#notch-([a-z]+)$/.exec(location.hash);
    show(m && byId(m[1]) ? m[1] : "home", false);
  }).catch(function () { /* the still image stays */ });
})();
