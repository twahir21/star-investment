"use client";

import { useState, useEffect } from 'react';
import { ArrowUpRight,  EyeOff } from 'lucide-react';
import AnimatedHero from '@/components/ui/AnimeHero';

const cookieSections = [
  { id: "introduction", title: "1. Core Framework" },
  { id: "how-we-use", title: "2. Operational Use" },
  { id: "classification", title: "3. Classification Matrix" },
  { id: "telemetry", title: "4. Telemetry Systems" },
  { id: "management", title: "5. Cookie Management" },
  { id: "contact", title: "6. Audit Verification" }
];

export default function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const section of cookieSections) {
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
        topText="Data Tracking Disclosure"
        title={
          <>
            Cookie & Telemetry Policy
          </>
        }
        description="Latest Update: June 2026. Transparent Optimization Metrics"
      />

      {/* 2. SPLIT ARCHITECTURE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-6 hidden lg:block">
              <div className="space-y-1">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Data Architecture</p>
                <h4 className="font-bold text-sm text-zinc-900">Policy Hierarchy</h4>
              </div>
              <nav className="space-y-1 flex flex-col border-l border-zinc-200/80">
                {cookieSections.map((sec) => {
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
                  <EyeOff size={12} /> Strict Isolation
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                  Star Investment strictly blocks external tracking code elements or profiling networks from attaching to your local terminal sessions.
                </p>
              </div>
            </aside>

            {/* Right Side Policy Documentation */}
            <div className="lg:col-span-9 space-y-16 max-w-3xl">

              {/* INTRODUCTION */}
              <article id="introduction" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">1. Core Framework Statement</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    This Cookie Policy outlines how Star Investment implements cookies, tracking tokens, and local cache allocations on our institutional dashboards to guarantee system responsiveness.
                  </p>
                  <p>
                    By interacting with our encrypted communication portals or routing coordination pipelines, you authorize the local system to place essential data blocks on your desktop or mobile asset storage. These files act purely as session validators and configuration markers.
                  </p>
                </div>
              </article>

              {/* HOW WE USE */}
              <article id="how-we-use" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">2. Operational Use Patterns</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    Our administrative grid deploys tracking tokens for zero commercial marketing profiles. Instead, tokens provide critical system support including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600">
                    <li>Securing ongoing data states for customized language selection matrices (ensuring seamless English and Swahili interface handoffs).</li>
                    <li>Retaining encrypted validation authorization details during multi-step mission onboarding processes.</li>
                    <li>Analyzing localized content throughput speeds to monitor telemetry transmission delays across remote regional nodes.</li>
                  </ul>
                </div>
              </article>

              {/* CLASSIFICATION MATRIX */}
              <article id="classification" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950 flex items-center gap-2">
                  3. Classification Matrix
                </h2>
                <p className="text-zinc-500 text-xs sm:text-sm font-light">
                  Review the mechanical breakdown of variables stored inside your active web environment.
                </p>

                <div className="overflow-x-auto pt-2">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-zinc-900 bg-zinc-50 font-bold text-zinc-900">
                        <th className="p-3 font-semibold">Classification</th>
                        <th className="p-3 font-semibold">Core Function</th>
                        <th className="p-3 font-semibold">Lifespan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 font-light text-zinc-600">
                      <tr>
                        <td className="p-3 font-semibold text-zinc-900">Strictly Necessary</td>
                        <td className="p-3">Handles user authentication profiles and prevents multi-step processing memory drops.</td>
                        <td className="p-3 font-mono text-[11px]">Session Terminal</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-zinc-900">Operational Preference</td>
                        <td className="p-3">Remembers language choices (English/Swahili alignment) and saved coordinate nodes.</td>
                        <td className="p-3 font-mono text-[11px]">365 Days</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-zinc-900">Telemetry Tracking</td>
                        <td className="p-3">Anonymously records data loads and server response drops across East African networks.</td>
                        <td className="p-3 font-mono text-[11px]">Persistent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>

              {/* TELEMETRY SYSTEMS */}
              <article id="telemetry" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">4. Telemetry Systems Optimization</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    To ensure secure tracking feeds remain live during cross-strait transits or remote mainland logistics operations, our technical infrastructure aggressively modifies caching mechanisms.
                  </p>
                  <p>
                    By stripping away unneeded tracking scripts and complex client-side script frameworks, our tokens preserve operational telemetry lines with central command nodes—minimizing payload weight across low-bandwidth data lines.
                  </p>
                </div>
              </article>

              {/* COOKIE MANAGEMENT */}
              <article id="management" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">5. Cookie Control & Disabling</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
                  <p>
                    You retain total sovereignty over your local terminal settings. You can instruct your browser to refuse cookie cookies, drop local state indices, or purge data records upon leaving the platform.
                  </p>
                  <p>
                    Please note that resetting structural cookie arrays will directly log you out of protected mission briefings and reset language parameters to standard English tracking formats.
                  </p>
                </div>
              </article>

              {/* AUDIT VERIFICATION */}
              <article id="contact" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">6. Data Audit Verification</h2>
                <div className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed space-y-4">
                  <p>
                    Our data storage structures undergo recurring reviews to ensure full regulatory alignment with local personal protection mandates. For specific compliance reports or deep database inquiries, route communication to our administrative post:
                  </p>

                  {/* Digital Cookie Card Info */}
                  <div className="mt-6 p-6 border border-zinc-200 bg-zinc-50 rounded-xl space-y-3 max-w-md">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">Technical Sovereignty Unit</p>
                      <p className="font-bold text-zinc-900 text-base">Star Investment Infrastructure Command</p>
                    </div>
                    <div className="text-xs space-y-1 text-zinc-600 font-mono">
                      <p>Vuga Road, Stone Town, Zanzibar</p>
                      <p>United Republic of Tanzania</p>
                      <p className="pt-2 text-zinc-950 font-bold hover:underline cursor-pointer flex items-center gap-1">
                        networks@starinvestment.com <ArrowUpRight size={12} />
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