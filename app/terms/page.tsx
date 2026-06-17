"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, HelpCircle } from 'lucide-react';
import AnimatedHero from '@/components/ui/AnimeHero';

const termsSections = [
  { id: "definitions", title: "1. Definitions" },
  { id: "services", title: "2. Scope of Services" },
  { id: "bookings", title: "3. Booking Framework" },
  { id: "payments", title: "4. Payment Architecture" },
  { id: "cancellation", title: "5. Cancellation & Margins" },
  { id: "liability", title: "6. Liability Boundaries" },
  { id: "insurance", title: "7. Insurance Coverage" },
  { id: "privacy", title: "8. Privacy Overlaps" },
  { id: "ip", title: "9. Intellectual Property" },
  { id: "disputes", title: "10. Dispute Resolution" },
  { id: "contact", title: "11. Institutional Contact" }
];

export default function TermsConditionsPage() {
  const [activeSection, setActiveSection] = useState("definitions");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const section of termsSections) {
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
    <main className="bg-white text-gray-900 min-h-screen selection:bg-zinc-950 selection:text-white">

      {/* 1. HERO META HEADER */}
      <AnimatedHero
        topText="Master Service Agreement"
        title={
          <>
            Engineered for <span className="text-zinc-400">Terms & Conditions</span>
          </>
        }
        description="Effective Execution Date: June 2026. Binding Legal Framework"
      />

      {/* 2. CORE LAYOUT GRAPH */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Sticky Table of Contents */}
            <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-6 hidden lg:block">
              <div className="space-y-1">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Legal Nodes</p>
                <h4 className="font-bold text-sm text-zinc-900">Document Sections</h4>
              </div>
              <nav className="space-y-1 flex flex-col border-l border-zinc-200/80">
                {termsSections.map((sec) => {
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
                  <HelpCircle size={12} /> Direct Inquiries
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                  Any deviation vectors or custom operational overrides require explicit addendums bound by our compliance desk.
                </p>
              </div>
            </aside>

            {/* Right Column: Deep Readable Terms Typography */}
            <div className="lg:col-span-9 space-y-16 max-w-3xl">

              {/* DEFINITIONS */}
              <article id="definitions" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">1. Definitions & Interpretation</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    Throughout these Terms, references to <strong>&ldquo;Company&rdquo;</strong>, <strong>&ldquo;Star Investment&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, or <strong>&ldquo;our&rdquo;</strong> define the corporate entity registered in Zanzibar, specializing in institutional logistics, protocol mapping, and investment facilitation.
                  </p>
                  <p>
                    <strong>&ldquo;Client&rdquo;</strong> refers to any sovereign agency, multi-lateral group, private corporation, or high-net-worth individual engaging our ground assets, maritime charters, or legal navigation networks. <strong>&ldquo;Mission Parameters&rdquo;</strong> implies the finalized operational brief containing tracking configurations, timeline arrays, and asset bounds.
                  </p>
                </div>
              </article>

              {/* SERVICES */}
              <article id="services" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">2. Scope of Operational Services</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    Star Investment pledges to deploy well-maintained vehicular assets, maritime charters, and certified bilingual field personnel (fluent in English and Swahili) matching the requirements declared in the Client&apos;s Mission brief.
                  </p>
                  <p>
                    We reserve the right to alter exact route pipelines dynamically to circumvent immediate physical threats, extreme weather parameters across the Zanzibar Channel, or sudden governmental barricades, prioritizing data transparency and user protection at all times.
                  </p>
                </div>
              </article>

              {/* BOOKINGS */}
              <article id="bookings" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">3. Booking Framework & Validation</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    Operational scheduling requires complete validation via our official submission vectors. Bookings are considered bound only upon the transmission of a written Confirmation Log from our Command Center, alongside successful payment clearing based on the contract parameters.
                  </p>
                  <p>
                    The Client acknowledges responsibility for providing accurate authentication datasets, flight registries, and diplomatic passport classifications needed to secure airport tarmac or customs access protocols.
                  </p>
                </div>
              </article>

              {/* PAYMENTS */}
              <article id="payments" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">4. Payment Architecture & Invoicing</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    All fiscal transactions route through authorized invoicing streams in United States Dollars (USD) or equivalent Tanzanian Shillings (TZS) structural conversions. Standard deployment profiles require full funding before asset mobilization unless an ongoing institutional corporate credit arrangement is signed.
                  </p>
                  <p>
                    Unscheduled operational expansion, route extension delays over the standard desk grid hours, or supplementary asset calls will generate automated auxiliary invoices bound under net-7 payment windows.
                  </p>
                </div>
              </article>

              {/* CANCELLATION */}
              <article id="cancellation" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">5. Cancellation Protocols & Margins</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    Because scheduling premium ground vehicles and fast marine charters involves dedicating high-level regional resources, cancellations are subject to strict notice margins:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600">
                    <li><strong>Notice over 48 hours:</strong> Eligible for full refund allocation minus a 10% structural handling premium.</li>
                    <li><strong>Notice within 24 to 48 hours:</strong> Subject to a 50% holding fee to balance locked assets.</li>
                    <li><strong>Notice under 24 hours:</strong> Forfeits the full operational rate. Emergency standby calls operate under independent localized terms.</li>
                  </ul>
                </div>
              </article>

              {/* LIABILITY */}
              <article id="liability" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">6. Liability Boundaries & Force Majeure</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    Star Investment maintains comprehensive defensive safety frameworks but rejects liability for indirect loss, missed scheduling strings, diplomatic delays, or asset complications arising from events outside our immediate control.
                  </p>
                  <p>
                    Force Majeure thresholds include sovereign airspace closures, abrupt regulatory maritime lock orders in local ports, civil disturbances, or systemic natural weather anomalies across transit paths. Our technical liability remains capped at the contract value paid by the Client for that specific tracking node.
                  </p>
                </div>
              </article>

              {/* INSURANCE */}
              <article id="insurance" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">7. Insurance Coverage Frameworks</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    Active vehicles and maritime vessels operate under high-bracket asset protection, complete hull coverage, and third-party multi-risk legal liability portfolios.
                  </p>
                  <p>
                    Specialized transit risks, high-value asset courier assignments, or diplomatic cargo elements require standalone declarations to bind individual transit insurance layers prior to execution launch.
                  </p>
                </div>
              </article>

              {/* PRIVACY */}
              <article id="privacy" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">8. Privacy & Data Continuity Overlaps</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    All customer profiles and corporate data packets match our Privacy Policy standards. Our database strips away unneeded computing overhead to keep tracking networks clean and clear of cross-site vulnerabilities.
                  </p>
                  <p>
                    Information routing paths comply with the United Republic of Tanzania Personal Data Protection Act regulations, keeping communications encrypted end-to-end.
                  </p>
                </div>
              </article>

              {/* INTELLECTUAL PROPERTY */}
              <article id="ip" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">9. Intellectual Property Protection</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    The digital framework, styling matrices, telemetry custom logic configurations, operational maps, scripts, and visual components displayed across Star Investment nodes belong strictly to the Company.
                  </p>
                  <p>
                    Clients are granted zero authorization to isolate, duplicate, scrape, or adapt our custom dashboards or tracking tools without a verified, signed commercial integration permit from our leadership board.
                  </p>
                </div>
              </article>

              {/* DISPUTE RESOLUTION */}
              <article id="disputes" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">10. Dispute Resolution & Jurisdiction</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    These Terms are governed strictly by the laws of the United Republic of Tanzania and the revolutionary government of Zanzibar.
                  </p>
                  <p>
                    Any procedural disagreement or breach claim relating to our logistics services will route first through friendly executive mediation. If resolution lines remain unresolved after 30 days, disputes will shift to final binding arbitration within Stone Town, Zanzibar, under local arbitration protocols.
                  </p>
                </div>
              </article>

              {/* CONTACT */}
              <article id="contact" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">11. Institutional Compliance Contact</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-4">
                  <p>
                    To request formal addendums, query custom framework parameters, or initiate legal filings, please target our corporate compliance center:
                  </p>

                  {/* Digital Terms Card Info */}
                  <div className="mt-6 p-6 border border-zinc-200 bg-zinc-50 rounded-xl space-y-3 max-w-md">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">Command Control Desk</p>
                      <p className="font-bold text-zinc-900 text-base">Star Investment Administration</p>
                    </div>
                    <div className="text-xs space-y-1 text-zinc-600 font-mono">
                      <p>Vuga Road, Stone Town, Zanzibar</p>
                      <p>United Republic of Tanzania</p>
                      <p className="pt-2 text-zinc-950 font-bold hover:underline cursor-pointer flex items-center gap-1">
                        operations@starinvestment.com <ArrowUpRight size={12} />
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