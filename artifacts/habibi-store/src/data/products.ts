export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  features?: string[];
  popular?: boolean;
  priceLabel?: string;
}

export const panelProducts: Product[] = [
  { id: 'panel-1gb', name: 'Panel RAM 1GB', price: 1000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-2gb', name: 'Panel RAM 2GB', price: 2000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-3gb', name: 'Panel RAM 3GB', price: 3000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-4gb', name: 'Panel RAM 4GB', price: 4000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-5gb', name: 'Panel RAM 5GB', price: 5000, category: 'panel', popular: true, features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection', 'Priority Support'] },
  { id: 'panel-6gb', name: 'Panel RAM 6GB', price: 6000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-7gb', name: 'Panel RAM 7GB', price: 7000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-8gb', name: 'Panel RAM 8GB', price: 8000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-9gb', name: 'Panel RAM 9GB', price: 9000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-10gb', name: 'Panel RAM 10GB', price: 10000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-unlimited', name: 'Panel Unlimited', price: 12000, category: 'panel', features: ['RAM Unlimited', 'Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection', 'Premium Support'] },
  { id: 'panel-reseller', name: 'Reseller Panel', price: 15000, category: 'panel', features: ['Harga Khusus Reseller', 'Support Lengkap', 'Dashboard Reseller', 'Bisa Jual Kembali'] },
];

export const botProducts: Product[] = [
  {
    id: 'bot-jaga-grup',
    name: 'Bot Jaga Grup',
    price: 2000,
    category: 'bot',
    description: 'Bot untuk menjaga keamanan grup WhatsApp dari spammer, link berbahaya, dan anggota tidak diinginkan.',
    features: ['Sewa 1 Hari: Rp 2.000', 'Sewa 1 Minggu: Rp 10.000', 'Sewa 1 Bulan: Rp 30.000'],
  },
  {
    id: 'bot-pushkontak',
    name: 'Bot Pushkontak',
    price: 5000,
    category: 'bot',
    description: 'Bot untuk mengirim pesan ke kontak secara massal dengan mudah dan efisien.',
    features: ['Sewa 1 Hari: Rp 5.000', 'Sewa 1 Minggu: Rp 25.000', 'Sewa 1 Bulan: Rp 80.000'],
  },
  {
    id: 'bot-jpm',
    name: 'Bot JPM (Jasa Push Member)',
    price: 10000,
    category: 'bot',
    description: 'Bot untuk mendorong anggota masuk ke grup WhatsApp dengan cepat dan efektif.',
    features: ['Sewa 1 Hari: Rp 10.000', 'Sewa 1 Minggu: Rp 50.000', 'Sewa 1 Bulan: Rp 150.000'],
  },
  {
    id: 'script-bot',
    name: 'Script Bot WhatsApp',
    price: 50000,
    category: 'bot',
    description: 'Script bot WhatsApp siap pakai dengan fitur lengkap. Bisa dikustomisasi sesuai kebutuhan.',
    features: ['Script Multi-fungsi', 'Anti Banned', 'Update Gratis', 'Support Pemasangan'],
  },
  {
    id: 'nokos-wa',
    name: 'NOKOS WhatsApp',
    price: 5000,
    category: 'bot',
    description: 'Nomor kosong WhatsApp dari berbagai negara untuk kebutuhan verifikasi dan lainnya.',
    features: ['Berbagai Negara', 'Proses Cepat', 'Garansi Aktif', 'Harga Per Nomor'],
  },
];

export const sosmedProducts: Product[] = [
  {
    id: 'tiktok-like',
    name: 'Like TikTok',
    price: 1000,
    category: 'sosmed',
    description: 'Tambah like di video TikTok Anda dengan cepat.',
    priceLabel: 'Mulai Rp 1.000',
    features: ['1000 Like: Rp 1.000', '5000 Like: Rp 4.500', '10.000 Like: Rp 8.000'],
  },
  {
    id: 'tiktok-views',
    name: 'Views TikTok',
    price: 500,
    category: 'sosmed',
    description: 'Tingkatkan jumlah penonton video TikTok Anda.',
    priceLabel: 'Mulai Rp 500',
    features: ['1000 Views: Rp 500', '10.000 Views: Rp 4.000', '100.000 Views: Rp 35.000'],
  },
  {
    id: 'tiktok-followers',
    name: 'Followers TikTok',
    price: 3000,
    category: 'sosmed',
    description: 'Tambah followers akun TikTok Anda secara organik.',
    priceLabel: 'Mulai Rp 3.000',
    features: ['100 Followers: Rp 3.000', '500 Followers: Rp 12.000', '1000 Followers: Rp 20.000'],
  },
  {
    id: 'ig-followers',
    name: 'Followers Instagram',
    price: 5000,
    category: 'sosmed',
    description: 'Tingkatkan jumlah followers akun Instagram Anda.',
    priceLabel: 'Mulai Rp 5.000',
    features: ['100 Followers: Rp 5.000', '500 Followers: Rp 20.000', '1000 Followers: Rp 35.000'],
  },
  {
    id: 'wa-channel',
    name: 'Subscriber WA Channel',
    price: 2000,
    category: 'sosmed',
    description: 'Tambah subscriber di WhatsApp Channel Anda.',
    priceLabel: 'Mulai Rp 2.000',
    features: ['100 Subscriber: Rp 2.000', '500 Subscriber: Rp 8.000', '1000 Subscriber: Rp 15.000'],
  },
];

export const jpmProducts: Product[] = [
  {
    id: 'jpm-reguler-100',
    name: 'JPM Reguler 100 Member',
    price: 5000,
    category: 'jpm',
    description: 'Jasa tambah 100 member ke grup WhatsApp reguler Anda.',
    features: ['100 Member', 'Proses 1-6 Jam', 'Garansi Drop', 'Support WhatsApp'],
  },
  {
    id: 'jpm-reguler-500',
    name: 'JPM Reguler 500 Member',
    price: 20000,
    category: 'jpm',
    description: 'Jasa tambah 500 member ke grup WhatsApp reguler Anda.',
    features: ['500 Member', 'Proses 6-12 Jam', 'Garansi Drop', 'Support WhatsApp'],
  },
  {
    id: 'jpm-premium-100',
    name: 'JPM Premium 100 Member',
    price: 10000,
    category: 'jpm',
    description: 'Jasa tambah 100 member aktif ke grup WhatsApp premium.',
    features: ['100 Member Aktif', 'Proses 1-3 Jam', 'Garansi Drop 30 Hari', 'Priority Support'],
  },
  {
    id: 'jpm-premium-500',
    name: 'JPM Premium 500 Member',
    price: 45000,
    category: 'jpm',
    description: 'Jasa tambah 500 member aktif ke grup WhatsApp premium.',
    features: ['500 Member Aktif', 'Proses 6-24 Jam', 'Garansi Drop 30 Hari', 'Priority Support'],
  },
];

export const otherProducts: Product[] = [
  { id: 'vps-do', name: 'VPS Digital Ocean', price: 100000, category: 'other', description: 'Virtual Private Server dari Digital Ocean untuk hosting website dan aplikasi.', priceLabel: 'Mulai Rp 100.000' },
  { id: 'jasa-install', name: 'Jasa Install Panel', price: 20000, category: 'other', description: 'Jasa install panel bot WhatsApp dengan setting optimal.' },
  { id: 'jasa-cpanel', name: 'Jasa Setting CPanel', price: 15000, category: 'other', description: 'Jasa setting cPanel untuk hosting website dan email.' },
  { id: 'jasa-rename', name: 'Jasa Rename Script', price: 10000, category: 'other', description: 'Jasa rename script bot WhatsApp sesuai keinginan.' },
  { id: 'jasa-website', name: 'Jasa Bikin Website Payment', price: 50000, category: 'other', description: 'Jasa pembuatan website dengan sistem payment gateway.', priceLabel: 'Mulai Rp 50.000' },
  { id: 'jasa-unban', name: 'Jasa Unban WA', price: 30000, category: 'other', description: 'Jasa membuka blokir WhatsApp yang terkena spam atau permanen.' },
];

export const allProducts: Product[] = [
  ...panelProducts,
  ...botProducts,
  ...sosmedProducts,
  ...jpmProducts,
  ...otherProducts,
];

export const categories = [
  { id: 'panel', name: 'Panel WhatsApp', icon: 'server', desc: 'Hosting panel bot WhatsApp dengan berbagai spesifikasi RAM', count: '12 Layanan' },
  { id: 'bot', name: 'Sewa Bot', icon: 'robot', desc: 'Sewa bot WhatsApp untuk jaga grup, pushkontak, dan JPM', count: '9 Layanan' },
  { id: 'script', name: 'Script Bot', icon: 'code', desc: 'Script bot WhatsApp siap pakai dengan fitur lengkap', count: '4 Layanan' },
  { id: 'nokos', name: 'NOKOS WhatsApp', icon: 'phone', desc: 'Nomor kosong WhatsApp berbagai negara', count: '6 Layanan' },
  { id: 'sosmed', name: 'Jasa Sosmed', icon: 'hashtag', desc: 'Like, views, followers untuk TikTok, Instagram, WhatsApp', count: '30+ Layanan' },
  { id: 'jpm', name: 'Jasa Push Member', icon: 'user-plus', desc: 'Jasa tambah member grup WhatsApp reguler & premium', count: '14 Layanan' },
  { id: 'other', name: 'Layanan Lainnya', icon: 'cogs', desc: 'VPS, install panel, setting cPanel, rename script, dll', count: '10+ Layanan' },
];
