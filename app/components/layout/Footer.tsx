'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SC</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">SummerCamps</div>
                <div className="text-xs text-gray-400">India</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              India's trusted platform for discovering and booking verified summer camps. 
              Safe, fun, and enriching experiences for your child.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-cities" className="text-sm hover:text-blue-400 transition-colors">
                  Browse by City
                </Link>
              </li>
              <li>
                <Link href="/residential-summer-camps" className="text-sm hover:text-blue-400 transition-colors">
                  Residential Camps
                </Link>
              </li>
              <li>
                <Link href="/all-camps" className="text-sm hover:text-blue-400 transition-colors">
                  All Camps
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Providers */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">For Providers</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/provider/register" className="text-sm hover:text-blue-400 transition-colors">
                  List Your Camp
                </Link>
              </li>
              <li>
                <Link href="/provider/login" className="text-sm hover:text-blue-400 transition-colors">
                  Provider Login
                </Link>
              </li>
              <li>
                <Link href="/provider/dashboard" className="text-sm hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/provider/help" className="text-sm hover:text-blue-400 transition-colors">
                  Provider Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:support@summercamps.in"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  support@summercamps.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Bengaluru, Karnataka<br />India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Cities */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-bold text-lg mb-4">Popular Cities</h3>
          <div className="flex flex-wrap gap-3">
            {['Bengaluru', 'Mumbai', 'Delhi', 'Gurugram', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata'].map(
              (city) => (
                <Link
                  key={city}
                  href={`/summer-camps/${city.toLowerCase()}`}
                  className="text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  {city}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} SummerCamps India. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/refund-policy"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
