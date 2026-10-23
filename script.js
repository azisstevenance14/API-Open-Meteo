// ==========================================
// 1. LOGIKA WAKTU REAL-TIME (JAM & TANGGAL)
// ==========================================
function updateWaktuRealtime() {
    const sekarang = new Date();

    // Format Tanggal Bahasa Indonesia
    const formatTanggal = sekarang.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // Format Jam (HH:MM:SS)
    const formatJam = sekarang.toLocaleTimeString('id-ID');

    // Tampilkan ke DOM
    document.getElementById('live-date').innerText = formatTanggal;
    document.getElementById('live-time').innerText = formatJam;
}

// Jalankan fungsi jam setiap 1000 milidetik (1 detik)
setInterval(updateWaktuRealtime, 1000);
updateWaktuRealtime(); // Jalankan sekali di awal agar tidak ada jeda delay

// ==========================================
// 2. LOGIKA FETCH API OPEN-METEO (CUACA)
// ==========================================

// Koordinat Kota Gorontalo (Ganti jika ingin lokasi lain)
const LATITUDE = 0.5434;
const LONGITUDE = 123.0595;

// URL Open-Meteo API dengan parameter parameter cuaca
const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,weather_code,uv_index&timezone=auto`;

// Map kode cuaca Open-Meteo ke teks deskripsi manusia
function terjemahkanKodeCuaca(code) {
    if (code === 0) return 'Cerah';
    if (code >= 1 && code <= 3) return 'Berawan Sebagian';
    if (code >= 45 && code <= 48) return 'Kabut';
    if (code >= 51 && code <= 67) return 'Hujan Gerimis';
    if (code >= 80 && code <= 82) return 'Hujan Deras';
    if (code >= 95) return 'Badai Petir';
    return 'Cuaca Normal';
}

async function ambilDataCuaca() {
    const statusEl = document.getElementById('status-message');
    const cardsGrid = document.getElementById('weather-cards');

    try {
        // Tahan / Tunggu proses Fetch data
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Gagal mengambil data! Status: ${response.status}`);
        }

        const data = await response.json();
        const currentData = data.current;
        console.log(currentData);

        // Suntikkan data dari API ke masing-masing Kartu (DOM)
        document.getElementById('temp-val').innerText = `${currentData.temperature_2m} °C`;
        document.getElementById('humidity-val').innerText = `${currentData.relative_humidity_2m} %`;
        document.getElementById('wind-val').innerText = `${currentData.wind_speed_10m} km/h`;
        document.getElementById('uv-val').innerText = currentData.uv_index ?? '0.0';
        document.getElementById('pressure-val').innerText = `${currentData.surface_pressure} hPa`;
        
        const deskripsiCuaca = terjemahkanKodeCuaca(currentData.weather_code);
        document.getElementById('weather-desc').innerText = deskripsiCuaca;
        document.getElementById('weather-code-tag').innerText = `Kode WMO: ${currentData.weather_code}`;

        // Sembunyikan pesan loading dan tampilkan kartu cuaca
        statusEl.style.display = 'none';
        cardsGrid.style.display = 'grid';

    } catch (error) {
        console.error('Error Fetch API:', error);
        statusEl.innerText = '❌ Gagal memuat data cuaca. Cek koneksi internetmu!';
        statusEl.style.color = '#ef4444';
    }
}

// Eksekusi pemanggilan API Cuaca saat file di-load
ambilDataCuaca();