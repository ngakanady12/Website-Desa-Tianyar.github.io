// ===== DATA =====
const newsData = [
  { id:1, cat:'kegiatan', catLabel:'Kegiatan', date:'05 Agustus 2025',
    title:'Gotong Royong Pembersihan Lingkungan Desa Tianyar',
    img:'assets/kegiatan.webp',
    excerpt:'Warga Desa Tianyar bersama-sama melaksanakan kegiatan gotong royong membersihkan lingkungan desa setiap minggu pertama bulan berjalan.',
    body:`<p>Kegiatan gotong royong pembersihan lingkungan Desa Tianyar kembali dilaksanakan pada hari Minggu, 05 Agustus 2025. Ratusan warga dari 4 banjar bergotong royong membersihkan jalan desa, saluran air, dan area publik.</p><p>Kepala Desa I Made Suantara dalam sambutannya menyampaikan bahwa kegiatan ini merupakan wujud nyata kebersamaan dan kepedulian warga terhadap kebersihan lingkungan. Gotong royong adalah warisan leluhur yang harus kita jaga.</p><p>Kegiatan ini diikuti oleh seluruh lapisan masyarakat mulai dari anak-anak hingga lansia. Tim kebersihan desa juga turut mendistribusikan alat kebersihan kepada masing-masing kelompok.</p>`,
    views:234, likes:45 },
  { id:2, cat:'sosial', catLabel:'Sosial', date:'05 Agustus 2025',
    title:'Penyaluran Bantuan Sosial Tahap Pertama 2025',
    img:'assets/sosial.webp',
    excerpt:'Pemerintah Desa Tianyar menyalurkan bantuan sosial tahap pertama tahun 2025 kepada 487 Kepala Keluarga penerima manfaat di wilayah desa.',
    body:`<p>Pemerintah Desa Tianyar kembali menyalurkan bantuan sosial tahap pertama tahun 2025. Sebanyak 487 Kepala Keluarga (KK) yang masuk dalam Data Terpadu Kesejahteraan Sosial (DTKS) menerima bantuan ini.</p><p>Bantuan yang disalurkan berupa beras 10 kg, minyak goreng 2 liter, dan uang tunai senilai Rp 300.000 per KK. Total anggaran yang disalurkan mencapai Rp 450 juta dari Dana Desa tahun 2025.</p><p>Proses penyaluran berlangsung tertib dan lancar di Balai Desa Tianyar. Warga penerima diminta membawa KTP dan kartu KKS sebagai syarat pengambilan bantuan.</p>`,
    views:512, likes:123 },
  { id:3, cat:'pendidikan', catLabel:'Pendidikan', date:'05 Agustus 2025',
    title:'Pelatihan Digital Untuk Pemuda Desa Tianyar',
    img:'assets/pendidikan.jpg',
    excerpt:'Program pelatihan keterampilan digital untuk pemuda desa digelar selama 3 hari, mencakup dasar komputer, media sosial untuk usaha, dan e-commerce.',
    body:`<p>Dinas Pemberdayaan Masyarakat dan Desa bekerja sama dengan Pemerintah Desa Tianyar menyelenggarakan pelatihan keterampilan digital bagi pemuda desa. Pelatihan berlangsung selama 3 hari, 05–07 Agustus 2025.</p><p>Peserta yang berjumlah 60 orang mendapatkan materi tentang penggunaan komputer dasar, pemanfaatan media sosial untuk promosi usaha lokal, serta pengenalan platform e-commerce.</p>`,
    views:189, likes:67 },
  { id:4, cat:'kegiatan', catLabel:'Kegiatan', date:'05 Agustus 2025',
    title:'AIR BAGI BANGSA : Akses Air Bersih di Tianyar, Bali – KARSA',
    img:'assets/kegiatan.jpeg',
    excerpt:'Program penyediaan akses air bersih di Desa Tianyar melalui kerjasama dengan LSM KARSA berhasil menjangkau 1.200 rumah tangga.',
    body:`<p>Program Air Bagi Bangsa yang digagas oleh LSM KARSA bekerja sama dengan Pemerintah Desa Tianyar telah berhasil memasang instalasi air bersih menjangkau 1.200 rumah tangga di wilayah yang sebelumnya mengalami kesulitan akses air bersih.</p><p>Infrastruktur yang dibangun mencakup reservoir kapasitas 50.000 liter, jaringan pipa sepanjang 12 km, dan 6 titik hidran umum. Total investasi program ini mencapai Rp 2,4 miliar dari dana hibah dan gotong royong masyarakat.</p>`,
    views:445, likes:201 },
  { id:5, cat:'konstruksi', catLabel:'Konstruksi', date:'05 Agustus 2025',
    title:'Proyek Pembangunan Dermaga Pelabuhan di Desa Tianyar Bali',
    img:'assets/konstruksi.jpeg',
    excerpt:'Pembangunan dermaga nelayan Desa Tianyar memasuki tahap akhir dengan target selesai September 2025. Dermaga ini akan meningkatkan kapasitas bongkar muat ikan.',
    body:`<p>Proyek pembangunan dermaga pelabuhan nelayan Desa Tianyar telah memasuki tahap akhir pengerjaan. Diperkirakan seluruh konstruksi akan selesai pada September 2025.</p><p>Dermaga berkapasitas 50 kapal nelayan ini dibangun menggunakan anggaran APBN senilai Rp 8,5 miliar. Fasilitas yang dibangun mencakup dermaga beton sepanjang 80 meter, tempat pelelangan ikan, dan cold storage berkapasitas 20 ton.</p>`,
    views:367, likes:88 },
  { id:6, cat:'lomba', catLabel:'Lomba', date:'05 Agustus 2025',
    title:'Lomba Burung Jenis Anis Merah di Desa Tianyar-Bali',
    img:'assets/lomba.jpg',
    excerpt:'Festival lomba burung kicau jenis Anis Merah digelar di lapangan desa Tianyar diikuti oleh 200 peserta dari berbagai daerah di Bali.',
    body:`<p>Festival Lomba Burung Kicau Anis Merah se-Bali digelar di Lapangan Desa Tianyar pada 05 Agustus 2025. Kegiatan ini diikuti oleh 200 peserta dari berbagai kabupaten di Bali.</p><p>Total hadiah yang diperebutkan mencapai Rp 50 juta. Lomba ini juga menjadi ajang promosi budaya dan potensi wisata Desa Tianyar kepada masyarakat luar daerah.</p>`,
    views:298, likes:142 },
  { id:7, cat:'pariwisata', catLabel:'Pariwisata', date:'05 Agustus 2025',
    title:'Savana Desa Tianyar-Kecamatan Kubu-Kabupaten Karangasem',
    img:'assets/savanna.jpg',
    excerpt:'Savana indah di Desa Tianyar menjadi daya tarik wisata baru yang kini mulai dikenal oleh para wisatawan lokal dan mancanegara.',
    body:`<p>Desa Tianyar menyimpan keindahan alam berupa hamparan savana yang luas dan memukau. Kawasan ini terletak di Kecamatan Kubu, Kabupaten Karangasem, dan kini mulai menarik perhatian para pecinta wisata alam.</p><p>Pemerintah Desa Tianyar berencana mengembangkan kawasan ini menjadi destinasi wisata yang terkelola dengan baik, dengan tetap menjaga kelestarian alam sekitar.</p>`,
    views:521, likes:180 },
  { id:8, cat:'pariwisata', catLabel:'Pariwisata', date:'05 Agustus 2025',
    title:'Tianyar, Desa di Bali Yang Punya Savana Eksotis dan Laboratorium Terumbu Karang!',
    img:'assets/pariwisata.jpg',
    excerpt:'Desa Tianyar tidak hanya dikenal dengan pantainya tetapi juga memiliki laboratorium terumbu karang yang menjadi pusat konservasi laut.',
    body:`<p>Desa Tianyar di Bali memiliki dua keunggulan alam yang luar biasa: savana eksotis di daratan dan laboratorium terumbu karang yang aktif di bawah laut. Kedua kekayaan alam ini menjadikan Tianyar sebagai destinasi wisata yang unik.</p><p>Laboratorium terumbu karang yang dikelola bersama LSM lingkungan internasional telah berhasil memulihkan ekosistem laut di sekitar pantai Tianyar.</p>`,
    views:634, likes:221 },
  { id:9, cat:'keamanan', catLabel:'Keamanan', date:'05 Agustus 2025',
    title:'Bhabinkamtibmas Tianyar Barat Sambang Warga, Sampaikan Pesan Keamanan',
    img:'assets/keamanan.jpg',
    excerpt:'Bhabinkamtibmas Polsek Kubu melakukan sambang warga di Desa Tianyar Barat untuk menyampaikan pesan-pesan keamanan dan ketertiban.',
    body:`<p>Bhabinkamtibmas Polsek Kubu, Bripka I Wayan Sudika, melakukan kegiatan sambang warga di Desa Tianyar Barat. Dalam kunjungannya, beliau menyampaikan berbagai pesan terkait keamanan dan ketertiban masyarakat.</p><p>Kegiatan ini merupakan bagian dari program rutin Polri untuk mendekatkan diri dengan masyarakat dan menciptakan suasana yang kondusif di wilayah Desa Tianyar.</p>`,
    views:156, likes:34 },
];

const forumData = [
  { id:1, name:'Kadek Sudi', initial:'KS', initials2:'KS',
    title:'Usulan Perbaikan Jalan di Gang Pandawa RT 03',
    preview:'Jalan di gang pandawa sudah rusak cukup parah, terutama saat musim hujan. Mohon perhatian pak kepala desa untuk segera ditindaklanjuti..',
    body:`Yth. Bapak/Ibu Kepala Desa Tianyar,

Saya ingin melaporkan kondisi jalan di Gang pandawa RT 03 yang sudah sangat memprihatinkan. Jalan tersebut penuh dengan lubang besar dan sering tergenang air saat hujan. Kondisi ini sangat berbahaya bagi warga, terutama anak-anak yang berangkat sekolah dan warga lanjut usia.

Kami berharap pihak desa dapat segera menindaklanjuti laporan ini. Terima kasih.`,
    comments:[
      { name:'Darma Wiguna', initial:'DW', text:'Setuju sekali pak! Saya hampir jatuh kemarin karena lubang di depan rumah nomor 12.', likes:5, isKades:false },
      { name:'Kepala Desa', initial:'KD', text:'Terima kasih atas laporannya. Kami akan jadwalkan survei lapangan minggu ini dan segera proses perbaikannya.', likes:7, isKades:true },
      { name:'Bagus Sedana', initial:'BS', text:'Astungkara, semoga cepat diperbaiki ya pak. Kami sudah lama menunggu.', likes:3, isKades:false },
      { name:'Ngakan Ady', initial:'NA', text:'Mih, Tabik Sugra🙏.', likes:6, isKades:false },
       { name:'Pengguna Rahasia', initial:'PR', text:'Gapapa mah jalanan rusak itu mungkin seni wkwk.', likes:30, isKades:false },
       { name:'Siapa Kaden', initial:'SK', text:'Kalau bisa, perbaikan jalan jangan hanya tambal sulam, tapi diperbaiki secara menyeluruh agar lebih tahan lama..', likes:6, isKades:false },
      
      
    ], time:'1 jam lalu', comments_count:3, likes:1, views:124, replies:3 },
  { id:2, name:'Ananda Dwipa', initial:'AD', initials2:'AD',
    title:'Mohon perhatian pihak desa, lampu jalan di sepanjang jalan utama Dusun Utara sudah mati selama semingguan sehingga sangat gelap di malam hari...',
    preview:'Mohon perhatian pihak desa, lampu jalan di sepanjang jalan utama Dusun Utara sudah mati selama semingguan sehingga sangat gelap di malam hari...',
    body:`Kepada Yth. Perangkat Desa Tianyar,

Saya ingin melaporkan bahwa lampu jalan di sepanjang Jalan Utama Dusun Utara sudah padam selama semingguan. Kondisi ini sangat membahayakan warga yang beraktivitas di malam hari, khususnya para pengendara motor apalagi di daerah tersebut rawan.

Mohon segera dilakukan perbaikan atau penggantian lampu yang rusak. Terima kasih atas perhatiannya.`,
    comments:[
      { name:'Parama Wikananda', initial:'PW', text:'Betul pak, saya juga merasakan. Kemarin hampir menabrak karena gelap sekali.', likes:4, isKades:false },
      {name: 'Dek Sudi', initial:'DS', text:'Dumogi rahayu sareng sami🙏.', likes:4,iskades:false},
       {name: 'Karisma Ayu', initial:'KA', text:'Betul sekali buat saya yang sering pulang malem jadi takut lewat sana karna suasannya angker dan gelap.', likes:10,iskades:false},
      { name:'Kepala Desa', initial:'KD', text:'Laporan sudah kami terima. Tim teknis akan dikirim besok untuk memperbaiki lampu yang rusak.', likes:9, isKades:true },
    ], time:'1 jam lalu', comments_count:2, likes:1, views:124, replies:3 },
  { id:3, name:'Darma Wiguna', initial:'WG', initials2:'DW',
    title:'Pemberitahuan dari RT 07 bahwa gotong royong kebersihan lingkungan akan dilaksanakan setiap minggu pertama bulan April...',
    preview:'Pemberitahuan dari RT 07 bahwa gotong royong kebersihan lingkungan akan dilaksanakan setiap minggu pertama bulan April...',
    body:`Kepada seluruh warga RT 07 Desa Tianyar,

Diberitahukan bahwa kegiatan Gotong Royong Kebersihan Lingkungan akan dilaksanakan pada:
- Tanggal: Minggu, 07 April 2025
- Waktu: Pukul 07.00 - 10.00 WITA
- Lokasi: Seluruh lingkungan RT 07

Mohon kehadiran dan partisipasi aktif seluruh warga. Bawa peralatan kebersihan masing-masing.

Terima kasih atas kerjasamanya.`,
    comments:[
      { name:'Septian Akbar', initial:'SA', text:'Asal dapet nasi,saya siap berpartisipasi😁.', likes:7, isKades:false },
      { name:'Juvi Anak Baik', initial:'JA', text:'Saya juga siap berpartisipasi.', likes:3, isKades:false },
      
    ], time:'1 jam lalu', comments_count:1, likes:1, views:124, replies:3 },

   { id:4, name:'Bakekok ', initial:'BK', initials2:'DW',
    title:'Laporan Masalah Sampah dan Banjir',
    preview:'Sampah yang menumpuk bisa berdampak ke kesehatan lingkungan. Perlu kerja sama antara warga dan pihak terkait untuk mengatasinya.',
    body:`Kepada seluruh warga RT 07 Desa Tianyar,

Saya ingin melaporkan kondisi lingkungan di wilayah kami yang sering mengalami banjir, terutama saat hujan turun. Hal ini diduga disebabkan oleh saluran drainase yang tersumbat oleh sampah yang menumpuk.

Kondisi tersebut sangat mengganggu aktivitas warga serta berpotensi menimbulkan masalah kesehatan. Oleh karena itu, kami berharap pihak desa dapat segera melakukan penanganan, baik melalui pembersihan saluran air maupun peningkatan kesadaran masyarakat terkait pengelolaan sampah.

Demikian laporan ini kami sampaikan. Atas perhatian dan tindak lanjutnya, kami ucapkan terima kasih.`,
    comments:[
      { name:'Bayu Sedana', initial:'BS', text:'Waduh, jangan sampai viral dulu baru diperbaiki ya 😁.', likes:7, isKades:false },
       { name:'Ayu Larasati', initial:'AL', text:'Untung rumah saya yang tidak terkena banjir.', likes:3, isKades:false },
      
    ], time:'1 jam lalu', comments_count:1, likes:1, views:124, replies:3 },
];

const galleryImages = [
  { url:'https://www.visit-tianyar.com/_next/image?url=%2Fgaleri%2Fgaleri_2.jpg&w=1920&q=75', caption:'Tianyar Beach' },
  { url:'https://www.visit-tianyar.com/_next/image?url=%2Fgaleri%2Fgaleri_1.JPG&w=1080&q=75', caption:'Savanna Tianyar' },
  { url:'https://www.visit-tianyar.com/_next/image?url=%2Fgaleri%2Fgaleri_7.JPG&w=1920&q=75', caption:'Fisherman Boat' },
  { url:'https://www.visit-tianyar.com/_next/image?url=%2Fgaleri%2Fgaleri_6.jpg&w=1920&q=75', caption:'Lontar Fruit' },
  { url:'https://www.visit-tianyar.com/_next/image?url=%2Fgaleri%2Fgaleri_5.jpg&w=1920&q=75', caption:'Bali Arak' },
  { url:'https://www.visit-tianyar.com/_next/image?url=%2Fgaleri%2Fgaleri_4.jpg&w=1920&q=75', caption:'Aren Sugar' },
  { url:'https://www.visit-tianyar.com/_next/image?url=%2Fgaleri%2Fgaleri_8.JPG&w=1920&q=75', caption:'Tianyar Savanna' },
  { url:'https://www.visit-tianyar.com/_next/image?url=%2Fgaleri%2Fgaleri_3.jpg&w=1920&q=75', caption:'Tianyar Beach' },
  { url:'https://www.visit-tianyar.com/_next/image?url=%2Fgaleri%2Fgaleri_9.JPG&w=1920&q=75', caption:'Tianyar Savanna' },
];

const calendarEvents = [
  { date:'05 Agt', title:'Gotong Royong Kebersihan', time:'07:00 WITA', icon:'fa-broom', color:'#16a34a' },
  { date:'10 Agt', title:'Posyandu Banjar Tianyar Tengah', time:'09:00 WITA', icon:'fa-heartbeat', color:'#ef4444' },
  { date:'12 Agt', title:'Posyandu Banjar Tianyar Barat', time:'09:00 WITA', icon:'fa-heartbeat', color:'#ef4444' },
  { date:'15 Agt', title:'Pelatihan Digital Pemuda Desa', time:'08:00 WITA', icon:'fa-laptop', color:'#3b82f6' },
  { date:'17 Agt', title:'Upacara HUT RI ke-80', time:'07:00 WITA', icon:'fa-flag', color:'#8B1A1A' },
  { date:'20 Agt', title:'Rapat BPD Desa Tianyar', time:'10:00 WITA', icon:'fa-users', color:'#7c3aed' },
  { date:'24 Agt', title:'Penyaluran Bantuan Sosial', time:'08:00 WITA', icon:'fa-hand-holding-heart', color:'#f59e0b' },
];

// ===== PAGE NAVIGATION =====
function showPage(pageName) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageName);
  if (page) {
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Update nav active
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.remove('active');
    if (l.dataset.page === pageName) l.classList.add('active');
  });
  closeAllDropdowns();
  // Render page content
  if (pageName === 'berita') renderBerita();
  if (pageName === 'home') renderHomeNews();
  if (pageName === 'forum') renderForum();
  if (pageName === 'kalender') renderKalender();
  if (pageName === 'gallery') renderGallery();
}

// ===== RENDER HOME NEWS (first 6) =====
function renderHomeNews() {
  const grid = document.getElementById('homeNewsGrid');
  if (!grid) return;
  grid.innerHTML = newsData.slice(0, 6).map(n => newsCardHTML(n)).join('');
}

// ===== RENDER BERITA =====
function renderBerita() {
  const grid = document.getElementById('beritaGrid');
  if (!grid) return;
  grid.innerHTML = newsData.map(n => newsCardHTML(n)).join('');
}

function newsCardHTML(n) {
  return `<div class="news-card" onclick="showBeritaDetail(${n.id})">
    <div class="news-img">
      <img src="${n.img}" alt="${n.title}" loading="lazy">
      <span class="news-cat cat-${n.cat}">${n.catLabel}</span>
      <span class="news-date-badge">${n.date}</span>
    </div>
    <div class="news-body">
      <h3>${n.title}</h3>
      <p>${n.excerpt}</p>
      <div class="news-meta">
        <span><i class="fas fa-eye"></i> ${n.views}</span>
        <span><i class="fas fa-heart"></i> ${n.likes}</span>
      </div>
    </div>
  </div>`;
}

// ===== BERITA DETAIL =====
function showBeritaDetail(id) {
  const n = newsData.find(x => x.id === id);
  if (!n) return;
  document.getElementById('beritaDetailContent').innerHTML = `
    <img src="${n.img.replace('w=600','w=1200')}" class="berita-detail-img" onclick="openLightbox('${n.img.replace('w=600','w=1400')}','${n.title}')" alt="${n.title}">
    <div style="margin-bottom:12px"><span class="news-cat cat-${n.cat}" style="position:static;display:inline-block;margin-bottom:8px">${n.catLabel}</span></div>
    <h1 class="berita-detail-title">${n.title}</h1>
    <div class="berita-detail-meta">
      <span><i class="fas fa-calendar"></i> ${n.date}</span>
      <span><i class="fas fa-eye"></i> ${n.views} dilihat</span>
      <span><i class="fas fa-heart" style="color:var(--primary)"></i> ${n.likes} suka</span>
    </div>
    <div class="berita-detail-body">${n.body}</div>
    <div class="berita-actions">
      <button class="btn-action btn-action-like" onclick="this.classList.toggle('liked');const s=this.querySelector('span');s.textContent=this.classList.contains('liked')?${n.likes+1}:${n.likes}">
        <i class="fas fa-heart"></i> Suka <span>${n.likes}</span>
      </button>
      <button class="btn-action btn-action-share" onclick="showToast('Link berhasil disalin!')">
        <i class="fas fa-share-alt"></i> Bagikan
      </button>
    </div>`;
  showPage('berita-detail');
}

// ===== RENDER FORUM =====
function renderForum() {
  const list = document.getElementById('forumListFull');
  if (!list) return;
  list.innerHTML = forumData.map(f => `
    <div class="forum-card-full" onclick="showForumDetail(${f.id})">
      <div class="forum-avatar-big" style="background:${avatarColor(f.initials2)};color:#fff">${f.initials2}</div>
      <div class="forum-card-body">
        <div class="forum-card-title">${f.title}</div>
        <div class="forum-card-preview">${f.preview}</div>
        <div class="forum-card-meta">
          <span class="meta-name"><i class="fas fa-user"></i> ${f.name.toUpperCase()}</span>
          <span><i class="fas fa-thumbs-up"></i> 1</span>
          <span><i class="fas fa-comment"></i> 200</span>
          <span><i class="fas fa-share"></i> 2</span>
          <span><i class="fas fa-angle-right"></i> ${f.replies}</span>
          <span><i class="fas fa-eye"></i> ${f.views} dilihat</span>
          <span><i class="fas fa-clock"></i> ${f.time}</span>
        </div>
      </div>
      <div class="forum-arrow"><i class="fas fa-chevron-right"></i></div>
    </div>`).join('');
}

function avatarColor(initials) {
  const colors = ['#8B1A1A','#1d4ed8','#059669','#7c3aed','#b45309','#0891b2'];
  let hash = 0;
  for (let c of initials) hash = c.charCodeAt(0) + ((hash<<5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

// ===== FORUM DETAIL =====
function showForumDetail(id) {
  const f = forumData.find(x => x.id === id);
  if (!f) return;
  const commentsHtml = f.comments.map(c => `
    <div class="comment-card">
      <div class="comment-header">
        <div class="comment-avatar" style="background:${avatarColor(c.initial)};color:#fff">${c.initial}</div>
        <div>
          <div class="comment-name">${c.name.toUpperCase()}${c.isKades ? '<span class="badge-kepala-desa">👑 KEPALA DESA</span>' : ''}</div>
        </div>
      </div>
      <div class="comment-text">${c.text}</div>
      <button class="comment-like-btn" onclick="this.classList.toggle('liked');const s=this.querySelector('.lnum');s.textContent=this.classList.contains('liked')?${c.likes+1}:${c.likes}">
        👍 <span class="lnum">${c.likes}</span>
      </button>
    </div>`).join('');

  document.getElementById('forumDetailContent').innerHTML = `
    <div class="forum-detail-card">
      <div class="forum-detail-header">
        <div class="forum-detail-avatar" style="background:${avatarColor(f.initials2)};color:#fff">${f.initials2}</div>
        <div>
          <div class="forum-detail-author">${f.name.toUpperCase()}</div>
          <div class="forum-detail-meta">
            <span><i class="fas fa-eye"></i> ${f.views} dilihat</span>
            <span><i class="fas fa-clock"></i> ${f.time}</span>
            <span><i class="fas fa-comment"></i> ${f.comments.length} balasan</span>
          </div>
        </div>
      </div>
      <h2 class="forum-detail-title">${f.title}</h2>
      <div class="forum-detail-body">${f.body}</div>
    </div>
    <div class="komentar-title"><i class="fas fa-comments" style="color:var(--primary)"></i> KOMENTAR</div>
    ${commentsHtml}
    <div class="add-comment-box">
      <div class="add-comment-title">Tulis Komentar</div>
      <textarea id="komInput_${f.id}" placeholder="Tulis komentar Anda..."></textarea>
      <button class="btn-kirim" onclick="kirimKomentar(${f.id})"><i class="fas fa-paper-plane"></i> Kirim Komentar</button>
    </div>`;
  showPage('forum-detail');
}

function kirimKomentar(fid) {
  const inp = document.getElementById('komInput_' + fid);
  if (!inp || !inp.value.trim()) { showToast('Tuliskan komentar terlebih dahulu'); return; }
  showToast('Komentar berhasil dikirim!');
  inp.value = '';
}

// ===== RENDER KALENDER =====
function renderKalender() {
  const el = document.getElementById('kalenderList');
  if (!el) return;
  el.innerHTML = calendarEvents.map(e => `
    <div class="kalender-item">
      <div class="kalender-icon" style="background:${e.color}"><i class="fas ${e.icon}"></i></div>
      <div>
        <div style="font-weight:700;font-size:13px;margin-bottom:2px">${e.title}</div>
        <div style="font-size:12px;color:var(--text3)">${e.date} &bull; ${e.time}</div>
      </div>
    </div>`).join('');
}

// ===== GALLERY =====
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = galleryImages.map(g => `
    <div class="gm-item" onclick="openLightbox('${g.url.replace('w=400','w=1200')}','${g.caption}')">
      <img src="${g.url}" alt="${g.caption}" loading="lazy">
      <div class="gm-caption">${g.caption}</div>
    </div>`).join('');
}

// ===== LIGHTBOX =====
function openLightbox(src, caption) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxCaption').textContent = caption || '';
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== THEME =====
function setTheme(mode) {
  if (mode === 'dark') {
    document.documentElement.setAttribute('data-theme','dark');
    showToast('Mode gelap diaktifkan');
  } else if (mode === 'light') {
    document.documentElement.setAttribute('data-theme','light');
    showToast('Mode terang diaktifkan');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    showToast('Mode sistem diaktifkan');
  }
}

// ===== DROPDOWN =====
function toggleDropdown(id) {
  const dd = document.getElementById(id);
  const isOpen = dd.classList.contains('show');
  closeAllDropdowns();
  if (!isOpen) {
    dd.classList.add('show');
    dd.closest('li').classList.add('open');
  }
}
function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-menu').forEach(d => {
    d.classList.remove('show');
    if (d.closest('li')) d.closest('li').classList.remove('open');
  });
}
document.addEventListener('click', e => {
  if (!e.target.closest('.has-dropdown')) closeAllDropdowns();
});

// ===== MOBILE =====
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ===== MODAL =====
function openModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (id === 'galleryModal') renderGallery();
    closeAllDropdowns();
    closeMobile();
  }
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
}
function handleOverlayClick(e, id) {
  if (e.target === e.currentTarget) closeModal(id);
}
function switchModal(from, to) {
  closeModal(from);
  setTimeout(() => openModal(to), 300);
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== SURAT =====
function ajukanSurat() {
  const nama = document.getElementById('suratNama').value.trim();
  const jenis = document.getElementById('suratJenis').value;
  if (!nama) { showToast('Masukkan nama lengkap terlebih dahulu'); return; }
  if (jenis === 'PILIH JENIS SURAT...') { showToast('Pilih jenis surat terlebih dahulu'); return; }
  showToast('Permohonan surat berhasil diajukan! Kami akan menghubungi Anda.');
}
function cekStatus() {
  const nomor = document.getElementById('nomorSurat').value.trim();
  if (!nomor) { showToast('Masukkan nomor surat terlebih dahulu'); return; }
  showToast('Surat nomor ' + nomor + ' sedang diproses');
}

// ===== COUNTER =====
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current).toLocaleString('id-ID') + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

// ===== KEYBOARD =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => { m.classList.remove('open'); document.body.style.overflow = ''; });
    closeLightbox();
    closeAllDropdowns();
  }
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
  const statsObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounters(); statsObs.disconnect(); }
  }, { threshold: 0.3 });
  const sb = document.querySelector('.stats-bar');
  if (sb) statsObs.observe(sb);
});
