import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { HeroHeadline, HeroItem, HeroPreview, HeroStage, Magnetic } from '@/shared/components/public/HeroMotion';
import { Reveal } from '@/shared/components/public/Reveal';
import { Button } from '@/shared/components/ui/button';

export const metadata = {
  title: 'About Us | Digo Academy',
  description: 'Transforming Nepal through Technology',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-linear-to-b from-brand-blue/5 via-background to-background">

        <div className="animate-blob pointer-events-none absolute -left-32 -top-32 z-0 size-80 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="animate-blob anim-delay-2 pointer-events-none absolute -right-24 top-10 z-0 size-72 rounded-full bg-violet-500/20 blur-3xl" />
        
        <HeroStage className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-16 text-center sm:px-6 lg:pt-24 pb-16">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              About Us
            </span>
          </Reveal>
          
          <HeroHeadline
            className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            segments={[
              { text: 'Transforming' },
              { text: 'Nepal', accent: true },
              { text: 'through' },
              { text: 'Technology' },
            ]}
          />
          
          <HeroItem>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              We are on a mission to bring world-class technology education to Nepal, bridging the gap between talent and global opportunities.
            </p>
          </HeroItem>
          
          <HeroItem className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <Button
                size="lg"
                className="rounded-full px-7 shadow-sm bg-linear-to-r from-brand-blue to-violet-600 text-white hover:opacity-95"
                nativeButton={false}
                render={
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="size-4" />
                  </Link>
                }
              />
            </Magnetic>
          </HeroItem>


        </HeroStage>
      </section>

      {/* Content Section */}
      <section className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-16">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Digo Solution is here providing training in the technical sectors including cloud computing, programming, database, and so on. Not only that, we help students go through the global certifications after the training. The courses are designed for all the knowledge levels of the students from beginner to advanced. Enabling students to learn and grow their projects in real-life scenarios is our motive which would help them to get jobs at both national and international companies. Furthermore, we mostly welcome the people needing technical and career support as education without application is just entertainment. Our top priority is to give the best to all of our students.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-3">
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">Our Mission</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Our team believes in “The expert in anything was once a beginner”. We aim to provide an access to the international level study approach to Nepali students and walk along the way from beginner to expert. Moreover, exposing them to the certification exams of big companies like Google, Microsoft, and Oracle.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">Our Vision</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                As per the strategies developed, we aim to provide education to more than 1000 students by this year and introduce more globally recognized courses with higher career scope. Not only that, we aim to provide 90% placement to our students.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">Our Values</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                As per the strategies developed, we aim to provide education to more than 1000 students by this year and introduce more globally recognized courses with higher career scope. Not only that, we aim to provide 90% placement to our students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
