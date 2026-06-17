"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  MapPin,
  Anchor,
  Plane,
  ShieldCheck,
  Compass,
  Navigation,
  ArrowRight
} from 'lucide-react';
import AnimatedHero from '@/components/ui/AnimeHero';

// --- DATA CONFIGURATIONS ---
const coverageStats = [
  { value: "2 Island Hubs", label: "Complete Archipelago Grid" },
  { value: "5 Mainland Nodes", label: "Strategic Commercial Centers" },
  { value: "15 Min Response", label: "Command Center Dispatch" },
  { value: "100% Monitored", label: "GPS Encrypted Fleet Lines" }
];

const regions = [
  {
    id: "unguja",
    name: "Unguja (Zanzibar Hub)",
    tier: "Archipelago Primary Command",
    type: "island",
    desc: "Our primary operational headquarters. Houses our core diplomatic protocol division, executive fleet dispatch, and luxury villa security management systems.",
    assets: ["VIP Airport Protocol Units", "Armored & Luxury SUV Fleet", "Stone Town Command Post"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pemba",
    name: "Pemba Island",
    tier: "Archipelago Secondary Cordon",
    type: "island",
    desc: "Specialized logistical support for non-governmental organizations, environmental research missions, and isolated maritime asset transfers.",
    assets: ["All-Terrain 4x4 Fleet", "Local Advisory Liaison Desk", "Marine Port Security Line"],
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dar",
    name: "Dar es Salaam",
    tier: "Mainland Commercial Gateway",
    type: "mainland",
    desc: "The nerve center for cross-strait transit synchronization. Direct handling of diplomatic customs clearance, corporate arrivals, and multi-modal freight tracking.",
    assets: ["Julius Nyerere Airport (JNIA) Desk", "Inter-City Secured Convoy Units", "Corporate Logistics Office"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dodoma",
    name: "Dodoma",
    tier: "Administrative & Government Liaison",
    type: "mainland",
    desc: "Dedicated institutional processing footprint designed to compress ministerial clearances, regulatory compliance, and international agency licensing paths.",
    assets: ["Ministerial Protocol Officers", "Secure Document Couriers", "Permanent Agency Liaison Hub"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "arusha",
    name: "Arusha",
    tier: "Northern Circuit Operations",
    type: "mainland",
    desc: "Premium ground logistics customized for diplomatic retreats, corporate summits, and high-net-worth international delegation destination handling.",
    assets: ["Luxury Helicopter Charter Link", "Multi-Terrain Tactical Fleet", "Summit Protocol Coordinators"],
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "morogoro",
    name: "Morogoro",
    tier: "Central Transit Node",
    type: "mainland",
    desc: "Strategic mid-point supply chain management and field support for development projects and cross-regional infrastructure movements.",
    assets: ["Freight Staging Yards", "24/7 Fleet Maintenance Post", "Emergency Support Assets"],
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tanga",
    name: "Tanga",
    tier: "Northern Maritime Link",
    type: "mainland",
    desc: "Coastal coordination hub managing northern marine corridor access, port logistics, and border-adjacent institutional transits.",
    assets: ["Port Liaison Officers", "Coastal Escort Vehicles", "Regional Customs Dispatch"],
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=600&q=80"
  }
];

const corridors = [
  { title: "Zanzibar Channel Cross-Strait Node", mode: "Marine / Aviation Sync", desc: "Meticulous hourly coordination between Dar es Salaam and Stone Town ports, combining fast-ferry VIP clearance with private flight schedules." },
  { title: "The Sovereign Administrative Corridor", mode: "Ground / Air Highway", desc: "High-frequency transport line connecting Dar es Salaam directly to Dodoma for rapid bureaucratic processing and executive travel pipelines." },
  { title: "The Northern Development Circuit", mode: "Tactical Multi-Terrain", desc: "Integrated routing passing from coastal Tanga inward to Arusha, ensuring continuous tracking and fuel redundancy systems for field operators." }
];

export default function CoveragePage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'island' | 'mainland'>('all');

  const filteredRegions = regions.filter(reg => {
    if (activeFilter === 'all') return true;
    return reg.type === activeFilter;
  });

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <AnimatedHero
        topText="Geographic Deployment"
        title={
          <>
            A Solid Infrastructure Across <span className="text-zinc-400">Tanzania & Zanzibar</span>
          </>
        }
        description="Star Investment maps out complete physical, structural, and institutional pathways. We operate fixed tactical assets across seven critical East African regions to guarantee continuous operational integrity."
      />

      {/* 2. STATS REINFORCEMENT */}
      <section className="bg-zinc-50 border-b border-zinc-200/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y-0 lg:divide-x lg:divide-zinc-200">
            {coverageStats.map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left lg:pl-8 first:pl-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">{stat.value}</div>
                <div className="text-[11px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE REGIONAL MATRIX */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">Regional Capability Diagnostic</h2>
              <p className="text-zinc-500 text-sm">Filter our sovereign deployment zones to view dedicated asset listings on the ground.</p>
            </div>

            {/* Filter Toggle Pills */}
            <div className="flex bg-zinc-100 p-1 rounded-xl border border-zinc-200/60 self-start lg:self-auto">
              {(['all', 'island', 'mainland'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeFilter === type
                      ? 'bg-zinc-950 text-white shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-950'
                    }`}
                >
                  {type === 'all' ? 'All Sectors' : type === 'island' ? 'Islands' : 'Mainland'}
                </button>
              ))}
            </div>
          </div>

          {/* Matrix Grid Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredRegions.map((reg) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  key={reg.id}
                  className="flex flex-col border border-zinc-100 rounded-2xl overflow-hidden bg-zinc-50/50 hover:bg-white hover:border-zinc-950 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Fixed Aspect Image Wrapper */}
                  <div className="aspect-16/10 w-full bg-zinc-100 relative overflow-hidden">
                    <Image
                      src={reg.image}
                      alt={reg.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover filter grayscale group-hover:scale-102 group-hover:grayscale-0 transition-all duration-500"
                    />
                    <span className="absolute top-4 left-4 text-[9px] font-bold uppercase tracking-widest bg-zinc-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/10">
                      {reg.type === 'island' ? 'Archipelago Node' : 'Mainland Node'}
                    </span>
                  </div>

                  {/* Context Block */}
                  <div className="p-6 sm:p-8 grow flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-lg text-zinc-900 flex items-center gap-2">
                          <MapPin size={16} className="text-zinc-400 group-hover:text-zinc-950 transition-colors shrink-0" />
                          {reg.name}
                        </h3>
                        <p className="text-[10px] font-bold font-mono tracking-wide text-zinc-400 mt-0.5">{reg.tier}</p>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed pt-2 border-t border-zinc-100">{reg.desc}</p>
                    </div>

                    {/* Dedicated Local Assets Badge list */}
                    <div className="space-y-2 pt-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">On-Site Dedicated Assets:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {reg.assets.map((asset, i) => (
                          <span key={i} className="text-[10px] font-medium bg-white border border-zinc-200 text-zinc-700 px-2 py-0.5 rounded-md">
                            {asset}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. STRATEGIC TRANSIT CORRIDORS */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-zinc-500 uppercase">Synchronized Transit</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Cross-Boundary Transport Integration</h2>
            <p className="text-zinc-400 text-sm max-w-xl">
              We eliminate localized bottlenecks by setting up standardized transition pipelines between islands and commercial hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {corridors.map((line, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-900 space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-colors group">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-zinc-950 flex items-center justify-center">
                    {idx === 0 ? <Anchor size={18} /> : idx === 1 ? <Plane size={18} /> : <Navigation size={18} />}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-base text-zinc-100 group-hover:text-white transition-colors">{line.title}</h4>
                    <span className="text-[10px] font-bold font-mono tracking-wider text-zinc-500 uppercase">{line.mode}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">{line.desc}</p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-semibold text-zinc-500 group-hover:text-white transition-colors">
                  Continuous Tracking Enabled <ShieldCheck size={14} className="text-zinc-400 group-hover:text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LIVE DEPLOYMENT STANDBY CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-zinc-100 rounded-3xl p-8 sm:p-12 bg-zinc-50 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-zinc-200/40 pointer-events-none select-none">
              <Compass size={120} strokeWidth={0.5} />
            </div>

            <div className="space-y-4 max-w-xl relative z-10 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">Deploy Outside Standard Sectors?</h3>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                If your deployment timeline requires deep penetration into unlisted mainland zones or specialized multi-island island configurations, our command planners can plot fully custom transport frameworks.
              </p>
            </div>

            <div className="shrink-0 relative z-10">
              <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-950 text-white font-semibold text-sm px-8 py-4 rounded-xl shadow-md hover:bg-zinc-800 transition-all active:scale-98">
                Request Route Configuration
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}