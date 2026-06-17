"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import AnimatedHero from '@/components/ui/AnimeHero';

const sections = [
  { id: "collection", title: "Information Collection" },
  { id: "usage", title: "Use of Information" },
  { id: "cookies", title: "Cookies & Telemetry" },
  { id: "third-party", title: "Third-Party Services" },
  { id: "security", title: "Data Security Layers" },
  { id: "rights", title: "User Data Rights" },
  { id: "contact", title: "Legal Command Contact" }
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("collection");

  // Track scroll position to update active state of table of contents
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-16 selection:bg-zinc-950 selection:text-white">

      {/* 1. HERO META HEADER */}
      <AnimatedHero
        topText="Regulatory Directive"
        title={
          <>
            Privacy & Protocol Policy
          </>
        }
        description="Last Structural Audit: June 2026. Version 2.4 (Encrypted Framework)"
      />

      {/* 2. SPLIT ARCHITECTURE GRAPH */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Fixed / Sticky Table of Contents */}
            <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-6 hidden lg:block">
              <div className="space-y-1">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Document Outline</p>
                <h4 className="font-bold text-sm text-zinc-900">Navigation Nodes</h4>
              </div>
              <nav className="space-y-1 flex flex-col border-l border-zinc-200/80">
                {sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`text-left text-xs font-semibold py-3 pl-4 border-l -ml-px transition-all uppercase tracking-wider ${isActive
                          ? 'border-zinc-950 text-zinc-950 font-bold bg-zinc-50 rounded-r-md'
                          : 'border-transparent text-zinc-400 hover:text-zinc-900 hover:border-zinc-300'
                        }`}
                    >
                      {sec.title}
                    </button>
                  );
                })}
              </nav>
              <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900">
                  <Lock size={12} /> Compliance Notice
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                  Fully synchronized with the United Republic of Tanzania Personal Data Protection Act (PDPA) frameworks.
                </p>
              </div>
            </aside>

            {/* Right Column: Deep Readable Legal Typography */}
            <div className="lg:col-span-9 space-y-20 max-w-3xl">

              {/* SECTION 1 */}
              <article id="collection" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-400 bg-zinc-100 px-2 py-1 rounded">01</span>
                  Information Collection Vectors
                </h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-4">
                  <p>
                    Star Investment aggregates essential, non-public operational data protocols to execute high-level cross-border transit synchronization, executive security manifests, and corporate deployment pipelines within our East African networks.
                  </p>
                  <p className="font-medium text-zinc-950">We actively collect the following structural metadata pipelines:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600">
                    <li><strong>Authentication Identifiers:</strong> Full legal names, corporate affiliation indices, secure government clearance classifications, and verified diplomatic identification parameters.</li>
                    <li><strong>Transit Manifest Vectors:</strong> Flight tracking telemetry, maritime cargo declarations, real-time vehicular GPS coordinates, and localized route configuration adjustments.</li>
                    <li><strong>Bilingual Communications Logs:</strong> Transmitted command requests, translation parameters (English & Swahili logs), and emergency patch instructions routing through our digital command systems.</li>
                  </ul>
                </div>
              </article>

              {/* SECTION 2 */}
              <article id="usage" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-400 bg-zinc-100 px-2 py-1 rounded">02</span>
                  Strategic Use of Information
                </h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-4">
                  <p>
                    Collected datasets are utilized strictly to ensure operational continuity, tactical route protection, and regulatory alignment. We do not engage in consumer monetization profiles.
                  </p>
                  <p>
                    Data parameters direct our automated telemetry networks—stripping away redundant computing overhead to optimize real-time route execution feeds. Information pathways also guarantee direct translation accuracy between ground tactical drivers and corporate nodes during multi-island transits.
                  </p>
                </div>
              </article>

              {/* SECTION 3 */}
              <article id="cookies" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-400 bg-zinc-100 px-2 py-1 rounded">03</span>
                  Cookies & Performance Telemetry
                </h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-4">
                  <p>
                    Our interface leverages minimal, secure session handling states and persistent cookies. These do not execute tracking code chains across third-party consumer web domains.
                  </p>
                  <p>
                    Cookies are deployed exclusively to cache dashboard preference variables, authorize encrypted mission briefings, and analyze internal dashboard processing speeds. You can terminate session tracking within your browser architecture without destabilizing fundamental public-facing site elements.
                  </p>
                </div>
              </article>

              {/* SECTION 4 */}
              <article id="third-party" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-400 bg-zinc-100 px-2 py-1 rounded">04</span>
                  Third-Party Service Boundaries
                </h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-4">
                  <p>
                    To guarantee swift border and port clearances, specified telemetry data may route through verified sovereign administrative systems, including the Zanzibar Investment Promotion Authority (ZIPA) and local port controls.
                  </p>
                  <p>
                    Any shared datasets match structural regulatory guidelines. We explicitly prohibit external data hosts from modifying, holding, or routing internal transport profiles outside the designated operational timeframe.
                  </p>
                </div>
              </article>

              {/* SECTION 5 */}
              <article id="security" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-400 bg-zinc-100 px-2 py-1 rounded">05</span>
                  Data Security Cryptographic Layers
                </h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-4">
                  <p>
                    All active communication pipelines undergo Advanced Encryption Standard (AES-256) wrapping during transit and storage states. Physical command centers restrict database node visibility to authenticated network administrators.
                  </p>
                  <p>
                    In the event of an infrastructure threat or unauthorized boundary breach, our regional defense network triggers localized system isolations within 180 seconds, notifying affected regulatory leads through direct out-of-band communication lines.
                  </p>
                </div>
              </article>

              {/* SECTION 6 */}
              <article id="rights" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-400 bg-zinc-100 px-2 py-1 rounded">06</span>
                  User Data Rights & Compliance
                </h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-4">
                  <p>
                    Under institutional data safety mandates, stakeholders retain full authority to request clear audits of held metadata files. You preserve the right to demand complete digital erasure schedules for post-mission operational footprints.
                  </p>
                  <p>
                    Erasure requests execute inside our system within 48 hours, unless active legal compliance matrices or national security clearances mandate temporary records preservation.
                  </p>
                </div>
              </article>

              {/* SECTION 7 */}
              <article id="contact" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-400 bg-zinc-100 px-2 py-1 rounded">07</span>
                  Legal Command Contact
                </h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-4">
                  <p>
                    For regulatory verifications, data erasure executions, or to receive official compliance documentation, route queries directly to our independent audit desk.
                  </p>

                  {/* Digital Legal Card Info */}
                  <div className="mt-6 p-6 border border-zinc-200 bg-zinc-50 rounded-xl space-y-3 max-w-md">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">Office of Legal Counsel</p>
                      <p className="font-bold text-zinc-900 text-base">Star Investment Legal Division</p>
                    </div>
                    <div className="text-xs space-y-1 text-zinc-600 font-mono">
                      <p>Vuga Road, Stone Town, Zanzibar</p>
                      <p>United Republic of Tanzania</p>
                      <p className="pt-2 text-zinc-950 font-bold hover:underline cursor-pointer flex items-center gap-1">
                        legal@starinvestment.com <ArrowUpRight size={12} />
                      </p>
                    </div>
                  </div>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}