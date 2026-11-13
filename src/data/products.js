import { productImage } from "./images.js";
import { CATEGORY_IDS as C } from "./categories.js";

/**
 * Mock catalog. All prices are in INR (₹).
 * originalPrice === null means "not discounted".
 * Image paths are "<dummyjson-category>/<product-slug>" (see data/images.js).
 */

const BASE_DATE = Date.UTC(2026, 0, 1);
const DAY = 24 * 60 * 60 * 1000;

const SHIRT_SIZES = ["S", "M", "L", "XL", "XXL"];
const SHOE_SIZES = ["UK 7", "UK 8", "UK 9", "UK 10"];
const DRESS_SIZES = ["XS", "S", "M", "L"];

function createProduct({
  id,
  name,
  brand,
  categoryId,
  price,
  originalPrice = null,
  rating,
  reviewCount,
  stock,
  imagePath,
  imageCount = 2,
  description,
  specs,
  tags = [],
  variants = null,
  bestSeller = false,
}) {
  const images = Array.from({ length: imageCount }, (_, i) =>
    productImage(imagePath, i + 1)
  );

  return {
    id,
    name,
    brand,
    categoryId,
    price,
    originalPrice,
    rating,
    reviewCount,
    stock,
    image: images[0],
    images,
    description,
    specs,
    tags,
    variants, // { sizes?: string[], colors?: {name, hex}[] } or null
    isBestSeller: bestSeller,
    createdAt: new Date(BASE_DATE + ((id * 37) % 300) * DAY).toISOString(),
    sold: reviewCount * (3 + (id % 5)), // used for "popularity" sorting
  };
}

const products = [
  /* ---------------- Electronics ---------------- */
  createProduct({
    id: 1, name: "iPhone 13 Pro", brand: "Apple", categoryId: C.ELECTRONICS,
    price: 109900, originalPrice: 119900, rating: 4.8, reviewCount: 1240, stock: 18,
    imagePath: "smartphones/iphone-13-pro", bestSeller: true,
    description: "A15 Bionic chip, ProMotion display and a pro camera system in a durable stainless steel design.",
    specs: { Display: "6.1-inch Super Retina XDR", Chip: "A15 Bionic", Storage: "128 GB", Camera: "12 MP triple system" },
    tags: ["phone", "smartphone", "ios"],
    variants: { colors: [{ name: "Graphite", hex: "#4b4f56" }, { name: "Sierra Blue", hex: "#9bb5ce" }] },
  }),
  createProduct({
    id: 2, name: "OPPO F19 Pro+ 5G", brand: "OPPO", categoryId: C.ELECTRONICS,
    price: 25990, originalPrice: 29990, rating: 4.3, reviewCount: 530, stock: 40,
    imagePath: "smartphones/oppo-f19-pro-plus",
    description: "Slim 5G smartphone with a vivid AMOLED display and fast 50W flash charging.",
    specs: { Display: "6.43-inch AMOLED", RAM: "8 GB", Storage: "128 GB", Battery: "4310 mAh" },
    tags: ["phone", "smartphone", "android", "5g"],
    variants: { colors: [{ name: "Fluid Black", hex: "#1f2937" }, { name: "Space Silver", hex: "#cbd5e1" }] },
  }),
  createProduct({
    id: 3, name: "realme XT", brand: "realme", categoryId: C.ELECTRONICS,
    price: 15999, originalPrice: 18999, rating: 4.2, reviewCount: 880, stock: 55,
    imagePath: "smartphones/realme-xt",
    description: "Quad-camera smartphone with a sharp AMOLED screen and all-day battery.",
    specs: { Display: "6.4-inch AMOLED", RAM: "6 GB", Storage: "64 GB", Camera: "64 MP quad" },
    tags: ["phone", "smartphone", "android"],
  }),
  createProduct({
    id: 4, name: "Samsung Galaxy S10", brand: "Samsung", categoryId: C.ELECTRONICS,
    price: 39999, originalPrice: 49999, rating: 4.5, reviewCount: 760, stock: 9,
    imagePath: "smartphones/samsung-galaxy-s10",
    description: "Dynamic AMOLED infinity display, triple rear camera and wireless PowerShare.",
    specs: { Display: "6.1-inch Dynamic AMOLED", RAM: "8 GB", Storage: "128 GB", Battery: "3400 mAh" },
    tags: ["phone", "smartphone", "android"],
    variants: { colors: [{ name: "Prism White", hex: "#f1f5f9" }, { name: "Prism Black", hex: "#111827" }] },
  }),
  createProduct({
    id: 5, name: "iPad mini (2021) Starlight", brand: "Apple", categoryId: C.ELECTRONICS,
    price: 46900, originalPrice: 49900, rating: 4.7, reviewCount: 410, stock: 22,
    imagePath: "tablets/ipad-mini-2021-starlight",
    description: "Compact, powerful tablet with an 8.3-inch Liquid Retina display and A15 Bionic.",
    specs: { Display: "8.3-inch Liquid Retina", Chip: "A15 Bionic", Storage: "64 GB", Connectivity: "Wi-Fi" },
    tags: ["tablet", "ipad", "ios"],
  }),
  createProduct({
    id: 6, name: "Samsung Galaxy Tab S8+", brand: "Samsung", categoryId: C.ELECTRONICS,
    price: 74999, originalPrice: 89999, rating: 4.6, reviewCount: 190, stock: 12,
    imagePath: "tablets/samsung-galaxy-tab-s8-plus-grey",
    description: "12.4-inch Super AMOLED tablet with S Pen included, built for work and play.",
    specs: { Display: "12.4-inch Super AMOLED", RAM: "8 GB", Storage: "128 GB", Battery: "10090 mAh" },
    tags: ["tablet", "android"],
  }),
  createProduct({
    id: 7, name: "Apple Watch Series 4 Gold", brand: "Apple", categoryId: C.ELECTRONICS,
    price: 24999, originalPrice: 29999, rating: 4.4, reviewCount: 320, stock: 14,
    imagePath: "mobile-accessories/apple-watch-series-4-gold",
    description: "Smartwatch with fall detection, ECG and an edge-to-edge display.",
    specs: { Case: "44 mm gold aluminium", Sensors: "ECG, heart rate", Water: "50 m resistant", Connectivity: "GPS" },
    tags: ["watch", "smartwatch", "wearable"],
  }),

  /* ---------------- Computer & Laptop ---------------- */
  createProduct({
    id: 8, name: "MacBook Pro 14-inch Space Grey", brand: "Apple", categoryId: C.COMPUTER_LAPTOP,
    price: 189900, originalPrice: 199900, rating: 4.9, reviewCount: 640, stock: 7,
    imagePath: "laptops/apple-macbook-pro-14-inch-space-grey", bestSeller: true,
    description: "Pro-level performance with a Liquid Retina XDR display and all-day battery life.",
    specs: { Display: "14.2-inch Liquid Retina XDR", Memory: "16 GB", Storage: "512 GB SSD", Battery: "Up to 17 hours" },
    tags: ["laptop", "macbook", "computer"],
  }),
  createProduct({
    id: 9, name: "ASUS Zenbook Pro Dual Screen", brand: "ASUS", categoryId: C.COMPUTER_LAPTOP,
    price: 149990, originalPrice: 179990, rating: 4.5, reviewCount: 150, stock: 5,
    imagePath: "laptops/asus-zenbook-pro-dual-screen-laptop",
    description: "A laptop with a secondary ScreenPad Plus display for serious multitasking.",
    specs: { Display: "15.6-inch 4K OLED + ScreenPad", Memory: "16 GB", Storage: "1 TB SSD", Graphics: "NVIDIA RTX" },
    tags: ["laptop", "computer", "windows"],
  }),
  createProduct({
    id: 10, name: "Huawei MateBook X Pro", brand: "Huawei", categoryId: C.COMPUTER_LAPTOP,
    price: 119990, originalPrice: 139990, rating: 4.4, reviewCount: 210, stock: 11,
    imagePath: "laptops/huawei-matebook-x-pro",
    description: "Ultra-slim laptop with a 3K FullView touchscreen and a premium metal body.",
    specs: { Display: "13.9-inch 3K touch", Memory: "16 GB", Storage: "512 GB SSD", Weight: "1.33 kg" },
    tags: ["laptop", "computer", "ultrabook"],
  }),
  createProduct({
    id: 11, name: "Lenovo Yoga 920", brand: "Lenovo", categoryId: C.COMPUTER_LAPTOP,
    price: 99990, originalPrice: 124990, rating: 4.3, reviewCount: 275, stock: 16,
    imagePath: "laptops/lenovo-yoga-920",
    description: "Versatile 2-in-1 with a 360° hinge, thin bezels and long battery life.",
    specs: { Display: "13.9-inch 4K touch", Memory: "16 GB", Storage: "512 GB SSD", Type: "2-in-1 convertible" },
    tags: ["laptop", "computer", "2-in-1"],
  }),
  createProduct({
    id: 12, name: "Dell XPS 13 9300", brand: "Dell", categoryId: C.COMPUTER_LAPTOP,
    price: 129990, originalPrice: 149990, rating: 4.6, reviewCount: 380, stock: 8,
    imagePath: "laptops/new-dell-xps-13-9300-laptop",
    description: "Compact InfinityEdge laptop with brilliant display and fast 10th-gen performance.",
    specs: { Display: "13.4-inch FHD+", Memory: "16 GB", Storage: "512 GB SSD", Weight: "1.2 kg" },
    tags: ["laptop", "computer", "windows"],
  }),

  /* ---------------- Audio ---------------- */
  createProduct({
    id: 13, name: "Apple AirPods", brand: "Apple", categoryId: C.AUDIO,
    price: 12900, originalPrice: 14900, rating: 4.6, reviewCount: 2100, stock: 60,
    imagePath: "mobile-accessories/apple-airpods", bestSeller: true,
    description: "Wireless earbuds with effortless pairing and a charging case for all-day listening.",
    specs: { Type: "True wireless in-ear", Battery: "Up to 24 hours with case", Connectivity: "Bluetooth", Charging: "Lightning" },
    tags: ["earbuds", "earphones", "headphones", "wireless"],
  }),
  createProduct({
    id: 14, name: "Apple AirPods Max Silver", brand: "Apple", categoryId: C.AUDIO,
    price: 59900, originalPrice: 64900, rating: 4.7, reviewCount: 430, stock: 0,
    imagePath: "mobile-accessories/apple-airpods-max-silver",
    description: "High-fidelity over-ear headphones with active noise cancellation and spatial audio.",
    specs: { Type: "Over-ear", Noise: "Active noise cancellation", Battery: "Up to 20 hours", Connectivity: "Bluetooth" },
    tags: ["headphones", "wireless", "noise cancelling"],
  }),
  createProduct({
    id: 15, name: "Beats Flex Wireless Earphones", brand: "Beats", categoryId: C.AUDIO,
    price: 3999, originalPrice: 5999, rating: 4.2, reviewCount: 1560, stock: 85,
    imagePath: "mobile-accessories/beats-flex-wireless-earphones", bestSeller: true,
    description: "Lightweight magnetic neckband earphones with up to 12 hours of playback.",
    specs: { Type: "In-ear neckband", Battery: "Up to 12 hours", Connectivity: "Bluetooth", Charging: "USB-C" },
    tags: ["earphones", "headphones", "wireless"],
  }),
  createProduct({
    id: 16, name: "Apple HomePod mini Cosmic Grey", brand: "Apple", categoryId: C.AUDIO,
    price: 9900, originalPrice: 10900, rating: 4.5, reviewCount: 290, stock: 19,
    imagePath: "mobile-accessories/apple-homepod-mini-cosmic-grey",
    description: "Compact smart speaker with room-filling 360° sound and Siri built in.",
    specs: { Type: "Smart speaker", Sound: "360° audio", Assistant: "Siri", Connectivity: "Wi-Fi" },
    tags: ["speaker", "smart speaker", "home"],
  }),

  /* ---------------- Cameras (camera gear) ---------------- */
  createProduct({
    id: 17, name: "TV Studio Camera Pedestal", brand: "StudioPro", categoryId: C.CAMERAS,
    price: 42999, originalPrice: 54999, rating: 4.4, reviewCount: 48, stock: 4,
    imagePath: "mobile-accessories/tv-studio-camera-pedestal",
    description: "Heavy-duty studio pedestal with smooth height adjustment for broadcast cameras.",
    specs: { Type: "Studio pedestal", Material: "Steel and aluminium", Casters: "Lockable", Use: "Studio / broadcast" },
    tags: ["camera", "studio", "tripod", "stand"],
  }),
  createProduct({
    id: 18, name: "Camera Monopod", brand: "SnapGear", categoryId: C.CAMERAS,
    price: 1499, originalPrice: 2499, rating: 4.1, reviewCount: 320, stock: 70,
    imagePath: "mobile-accessories/monopod",
    description: "Lightweight, extendable monopod for stable photos and video on the move.",
    specs: { Type: "Monopod", Material: "Aluminium", Extension: "Telescopic", Mount: "1/4-inch thread" },
    tags: ["camera", "tripod", "monopod", "stand"],
  }),
  createProduct({
    id: 19, name: "Selfie Stick Monopod", brand: "SnapGear", categoryId: C.CAMERAS,
    price: 799, originalPrice: 1299, rating: 4.0, reviewCount: 940, stock: 120,
    imagePath: "mobile-accessories/selfie-stick-monopod",
    description: "Extendable selfie stick with a phone clamp that works with most smartphones.",
    specs: { Type: "Selfie stick", Material: "Aluminium", Extension: "Telescopic", Compatibility: "Most smartphones" },
    tags: ["selfie", "phone", "stand", "camera"],
  }),
  createProduct({
    id: 20, name: "Selfie Lamp with iPhone", brand: "GlowCam", categoryId: C.CAMERAS,
    price: 1999, originalPrice: 2999, rating: 4.3, reviewCount: 215, stock: 33,
    imagePath: "mobile-accessories/selfie-lamp-with-iphone",
    description: "Ring light with adjustable brightness for flattering photos, video calls and streaming.",
    specs: { Type: "LED ring light", Brightness: "3 modes", Power: "USB", Use: "Video / photos" },
    tags: ["light", "ring light", "video", "camera"],
  }),

  /* ---------------- Chair ---------------- */
  createProduct({
    id: 21, name: "Knoll Saarinen Executive Chair", brand: "Knoll", categoryId: C.CHAIR,
    price: 28999, originalPrice: 34999, rating: 4.6, reviewCount: 96, stock: 3,
    imagePath: "furniture/knoll-saarinen-executive-conference-chair",
    description: "Iconic executive conference chair with a sculpted shell and supportive seat.",
    specs: { Type: "Executive chair", Material: "Moulded shell, steel base", Adjustment: "Swivel", Use: "Office / conference" },
    tags: ["chair", "office", "furniture", "seating"],
  }),
  createProduct({
    id: 22, name: "Annibale Colombo Sofa", brand: "Annibale Colombo", categoryId: C.CHAIR,
    price: 84999, originalPrice: 99999, rating: 4.7, reviewCount: 64, stock: 6,
    imagePath: "furniture/annibale-colombo-sofa",
    description: "Elegant three-seater sofa with deep cushioning and a classic carved frame.",
    specs: { Type: "3-seater sofa", Frame: "Solid wood", Upholstery: "Fabric", Style: "Classic" },
    tags: ["sofa", "couch", "furniture", "seating", "living room"],
  }),

  /* ---------------- Beauty ---------------- */
  createProduct({
    id: 23, name: "Essence Mascara Lash Princess", brand: "Essence", categoryId: C.BEAUTY,
    price: 399, originalPrice: 499, rating: 4.5, reviewCount: 3200, stock: 150,
    imagePath: "beauty/essence-mascara-lash-princess", bestSeller: true,
    description: "Volumising and lengthening mascara for dramatic, fluttery lashes.",
    specs: { Type: "Mascara", Finish: "Volume and length", Shade: "Black", Content: "12 ml" },
    tags: ["makeup", "mascara", "eyes", "cosmetics"],
  }),
  createProduct({
    id: 24, name: "Eyeshadow Palette with Mirror", brand: "Glamour Beauty", categoryId: C.BEAUTY,
    price: 899, originalPrice: 1299, rating: 4.2, reviewCount: 780, stock: 64,
    imagePath: "beauty/eyeshadow-palette-with-mirror",
    description: "Pigmented eyeshadow palette in matte and shimmer shades with a built-in mirror.",
    specs: { Type: "Eyeshadow palette", Shades: "Matte and shimmer", Finish: "Blendable", Extras: "Built-in mirror" },
    tags: ["makeup", "eyeshadow", "eyes", "cosmetics"],
  }),
  createProduct({
    id: 25, name: "Red Lipstick", brand: "Chic Cosmetics", categoryId: C.BEAUTY,
    price: 549, originalPrice: 799, rating: 4.4, reviewCount: 1890, stock: 92,
    imagePath: "beauty/red-lipstick", bestSeller: true,
    description: "Bold, long-wear red lipstick with a creamy, comfortable finish.",
    specs: { Type: "Lipstick", Shade: "Classic red", Finish: "Creamy", Wear: "Long-lasting" },
    tags: ["makeup", "lipstick", "lips", "cosmetics"],
  }),
  createProduct({
    id: 26, name: "Red Nail Polish", brand: "Nail Couture", categoryId: C.BEAUTY,
    price: 249, originalPrice: 349, rating: 4.1, reviewCount: 640, stock: 110,
    imagePath: "beauty/red-nail-polish",
    description: "Glossy, chip-resistant red nail polish for a salon-style manicure at home.",
    specs: { Type: "Nail polish", Shade: "Red", Finish: "High gloss", Content: "10 ml" },
    tags: ["nails", "nail polish", "cosmetics"],
  }),

  /* ---------------- Accessories ---------------- */
  createProduct({
    id: 27, name: "Black Sun Glasses", brand: "ShadeCo", categoryId: C.ACCESSORIES,
    price: 1299, originalPrice: 1999, rating: 4.2, reviewCount: 520, stock: 45,
    imagePath: "sunglasses/black-sun-glasses",
    description: "Classic black sunglasses with UV protection lenses and a lightweight frame.",
    specs: { Frame: "Black", Lens: "UV400 protection", Fit: "Unisex", Style: "Classic" },
    tags: ["sunglasses", "glasses", "eyewear"],
  }),
  createProduct({
    id: 28, name: "Classic Sun Glasses", brand: "ShadeCo", categoryId: C.ACCESSORIES,
    price: 1499, originalPrice: 2199, rating: 4.3, reviewCount: 410, stock: 38,
    imagePath: "sunglasses/classic-sun-glasses",
    description: "Timeless sunglasses that suit every face shape, with durable UV protection.",
    specs: { Frame: "Acetate", Lens: "UV400 protection", Fit: "Unisex", Style: "Classic" },
    tags: ["sunglasses", "glasses", "eyewear"],
  }),
  createProduct({
    id: 29, name: "Longines Master Collection", brand: "Longines", categoryId: C.ACCESSORIES,
    price: 109000, originalPrice: 125000, rating: 4.8, reviewCount: 85, stock: 4,
    imagePath: "mens-watches/longines-master-collection",
    description: "Elegant automatic watch from the Master Collection with a refined dial.",
    specs: { Movement: "Automatic", Case: "Stainless steel", Water: "30 m resistant", Strap: "Leather" },
    tags: ["watch", "wristwatch", "luxury", "men"],
  }),
  createProduct({
    id: 30, name: "Brown Leather Belt Watch", brand: "Fashion Timepieces", categoryId: C.ACCESSORIES,
    price: 2999, originalPrice: 4999, rating: 4.1, reviewCount: 360, stock: 52,
    imagePath: "mens-watches/brown-leather-belt-watch",
    description: "Everyday analogue watch with a brown leather strap and a clean dial.",
    specs: { Movement: "Quartz", Case: "Alloy", Strap: "Brown leather", Water: "Splash resistant" },
    tags: ["watch", "wristwatch", "men"],
  }),
  createProduct({
    id: 31, name: "Heshe Women's Leather Bag", brand: "Heshe", categoryId: C.ACCESSORIES,
    price: 3499, originalPrice: 5499, rating: 4.4, reviewCount: 290, stock: 27,
    imagePath: "womens-bags/heshe-women's-leather-bag",
    description: "Spacious leather handbag with secure compartments for everyday carry.",
    specs: { Material: "Leather", Closure: "Zip", Compartments: "3", Use: "Daily / work" },
    tags: ["bag", "handbag", "leather", "women"],
  }),

  /* ---------------- Clothing: men ---------------- */
  createProduct({
    id: 32, name: "Gigabyte Aorus Men T-Shirt", brand: "Gigabyte", categoryId: C.CLOTHING,
    price: 799, originalPrice: 1299, rating: 4.1, reviewCount: 240, stock: 75,
    imagePath: "mens-shirts/gigabyte-aorus-men-tshirt",
    description: "Soft cotton gaming-inspired t-shirt with a bold front graphic.",
    specs: { Fabric: "Cotton", Fit: "Regular", Neck: "Round neck", Care: "Machine wash" },
    tags: ["men", "t-shirt", "shirt", "clothing"],
    variants: { sizes: SHIRT_SIZES },
  }),
  createProduct({
    id: 33, name: "Man Short Sleeve Shirt", brand: "Urban Tailor", categoryId: C.CLOTHING,
    price: 899, originalPrice: 1499, rating: 4.2, reviewCount: 310, stock: 66,
    imagePath: "mens-shirts/man-short-sleeve-shirt",
    description: "Breathable short sleeve shirt that works for the office and weekends.",
    specs: { Fabric: "Cotton blend", Fit: "Regular", Sleeve: "Short", Care: "Machine wash" },
    tags: ["men", "shirt", "clothing", "casual"],
    variants: { sizes: SHIRT_SIZES },
  }),
  createProduct({
    id: 34, name: "Men Check Shirt", brand: "Urban Tailor", categoryId: C.CLOTHING,
    price: 1099, originalPrice: 1799, rating: 4.4, reviewCount: 520, stock: 58,
    imagePath: "mens-shirts/men-check-shirt", bestSeller: true,
    description: "Classic check shirt in soft fabric, easy to dress up or down.",
    specs: { Fabric: "Cotton", Fit: "Slim", Sleeve: "Full", Pattern: "Checked" },
    tags: ["men", "shirt", "clothing", "casual", "check"],
    variants: { sizes: SHIRT_SIZES },
  }),
  createProduct({
    id: 35, name: "Blue & Black Check Shirt", brand: "Urban Tailor", categoryId: C.CLOTHING,
    price: 1299, originalPrice: 1999, rating: 4.3, reviewCount: 470, stock: 49,
    imagePath: "mens-shirts/blue-&-black-check-shirt",
    description: "Blue and black checked shirt with a comfortable, structured fit.",
    specs: { Fabric: "Cotton", Fit: "Regular", Sleeve: "Full", Pattern: "Checked" },
    tags: ["men", "shirt", "clothing", "casual", "check"],
    variants: { sizes: SHIRT_SIZES },
  }),
  createProduct({
    id: 36, name: "Nike Air Jordan 1 Red and Black", brand: "Nike", categoryId: C.CLOTHING,
    price: 14995, originalPrice: 16995, rating: 4.8, reviewCount: 920, stock: 13,
    imagePath: "mens-shoes/nike-air-jordan-1-red-and-black", bestSeller: true,
    description: "Iconic high-top sneakers with premium leather and legendary street style.",
    specs: { Upper: "Leather", Sole: "Rubber cupsole", Closure: "Lace-up", Style: "High-top" },
    tags: ["men", "shoes", "sneakers", "footwear", "nike"],
    variants: { sizes: SHOE_SIZES },
  }),
  createProduct({
    id: 37, name: "Puma Future Rider Trainers", brand: "Puma", categoryId: C.CLOTHING,
    price: 6999, originalPrice: 9999, rating: 4.4, reviewCount: 610, stock: 31,
    imagePath: "mens-shoes/puma-future-rider-trainers",
    description: "Retro running-inspired trainers with cushioned comfort for daily wear.",
    specs: { Upper: "Mesh and synthetic", Sole: "Rubber", Closure: "Lace-up", Use: "Casual / training" },
    tags: ["men", "shoes", "sneakers", "footwear", "puma"],
    variants: { sizes: SHOE_SIZES },
  }),
  createProduct({
    id: 38, name: "Sports Sneakers Off White & Red", brand: "ActiveStride", categoryId: C.CLOTHING,
    price: 3499, originalPrice: 4999, rating: 4.2, reviewCount: 380, stock: 44,
    imagePath: "mens-shoes/sports-sneakers-off-white-&-red",
    description: "Lightweight sports sneakers with breathable uppers and a grippy outsole.",
    specs: { Upper: "Breathable mesh", Sole: "Rubber", Closure: "Lace-up", Use: "Sports / casual" },
    tags: ["men", "shoes", "sneakers", "footwear", "sports"],
    variants: { sizes: SHOE_SIZES },
  }),

  /* ---------------- Clothing: women ---------------- */
  createProduct({
    id: 39, name: "Corset Leather with Skirt", brand: "Velvet Muse", categoryId: C.CLOTHING,
    price: 2999, originalPrice: 4999, rating: 4.5, reviewCount: 560, stock: 21,
    imagePath: "womens-dresses/corset-leather-with-skirt", bestSeller: true,
    description: "Statement faux-leather corset top paired with a flattering skirt.",
    specs: { Fabric: "Faux leather", Fit: "Fitted", Set: "Top and skirt", Occasion: "Party" },
    tags: ["women", "dress", "skirt", "clothing", "party"],
    variants: { sizes: DRESS_SIZES },
  }),
  createProduct({
    id: 40, name: "Corset with Black Skirt", brand: "Velvet Muse", categoryId: C.CLOTHING,
    price: 2499, originalPrice: 3999, rating: 4.3, reviewCount: 430, stock: 26,
    imagePath: "womens-dresses/corset-with-black-skirt",
    description: "Elegant corset top with a black skirt for evening occasions.",
    specs: { Fabric: "Polyester blend", Fit: "Fitted", Set: "Top and skirt", Occasion: "Evening" },
    tags: ["women", "dress", "skirt", "clothing", "evening"],
    variants: { sizes: DRESS_SIZES },
  }),
  createProduct({
    id: 41, name: "Pea Green Dress", brand: "Velvet Muse", categoryId: C.CLOTHING,
    price: 1999, originalPrice: 2999, rating: 4.2, reviewCount: 270, stock: 35,
    imagePath: "womens-dresses/dress-pea",
    description: "Light and flowy dress in a fresh pea green shade, perfect for day outings.",
    specs: { Fabric: "Georgette", Fit: "A-line", Length: "Knee length", Occasion: "Casual" },
    tags: ["women", "dress", "clothing", "casual"],
    variants: { sizes: DRESS_SIZES },
  }),
  createProduct({
    id: 42, name: "Marni Red & Black Suit", brand: "Marni", categoryId: C.CLOTHING,
    price: 24999, originalPrice: 32999, rating: 4.6, reviewCount: 52, stock: 8,
    imagePath: "womens-dresses/marni-red-&-black-suit",
    description: "Tailored red and black suit with sharp lines for a confident statement.",
    specs: { Fabric: "Wool blend", Fit: "Tailored", Set: "Jacket and trousers", Occasion: "Formal" },
    tags: ["women", "suit", "formal", "clothing"],
    variants: { sizes: DRESS_SIZES },
  }),
  createProduct({
    id: 43, name: "Black Women's Gown", brand: "Velvet Muse", categoryId: C.CLOTHING,
    price: 4999, originalPrice: 7999, rating: 4.7, reviewCount: 188, stock: 15,
    imagePath: "womens-dresses/black-women's-gown",
    description: "Floor-length black gown with an elegant silhouette for special evenings.",
    specs: { Fabric: "Satin blend", Fit: "Fitted", Length: "Floor length", Occasion: "Formal / party" },
    tags: ["women", "gown", "dress", "clothing", "formal"],
    variants: { sizes: DRESS_SIZES },
  }),
];

export default products;

/* ------------------------------------------------------------------
 * Homepage sections.
 * Kept as named exports so the existing homepage components keep working
 * unchanged. They are simply views over the catalog above.
 * ------------------------------------------------------------------ */
const byIds = (ids) =>
  ids.map((id) => products.find((p) => p.id === id)).filter(Boolean);

export const premiumProducts = byIds([8, 1, 14, 29, 9]);
export const clothingProducts = byIds([39, 40, 41, 42, 43, 31]);
export const menProducts = byIds([36, 37, 34, 35]);
