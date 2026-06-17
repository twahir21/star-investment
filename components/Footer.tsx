"use client";

import { motion, Variants } from 'framer-motion';
import { 
  Star, 
  ArrowRight,
  Mail,
  Phone,
} from 'lucide-react';
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'News & Insights', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  services: [
    { name: 'Wealth Management', href: '#' },
    { name: 'Financial Planning', href: '#' },
    { name: 'Corporate Advisory', href: '#' },
    { name: 'Private Banking', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Disclosures', href: '#' },
  ],
};

const socialLinks = [
  { icon: FaLinkedinIn, href: '#' },
  { icon: FaXTwitter, href: '#' },
  { icon: FaFacebookF, href: '#' },
  { icon: FaInstagram, href: '#' },
];

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Brand & Description (Spans 4 cols on large screens) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white text-black p-1.5 rounded-lg shadow-md">
                <Star size={20} className="fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Star Investment
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Empowering your financial future through strategic wealth management, 
              innovative solutions, and unparalleled corporate advisory services.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index} 
                    href={social.href}
                    className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-zinc-100">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-zinc-100">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter (Spans 4 cols on large screens) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-zinc-100">Subscribe to Insights</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-zinc-400 text-sm">
                Get the latest market updates and investment strategies delivered to your inbox.
              </p>
              <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-zinc-900 border border-zinc-800 text-white text-sm rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black p-1.5 rounded-md hover:bg-zinc-200 transition-colors flex items-center justify-center"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

            <div className="pt-4 space-y-3 text-sm text-zinc-400">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-zinc-500" />
                <a href="mailto:contact@starinvestment.com" className="hover:text-white transition-colors">contact@starinvestment.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-zinc-500" />
                <span>+1 (800) 123-4567</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Star Investment. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.href} className="text-zinc-500 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
        
      </div>
    </footer>
  );
}