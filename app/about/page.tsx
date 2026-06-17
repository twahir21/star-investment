"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  Target,
  Eye,
  Award,
  Users,
  Briefcase,
  ShieldCheck,
  TrendingUp,
  Fingerprint,
  Layers,
  HeartHandshake,
  Globe,
  Quote,
  CheckCircle
} from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import StrategicJourney from '@/components/Timeline';
import AnimatedHero from '@/components/ui/AnimeHero';

// --- DATA CONFIGURATIONS ---
const timelineHistory = [
  {
    year: "2014",
    title: "Company Founding",
    desc: "Star Investment was established in Zanzibar with a singular goal: to patch the critical gaps in high-level institutional ground logistics and diplomatic protocol.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2017",
    title: "Strategic Growth",
    desc: "Expanded operations permanently to mainland Tanzania, setting up key operational command centers in Dar es Salaam and Dodoma to manage cross-strait corporate transfers.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2020",
    title: "Infrastructural Expansion",
    desc: "Acquired a dedicated premium maritime logistics wing and customized executive fleet, ensuring independent, secure transit management between Unguja and Pemba islands.",
    img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2023",
    title: "Service Diversification",
    desc: "Launched our full-scale Investor Facilitation and Corporate Multi-risk Insurance units, offering a truly unified, end-to-end framework for global institutions entering East Africa.",
    img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2026 & Beyond",
    title: "The Future Horizon",
    desc: "Deploying next-generation real-time route optimization tracking systems while extending our premium logistics network further across the broader East African region.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  }
];

const achievements = [
  { value: "450+", label: "Projects Completed", icon: Briefcase },
  { value: "120+", label: "Corporate Clients", icon: Users },
  { value: "25+", label: "Global Partners", icon: HeartHandshake },
  { value: "7+ Nodes", label: "Regional Coverage", icon: Globe },
  { value: "9 Distinct", label: "Industries Served", icon: Layers },
  { value: "12+ Years", label: "Operational Mastery", icon: Award },
];

const coreValues = [
  { title: "Professionalism", desc: "Absolute compliance with international protocol standards, driven by elite training frameworks.", icon: ShieldCheck },
  { title: "Integrity", desc: "Transparent financial systems, secure operations, and complete operational confidentiality.", icon: Fingerprint },
  { title: "Excellence", desc: "Meticulous route mapping and contingency planning that leaves zero margin for error.", icon: Award },
  { title: "Innovation", desc: "Utilizing modern, real-time asset tracking platforms to optimize moving mission dynamics.", icon: TrendingUp },
  { title: "Reliability", desc: "A flawless punctuality guarantee supported by localized redundant infrastructure assets.", icon: Layers },
  { title: "Partnership", desc: "Constructing deep, multi-year alliances with global entities to help them scale regionally.", icon: HeartHandshake },
];

const team = [
  {
    name: "Alwiya Masoud",
    role: "Managing Director & Founder",
    bio: "Over 15 years directing high-level corporate frameworks across East Africa. Specialist in regional regulatory adherence and diplomatic liaison setup.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Nasser Al-Harthy",
    role: "Director of Operations & Logistics",
    bio: "Ex-maritime logistics engineer. Oversees ground vehicle tracking configurations, multi-island transport nodes, and immediate emergency response commands.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Said Fundi",
    role: "Head of Protocol & Government Relations",
    bio: "Deep institutional expertise navigating ministerial frameworks and customs entry protocols within both Zanzibar archipelago and mainland systems.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
  }
];

const strategicGoals = [
  "Maintain a 100% safety index across all luxury maritime and multi-terrain corporate vehicular tracking configurations.",
  "Deepen regulatory integration loops with investment authorities to compress corporate setup timelines by 30%.",
  "Scale our secure executive command infrastructure footprint into neighboring cross-border economic hubs.",
  "Achieve comprehensive zero-carbon fleet offsets across our logistics lines within the next operational loop."
];

export default function AboutPage() {
  const fv: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* 1. HERO BANNER */}
      <AnimatedHero
        topText="Corporate Profile"
        title={
          <>
            The Architecture of <span className="text-zinc-400">Trusted Logistics</span>
          </>
        }
        description="Star Investment bridges the gap between challenging local infrastructure and the world-class operational metrics demanded by international institutions."
      />

      {/* 2. VISION & MISSION */}
      <section className="py-24 bg-white relative z-20 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-zinc-50 p-8 sm:p-12 rounded-2xl border border-zinc-100 flex flex-col justify-between space-y-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 bg-zinc-950 text-white w-fit rounded-xl">
                <Eye size={24} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-950">Our Strategic Vision</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  To remain the definitive foundational execution layer for institutional deployment across East Africa—recognized globally for uncompromised safety, dynamic local compliance, and absolute field reliability.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-zinc-950 text-white p-8 sm:p-12 rounded-2xl border border-zinc-900 flex flex-col justify-between space-y-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 bg-white text-zinc-950 w-fit rounded-xl">
                <Target size={24} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-white">Our Operational Mission</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  To eliminate logistical and regulatory fragmentation for governments, corporations, and international agencies by providing fully integrated corporate transportation, protocol management, and regulatory de-risking structures.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. COMPANY HISTORY (ALTERNATING TIMELINE) */}
      <StrategicJourney timelineHistory={timelineHistory} />

      {/* 4. STRATEGIC OBJECTIVES / GOALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-1 bg-zinc-950" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Strategic Corporate Objectives</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Our operations align directly with targeted indicators that ensure our organizational capacities scale safely alongside your operational requirements.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strategicGoals.map((goal, index) => (
                <div key={index} className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 flex gap-4 items-start">
                  <CheckCircle size={18} className="text-zinc-950 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACHIEVEMENTS STATISTICS LAYOUT */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {achievements.map((ach, idx) => {
              const Icon = ach.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  key={idx} className="text-center space-y-2 border-r border-zinc-900 last:border-0"
                >
                  <div className="mx-auto w-fit text-zinc-500 mb-2">
                    <Icon size={20} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{ach.value}</div>
                  <div className="text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">{ach.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Our Operational Creed</h2>
            <p className="text-zinc-500 text-sm">Non-negotiable vectors governing every action our field operators execute daily.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, index) => {
              const Icon = val.icon;
              return (
                <div key={index} className="p-8 border border-zinc-100 rounded-2xl bg-zinc-50/50 hover:bg-white hover:border-zinc-950 hover:shadow-xl transition-all duration-300 group">
                  <div className="p-3 bg-white border border-zinc-100 rounded-xl w-fit text-zinc-950 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-base text-zinc-900 mt-6 mb-2">{val.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. LEADERSHIP TEAM */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Executive Guidance</h2>
            <p className="text-zinc-500 text-sm">Veteran strategists combining local insight with standardized global risk compliance models.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                variants={fv} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                key={index} className="bg-white rounded-2xl border border-zinc-200/60 overflow-hidden shadow-sm flex flex-col group"
              >
                {/* Fixed Square Frame for Professional Portrait */}
                <div className="aspect-4/5 w-full bg-zinc-100 relative overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover filter grayscale contrast-110 group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8 grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-zinc-900">{member.name}</h3>
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{member.role}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed pt-2 border-t border-zinc-100">{member.bio}</p>
                  </div>
                  <a href="#" className="p-2 bg-zinc-50 rounded-full border border-zinc-100 text-zinc-400 hover:text-white hover:bg-zinc-950 transition-colors w-fit shadow-sm">
                    <FaLinkedin size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (CORPORATE LAYOUT) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            <div className="md:col-span-4 space-y-4">
              <Quote size={32} className="text-zinc-300" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">Institutional Endorsements</h2>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                Read direct reviews from procurement managers who trust our integrated network lines across Tanzania.
              </p>
            </div>

            <div className="md:col-span-8 space-y-6">
              <div className="p-8 border border-zinc-100 rounded-2xl bg-zinc-50 space-y-6">
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-medium italic">
                  &ldquo;Deploying multi-agency research groups across remote regions in Pemba presented immense structural problems. Star Investment synchronized all entry logistics, ground multi-terrain fleets, and local asset permissions with absolute, verified precision.&rdquo;
                </p>
                <div className="pt-4 border-t border-zinc-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-zinc-950 text-sm">Dr. Aris Thorne</h5>
                    <p className="text-[11px] text-zinc-400 font-medium">Senior Regional Security Director — East Africa Advisory</p>
                  </div>
                  <div className="text-xs font-bold font-mono tracking-widest text-zinc-400 bg-white border border-zinc-200 px-3 py-1 rounded-md">
                    EAA CORP
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}