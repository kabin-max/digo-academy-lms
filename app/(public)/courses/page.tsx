import {
  Award,
  BadgeCheck,
  MonitorPlay,
  Radio,
  ShieldCheck,
  Star,
} from 'lucide-react';

import { CourseCard } from '@/features/marketplace/components/CourseCard';
import {
  getFeaturedInstructors,
  getPublishedCourses,
} from '@/features/marketplace/server/data';
import type { CourseFilters } from '@/features/marketplace/schemas';
import { HeroHeadline, HeroStage } from '@/shared/components/public/HeroMotion';
import { Reveal } from '@/shared/components/public/Reveal';
import { StaggerGroup, StaggerItem } from '@/shared/components/public/Stagger';
import { CourseFinder } from '@/shared/components/public/CourseFinder';
import { cn } from '@/shared/utils/cn';

const DEFAULT_FILTERS: CourseFilters = {
  q: '',
  categoryId: null,
  difficulty: null,
  language: null,
  price: 'all',
  sort: 'rating',
};

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

export const metadata = {
  title: 'Courses | Digo Academy',
  description: 'Explore our top courses, live cohorts, and self-paced tracks.',
};

export default async function CoursesPage() {
  const [courses, instructors] = await Promise.all([
    getPublishedCourses(DEFAULT_FILTERS),
    getFeaturedInstructors(8),
  ]);
  const featured = courses.slice(0, 8);

  return (
    <div className="flex flex-col">
      {/* ------------------------------------------------------------------ */}
      {/* Header                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-linear-to-b from-brand-blue/5 via-background to-background pt-12 pb-12">
        <div className="animate-blob pointer-events-none absolute -left-32 -top-32 z-0 size-80 rounded-full bg-brand-blue/20 blur-3xl" />
        <HeroStage className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Build Your AWS Career
            </span>
          </Reveal>
          <HeroHeadline
            className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
            segments={[
              { text: 'Learn' },
              { text: 'AWS', accent: true },
              { text: 'through' },
              { text: 'structured,' },
              { text: 'hands-on' },
              { text: 'courses' },
            ]}
          />
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Designed around certification goals and real-world cloud skills.
            </p>
          </Reveal>
        </HeroStage>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Top courses                                                        */}
      {/* ------------------------------------------------------------------ */}
      {featured.length > 0 && (
        <section id="courses" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
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
      {/* AWS Learning Journey                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Your AWS Learning Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with the fundamentals, explore AI, specialize in development or architecture, and progress toward advanced DevOps skills.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative mt-12 flex flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-center">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border/50 -translate-y-1/2 z-0" />
              
              <div className="relative z-10 flex-1 flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/60 shadow-sm transition-transform hover:-translate-y-2">
                <div className="flex size-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue mb-4 ring-8 ring-background">
                  <BadgeCheck className="size-6" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Fundamentals</h3>
                <p className="text-sm text-muted-foreground mt-2">Cloud Practitioner & AI Practitioner</p>
              </div>

              <div className="relative z-10 flex-1 flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/60 shadow-sm transition-transform hover:-translate-y-2">
                <div className="flex size-14 items-center justify-center rounded-full bg-violet-500/10 text-violet-600 mb-4 ring-8 ring-background">
                  <MonitorPlay className="size-6" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Specialization</h3>
                <p className="text-sm text-muted-foreground mt-2">Developer or Solutions Architect</p>
              </div>

              <div className="relative z-10 flex-1 flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/60 shadow-sm transition-transform hover:-translate-y-2">
                <div className="flex size-14 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 mb-4 ring-8 ring-background">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Advanced Mastery</h3>
                <p className="text-sm text-muted-foreground mt-2">DevOps Engineer Professional</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
