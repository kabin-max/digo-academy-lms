import { Star } from 'lucide-react';

import { getFeaturedInstructors } from '@/features/marketplace/server/data';
import { HeroHeadline, HeroStage } from '@/shared/components/public/HeroMotion';
import { Reveal } from '@/shared/components/public/Reveal';
import { StaggerGroup, StaggerItem } from '@/shared/components/public/Stagger';

export const metadata = {
  title: 'Instructors | Digo Academy',
  description: 'Meet our certified cloud experts and mentors.',
};

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');
}

export default async function InstructorsPage() {
  const instructors = await getFeaturedInstructors(20);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden bg-linear-to-b from-brand-blue/5 via-background to-background pt-12 pb-16">
        <div className="animate-blob pointer-events-none absolute -left-32 -top-32 z-0 size-80 rounded-full bg-brand-blue/20 blur-3xl" />
        <HeroStage className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Instructors
            </span>
          </Reveal>
          <HeroHeadline
            className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
            segments={[
              { text: 'Meet' },
              { text: 'our', accent: true },
              { text: 'experts' },
            ]}
          />
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Learn from experienced practitioners and certified cloud professionals.
            </p>
          </Reveal>
        </HeroStage>
      </section>

      {instructors.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
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
