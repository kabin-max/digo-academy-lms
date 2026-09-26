import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Camera,
  ClipboardList,
  Code2,
  Globe2,
  LineChart,
  Megaphone,
  MonitorPlay,
  Music2,
  PenTool,
  Radio,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  Users,
} from 'lucide-react';
import Link from 'next/link';

import { CourseCard } from '@/features/marketplace/components/CourseCard';
import {
  getBrowseCategories,
  getFeaturedInstructors,
  getPublishedCourses,
} from '@/features/marketplace/server/data';
import type { CourseFilters } from '@/features/marketplace/schemas';
import { HeroHeadline, HeroItem, HeroPreview, HeroStage, Magnetic } from '@/shared/components/public/HeroMotion';
import { Reveal } from '@/shared/components/public/Reveal';
import { StaggerGroup, StaggerItem } from '@/shared/components/public/Stagger';
import { CourseFinder } from '@/shared/components/public/CourseFinder';
import { ComparisonSection } from '@/shared/components/public/ComparisonSection';
import { ReviewsAndFaqSection } from '@/shared/components/public/ReviewsAndFaqSection';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/utils/cn';

const DEFAULT_FILTERS: CourseFilters = {
  q: '',
  categoryId: null,
  difficulty: null,
  language: null,
  price: 'all',
  sort: 'rating',
};

const CATEGORY_STYLES = [
  { icon: Code2, className: 'bg-brand-blue/10 text-brand-blue', glow: 'group-hover:bg-brand-blue' },
  { icon: PenTool, className: 'bg-brand-coral/10 text-brand-coral', glow: 'group-hover:bg-brand-coral' },
  {
    icon: LineChart,
    className: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    glow: 'group-hover:bg-emerald-500',
  },
  {
    icon: Megaphone,
    className: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
    glow: 'group-hover:bg-violet-500',
  },
  {
    icon: Camera,
    className: 'bg-amber-500/10 text-amber-600 dark:text-amber-500',
    glow: 'group-hover:bg-amber-500',
  },
  {
    icon: Globe2,
    className: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
    glow: 'group-hover:bg-sky-500',
  },
  {
    icon: Music2,
    className: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
    glow: 'group-hover:bg-rose-500',
  },
  {
    icon: BookOpen,
    className: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    glow: 'group-hover:bg-indigo-500',
  },
] as const;

const STEPS = [
  {
    icon: Search,
    title: 'Browse courses',
    body: 'Explore live cohorts and self-paced tracks across every category — filter by level, price, and language.',
  },
  {
    icon: ClipboardList,
    title: 'Request enrollment',
    body: 'Found the right fit? Submit an inquiry in seconds. No upfront payment and no commitment required.',
  },
  {
    icon: Rocket,
    title: 'Start learning',
    body: 'Our team confirms your spot and gets you into a live classroom or a self-paced track.',
  },
];

const FEATURES = [
  {
    icon: Briefcase,
    title: 'Real-World Projects',
    body: 'Build cloud environments and applications based on practical scenarios.',
    className: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    icon: Terminal,
    title: 'Hands-On Cloud Labs',
    body: 'Work directly with AWS services instead of learning only through theory.',
    className: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: Users,
    title: 'Industry Mentors',
    body: 'Learn from practitioners working with cloud, DevOps, and modern infrastructure.',
    className: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  },
  {
    icon: Award,
    title: 'Certification + Skills',
    body: 'Prepare for certification while developing skills you can actually use.',
    className: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
];

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');
}

function compactNumber(value: number): string {
  return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(
    value
  );
}

export default async function HomePage() {
  const [courses, categories, instructors] = await Promise.all([
    getPublishedCourses(DEFAULT_FILTERS),
    getBrowseCategories(8),
    getFeaturedInstructors(8),
  ]);
  const featured = courses.slice(0, Math.min(courses.length, 8));

  return (
    <div className="flex flex-col">
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                               */}
      {/* ------------------------------------------------------------------ */}
       <section className="relative overflow-hidden bg-linear-to-b from-brand-blue/5 via-background to-background">
        <div className="animate-blob pointer-events-none absolute -left-32 -top-32 z-0 size-80 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="animate-blob anim-delay-2 pointer-events-none absolute -right-24 top-10 z-0 size-72 rounded-full bg-violet-500/20 blur-3xl" />
        <HeroStage className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-4 pb-6 lg:pt-8 lg:pb-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-10">
          <div className="text-left lg:max-w-lg -translate-y-5">
            <HeroHeadline
className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl text-foreground"              segments={[
                { text: 'Learn' },
                { text: 'Globally' },
                { text: 'Graze' },
                { text: 'Locally' },
              ]}
            />
            <HeroItem>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Success isn&apos;t something that happens by chance. It&apos;s a combination of hard
                effort, perseverance, learning, studying, sacrifice, and, most importantly, a
                passion for what you&apos;re doing or learning.
              </p>
            </HeroItem>
            <HeroItem className="mt-6 flex flex-wrap items-center justify-start gap-3">
              <Magnetic>
                <Button
                  size="default"
                  className="px-7 py-2.5"
                  nativeButton={false}
                  render={
                    <Link href="/courses">
                      Explore Courses
                    </Link>
                  }
                />
              </Magnetic>
            </HeroItem>
          </div>
          <div className="flex-1 w-full max-w-xl lg:max-w-none flex justify-end">
            <img 
              src="/hero-learning.png" 
              alt="Learning Illustration" 
              className="w-full max-w-[480px] h-auto [mask-image:radial-gradient(circle,black_60%,transparent_100%)]"
            />
          </div>
        </HeroStage>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Power of dual-learning                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 size-96 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 size-80 rounded-full bg-violet-500/5 blur-3xl" />
        
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8 lg:py-20">
          {/* Section Title - Centered Container, Left-Aligned Text */}
          <div className="lg:col-span-2 mb-8 flex justify-center">
            <div className="text-left">
              <Reveal>
                <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
                  The power of dual-learning
                </h2>
                <p className="mt-2 text-base text-muted-foreground leading-relaxed max-w-2xl">
                  Digo Academy combines the best of both worlds—structured guidance with the flexibility you need.
                </p>
              </Reveal>
            </div>
          </div>
          {/* Left Column - Features */}
          <div>
          <Reveal>
            <div className="space-y-6">
              <div className="group relative flex gap-6 rounded-3xl bg-gradient-to-br from-brand-blue/8 via-brand-blue/4 to-transparent p-8 ring-1 ring-brand-blue/20 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/10 hover:ring-brand-blue/30 hover:-translate-y-2">
                {/* Background glow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <span className="relative flex size-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 text-brand-blue ring-2 ring-brand-blue/25 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl [&_svg]:size-7">
                  <Radio />
                  {/* Icon glow */}
                  <div className="absolute inset-0 rounded-3xl bg-brand-blue/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" />
                </span>
                
                <div className="relative flex-1">
                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-brand-blue transition-colors duration-300">
                    Live Cohorts
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    Real-time interaction with industry experts, weekly milestones, and peer
                    accountability to keep you on track with personalized mentorship.
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="h-1 w-3 rounded-full bg-brand-blue/20 group-hover:bg-brand-blue transition-all duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      Interactive Learning
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="group relative flex gap-6 rounded-3xl bg-gradient-to-br from-violet-500/8 via-violet-500/4 to-transparent p-8 ring-1 ring-violet-500/20 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 hover:ring-violet-500/30 hover:-translate-y-2">
                {/* Background glow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <span className="relative flex size-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/20 to-violet-500/10 text-violet-600 ring-2 ring-violet-500/25 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-xl [&_svg]:size-7">
                  <MonitorPlay />
                  {/* Icon glow */}
                  <div className="absolute inset-0 rounded-3xl bg-violet-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" />
                </span>
                
                <div className="relative flex-1">
                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-violet-600 transition-colors duration-300">
                    Self-Paced Mastery
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    Binge-worthy video content, interactive labs, and lifetime access to
                    resources so you can learn at your own pace with complete flexibility.
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="h-1 w-3 rounded-full bg-violet-500/20 group-hover:bg-violet-500 transition-all duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      Flexible Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          </div>

          {/* Right Column - World Map */}
          <Reveal delay={150} className="relative">
            <div className="relative">
              <div className="relative">
               
                <div className="relative mt-6 aspect-2/1 w-full">
                  <img
                    src="/world-map-dots.svg"
                    alt="Learners across the globe"
                    className="size-full select-none object-contain opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
                    draggable={false}
                  />
                  {/* Learner location markers — spread across continents to convey a global community. */}
                  {[
                    { top: '29%', left: '16%', city: 'New York' },   // North America
                    { top: '40%', left: '28%', city: 'São Paulo' },   // South America
                    { top: '21%', left: '50%', city: 'London' },   // Europe
                    { top: '51%', left: '60%', city: 'Lagos' },   // Africa
                    { top: '30%', left: '68%', city: 'Dubai' },   // Middle East / South Asia
                    { top: '35%', left: '74%', city: 'Mumbai' },   // South Asia
                    { top: '30%', left: '89%', city: 'Tokyo' },   // East Asia
                    { top: '69%', left: '92%', city: 'Sydney' },   // Australia
                  ].map((pos, i) => (
                    <span
                      key={i}
                      style={{ top: pos.top, left: pos.left, animationDelay: `${(i % 4) * 0.4}s` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 animate-pulse group cursor-pointer"
                      title={`Anywhere. Anytime. - ${pos.city}`}
                    >
                      <span className="relative flex size-2.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-blue/60" />
                        <span className="relative inline-flex size-2.5 rounded-full bg-brand-blue ring-2 ring-background" />
                      </span>
                      
                      {/* Hover Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="relative bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                          <div className="text-center">
                            <div className="font-semibold">Anywhere. Anytime.</div>
                            <div className="text-gray-300">{pos.city}</div>
                          </div>
                          {/* Tooltip Arrow */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { icon: Radio, label: 'Live Sessions' },
                    { icon: MonitorPlay, label: 'On-Demand' },
                    { icon: Users, label: 'Community' },
                    { icon: Award, label: 'Certified' }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 text-sm font-medium text-foreground ring-1 ring-border transition-all hover:ring-brand-blue/30"
                    >
                      <item.icon className="size-5 shrink-0 text-brand-blue" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* How it works                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section id="how-it-works" className="scroll-mt-24 bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-4xl text-foreground">
              How to enroll
            </h2>
            <p className="mt-2 text-muted-foreground">
              From browsing to your first lesson in three easy steps.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg flex items-center justify-center relative aspect-video">
              <iframe 
                src="https://www.youtube.com/embed/KzHkWkmWiXk?si=Eopi8ab0J3mewCZG" 
                title="How students enroll in our platform" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Top courses                                                        */}
      {/* ------------------------------------------------------------------ */}
      {featured.length > 0 && (
        <section id="courses" className="scroll-mt-24 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mb-8 text-center">
            <div>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
                Explore Our Courses
              </h2>
              <p className="mt-2 text-muted-foreground">
                Build practical skills through certification-focused and career-oriented learning paths.
              </p>
            </div>
           
          </Reveal>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.slice(0, 7).map((course) => (
              <StaggerItem key={course.id}>
                <CourseCard course={course} hrefBase="/courses" showWishlist={false} />
              </StaggerItem>
            ))}
            {featured.length > 0 && (
              <StaggerItem>
                <div className="group relative h-full min-h-[280px] flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-brand-blue/30 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-blue/10 p-6 text-center transition-all duration-300 hover:border-brand-blue/50 hover:bg-gradient-to-br hover:from-brand-blue/10 hover:to-brand-blue/20 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex flex-col items-center gap-4">
                    <div className="rounded-full bg-brand-blue/10 p-4 transition-colors duration-300 group-hover:bg-brand-blue/20">
                      <ArrowRight className="size-8 text-brand-blue transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-brand-blue transition-colors duration-300">
                        Explore More
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        Discover all our courses and find the perfect fit for your learning journey
                      </p>
                    </div>
                  </div>
                  <Link href="/courses" className="absolute inset-0 rounded-2xl">
                    <span className="sr-only">View all courses</span>
                  </Link>
                </div>
              </StaggerItem>
            )}
          </StaggerGroup>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Course Finder                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mb-8 text-center">
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
            Not Sure Which AWS Course Is Right for You?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Take our quick assessment to get personalized course recommendations
          </p>
        </Reveal>
        <Reveal delay={150}>
          <CourseFinder />
        </Reveal>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why choose us                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mb-10 max-w-2xl mx-auto text-center">
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
              Learn From People Who Build With Cloud
            </h2>
            <p className="mt-2 text-muted-foreground">
              What makes Digo Academy different: practical real-world scenarios, hands-on AWS labs, direct industry mentorship, and career-ready certification skills.
            </p>
          </Reveal>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group h-full rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span
                    className={cn(
                      'flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 [&_svg]:size-6',
                      feature.className
                    )}
                  >
                    <feature.icon />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Comparison: Us vs Others                                           */}
      {/* ------------------------------------------------------------------ */}
      <ComparisonSection />

      {/* ------------------------------------------------------------------ */}
      {/* Best instructors                                                   */}
      {/* ------------------------------------------------------------------ */}
      {instructors.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mb-8 text-center">
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
              Our Instructors
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {instructors.map((instructor) => (
              <StaggerItem key={instructor.id}>
                <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-card p-6 text-center shadow-sm ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-b from-brand-blue/10 to-transparent" />
                  <span className="relative flex size-16 items-center justify-center rounded-full bg-linear-to-br from-brand-blue to-violet-500 text-lg font-semibold text-white shadow-md ring-4 ring-card">
                    {initials(instructor.name)}
                  </span>
                  <p className="mt-4 font-medium">{instructor.name}</p>
                  <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                    {instructor.instructorProfile?.headline ?? 'Instructor'}
                  </p>
                  {instructor.instructorProfile && instructor.instructorProfile.ratingAvg > 0 ? (
                    <span className="mt-2 flex items-center gap-1 rounded-full bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />
                      {instructor.instructorProfile.ratingAvg.toFixed(1)}
                    </span>
                  ) : null}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Real Stories & Got A Question For Digo Academy?                    */}
      {/* ------------------------------------------------------------------ */}
      <ReviewsAndFaqSection />

    </div>
  );
}
