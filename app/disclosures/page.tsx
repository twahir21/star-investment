"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Building2 } from 'lucide-react';
import AnimatedHero from '@/components/ui/AnimeHero';

const disclosureSections = [
  { id: "corporate", title: "1. Corporate Structure" },
  { id: "investment-risk", title: "2. Financial & Risk Disclosures" },
  { id: "regulatory", title: "3. Regulatory Licensing" },
  { id: "government-sharing", title: "4. Statutory Data Demands" },
  { id: "conflicts", title: "5. Conflict Transparency" },
  { id: "verification", title: "6. Verification Desk" }
];

export default function DisclosuresPage() {
  const [activeSection, setActiveSection] = useState("corporate");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const section of disclosureSections) {
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
        topText="Statutory Transparency Manifest"
        title={
          <>
            Legal & Risk Disclosures
          </>
        }
        description="Publication Cycle: June 2026. Public Accountability Protocol"
      />

      {/* 2. SPLIT ARCHITECTURE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Sticky Table of Contents */}
            <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-6 hidden lg:block">
              <div className="space-y-1">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Compliance Nodes</p>
                <h4 className="font-bold text-sm text-zinc-900">Disclosure Index</h4>
              </div>
              <nav className="space-y-1 flex flex-col border-l border-zinc-200/80">
                {disclosureSections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`text-left text-xs font-semibold py-2.5 pl-4 border-l -ml-px transition-all tracking-wide ${isActive
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
                  <Building2 size={12} /> Sovereign Context
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                  Maintained in alignment with corporate disclosure rules managed by the Revolutionary Government of Zanzibar.
                </p>
              </div>
            </aside>

            {/* Right Column: Deep Readable Typography */}
            <div className="lg:col-span-9 space-y-16 max-w-3xl">

              {/* CORPORATE STRUCTURE */}
              <article id="corporate" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">1. Institutional & Corporate Structure</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    Star Investment operations are steered through legally distinct entities structured to align with cross-border compliance demands, regional port authorities, and local land holding provisions.
                  </p>
                  <p>
                    This digital platform operates under the direct oversight of Star Investment’s core administrative matrix located in Zanzibar. Service distribution channels, asset allocations, and specialized strategic logistics maneuvers are managed across separate project holding clusters to ensure institutional stability.
                  </p>
                </div>
              </article>

              {/* INVESTMENT & FINANCIAL RISK */}
              <article id="investment-risk" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">2. Financial, Logistics & Market Risk Disclosures</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    Materials, dashboards, updates, and telemetry layouts distributed on this platform are configured purely for tracking optimization and institutional resource alignment. Nothing within this interface constitutes a formal solicitation, financial advisory brief, or public investment offering.
                  </p>
                  <p>
                    Engaging in logistics networks, direct real estate placement pipelines, and maritime infrastructure frameworks within emerging market boundaries contains inherent volatility variables. These parameters include currency adjustments between the USD and TZS, changes in maritime route safety across the East African coast, and localized economic policy adaptations.
                  </p>
                </div>
              </article>

              {/* REGULATORY LICENSING */}
              <article id="regulatory" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">3. Regulatory Licensing & Approvals</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    Star Investment manages infrastructure deployments under formal oversight, maintaining direct licensing channels with regional regulatory bodies including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600">
                    <li>Strategic corporate development permits issued under the oversight of the <strong>Zanzibar Investment Promotion Authority (ZIPA)</strong>.</li>
                    <li>Sovereign port and transit clearances coordinated with relevant coastal trade enforcement groups in the United Republic of Tanzania.</li>
                    <li>Corporate compliance registration parameters aligned with the Business Registrations and Licensing Agency (BRELA).</li>
                  </ul>
                </div>
              </article>

              {/* STATUTORY DATA DEMANDS */}
              <article id="government-sharing" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">4. Statutory Data Demands & Sharing Protocols</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    While our Privacy Policy enforces Advanced Encryption Standard safeguards (AES-256), Star Investment remains subject to lawful disclosure mandates. We will share telemetry logs, identity indices, or tracking profiles when requested under a verified judicial warrant.
                  </p>
                  <p>
                    These demands encompass data audits issued by the Tanzania Revenue Authority (TRA) or emergencies concerning regional transport pathways and harbor preservation priorities.
                  </p>
                </div>
              </article>

              {/* CONFLICT TRANSPARENCY */}
              <article id="conflicts" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">5. Conflict of Interest Transparency</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    Star Investment routinely collaborates with local municipal development panels, cross-border shipping providers, and private development syndicates. We actively identify and isolate commercial overlaps to maintain strict operational integrity.
                  </p>
                  <p>
                    Where an institutional partner holds a financial interest in an active transport route or land allocation project managed by Star Investment, notice manifests are delivered directly to affected stakeholder command channels prior to mission launch.
                  </p>
                </div>
              </article>

              {/* VERIFICATION DESK */}
              <article id="verification" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">6. Verification & Governance Desk</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-4">
                  <p>
                    To cross-reference tracking registrations, verify active ZIPA certification numbers, or receive localized regulatory filing documentation, address our corporate compliance officers:
                  </p>

                  {/* Digital Disclosure Card Info */}
                  <div className="mt-6 p-6 border border-zinc-200 bg-zinc-50 rounded-xl space-y-3 max-w-md">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">Institutional Governance Unit</p>
                      <p className="font-bold text-zinc-900 text-base">Star Investment Disclosure Office</p>
                    </div>
                    <div className="text-xs space-y-1 text-zinc-600 font-mono">
                      <p>Vuga Road, Stone Town, Zanzibar</p>
                      <p>United Republic of Tanzania</p>
                      <p className="pt-2 text-zinc-950 font-bold hover:underline cursor-pointer flex items-center gap-1">
                        governance@starinvestment.com <ArrowUpRight size={12} />
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