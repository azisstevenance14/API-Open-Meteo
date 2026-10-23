🌤️ Dashboard Cuaca Real-Time Gorontalo

Aplikasi web dashboard cuaca modern, responsif, dan real-time yang menampilkan data meteorologi terkini untuk Kota Gorontalo, Indonesia. Dibuat menggunakan JavaScript modern (ES6+) murni, mengambil data cuaca langsung dari Open-Meteo API, serta dilengkapi dengan sistem jam digital interaktif secara live.

🚀 Fitur Utama

⏱️ Jam & Tanggal Real-Time: Menampilkan tanggal dan waktu lokal terkini dalam format Bahasa Indonesia (id-ID) yang diperbarui setiap detik menggunakan setInterval().

🌡️ Metrik Cuaca Lengkap:

Suhu Udara (°C)

Kelembapan Udara (%)

Kecepatan Angin (km/h)

Indeks UV

Tekanan Udara Permukaan (hPa)

🌤️ Penerjemah Kode Cuaca WMO: Menerjemahkan kode angka kondisi cuaca internasional dari API menjadi deskripsi teks yang mudah dipahami manusia (seperti Cerah, Berawan, Hujan Gerimis, dll.).

🎨 Tampilan UI Glassmorphism: Desain modern menggunakan CSS Grid, Flexbox, efek transparan blur, dan animasi hover yang responsif.

⚡ Pengambilan Data Asinkron: Menggunakan fitur bawaan JavaScript async/await dan fetch() API untuk proses loading data yang lancar tanpa re-load halaman.

🛠️ Teknologi & Konsep yang Digunakan

Frontend: HTML5, Custom CSS3 (CSS Grid, Flexbox, Backdrop Blur)

Scripting: Vanilla JavaScript (ES6+)

Konsep JavaScript:

async / await & fetch() API

Pengolahan Objek JSON Asinkron (response.json())

Manipulasi DOM (Document Object Model)

Objek Date JS & toLocaleDateString() / toLocaleTimeString()

Pemformatan Waktu Terjadwal (setInterval())

Penyedia Data: Open-Meteo API (REST API gratis tanpa perlu API key)

📂 Struktur Project

├── index.html       # Struktur utama dan tata letak HTML
├── style.css        # Desain gaya visual dan layout CSS Grid responsif
├── script.js        # Logika pengambilan data API, jam digital, dan manipulasi DOM
└── README.md        # Dokumentasi project


⚙️ Cara Menjalankan Project Secara Lokal

Clone Repository (atau buka folder lokalmu):

git clone https://github.com/username-kamu/weather-dashboard-gorontalo.git
cd weather-dashboard-gorontalo


Buka di VS Code:

code .


Jalankan Aplikasi:

Buka file index.html menggunakan ekstensi Live Server di VS Code, atau cukup klik dua kali pada file index.html untuk membukanya di browser favoritmu.

🌐 Detail Endpoint API

Aplikasi ini mengirimkan permintaan data ke API Open-Meteo menggunakan koordinat Kota Gorontalo (Lintang: 0.5434, Bujur: 123.0595):

GET https://api.open-meteo.com/v1/forecast?latitude=0.5434&longitude=123.0595&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,weather_code,uv_index&timezone=auto


📝 Lisensi

Project ini dilindungi di bawah lisensi MIT.

Dibuat dengan semangat belajar oleh Developer Indonesia 🚀☕