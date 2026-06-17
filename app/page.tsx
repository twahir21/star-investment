"use client";

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Building2,
  Award,
  Globe,
  Users,
  Anchor,
  Briefcase,
  Shield,
  HelpCircle,
  Check,
  MapPin,
  ChevronLeft,
  ChevronRight,
  FileText,
} from 'lucide-react';
import Image from 'next/image';

// --- DATA CONFIGURATIONS ---
const trustBadges = [
  "Government Institutions", "NGOs", "International Organizations", "Corporate Clients"
];

const whyChooseUs = [
  { icon: Globe, title: "Deep Local Knowledge", desc: "Unmatched operational mastery across Zanzibar archipelago and mainland Tanzania." },
  { icon: Users, title: "Professional Team", desc: "Elite multilingual fixers, drivers, and protocol experts at your disposal." },
  { icon: Clock, title: "Reliable Operations", desc: "Punctual execution with rigorous contingency backups for every journey." },
  { icon: Award, title: "Government & Donor Experience", desc: "Trusted partner for high-level diplomatic missions and international agencies." },
  { icon: Briefcase, title: "Integrated Services", desc: "From corporate transport to destination management, handled under one roof." },
  { icon: ShieldCheck, title: "Safety First", desc: "Comprehensive risk assessments and secure executive transport standard protocols." },
  { icon: HelpCircle, title: "Responsive Support", desc: "24/7 dedicated operational command center for real-time adjustments." },
  { icon: Shield, title: "Customized Solutions", desc: "Tailored logistics structures matching exact corporate or institutional demands." },
];

const challengesVsSolutions = [
  { challenge: "Poor coordination between transport modes", solution: "Single point of coordination managing your entire itinerary seamlessly." },
  { challenge: "Dealing with multiple unvetted vendors", solution: "End-to-end logistics executed exclusively by our verified premier network." },
  { challenge: "Frequent travel delays and lost time", solution: "Meticulous pre-route planning and real-time flight/marine tracking." },
  { challenge: "Protocol confusion at entry points", solution: "Professional airport and marine port protocol for VIP fast-tracking." },
  { challenge: "Substandard vehicle conditions", solution: "Immaculate, highly-maintained fleet of premium executive vehicles." },
  { challenge: "Complex marine logistics between islands", solution: "Dedicated marine coordination for reliable inter-island transfers." },
  { challenge: "Fragmented accommodation bookings", solution: "Streamlined corporate luxury accommodation management." },
  { challenge: "Communication gaps with field operators", solution: "Transparent, real-time communication logs and localized expertise." },
];

const steps = [
  { number: "01", title: "Contact Us", desc: "Reach out via our secure channels with your core operational requirements." },
  { number: "02", title: "Consultation", desc: "A dedicated logistics strategist maps out your customized itinerary." },
  { number: "03", title: "Planning", desc: "Comprehensive risk management, scheduling, and asset allocation lock-in." },
  { number: "04", title: "Execution", desc: "Flawless real-time execution with on-site protocol managers leading the way." },
  { number: "05", title: "Successful Delivery", desc: "Safe, punctual, and highly professional completion of your mission." },
];

const services = [
  { title: "Executive Logistics", img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80", desc: "Complete ground handling, VIP clearance, and secure route synchronization for executives." },
  { title: "Transportation", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80", desc: "An elite fleet of high-end sedans, SUVs, and armored options driven by security-trained chauffeurs." },
  { title: "Marine Transport", img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=600&q=80", desc: "Premium inter-island boat charters and fast-ferry protocol management between Unguja and Pemba." },
  { title: "Destination Management", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", desc: "Comprehensive local corporate handling, event venues, and localized asset coordination." },
  { title: "Investor Facilitation", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80", desc: "Bridging regulatory frameworks, licensing, and local business entry procedures in Tanzania." },
  { title: "Insurance Cover", img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80", desc: "Tailored multi-risk operational insurance policies covering transit, assets, and personnel liability." },
];

const industries = [
  { name: "Government", icon: Building2 }, { name: "Embassies", icon: Shield },
  { name: "NGOs", icon: Users }, { name: "UN Agencies", icon: Globe },
  { name: "Research", icon: FileText }, { name: "Investors", icon: Briefcase },
  { name: "Corporate", icon: Building2 }, { name: "Tourism", icon: Anchor },
  { name: "Development Partners", icon: Award }
];

const stats = [
  { value: "7+", label: "Regions Covered" }, { value: "120+", label: "Corporate Clients" },
  { value: "450+", label: "Projects Supported" }, { value: "12+", label: "Years Experience" }
];

const testimonials = [
  { quote: "Star Investment redefined our diplomatic transport expectations. Their protocol integration at Zanzibar Airport was completely flawless.", author: "Elena Rostova", role: "Head of Mission", org: "International Development Agency", rating: 5 },
  { quote: "Managing marine transit across Unguja and Pemba was a logistics nightmare until we contracted Star. Highly reliable execution.", author: "Marcus Vance", role: "Operations Director", org: "Global Logistics Corp", rating: 5 },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const fadeInVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-zinc-950 text-white overflow-hidden">
        {/* Dynamic Editorial Background Grid Mapping Zanzibar/Corporate Feel */}
        <div className="absolute inset-0 opacity-40 grid grid-cols-2 lg:grid-cols-4 h-full w-full">
          <div className="bg-[url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center border-r border-white/5" />
          <div className="bg-[url('https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center hidden md:block border-r border-white/5" />
          <div className="bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center hidden lg:block border-r border-white/5" />
          <div className="bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 z-10 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
              >
                Delivering Professional Solutions Across <span className="text-zinc-400">Zanzibar & Tanzania</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0"
              >
                Your premier gateway for integrated logistics, executive protocol, precision transportation, adaptive destination management, and institutional risk mitigation insurance.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <button className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-all active:scale-95 shadow-lg">
                  Request Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-white/20 hover:border-white px-8 py-4 rounded-full text-sm font-semibold backdrop-blur-sm bg-white/5 transition-colors">
                  Explore Services
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-1 bg-black" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Setting International Standards in Local Logistics</h2>
              <p className="text-zinc-600 leading-relaxed">
                Star Investment operates at the intersection of local operational mastery and strict international performance standards. We act as the critical execution arm for entities navigating the logistical landscapes of Tanzania and Zanzibar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 bg-white rounded-xl border border-zinc-100 shadow-sm">
                  <h4 className="font-bold text-zinc-950 mb-1">Local Expertise</h4>
                  <p className="text-xs text-zinc-500">Unrestricted operational grasp over local pathways and regulatory frameworks.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-zinc-100 shadow-sm">
                  <h4 className="font-bold text-zinc-950 mb-1">International Standards</h4>
                  <p className="text-xs text-zinc-500">Rigorous risk mitigation models matching strict global compliance parameters.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative aspect-video lg:aspect-square bg-zinc-300 rounded-2xl overflow-hidden shadow-2xl group"
            >
              <Image
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
                alt="Executive transport"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md rounded-xl text-white border border-white/10">
                <p className="text-2xl font-bold">12+ Years</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest">Of Absolute Operational Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ALLIANCES MARQUEE (Placed seamlessly between intro and why-choose-us) */}
      <section className="py-8 bg-zinc-50 overflow-hidden relative w-full">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6">
          Strategic Global Alliances
        </p>

        {/* Edge Faders - Matching the bg-zinc-50 theme background */}
        <div className="absolute left-0 bottom-0 top-0 w-24 bg-linear-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 bottom-0 top-0 w-24 bg-linear-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

        {/* Infinite Rolling Tape Track */}
        <div className="flex overflow-hidden select-none w-full">
          <motion.div
            className="flex gap-16 shrink-0 items-center justify-around min-w-full"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {/* Double the array length to create a perfect 50% split for seamless looping */}
            {[...trustBadges, ...trustBadges].map((badge, idx) => (
              <div
                key={`${badge}-${idx}`}
                className="flex items-center gap-3 text-zinc-500 hover:text-zinc-800 transition-colors duration-300 cursor-default shrink-0"
              >
                <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Engineered for Absolute Trust</h2>
            <p className="text-zinc-500">Why international institutions select Star Investment as their primary deployment partner.</p>
          </div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx} variants={fadeInVariant}
                  className="p-6 text-left border border-zinc-100 rounded-2xl hover:border-zinc-950 hover:shadow-lg transition-all duration-300 group bg-zinc-50 hover:bg-white"
                >
                  <div className="p-3 bg-white border border-zinc-100 rounded-xl w-fit text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white transition-colors shadow-sm">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-base text-zinc-900 mt-5 mb-2">{item.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. PROBLEMS WE SOLVE */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Mitigating Field Risks, Seamlessly</h2>
            <p className="text-zinc-400 text-sm">We replace traditional fragmented vendor challenges with robust institutional execution frameworks.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Challenges Left */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6 px-2">Common Client Challenges</h3>
              {challengesVsSolutions.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                  key={index} className="flex gap-4 p-5 bg-zinc-900/50 border border-zinc-900 rounded-xl items-start"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 shrink-0" />
                  <p className="text-sm text-zinc-400 font-medium">{item.challenge}</p>
                </motion.div>
              ))}
            </div>

            {/* Solutions Right */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6 px-2">How Star Investment Solves Them</h3>
              {challengesVsSolutions.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                  key={index} className="flex gap-4 p-5 bg-white text-black rounded-xl items-start shadow-xl border border-white/5"
                >
                  <Check size={18} className="text-zinc-950 mt-0.5 shrink-0" />
                  <p className="text-sm font-semibold text-zinc-900">{item.solution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Your Operational Workflow</h2>
            <p className="text-zinc-500 text-sm">A highly standardized onboarding protocol designed to protect deployment timelines.</p>
          </div>

          <div className="relative">
            {/* Timeline Horizontal Line connector for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-zinc-200 -translate-y-8" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  key={index} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm space-y-4 relative group hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">{step.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR SERVICES PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Comprehensive Solutions Architecture</h2>
              <p className="text-zinc-500 max-w-xl text-sm">Every capability required to safely drop, transport, secure, and settle corporate missions across East Africa.</p>
            </div>
            <button className="text-sm font-bold text-zinc-950 flex items-center gap-2 group border-b-2 border-black pb-1 w-fit whitespace-nowrap">
              View Extended Catalog
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                key={index} className="group flex flex-col bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-4/3 w-full bg-zinc-100 overflow-hidden relative">
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover filter grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6 grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-zinc-900 group-hover:text-zinc-600 transition-colors">{svc.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{svc.desc}</p>
                  </div>
                  <button className="text-xs font-bold tracking-wider uppercase text-zinc-950 flex items-center gap-1 group/btn pt-2">
                    Learn More
                    <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">Tailored Core Vectors</h2>
            <p className="text-zinc-500 text-sm">We maintain specialized deployment protocols matching precise parameters for each industry vertical.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="p-4 bg-white border border-zinc-200/60 rounded-xl flex flex-col items-center justify-center text-center space-y-3 shadow-sm hover:border-zinc-950 transition-colors group">
                  <div className="text-zinc-400 group-hover:text-zinc-950 transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-bold text-zinc-800 tracking-tight">{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. COVERAGE MAP & STATS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Our Strategic Footprint</h2>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  With deep infrastructural foundations across both the islands and key urban mainland nodes, Star Investment ensures frictionless boundary transfers.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-5 border border-zinc-100 rounded-xl bg-zinc-50">
                    <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mb-1">{stat.value}</div>
                    <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Interactive Map Display */}
            <div className="lg:col-span-7 bg-zinc-950 rounded-2xl p-8 text-white relative overflow-hidden aspect-4/3 flex flex-col justify-between shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[radial-linear(#fff_1px,transparent_1px)] bg-size-[16px_16px]" />

              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] tracking-widest font-bold uppercase backdrop-blur-sm border border-white/5">Operational Nodes</span>
                  <h3 className="text-lg font-bold mt-2">East Africa Hub</h3>
                </div>
                <MapPin className="text-white animate-pulse" size={24} />
              </div>

              {/* Highlighted Regions Overlay Pills */}
              <div className="relative z-10 flex flex-wrap gap-2 max-w-xl">
                {["Unguja", "Pemba", "Dar es Salaam", "Dodoma", "Arusha", "Morogoro", "Tanga"].map((reg) => (
                  <span key={reg} className="bg-zinc-900 hover:bg-white hover:text-black border border-zinc-800 text-zinc-300 font-medium text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                    • {reg}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="text-6xl font-serif text-zinc-300 absolute -top-8 left-4 select-none">“</div>

          <div className="relative z-10 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-lg sm:text-xl font-medium text-zinc-800 leading-relaxed italic">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div>
                  <h4 className="font-bold text-zinc-950 text-base">{testimonials[activeTestimonial].author}</h4>
                  <p className="text-xs text-zinc-400 font-medium">{testimonials[activeTestimonial].role} — {testimonials[activeTestimonial].org}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Rating Stars Mock */}
            <div className="flex justify-center gap-1 text-zinc-950">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-sm">★</span>
              ))}
            </div>

            {/* Slider Toggles */}
            <div className="flex justify-center gap-2 pt-4">
              <button
                onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="p-2 border border-zinc-200 bg-white rounded-full hover:bg-zinc-950 hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setActiveTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                className="p-2 border border-zinc-200 bg-white rounded-full hover:bg-zinc-950 hover:text-white transition-all shadow-sm"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        {/* Graphic Backdrop Accents */}
        <div className="absolute inset-0 bg-[radial-linear(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_50%)]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Simplify Your Operations?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Secure your end-to-end institutional logistics planning with Tanzania&apos;s premium corporate transport network today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-white text-black font-semibold text-sm px-8 py-4 rounded-full shadow-xl hover:bg-zinc-200 active:scale-95 transition-all">
              Request Consultation
            </button>
            <button className="border border-white/20 hover:border-white font-semibold text-sm px-8 py-4 rounded-full backdrop-blur-sm transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}