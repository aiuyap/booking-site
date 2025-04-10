import { Mail, Phone, MapPin, Facebook, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-red-800 bg-black py-10 text-gray-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {/* Logo and Description */}
        <div>
          <h2 className="mb-2 text-2xl font-bold">Condo Booking</h2>
          <p className="text-sm text-gray-400">
            Making your staycation easier and hassle-free.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="mb-3 text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="transition hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-red-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-3 text-xl font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@mycompany.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +1 234 567 890
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Mandaue City, Cebu
            </li>
          </ul>
          <div className="mt-4 flex gap-4">
            <a href="#" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Condo Booking. All rights reserved.
      </div>
    </footer>
  );
}
