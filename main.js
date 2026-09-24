import './style.css';

const WHATSAPP_NUMBER = "971501528361";

const products = [
  {
    id: 1,
    name: "Luxe Wand Massager",
    price: 6900,
    image: "/wand_massager.jpg",
    description: "Experience deep, rumbly vibrations with our sleek, minimalist wand. 10 patterns, whisper-quiet, and fully waterproof."
  },
  {
    id: 2,
    name: "Luminosity Curve",
    price: 9200,
    image: "/curve_massager.jpg",
    description: "Ergonomically designed for targeted stimulation. Features dual motors and a luxuriously smooth silicone finish."
  },
  {
    id: 3,
    name: "Rose Blossom Stimulator",
    price: 8500,
    image: "/rose_massager.jpg",
    description: "A beautifully crafted, discreet massager using air-pulse technology for an unforgettable experience. Perfect for gifting."
  },
  {
    id: 4,
    name: "Sensual Massage Candle",
    price: 5500,
    image: "/massage_candle.jpg",
    description: "Light this candle to set the mood, then pour the warm, moisturizing oil for a sensual massage."
  },
  {
    id: 5,
    name: "Tingling Pleasure Gel",
    price: 3200,
    image: "/pleasure_gel.jpg",
    description: "Enhance intimacy with this water-based gel that provides a gentle tingling sensation for heightened pleasure."
  },
  {
    id: 6,
    name: "Hydrating Body Lotion",
    price: 4500,
    image: "/body_lotion.jpg",
    description: "Keep your skin soft and radiant with this deeply nourishing body lotion infused with essential oils."
  },

  {
    id: 10,
    name: "Satin Blindfold",
    price: 2500,
    image: "/Satin Blindfold.jpg",
    description: "Heighten your senses with this luxurious and soft satin blindfold for a night of mystery."
  },
  {
    id: 11,
    name: "Dual-Action Massager",
    price: 12500,
    image: "/Dual-Action Massager.jpg",
    description: "A premium silicone massager designed for simultaneous stimulation with multiple vibration modes."
  },
  {
    id: 12,
    name: "Cooling Intimate Gel",
    price: 3500,
    image: "/cooling_gel.jpg",
    description: "Experience a refreshing and invigorating chill with this uniquely formulated intimate gel."
  },


  {
    id: 22,
    name: "Blowmotion Suction Vibrating Male Masturbator 2.0",
    price: 45000,
    image: "/Blowmotion Suction Vibrating Male Masturbator 2.0.png",
    description: "Powerful suction and vibration in an ergonomic, sleek design."
  },
  {
    id: 23,
    name: "njoy Pure Wand Stainless Steel Dildo",
    price: 54000,
    image: "/njoy Pure Wand Stainless Steel Dildo.jpg",
    description: "A beautifully crafted, heavy-duty stainless steel wand for intense stimulation."
  },
  {
    id: 24,
    name: "Lovehoney Green Silicone Prostate Vibrator",
    price: 8000,
    image: "/Lovehoney Green Silicone Prostate Vibrator.jpg",
    description: "A smooth, curved silicone vibrator perfectly designed for targeted massage."
  },
  {
    id: 25,
    name: "Blowmotion Warming Vibrating Male Masturbator",
    price: 30000,
    image: "/Blowmotion Warming Vibrating Male Masturbator.png",
    description: "Combines soothing warmth with deep vibrations for a realistic feel."
  },
  {
    id: 26,
    name: "Lovehoney Mega Mighty 2 Extra Inches Girthy Penis Extender",
    price: 9000,
    image: "/Lovehoney Mega Mighty 2 Extra Inches Girthy Penis Extender.jpg",
    description: "Enhance your size and pleasure with this realistic, stretchy sleeve."
  },
  {
    id: 27,
    name: "Lovehoney Clear Transparent Textured Stroker",
    price: 6000,
    image: "/Lovehoney Clear Transparent Textured Stroker.jpg",
    description: "A discreet and highly textured stroker for thrilling visual and physical sensations."
  },
  {
    id: 28,
    name: "Lovehoney Get Hard Extra Thick Silicone Cock Ring Set",
    price: 5100,
    image: "/Lovehoney Get Hard Extra Thick Silicone Cock Ring Set.jpg",
    description: "Set of three incredibly stretchy, thick silicone rings for stamina and support."
  },
  {
    id: 29,
    name: "Lovehoney High Roller Remote Control Rotating Prostate Massager",
    price: 27000,
    image: "/Lovehoney High Roller Remote Control Rotating Prostate Massager.jpeg",
    description: "Remote-controlled, rotating massager for hands-free, powerful stimulation."
  },
  {
    id: 30,
    name: "Fleshlight Renewer Powder 4oz",
    price: 3900,
    image: "/Fleshlight Renewer Powder 4oz.jpg",
    description: "Keep your silicone toys feeling soft, fresh, and like new."
  },
  {
    id: 31,
    name: "Fleshlight Riley Reid Utopia Texture",
    price: 24000,
    image: "/Fleshlight Riley Reid Utopia Texture.jpg",
    description: "A specialized inner texture modeled for mind-blowing realism and pleasure."
  },
  {
    id: 32,
    name: "Lovehoney Head Master Double Texture Blow Job Stroker",
    price: 4500,
    image: "/Lovehoney Head Master Double Texture Blow Job Stroker.jpg",
    description: "Dual-textured stroker for a dynamic and customizable experience."
  },
  {
    id: 33,
    name: "Aneros Helix Syn V Vibrating Silicone Prostate Massager",
    price: 30000,
    image: "/Aneros Helix Syn V Vibrating Silicone Prostate Massager.webp",
    description: "Ergonomically engineered for hands-free pleasure and profound orgasms."
  }
];

function formatPrice(price) {
  return new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR' }).format(price);
}

function getWhatsAppLink(productName, price) {
  const message = `Hello, I'm interested in ordering the ${productName} (Price: ${formatPrice(price)}). Is this available?`;
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const grid = document.getElementById('product-grid');

  if (!grid) return;

  grid.innerHTML = products.map(product => `
    <article class="product-card">
      <div class="img-container">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-info">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <span class="price">${formatPrice(product.price)}</span>
          <a href="${getWhatsAppLink(product.name, product.price)}" target="_blank" class="whatsapp-btn" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i> Order
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderProducts);
