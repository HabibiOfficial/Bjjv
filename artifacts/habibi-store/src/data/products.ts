export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  features?: string[];
  popular?: boolean;
  priceLabel?: string;
  badge?: "TERLARIS" | "BARU" | "PROMO";
}

export interface BotTier {
  label: string;
  price: number;
  isPermanent?: boolean;
}

export interface BotProduct {
  id: string;
  name: string;
  icon: string;
  description: string;
  tiers: BotTier[];
}

export interface SosmedCategory {
  id: string;
  platform: string;
  type: string;
  icon: string;
  colorClass: string;
  items: { label: string; price: number }[];
}

export interface ScriptProduct {
  id: string;
  name: string;
  price: number;
}

export interface NokosProduct {
  id: string;
  country: string;
  code: string;
  flag: string;
  price: number;
}

export const panelProducts: Product[] = [
  { id: 'panel-1gb', name: 'RAM 1GB', price: 1000, category: 'panel', badge: 'TERLARIS', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-2gb', name: 'RAM 2GB', price: 2000, category: 'panel', badge: 'BARU', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-3gb', name: 'RAM 3GB', price: 3000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-4gb', name: 'RAM 4GB', price: 4000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-5gb', name: 'RAM 5GB', price: 5000, category: 'panel', popular: true, features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection', 'Priority Support'] },
  { id: 'panel-6gb', name: 'RAM 6GB', price: 6000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-7gb', name: 'RAM 7GB', price: 7000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-8gb', name: 'RAM 8GB', price: 8000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-9gb', name: 'RAM 9GB', price: 9000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-10gb', name: 'RAM 10GB', price: 10000, category: 'panel', features: ['Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection'] },
  { id: 'panel-unlimited', name: 'UNLIMITED', price: 12000, category: 'panel', features: ['RAM Unlimited', 'Server 24 Jam Online', 'Anti Delete / Anti Rusuh', 'Anti Maling Script', 'Tidak Boros Kuota', 'Anti DDOS Protection', 'Premium Support'] },
  { id: 'panel-reseller', name: 'RESELLER', price: 15000, category: 'panel', features: ['Harga Khusus Reseller', 'Support Lengkap', 'Dashboard Reseller', 'Bisa Jual Kembali'] },
];

export const botProducts: BotProduct[] = [
  {
    id: 'bot-jaga-grup',
    name: 'Bot Jaga Grup',
    icon: 'shield',
    description: 'Bot untuk menjaga keamanan grup WhatsApp dari spammer, link berbahaya, dan anggota tidak diinginkan.',
    tiers: [
      { label: 'Sewa 1 Hari', price: 2000 },
      { label: 'Sewa 3 Hari', price: 5000 },
      { label: 'Sewa 7 Hari', price: 10000 },
      { label: 'Sewa 15 Hari', price: 15000 },
      { label: 'Sewa 1 Bulan', price: 20000 },
      { label: 'PERMANEN', price: 30000, isPermanent: true },
    ],
  },
  {
    id: 'bot-pushkontak',
    name: 'Bot Pushkontak',
    icon: 'broadcast',
    description: 'Bot untuk mengirim pesan ke kontak secara massal dengan mudah dan efisien.',
    tiers: [
      { label: 'Sewa 3 Hari', price: 5000 },
      { label: 'Sewa 7 Hari', price: 10000 },
      { label: 'Sewa 15 Hari', price: 15000 },
      { label: 'Sewa 1 Bulan', price: 20000 },
    ],
  },
  {
    id: 'bot-jpm',
    name: 'Bot JPM (Push Member)',
    icon: 'rocket',
    description: 'Bot untuk mendorong anggota masuk ke grup WhatsApp dengan cepat dan efektif.',
    tiers: [
      { label: 'Sewa 3 Hari', price: 5000 },
      { label: 'Sewa 7 Hari', price: 10000 },
      { label: 'Sewa 15 Hari', price: 15000 },
      { label: 'Sewa 1 Bulan', price: 20000 },
    ],
  },
];

export const scriptProducts: ScriptProduct[] = [
  { id: 'script-jpm', name: 'Script JPM', price: 10000 },
  { id: 'script-cpanel', name: 'Script CPanel', price: 10000 },
  { id: 'script-jaga-grup', name: 'Script Jaga Grup', price: 15000 },
  { id: 'script-pushkontak', name: 'Script Pushkontak', price: 15000 },
];

export const nokosProducts: NokosProduct[] = [
  { id: 'nokos-id', country: 'Indonesia', code: '+62', flag: '🇮🇩', price: 7000 },
  { id: 'nokos-ve', country: 'Venezuela', code: '+58', flag: '🇻🇪', price: 10000 },
  { id: 'nokos-af', country: 'Afganistan', code: '+93', flag: '🇦🇫', price: 10000 },
  { id: 'nokos-ph', country: 'Philipina', code: '+63', flag: '🇵🇭', price: 10000 },
  { id: 'nokos-ir', country: 'Iran', code: '+98', flag: '🇮🇷', price: 10000 },
  { id: 'nokos-us', country: 'USA', code: '+1', flag: '🇺🇸', price: 25000 },
];

export const sosmedCategories: SosmedCategory[] = [
  {
    id: 'tiktok-likes',
    platform: 'TikTok',
    type: 'Likes',
    icon: 'tiktok',
    colorClass: 'from-black to-pink-600',
    items: [
      { label: '1.000 Like', price: 2000 },
      { label: '2.000 Like', price: 3000 },
      { label: '3.000 Like', price: 4000 },
      { label: '4.000 Like', price: 5000 },
      { label: '5.000 Like', price: 6000 },
      { label: '6.000 Like', price: 7000 },
      { label: '7.000 Like', price: 8000 },
    ],
  },
  {
    id: 'tiktok-views',
    platform: 'TikTok',
    type: 'Views',
    icon: 'tiktok',
    colorClass: 'from-black to-pink-600',
    items: [
      { label: '10k Views', price: 4000 },
      { label: '20k Views', price: 6000 },
      { label: '30k Views', price: 8000 },
      { label: '40k Views', price: 10000 },
      { label: '50k Views', price: 12000 },
      { label: '60k Views', price: 14000 },
      { label: '70k Views', price: 16000 },
      { label: '80k Views', price: 20000 },
      { label: '90k Views', price: 22000 },
      { label: '100k Views', price: 24000 },
    ],
  },
  {
    id: 'tiktok-followers',
    platform: 'TikTok',
    type: 'Followers',
    icon: 'tiktok',
    colorClass: 'from-black to-pink-600',
    items: [
      { label: '100 Follower', price: 4000 },
      { label: '200 Follower', price: 6000 },
      { label: '300 Follower', price: 8000 },
      { label: '400 Follower', price: 10000 },
      { label: '500 Follower', price: 12000 },
      { label: '600 Follower', price: 15000 },
      { label: '1.000 Follower', price: 25000 },
    ],
  },
  {
    id: 'ig-likes',
    platform: 'Instagram',
    type: 'Likes',
    icon: 'instagram',
    colorClass: 'from-orange-400 to-pink-600',
    items: [
      { label: '400 Like', price: 8000 },
      { label: '800 Like', price: 12000 },
      { label: '1.000 Like', price: 15000 },
      { label: '1.500 Like', price: 20000 },
      { label: '2.000 Like', price: 25000 },
    ],
  },
  {
    id: 'ig-views',
    platform: 'Instagram',
    type: 'Views',
    icon: 'instagram',
    colorClass: 'from-orange-400 to-pink-600',
    items: [
      { label: '20k Views', price: 4000 },
      { label: '30k Views', price: 6000 },
      { label: '40k Views', price: 8000 },
      { label: '50k Views', price: 10000 },
    ],
  },
  {
    id: 'ig-followers',
    platform: 'Instagram',
    type: 'Followers',
    icon: 'instagram',
    colorClass: 'from-orange-400 to-pink-600',
    items: [
      { label: '100 Follower', price: 8000 },
      { label: '200 Follower', price: 14000 },
      { label: '300 Follower', price: 19000 },
      { label: '400 Follower', price: 23000 },
      { label: '500 Follower', price: 30000 },
      { label: '600 Follower', price: 35000 },
      { label: '700 Follower', price: 40000 },
      { label: '800 Follower', price: 50000 },
      { label: '900 Follower', price: 55000 },
      { label: '1.000 Follower', price: 60000 },
    ],
  },
  {
    id: 'wa-channel',
    platform: 'WA Channel',
    type: 'Followers',
    icon: 'whatsapp',
    colorClass: 'from-[#25D366] to-[#128C7E]',
    items: [
      { label: '100 Follower', price: 8000 },
      { label: '200 Follower', price: 14000 },
      { label: '300 Follower', price: 17000 },
      { label: '400 Follower', price: 22000 },
      { label: '500 Follower', price: 25000 },
      { label: '600 Follower', price: 27000 },
      { label: '700 Follower', price: 30000 },
      { label: '800 Follower', price: 33000 },
      { label: '900 Follower', price: 35000 },
      { label: '1.000 Follower', price: 40000 },
    ],
  },
];

export const categories = [
  { id: 'panel', name: 'Panel WhatsApp', icon: 'server', desc: 'Hosting panel bot WhatsApp dengan berbagai spesifikasi RAM', count: '12 Layanan' },
  { id: 'bot', name: 'Sewa Bot', icon: 'robot', desc: 'Sewa bot WhatsApp untuk jaga grup, pushkontak, dan JPM', count: '3 Layanan' },
  { id: 'script', name: 'Script Bot', icon: 'code', desc: 'Script bot WhatsApp siap pakai tanpa encrypt', count: '4 Layanan' },
  { id: 'nokos', name: 'NOKOS WhatsApp', icon: 'phone', desc: 'Nomor kosong WhatsApp berbagai negara', count: '6 Negara' },
  { id: 'sosmed', name: 'Jasa Sosmed', icon: 'hashtag', desc: 'Like, views, followers untuk TikTok, Instagram, WhatsApp', count: '7 Kategori' },
  { id: 'jpm', name: 'Jasa Push Member', icon: 'user-plus', desc: 'Jasa tambah member grup WhatsApp', count: 'Tersedia' },
  { id: 'other', name: 'Layanan Lainnya', icon: 'cogs', desc: 'VPS, install panel, setting cPanel, rename script, dll', count: '10+ Layanan' },
];

export const allProducts = [
  ...panelProducts.map(p => ({ ...p, searchName: p.name })),
  ...scriptProducts.map(p => ({ id: p.id, name: p.name, price: p.price, category: 'script', searchName: p.name })),
  ...nokosProducts.map(p => ({ id: p.id, name: `NOKOS ${p.country} ${p.code}`, price: p.price, category: 'nokos', searchName: `NOKOS ${p.country}` })),
];
