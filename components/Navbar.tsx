"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react'; // Assumed from your code snippet

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Coverage', href: '/coverage' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3 text-gray-900'
          : 'bg-transparent py-5 text-white' // Alternates base text color depending on state
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-0 cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Star Investment Logo"
              width={50}
              height={50}
              className={`object-contain transition-all duration-300 ${!scrolled && 'invert brightness-200'}`} // Keeps dark logos legible on dark headers
            />
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Star Investment
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  scrolled ? 'text-gray-600 hover:text-black' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.name}
                {/* Underline hover effect */}
                <span className={`absolute -bottom-1.5 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-black' : 'bg-white'}`} />
              </a>
            ))}
          </nav>

          {/* Primary CTA (Desktop) */}
          <div className="hidden md:flex">
            <button className={`group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95 shadow-sm hover:shadow-md ${
              scrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-zinc-100'
            }`}>
              Request Consultation
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 -mr-2 transition-transform active:scale-90 ${scrolled ? 'text-gray-900' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 absolute w-full left-0 text-gray-900 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block px-4 py-4 text-base font-semibold text-gray-800 hover:text-black hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 px-2"
              >
                <button className="w-full flex justify-center items-center gap-2 bg-black text-white px-5 py-3.5 rounded-xl text-base font-medium hover:bg-gray-800 transition-all active:scale-95 shadow-md">
                  Request Consultation
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}