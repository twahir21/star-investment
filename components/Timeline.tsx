import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image"; // Assuming Next.js based on your <Image /> component

// Mock data type declaration if you are using TypeScript
interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  img: string;
}

export default function StrategicJourney({ timelineHistory }: { timelineHistory: TimelineItem[] }) {
  // 1. Create a ref for the timeline section container
  const containerRef = useRef<HTMLDivElement>(null);

  // 2. Track scroll progress relative to this container
  // ["start center", "end center"] means the line grows as the container passes the middle of the screen
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Our Strategic Journey
          </h2>
          <p className="text-zinc-500 text-sm">
            A timeline marked by systematic capacity development and structural excellence.
          </p>
        </div>

        {/* Timeline Container with ref attached */}
        <div ref={containerRef} className="relative space-y-16">
          
          {/* 3. Static Background Line (Gray base) */}
          <div className="absolute inset-y-0 left-4 lg:left-1/2 w-[2px] bg-zinc-200" />

          {/* 4. Animated Foreground Line (Dark Fill) */}
          <motion.div
            className="absolute inset-y-0 left-4 lg:left-1/2 w-[2px] bg-zinc-950 origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          {timelineHistory.map((item, index) => {
            const isEven = index % 2 === 0;

            const leftContent = isEven ? (
              <div className="relative aspect-video max-w-md w-full rounded-xl overflow-hidden bg-zinc-200 group shadow-md border border-zinc-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ) : (
              <div className="space-y-3 lg:text-right">
                <span className="text-sm font-extrabold font-mono text-zinc-400">{item.year}</span>
                <h4 className="text-xl font-bold text-zinc-950">{item.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            );

            const rightContent = isEven ? (
              <div className="space-y-3">
                <span className="text-sm font-extrabold font-mono text-zinc-400">{item.year}</span>
                <h4 className="text-xl font-bold text-zinc-950">{item.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ) : (
              <div className="relative aspect-video max-w-md w-full rounded-xl overflow-hidden bg-zinc-200 group shadow-md border border-zinc-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            );

            return (
              <div key={index} className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0">
                
                {/* Timeline Node Center Marker */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-zinc-950 border-4 border-white -translate-x-1.5 lg:-translate-x-2 top-0 lg:top-2 z-10" />

                {/* Left Column */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:pr-12 lg:flex lg:justify-end"
                >
                  <div className="max-w-md w-full">
                    {leftContent}
                  </div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full lg:w-1/2 pl-12 lg:pl-12"
                >
                  <div className="max-w-md w-full">
                    {rightContent}
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}