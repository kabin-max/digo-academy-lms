'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Compass, Cpu, MapPin, Search, Trophy } from 'lucide-react';

import { Reveal } from '@/shared/components/public/Reveal';

const FEATURES = [
  {
    icon: Compass,
    title: 'Diverse Tech Tracks',
    desc: 'From full-stack Next.js and Cloud architectures to Autonomous AI Agents and LLM orchestration.',
    color: 'bg-emerald-500/10 text-emerald-600',
    border: 'hover:border-emerald-200',
  },
  {
    icon: Cpu,
    title: 'Senior Code Mentors',
    desc: 'Staff engineers and tech leads personally reviewing your Git commits and architecture design docs.',
    color: 'bg-brand-blue/10 text-brand-blue',
    border: 'hover:border-brand-blue/30',
  },
  {
    icon: Trophy,
    title: 'Career Placement & Demo Days',
    desc: 'Present your deployed microservices directly to hiring partners, tech founders, and CTOs.',
    color: 'bg-amber-500/10 text-amber-600',
    border: 'hover:border-amber-200',
  },
];

const ALUMNI_HUBS = [
  {
    id: 'sv',
    name: 'Silicon Valley, USA',
    role: 'AI & YC Startups',
    region: 'sv',
    top: '34%',
    left: '15%',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'sa',
    name: 'São Paulo, Brazil',
    role: 'FinTech Remote Hub',
    region: 'remote',
    top: '75%',
    left: '35%',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'eu',
    name: 'London & Berlin',
    role: 'Autonomous Systems',
    region: 'global',
    top: '24%',
    left: '49%',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'af',
    name: 'Nairobi, Kenya',
    role: 'Emerging Tech Squad',
    region: 'remote',
    top: '61%',
    left: '58%',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'ktm',
    name: 'Kathmandu / Global Hub',
    role: 'Digo Academy HQ & Builders Campus',
    region: 'global',
    top: '44%',
    left: '72%',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    featured: true, // Prominent pin
  },
  {
    id: 'asia',
    name: 'Tokyo & Singapore',
    role: 'Cloud Infrastructure',
    region: 'global',
    top: '33%',
    left: '87%',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'syd',
    name: 'Sydney, Australia',
    role: 'Product Engineering Squad',
    region: 'global',
    top: '82%',
    left: '90%',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
    featured: false,
  },
];

const REGION_FILTERS = [
  { key: 'all', label: 'All Hubs' },
  { key: 'remote', label: 'Remote' },
  { key: 'sv', label: 'Silicon Valley' },
  { key: 'global', label: 'Global' },
] as const;

export interface WorldMapSectionProps {
  showFeatures?: boolean;
}

export function WorldMapSection({ showFeatures = false }: WorldMapSectionProps = {}) {
  const [activeRegion, setActiveRegion] = useState<'all' | 'remote' | 'sv' | 'global'>('all');
  const [selectedHub, setSelectedHub] = useState<typeof ALUMNI_HUBS[0] | null>(null);

  // Dynamic horizontal translation offset: the text controls push the map left/right
  const getMapOffset = () => {
    switch (activeRegion) {
      case 'sv':
        return 40; // pushes map rightward to center Americas
      case 'remote':
        return -20;
      case 'global':
        return -80; // pushes map leftward to center Eurasia / Asia
      default:
        return 0;
    }
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Optional Features Section */}
        {showFeatures && (
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] items-start pb-20 border-b border-border/50">
            <Reveal>
              <div className="relative">
                {/* Doodle star accent */}
                <div className="absolute -top-6 -left-4 text-brand-blue/50 select-none pointer-events-none">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
                  </svg>
                </div>
                <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  That&apos;s The Way<br />To Build!
                </h2>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
                  Try a proven pedagogy designed around software agency, code ownership, and real-time guidance.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid gap-5 sm:grid-cols-3">
                {FEATURES.map((feat, i) => (
                  <div
                    key={i}
                    className={`group rounded-2xl border border-border/60 bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg ${feat.border}`}
                  >
                    <div className={`flex size-12 items-center justify-center rounded-xl ${feat.color}`}>
                      <feat.icon className="size-5" />
                    </div>
                    <h3 className="mt-5 font-heading font-bold text-foreground text-sm leading-snug">{feat.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        )}

        {/* Global World Map pushed by the "Remote, Silicon Valley, Global" text */}
        <div className={showFeatures ? "pt-24" : ""}>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Column: Authentic Dotted World Map with Animated Right-To-Left Push Motion */}
            <div className="relative overflow-visible">
              {/* Soft ambient background glow */}
              <div className="pointer-events-none absolute inset-0 -m-8 rounded-3xl bg-linear-to-tr from-brand-blue/5 via-orange-500/5 to-transparent blur-2xl" />

              {/* Pushable / Draggable World Map Canvas */}
              <motion.div
                initial={{ x: 120, opacity: 0.85 }}
                whileInView={{ x: 0, opacity: 1 }}
                animate={{ x: getMapOffset() }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: -120, right: 60 }}
                dragElastic={0.1}
                className="relative aspect-[16/10] w-full rounded-3xl border border-border/50 bg-white p-4 sm:p-6 shadow-md cursor-grab active:cursor-grabbing select-none"
              >
                {/* Authentic Geographic Dotted World Map */}
                <div className="relative size-full flex items-center justify-center">
                  <img
                    src="/world-map-dots.svg"
                    alt="World Map"
                    className="size-full object-contain pointer-events-none select-none"
                    draggable={false}
                  />
                </div>

                {/* Teardrop Alumni Pins with Orange Radar Flower Target */}
                {ALUMNI_HUBS.map((hub) => {
                  const isFeatured = hub.featured;
                  const isFiltered = activeRegion !== 'all' && hub.region !== activeRegion;

                  return (
                    <div
                      key={hub.id}
                      style={{ top: hub.top, left: hub.left }}
                      className={`absolute -translate-x-1/2 -translate-y-full group cursor-pointer z-20 transition-all duration-300 ${
                        isFiltered ? 'opacity-25 scale-90' : 'opacity-100'
                      }`}
                      onMouseEnter={() => setSelectedHub(hub)}
                      onMouseLeave={() => setSelectedHub(null)}
                    >
                      {/* Teardrop Pin Container */}
                      <div className="relative flex flex-col items-center transition-transform duration-300 group-hover:scale-110">
                        {/* Circular Avatar Pin Head */}
                        <div
                          className={`relative overflow-hidden rounded-full border-[3px] border-white shadow-xl bg-white ${
                            isFeatured
                              ? 'size-16 sm:size-20 ring-4 ring-orange-400/30'
                              : 'size-10 sm:size-11'
                          }`}
                        >
                          <img
                            src={hub.img}
                            alt={hub.name}
                            className="size-full object-cover"
                          />
                        </div>

                        {/* Downward triangle pointer tip */}
                        <div
                          className={`-mt-1 size-0 border-x-transparent border-t-white drop-shadow-sm ${
                            isFeatured
                              ? 'border-x-[7px] border-t-[9px]'
                              : 'border-x-[5px] border-t-[7px]'
                          }`}
                        />

                        {/* Orange Radar Target Flower underneath tip */}
                        <div className="mt-1 relative flex items-center justify-center">
                          {/* Central orange dot */}
                          <span
                            className={`rounded-full bg-orange-500 shadow-xs ${isFeatured ? 'size-2.5' : 'size-1.5'}`}
                          />

                          {/* Radiating 6-dot flower cluster */}
                          <div className="absolute flex items-center justify-center pointer-events-none">
                            {[0, 60, 120, 180, 240, 300].map((deg) => (
                              <span
                                key={deg}
                                className="absolute rounded-full bg-orange-400/90"
                                style={{
                                  width: isFeatured ? '4px' : '3px',
                                  height: isFeatured ? '4px' : '3px',
                                  transform: `rotate(${deg}deg) translate(${isFeatured ? '12px' : '8px'})`,
                                }}
                              />
                            ))}
                          </div>

                          {/* Gentle radar pulse ring */}
                          <span
                            className={`absolute rounded-full bg-orange-400/25 animate-ping pointer-events-none ${
                              isFeatured ? 'size-8' : 'size-5'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Tooltip Popover on Hover */}
                      <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-xl border border-border/70 bg-card px-3.5 py-2 text-center shadow-2xl opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-1 z-40">
                        <p className="text-xs font-bold text-foreground">{hub.name}</p>
                        <p className="text-[10px] text-orange-600 font-semibold">{hub.role}</p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-card" />
                      </div>
                    </div>
                  );
                })}

                {/* Subtle Drag / Pan Hint */}
                <div className="absolute bottom-3 right-3 hidden sm:flex items-center gap-1.5 rounded-full bg-slate-900/55 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                  <span>← Push / Drag Map →</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Headline, Region Push Controls, and Search Pill */}
            <div className="relative lg:pl-8">
              {/* Playful curved hand-drawn doodle arrow pointing to the headline */}
              <div className="absolute -top-10 right-0 hidden sm:block text-slate-300 pointer-events-none select-none">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 50 C 30 40, 50 30, 45 15" strokeLinecap="round" strokeDasharray="3 3" />
                  <path d="M40 10 L 48 14 L 43 22" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <Reveal>
                {/* Primary Headline */}
                <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.12]">
                  Remote, Silicon Valley, Global.<br />
                  <span className="text-brand-blue">Where Will You Build?</span>
                </h2>

                <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Explore over 1,000+ alumni placements across top startups, engineering studios, and remote squads. Select a hub or drag the map to explore where our graduates deploy.
                </p>

                {/* Region Filter Pills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {REGION_FILTERS.map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => setActiveRegion(key)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                        activeRegion === key
                          ? 'bg-slate-900 text-white shadow-md'
                          : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/60'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Floating Quick Search Bar */}
                <div className="mt-6 flex flex-wrap sm:flex-nowrap items-center gap-2 rounded-2xl sm:rounded-full border border-border/70 bg-card p-2 shadow-lg">
                  <div className="flex flex-1 items-center gap-2.5 px-3 py-1 sm:py-0">
                    <MapPin className="size-4 text-brand-blue shrink-0" />
                    <div className="text-left min-w-0">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground leading-none">Choose Track</p>
                      <input
                        type="text"
                        placeholder="Full-Stack, AI, Systems"
                        className="w-full bg-transparent text-xs font-semibold text-foreground placeholder:text-muted-foreground/60 focus:outline-none truncate"
                      />
                    </div>
                  </div>

                  <div className="hidden sm:block h-6 w-px bg-border/60" />

                  <div className="flex flex-1 items-center gap-2.5 px-3 py-1 sm:py-0">
                    <Calendar className="size-4 text-brand-blue shrink-0" />
                    <div className="text-left min-w-0">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground leading-none">Cohort Date</p>
                      <p className="text-xs font-semibold text-foreground truncate">Upcoming Batch</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white shadow-md transition-all hover:scale-105 hover:bg-slate-800 active:scale-95 ml-auto"
                    aria-label="Search"
                  >
                    <Search className="size-4" />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Backward compatibility alias
export const DemoWorldMap = WorldMapSection;
