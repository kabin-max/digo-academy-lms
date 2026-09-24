import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Camera,
  ClipboardList,
  Code2,
  Globe2,
  GraduationCap,
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
  Users,
} from 'lucide-react';
import Link from 'next/link';

import { CourseCard } from '@/features/marketplace/components/CourseCard';
import {
  getBrowseCategories,
  getFeaturedInstructors,
  getPlatformStats,
  getPublishedCourses,
} from '@/features/marketplace/server/data';
import type { CourseFilters } from '@/features/marketplace/schemas';
import { CountUp } from '@/shared/components/public/CountUp';
import { HeroHeadline, HeroItem, HeroPreview, HeroStage, Magnetic } from '@/shared/components/public/HeroMotion';
import { Reveal } from '@/shared/components/public/Reveal';
import { StaggerGroup, StaggerItem } from '@/shared/components/public/Stagger';
import { CourseFinder } from '@/shared/components/public/CourseFinder';
import { ComparisonSection } from '@/shared/components/public/ComparisonSection';
import { WorldMapSection } from '@/shared/components/public/WorldMapSection';
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
    icon: Radio,
    title: 'Live cohorts',
    body: 'Real-time classes over Google Meet — learn alongside a group with a mentor guiding every session.',
    className: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    icon: MonitorPlay,
    title: 'Self-paced tracks',
    body: 'Recorded lessons, notes, and resources you can revisit anytime, on any device.',
    className: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  },
  {
    icon: BadgeCheck,
    title: 'Expert instructors',
    body: 'Learn from vetted practitioners who apply these skills in the field every day.',
    className: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: ShieldCheck,
    title: 'Certificates',
    body: 'Earn a shareable certificate of completion to showcase your new skills.',
    className: 'bg-amber-500/10 text-amber-600 dark:text-amber-500',
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
  const [courses, categories, instructors, stats] = await Promise.all([
    getPublishedCourses(DEFAULT_FILTERS),
    getBrowseCategories(8),
    getFeaturedInstructors(8),
    getPlatformStats(),
  ]);
  const featured = courses.slice(0, 8);

  const statBand = [
    { label: 'Courses', raw: stats.courses, icon: BookOpen },
    { label: 'Students', raw: stats.students, icon: Users },
    { label: 'Instructors', raw: stats.instructors, icon: GraduationCap },
    { label: 'Categories', raw: stats.categories, icon: BarChart3 },
  ];

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
              className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl text-brand-blue"
              segments={[
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
      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Dual-learning
            </span>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
              The power of dual-learning
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Why choose between a rigid schedule and learning alone? Digo Academy combines the best
              of both worlds.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-4 rounded-2xl bg-card p-5 ring-1 ring-border/60 shadow-sm">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue [&_svg]:size-5">
                  <Radio />
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Live cohorts</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Real-time interaction with industry experts, weekly milestones, and peer
                    accountability.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-card p-5 ring-1 ring-border/60 shadow-sm">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 [&_svg]:size-5">
                  <MonitorPlay />
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Self-paced mastery</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Binge-worthy video content, interactive labs, and lifetime access to
                    on-demand notifications.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-blue via-indigo-600 to-violet-600 p-8 shadow-2xl text-white">
              <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-3xl" />
              <p className="font-heading text-3xl font-semibold tracking-tight">
                Anywhere. Anytime.
              </p>
              <p className="mt-2 text-white/80">Live classes &amp; self-paced learning</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[Radio, MonitorPlay, Users, Award].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-sm ring-1 ring-white/15 backdrop-blur"
                  >
                    <Icon className="size-4" />
                    <span className="h-2 w-full rounded-full bg-white/25" />
                  </div>
                ))}
              </div>
            </div>
            {/* floating chip */}
            <div className="animate-floaty absolute -bottom-5 left-6 flex items-center gap-2.5 rounded-2xl bg-card p-3 pr-4 text-foreground shadow-xl ring-1 ring-border/60">
              <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
                <Radio className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-none">Next cohort starting</p>
                <p className="mt-1 text-xs text-muted-foreground">Enrolling now</p>
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
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
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
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Trending courses
              </h2>
              <p className="mt-2 text-muted-foreground">
                Industry-relevant skills taught by mentors from top companies.
              </p>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-border/70 bg-card p-1 shadow-sm">
              <span className="rounded-full bg-brand-blue px-3.5 py-1.5 text-sm font-medium text-white">
                Featured
              </span>
              <span className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground">
                Live cohort
              </span>
              <span className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground">
                Self-paced
              </span>
            </div>
          </Reveal>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((course) => (
              <StaggerItem key={course.id}>
                <CourseCard course={course} hrefBase="/courses" showWishlist={false} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Course Finder                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <CourseFinder />
        </Reveal>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why choose us                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Why Digo
            </span>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to learn with confidence
            </h2>
            <p className="mt-2 text-muted-foreground">
              A learning experience built for outcomes — flexible formats, real mentorship, and
              recognized results.
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
                  <h3 className="mt-4 font-heading text-base font-semibold">{feature.title}</h3>
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
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Best instructors
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
      {/* World Map: Remote, Silicon Valley, Global. Where Will You Build?   */}
      {/* ------------------------------------------------------------------ */}
      <WorldMapSection />

      {/* ------------------------------------------------------------------ */}
      {/* Stats band                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-brand-blue/5">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {statBand.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-brand-blue to-violet-500 text-white shadow-md [&_svg]:size-6">
                  <stat.icon />
                </span>
                <CountUp
                  value={stat.raw}
                  suffix="+"
                  compact
                  className="mt-3 block font-heading text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl"
                />
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Real Stories & Got A Question For Digo Academy?                    */}
      {/* ------------------------------------------------------------------ */}
      <ReviewsAndFaqSection />

    </div>
  );
}
