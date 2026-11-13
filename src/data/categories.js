import { productImage } from "./images.js";

/**
 * type: "category"   -> products belong to it via product.categoryId
 * type: "collection" -> curated/derived list (rules live in utils/productUtils.js)
 *
 * IDs 1-10 match the original navbar order.
 */
export const CATEGORY_IDS = {
  ACCESSORIES: 1,
  AUDIO: 2,
  BEAUTY: 3,
  BEST_DEALS: 4,
  BEST_SELLER: 5,
  CAMERAS: 6,
  CHAIR: 7,
  CLOTHING: 8,
  COMPUTER_LAPTOP: 9,
  ELECTRONICS: 10,
};

const categories = [
  {
    id: 1,
    slug: "accessories",
    name: "Accessories",
    type: "category",
    description: "Watches, sunglasses and bags to finish every look.",
    image: productImage("sunglasses/black-sun-glasses"),
  },
  {
    id: 2,
    slug: "audio",
    name: "Audio",
    type: "category",
    description: "Earbuds, headphones and smart speakers for great sound.",
    image: productImage("mobile-accessories/apple-airpods"),
  },
  {
    id: 3,
    slug: "beauty",
    name: "Beauty",
    type: "category",
    description: "Makeup and beauty essentials from loved brands.",
    image: productImage("beauty/red-lipstick"),
  },
  {
    id: 4,
    slug: "best-deals",
    name: "Best Deals",
    type: "collection",
    description: "Biggest savings right now: products with 25% off or more.",
    image: productImage("laptops/lenovo-yoga-920"),
  },
  {
    id: 5,
    slug: "best-seller",
    name: "Best Seller",
    type: "collection",
    description: "The products our customers love the most.",
    image: productImage("womens-dresses/corset-leather-with-skirt"),
  },
  {
    id: 6,
    slug: "cameras",
    name: "Cameras",
    type: "category",
    description: "Camera support and creator gear: pedestals, monopods and lights.",
    image: productImage("mobile-accessories/tv-studio-camera-pedestal"),
  },
  {
    id: 7,
    slug: "chair",
    name: "Chair",
    type: "category",
    description: "Comfortable seating for your home and office.",
    image: productImage("furniture/knoll-saarinen-executive-conference-chair"),
  },
  {
    id: 8,
    slug: "clothing",
    name: "Clothing",
    type: "category",
    description: "Fashion and footwear for men and women.",
    image: productImage("mens-shirts/men-check-shirt"),
  },
  {
    id: 9,
    slug: "computer-laptop",
    name: "Computer & Laptop",
    type: "category",
    description: "Laptops for work, study and creative projects.",
    image: productImage("laptops/asus-zenbook-pro-dual-screen-laptop"),
  },
  {
    id: 10,
    slug: "electronics",
    name: "Electronics",
    type: "category",
    description: "Smartphones, tablets, smartwatches and more.",
    image: productImage("smartphones/iphone-13-pro"),
  },
];

export default categories;
