"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Car,
  Anchor,
  Briefcase,
  FileText,
  Layers,
  CheckCircle2,
  ArrowRight,
  Compass,
  Maximize2,
  Users,
  Activity,
  Globe,
  Radio,
  ChevronRight
} from 'lucide-react';
import AnimatedHero from '@/components/ui/AnimeHero';

// --- DATA CONFIGURATIONS ---
const capabilities = [
  {
    id: "ground-handling",
    icon: Shield,
    title: "Executive Ground Handling & Logistics",
    short: "Tarmac-to-destination diplomatic protocol and secure asset routing.",
    description: "Comprehensive airside and landside security tracking matrices designed for diplomatic delegations, ministerial networks, and corporate boards arriving at East African entry ports.",
    features: [" Tarmac reception & customs clearance integration", "Bilingual command specialists (English & Swahili routing)", "Discrete multi-vehicle diplomatic escort matrices"],
    metric: "15-Min Mobilization"
  },
  {
    id: "chauffeur-ops",
    icon: Car,
    title: "Chauffeur Transport Operations",
    short: "Premium asset fleets backed by certified tactical route management.",
    description: "Deploying highly maintained luxury sedans, rugged multi-terrain 4x4s, and customized transport architectures. Every asset is continuously connected to our centralized grid control.",
    features: ["Dropping unneeded CPU arch configurations for 100% telemetry uptime", "Defensive driving & local hazard aversion certified personnel", "Real-time automated fuel redundancy mapping"],
    metric: "Zero Telemetry Gaps"
  },
  {
    id: "maritime-coord",
    icon: Anchor,
    title: "Private Maritime Coordination",
    short: "Secure, non-commercial deep-water cross-strait transits.",
    description: "Customized multi-vessel fast charters navigating across the high-traffic Zanzibar Channel. Avoid commercial transit delays with private, highly isolated maritime boarding grids.",
    features: ["Private multi-island fast charter synchronization", "Independent port authority clearance acceleration", "Integrated asset transfer safety cordons"],
    metric: "Fast Strait Crossing"
  },
  {
    id: "destination-mgmt",
    icon: Briefcase,
    title: "Corporate Destination Management",
    short: "Isolating premium lodging and physical operational footprints.",
    description: "Full coordination of isolated luxury estate blocks, secure meeting facilities, and remote corporate retreats. Includes thorough electronic sweep configurations before arrival.",
    features: ["Complete estate block buyouts & structural confidentiality", "On-site physical threat assessment & terminal sweeps", "24/7 dedicated support desk localization"],
    metric: "100% Confidentiality"
  },
  {
    id: "investor-facilitation",
    icon: Globe,
    title: "Zanzibar Investor Facilitation Link",
    short: "Compressing corporate compliance and licensing timelines.",
    description: "Accelerating regulatory synchronization paths by acting as a direct physical and procedural conduit into the Zanzibar Investment Promotion Authority (ZIPA) and ministry grids.",
    features: ["Accelerated structural zoning and licensing navigation", "Local proxy setup & sovereign legal network interface", "Physical asset setup tracking and ground staging"],
    metric: "Fast-Track Approval"
  },
  {
    id: "operational-insurance",
    icon: FileText,
    title: "Multi-Risk Operational Insurance",
    short: "Premium asset protection legal extensions.",
    description: "Every deployment pipeline operates covered under our high-bracket asset and multi-risk legal liability umbrellas. Bespoke transit risk extensions can be tailored to match specific needs.",
    features: ["Comprehensive third-party asset protection frameworks", "Immediate incident validation and legal bond binding", "Customizable high-liability cross-border coverage sheets"],
    metric: "Full Shield Protection"
  }
];

const workflows = [
  { step: "01", title: "Secure Transmission", description: "Operational needs are processed via our encrypted communication nodes. Mission constraints, asset criteria, and language requirements are analyzed instantly." },
  { step: "02", title: "Bilingual Asset Zoning", description: "Our operations desk designates primary personnel, deploying certified specialists fluidly managing handlers in both English and Swahili to completely eliminate coordination breakdown." },
  { step: "03", title: "Tactical Synchronization", description: "Route mapping networks calculate transit paths, structural entry vectors, and multi-layered protocol clearances with airport and port commands." },
  { step: "04", title: "Active Grid Execution", description: "Continuous telemetry tracking goes live. Our command room retains live tracking oversight, ensuring asset redundancy until mission completion." }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(capabilities[0].id);
  const currentService = capabilities.find(c => c.id === selectedService) || capabilities[0];

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* 1. EDITORIAL HERO BANNER */}
      <AnimatedHero
        topText="Capability Index"
        title={
          <>
            Engineered for <span className="text-zinc-400">Precision Logistics</span>
          </>
        }
        description="Star Investment executes specialized logistics, protocol management, and investment facilitation systems across the Zanzibar Archipelago. Explore our core operational capabilities."
      />

      {/* 2. CORE CAPABILITIES SYSTEM (INTERACTIVE MATRIX) */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-3 mb-16 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">Capability Architecture</h2>
            <p className="text-zinc-500 text-sm max-w-xl">
              Select an operational vector to inspect on-site assets, deployment parameters, and core service frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Control Panel: List Selection */}
            <div className="lg:col-span-5 space-y-3">
              {capabilities.map((item) => {
                const Icon = item.icon;
                const isSelected = item.id === selectedService;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedService(item.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between gap-4 group ${isSelected
                        ? 'bg-zinc-950 text-white border-zinc-950 shadow-lg'
                        : 'bg-zinc-50 text-zinc-800 border-zinc-100 hover:bg-zinc-100/70 hover:border-zinc-300'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-lg shrink-0 transition-colors ${isSelected ? 'bg-white text-zinc-950' : 'bg-zinc-900 text-white'
                        }`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm sm:text-base tracking-tight">{item.title}</h4>
                        <p className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-zinc-400' : 'text-zinc-500'}`}>
                          {item.short}
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={16} className={`shrink-0 transition-transform ${isSelected ? 'text-white translate-x-1' : 'text-zinc-400 group-hover:translate-x-0.5'
                      }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Display Panel: Interactive Inspector View */}
            <div className="lg:col-span-7 lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="border border-zinc-200/80 bg-zinc-50/50 rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm"
                >
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase bg-zinc-100 px-2.5 py-1 rounded border border-zinc-200">
                        Operational Grid Vector
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight pt-2">
                        {currentService.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold font-mono bg-zinc-900 text-white px-3 py-1.5 rounded-lg shadow-sm">
                      {currentService.metric}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
                    {currentService.description}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-zinc-200/60">
                    <h5 className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">Included Structural Parameters:</h5>
                    <div className="space-y-2.5">
                      {currentService.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-800">
                          <CheckCircle2 size={16} className="text-zinc-950 mt-0.5 shrink-0" />
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all shadow-md active:scale-98">
                      Deploy Vector Framework
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE PROTOCOL TIMELINE (BILINGUAL DISPATCH) */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="max-w-3xl space-y-4 mb-20">
            <span className="text-[10px] font-extrabold tracking-widest text-zinc-500 uppercase flex items-center gap-2">
              <Radio size={12} className="text-zinc-400 animate-pulse" /> Command Center Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How We Synchronize Operations</h2>
            <p className="text-zinc-400 text-sm max-w-xl font-light">
              Our structured operational blueprint bridges sovereign government clearances with field assets down to the second.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Background connecting line pattern for desktop screens */}
            <div className="hidden lg:block absolute top-16 left-8 right-8 h-px bg-zinc-800 z-0" />

            {workflows.map((flow, i) => (
              <div key={i} className="space-y-6 bg-zinc-900/30 p-6 rounded-xl border border-zinc-900/60 lg:border-none lg:p-0 relative z-10 group">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-inner group-hover:border-zinc-500 transition-colors">
                  {flow.step}
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-zinc-100 group-hover:text-white transition-colors">{flow.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">{flow.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL SLA CAPABILITIES MATRIX */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left side informational copy */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">Operational Thresholds</span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">Technical Sovereignty & Fleet Standards</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                  We match premium hospitality standards with rigorous strategic ground mechanics. Our metrics reflect strict, uncompromised tracking directives.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 text-white flex items-center justify-center shrink-0">
                  <Users size={18} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-zinc-900">100% On-Grid Accountability</h5>
                  <p className="text-[11px] text-zinc-400">All regional coordinators utilize dedicated channels tracking asset deviations continuously.</p>
                </div>
              </div>
            </div>

            {/* Right side strict grid blocks */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="p-6 border border-zinc-100 bg-zinc-50/50 rounded-2xl space-y-3">
                <Activity size={18} className="text-zinc-950" />
                <h4 className="font-bold text-sm text-zinc-900">Telemetry Optimization</h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">
                  We modify tracking systems, stripping out unnecessary processes to maintain direct communication with central command hubs across remote corridors.
                </p>
              </div>

              <div className="p-6 border border-zinc-100 bg-zinc-50/50 rounded-2xl space-y-3">
                <Maximize2 size={18} className="text-zinc-950" />
                <h4 className="font-bold text-sm text-zinc-900">Custom Fleet Arch</h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">
                  Vehicles undergo rigorous pre-mission mechanical screening routines. Asset sizing configuration matches destination terrain variations precisely.
                </p>
              </div>

              <div className="p-6 border border-zinc-100 bg-zinc-50/50 rounded-2xl space-y-3">
                <Layers size={18} className="text-zinc-950" />
                <h4 className="font-bold text-sm text-zinc-900">Cross-Platform Sync</h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">
                  Seamless multi-modal handoffs link maritime charters seamlessly to awaiting tarmac configurations without operational gaps.
                </p>
              </div>

              <div className="p-6 border border-zinc-100 bg-zinc-50/50 rounded-2xl space-y-3">
                <Compass size={18} className="text-zinc-950" />
                <h4 className="font-bold text-sm text-zinc-900">Zanzibar Domain Mastery</h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">
                  Deeply localized knowledge systems navigate around complex island infrastructure hurdles and sudden route changes efficiently.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. CONCLUDING PREMIUM CTA FOOTPRINT */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950">Secure Your Operational Timeline</h2>
            <p className="text-zinc-500 text-sm max-w-lg mx-auto font-light leading-relaxed">
              Transmit your deployment guidelines into our secure configuration router. Our command center strategists will organize your operational layout.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center max-w-xs mx-auto sm:max-w-none">
            <button className="flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all active:scale-98">
              Open Consultation Desk
              <ArrowRight size={14} />
            </button>
            <button className="flex items-center justify-center gap-2 border border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all">
              Review Asset Deployment
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}