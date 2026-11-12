
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Mail } from "lucide-react";

function Footer() {
  const socialIcons = [
    { Icon: FaFacebookF, label: "Facebook" },
    { Icon: FaInstagram, label: "Instagram" },
    { Icon: FaTwitter, label: "Twitter" },
    { Icon: FaYoutube, label: "YouTube" },
  ];

  return (
    <footer className="mt-8 bg-slate-900 text-white">

      {/* Newsletter */}
      <div className="border-b border-slate-700 px-5 py-8">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <h2 className="text-xl font-bold">
              Subscribe to our Newsletter
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Get updates about our latest products and offers.
            </p>
          </div>

          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-l-md bg-white px-4 py-3 text-sm text-gray-900 outline-none"
            />

            <button
              type="button"
              className="rounded-r-md bg-blue-600 px-5 text-sm font-semibold transition hover:bg-blue-700"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-400">
            Flipmart
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Your one-stop destination for fashion,
            electronics and lifestyle products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">Shop</li>
            <li className="cursor-pointer hover:text-white">About Us</li>
            <li className="cursor-pointer hover:text-white">Contact</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="mb-4 font-semibold">Customer Service</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white">My Account</li>
            <li className="cursor-pointer hover:text-white">Track Order</li>
            <li className="cursor-pointer hover:text-white">Wishlist</li>
            <li className="cursor-pointer hover:text-white">Returns & Refunds</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-4 font-semibold">Follow Us</h3>

          <div className="flex gap-3">
            {socialIcons.map(({ Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="rounded-full bg-slate-800 p-2 transition hover:bg-blue-600"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
            <Mail size={17} />
            support@flipmart.com
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 px-5 py-5 text-center text-xs text-gray-400">
        © 2026 Flipmart. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
