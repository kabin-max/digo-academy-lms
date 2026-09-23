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
import { ComparisonSection } from '@/shared/components/public/ComparisonSection';
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
      <section className="relative overflow-hidden bg-linear-to-b from-brand-blue/5 via-background to-background pt-12 pb-16">
        <div className="animate-blob pointer-events-none absolute -left-32 -top-32 z-0 size-80 rounded-full bg-brand-blue/20 blur-3xl" />
        <HeroStage className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Our Courses
            </span>
          </Reveal>
          <HeroHeadline
            className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
            segments={[
              { text: 'Discover' },
              { text: 'your', accent: true },
              { text: 'next' },
              { text: 'skill' },
            ]}
          />
        </HeroStage>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Top courses                                                        */}
      {/* ------------------------------------------------------------------ */}
      {featured.length > 0 && (
        <section id="courses" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
                Popular
              </span>
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
                <CourseCard course={course} hrefBase="/student/courses" showWishlist={false} />
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
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Mentors
            </span>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Best instructors
            </h2>
            <p className="mt-2 text-muted-foreground">Learn from experienced practitioners.</p>
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
    </div>
  );
}
