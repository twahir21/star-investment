"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  AlertCircle, 
  ChevronDown, 
  MapPin, 
  Compass, 
  Send,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

// --- DATA CONFIGURATIONS ---
const contactCards = [
  { id: 'office', title: "HQ Office", value: "Vuga Road, Stone Town, Zanzibar, Tanzania", icon: Building2, actionText: "Get Directions", href: "#map" },
  { id: 'phone', title: "Corporate Desk", value: "+255 (0) 24 223 4567", icon: Phone, actionText: "Call Inbound", href: "tel:+255242234567" },
  { id: 'email', title: "Secure Routing Email", value: "operations@starinvestment.com", icon: Mail, actionText: "Initiate Thread", href: "mailto:operations@starinvestment.com" },
  { id: 'whatsapp', title: "24/7 WhatsApp Command", value: "+255 777 123 456", icon: MessageSquare, actionText: "Open Secure Chat", href: "https://wa.me/255777123456" },
];

const businessHours = [
  { day: "Monday — Friday", hours: "07:30 AM – 06:00 PM (EAT)", status: "Standard Grid" },
  { day: "Saturday", hours: "08:30 AM – 03:00 PM (EAT)", status: "Half Shift" },
  { day: "Sunday", hours: "Closed", status: "Emergency Standby Only" },
];

const landmarks = [
  { name: "Zanzibar Sea Ferry Terminal", distance: "4 mins away", type: "Marine Node" },
  { name: "Abeid Amani Karume Airport (ZNZ)", distance: "12 mins transit", type: "Air Node" },
  { name: "The State House of Zanzibar", distance: "3 blocks structural boundary", type: "Institutional" }
];

const faqs = [
  { q: "How do I book secure corporate logistics operations?", a: "Initial routing commands are managed via our consultation dashboard. Once parameters (vehicular tier, route security, asset declarations) lock in, a dedicated operations manager coordinates directly with your security lead." },
  { q: "What precise geographic nodes do you serve?", a: "We maintain independent ground assets and stationary operational hubs across Unguja, Pemba, Dar es Salaam, Dodoma, Arusha, Morogoro, and Tanga, with full transit safety clearance pipelines between nodes." },
  { q: "Can your protocol networks support high-level government deployment?", a: "Yes. Star Investment regularly executes diplomatic transport tracking, diplomatic clearance routing, and high-security protocol arrays for multi-lateral donor agencies, UN networks, and ministerial delegations." },
  { q: "Do you provide customized private marine transport?", a: "We maintain a premium multi-vessel fast charter matrix across the Zanzibar Channel, enabling seamless inter-island cross-routing avoiding commercial delays or high-traffic passenger hubs." },
  { q: "Can your operations division arrange corporate luxury accommodation?", a: "Yes, our integrated Destination Management wing synchronizes secure luxury estate bookings, block hotel rooms, and isolated corporate retreats with comprehensive facility sweep capabilities." },
  { q: "Are your transit solutions backed by operational insurance coverages?", a: "Every movement is fully covered under our premium asset and third-party multi-risk legal liability portfolios. Tailored individual transit risk extensions can be bound upon contract sign-off." },
  { q: "What are your standard emergency response and communication times?", a: "Our internal Command Center fields all requests within 15 minutes. Emergency asset dispatch protocols on localized nodes execute within 30 minutes of clear confirmation lines." }
];

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({ name: '', org: '', email: '', phone: '', service: '', msg: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form Submission & Validation Logic
  const handleValidation = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full identification parameters required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Valid corporate routing email needed.";
    if (!formData.service) tempErrors.service = "Select an operational architectural line.";
    if (!formData.msg.trim()) tempErrors.msg = "Mission requirements statement cannot be blank.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidation()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', org: '', email: '', phone: '', service: '', msg: '' });
      }, 5000);
    }
  };

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden pt-16">
      
      {/* 1. HERO BANNER */}
      <section className="relative pt-32 pb-20 bg-zinc-950 text-white border-b border-zinc-900">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-zinc-500 text-xs font-bold tracking-widest uppercase border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 rounded-full">
              Communications Center
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-6 mb-4">
              Synchronize Your <span className="text-zinc-400">Operations</span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              Connect directly with our 24/7 operational planning desk. Establish safe, encrypted, and highly synchronized transport and regulatory execution pathways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. GRID DETAILS & FORM ARCHITECTURE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Cards + Hours */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.id} className="p-5 border border-zinc-100 rounded-xl bg-zinc-50/50 flex flex-col justify-between space-y-6 hover:border-zinc-950 transition-colors">
                      <div className="space-y-3">
                        <div className="p-2.5 bg-zinc-950 text-white w-fit rounded-lg shadow-sm">
                          <Icon size={18} />
                        </div>
                        <h4 className="font-bold text-sm text-zinc-900">{card.title}</h4>
                        <p className="text-xs text-zinc-500 leading-normal font-medium">{card.value}</p>
                      </div>
                      <a href={card.href} className="text-[11px] font-bold uppercase tracking-wider text-zinc-950 hover:text-zinc-600 transition-colors pt-2 border-t border-zinc-100 block">
                        {card.actionText} →
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Business Hours */}
              <div className="border border-zinc-100 rounded-2xl p-6 sm:p-8 bg-zinc-50">
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={18} className="text-zinc-950" />
                  <h3 className="font-bold text-base text-zinc-900">Standard Desk Grid</h3>
                </div>
                <div className="divide-y divide-zinc-200/60 text-sm">
                  {businessHours.map((row, i) => (
                    <div key={i} className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                      <span className="font-semibold text-zinc-800">{row.day}</span>
                      <div className="text-right sm:text-right flex flex-col">
                        <span className="text-xs font-mono text-zinc-600">{row.hours}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 mt-0.5">{row.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Premium Form */}
            <div className="lg:col-span-7 bg-white border border-zinc-100 shadow-2xl rounded-2xl p-6 sm:p-10 relative">
              <div className="mb-8 space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-zinc-950">Mission Requirement Briefing</h3>
                <p className="text-xs text-zinc-400">Complete authentication vectors below to secure operational scheduling.</p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form onSubmit={handleSubmit} className="space-y-6" exit={{ opacity: 0, y: -10 }}>
                    
                    {/* Grid Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Full Name */}
                      <div className="relative group">
                        <input 
                          type="text" id="name" placeholder=" " value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className={`peer w-full bg-zinc-50 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-200 focus:border-zinc-950'} rounded-xl px-4 pt-6 pb-2 text-sm outline-none transition-all`}
                        />
                        <label htmlFor="name" className="absolute left-4 top-4 text-xs font-medium text-zinc-400 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-zinc-500 origin-left transform scale-100 peer-focus:scale-90 select-none">
                          Full Name
                        </label>
                        {errors.name && <p className="text-[10px] text-red-500 font-medium mt-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.name}</p>}
                      </div>

                      {/* Organization */}
                      <div className="relative group">
                        <input 
                          type="text" id="org" placeholder=" " value={formData.org}
                          onChange={(e) => setFormData({...formData, org: e.target.value})}
                          className="peer w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 rounded-xl px-4 pt-6 pb-2 text-sm outline-none transition-all"
                        />
                        <label htmlFor="org" className="absolute left-4 top-4 text-xs font-medium text-zinc-400 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-zinc-500 origin-left transform scale-100 peer-focus:scale-90 select-none">
                          Organization / Agency
                        </label>
                      </div>

                      {/* Corporate Email */}
                      <div className="relative group">
                        <input 
                          type="email" id="email" placeholder=" " value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className={`peer w-full bg-zinc-50 border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-200 focus:border-zinc-950'} rounded-xl px-4 pt-6 pb-2 text-sm outline-none transition-all`}
                        />
                        <label htmlFor="email" className="absolute left-4 top-4 text-xs font-medium text-zinc-400 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-zinc-500 origin-left transform scale-100 peer-focus:scale-90 select-none">
                          Corporate Email
                        </label>
                        {errors.email && <p className="text-[10px] text-red-500 font-medium mt-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.email}</p>}
                      </div>

                      {/* Phone Contact */}
                      <div className="relative group">
                        <input 
                          type="tel" id="phone" placeholder=" " value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="peer w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 rounded-xl px-4 pt-6 pb-2 text-sm outline-none transition-all"
                        />
                        <label htmlFor="phone" className="absolute left-4 top-4 text-xs font-medium text-zinc-400 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-zinc-500 origin-left transform scale-100 peer-focus:scale-90 select-none">
                          Phone Secure Line (Optional)
                        </label>
                      </div>

                    </div>

                    {/* Service Needed Dropdown Custom Simulation styling */}
                    <div className="relative">
                      <select 
                        id="service" value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className={`w-full bg-zinc-50 border ${errors.service ? 'border-red-500' : 'border-zinc-200 focus:border-zinc-950'} text-sm text-zinc-800 rounded-xl px-4 py-4 outline-none appearance-none cursor-pointer transition-all`}
                      >
                        <option value="" disabled>Select Capability Vector Needed...</option>
                        <option value="logistics">Executive Ground Handling & Logistics</option>
                        <option value="transport">Chauffeur Transport Operations</option>
                        <option value="marine">Private Maritime Coordination</option>
                        <option value="destination">Corporate Destination Management</option>
                        <option value="investor">Zanzibar Investor Facilitation Link</option>
                        <option value="insurance">Multi-risk Operational Insurance</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-5 pointer-events-none text-zinc-400" />
                      {errors.service && <p className="text-[10px] text-red-500 font-medium mt-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.service}</p>}
                    </div>

                    {/* Message Area */}
                    <div className="relative">
                      <textarea 
                        id="msg" rows={4} placeholder=" " value={formData.msg}
                        onChange={(e) => setFormData({...formData, msg: e.target.value})}
                        className={`peer w-full bg-zinc-50 border ${errors.msg ? 'border-red-500 focus:border-red-500' : 'border-zinc-200 focus:border-zinc-950'} rounded-xl px-4 pt-6 pb-2 text-sm outline-none resize-none transition-all`}
                      />
                      <label htmlFor="msg" className="absolute left-4 top-4 text-xs font-medium text-zinc-400 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-zinc-500 origin-left transform scale-100 peer-focus:scale-90 select-none">
                        Brief Description of Operational Scope...
                      </label>
                      {errors.msg && <p className="text-[10px] text-red-500 font-medium mt-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.msg}</p>}
                    </div>

                    {/* Submit button */}
                    <button 
                      type="submit"
                      className="w-full flex justify-center items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm py-4 rounded-xl transition-all active:scale-98 shadow-md"
                    >
                      Transmit Operational Briefing
                      <Send size={14} />
                    </button>

                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center space-y-4"
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-zinc-950 text-white flex items-center justify-center shadow-md">
                      <CheckCircle2 size={24} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg text-zinc-900">Transmission Logged</h4>
                      <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                        Data packet locked into our encrypted operations workflow. A regional logistics strategist will initiate touchlines via secure channels within 15 minutes.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MAP SYSTEM */}
      <section id="map" className="py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Map Placeholder Graphic Column */}
            <div className="lg:col-span-7 bg-zinc-950 rounded-2xl aspect-[16/10] overflow-hidden relative shadow-xl border border-zinc-900 group">
              {/* Graphic Blueprint Netting representing localized geography grids */}
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900/40 to-transparent" />
              
              {/* Fake UI Marker */}
              <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="bg-white text-zinc-950 px-3 py-1.5 rounded-lg font-bold text-[11px] uppercase tracking-widest shadow-2xl border border-zinc-200 flex items-center gap-1.5 animate-bounce">
                  <Compass size={12} className="text-zinc-950" />
                  Star HQ Node
                </div>
                <div className="w-2.5 h-2.5 bg-white rounded-full ring-4 ring-white/20 mt-1" />
              </div>

              {/* Bottom Card UI info on map */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-900/90 backdrop-blur-md rounded-xl border border-white/5 flex justify-between items-center text-white">
                <div>
                  <p className="text-xs font-bold font-mono text-zinc-400">COORDINATES</p>
                  <p className="text-sm font-semibold tracking-wide">6.1659° S, 39.1924° E</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Operational Radius</p>
                  <p className="text-xs font-semibold text-white">All Sovereign Regions</p>
                </div>
              </div>
            </div>

            {/* Landmarks Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">Geographic Anchor</span>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">Vuga Command Layout</h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                  Positioned outside structural high-congestion cordons inside historical Stone Town, giving field machinery quick deployment vectors toward arterial transit links.
                </p>
              </div>
              <div className="space-y-3">
                {landmarks.map((mark, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-zinc-100 flex justify-between items-center shadow-sm">
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-zinc-900">{mark.name}</p>
                      <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">{mark.type}</p>
                    </div>
                    <span className="text-xs font-mono font-medium text-zinc-600 bg-zinc-50 border border-zinc-100 px-2.5 py-1 rounded-md shrink-0">
                      {mark.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Operational Directives (FAQ)</h2>
            <p className="text-zinc-500 text-sm">Review baseline parameters concerning security clearance and operational bounds.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-zinc-100 rounded-xl overflow-hidden bg-zinc-50/50 transition-all duration-300">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 bg-white font-semibold text-sm sm:text-base text-zinc-900 focus:outline-none hover:bg-zinc-50/50"
                  >
                    <span>{faq.q}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={16} className="text-zinc-400" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden bg-zinc-50"
                      >
                        <div className="p-5 text-xs sm:text-sm text-zinc-500 leading-relaxed border-t border-zinc-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EMERGENCY CONTACT BANNER */}
      <section className="py-20 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_40%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase animate-pulse">
            <AlertCircle size={12} />
            Immediate Dispatch Vector
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-xl mx-auto">
            Need Immediate Assistance?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed">
            For ongoing missions undergoing immediate routing adjustments, track failure backups, or immediate custom clearances, bypass forms and hit live channels immediately.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 max-w-sm mx-auto sm:max-w-none">
            <a href="tel:+255777123456" className="flex items-center justify-center gap-2 bg-white text-black font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-xl hover:bg-zinc-200 active:scale-95 transition-all">
              <PhoneCall size={14} />
              Call Now
            </a>
            <a href="https://wa.me/255777123456" className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-colors">
              <MessageSquare size={14} />
              WhatsApp Link
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}