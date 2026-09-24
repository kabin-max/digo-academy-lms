'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, RotateCcw, Sparkles, Target, Clock, GraduationCap } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';

interface Question {
  id: string;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    value: string;
    icon?: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'goal',
    title: 'What best describes your goal?',
    subtitle: 'Select your primary objective to find the right AWS course.',
    options: [
      {
        label: "I'm completely new to AWS",
        description: 'Start with AWS Cloud Practitioner and build your cloud foundation.',
        value: 'beginner',
      },
      {
        label: 'I want to understand AI on AWS',
        description: 'Explore AWS AI and generative AI concepts with AI Practitioner.',
        value: 'ai',
      },
      {
        label: 'I want to build applications on AWS',
        description: 'Develop cloud applications and prepare for Developer – Associate.',
        value: 'developer',
      },
      {
        label: 'I want to design AWS infrastructure',
        description: 'Learn architecture and prepare for Solutions Architect – Associate.',
        value: 'architect',
      },
      { 
        label: 'I want to become a DevOps professional',
        description: 'Build advanced AWS automation, CI/CD, and deployment skills.',
        value: 'devops',
      },
    ],
  },
];

const RECOMMENDATIONS: Record<string, {
  title: string;
  category: string;
  duration: string;
  mode: string;
  href: string;
  reason: string;
}> = {
  beginner: {
    title: 'AWS Cloud Practitioner',
    category: 'AWS',
    duration: 'Self-Paced or Live',
    mode: 'Foundational',
    href: '/courses/seed-course-aws-cp',
    reason: 'Matches your goal of building a cloud foundation from scratch.',
  },
  ai: {
    title: 'AWS AI Practitioner',
    category: 'AWS',
    duration: 'Self-Paced or Live',
    mode: 'Foundational',
    href: '/courses/seed-course-aws-ai',
    reason: 'Perfect for learning AI and Generative AI concepts on AWS.',
  },
  developer: {
    title: 'AWS Developer – Associate',
    category: 'AWS',
    duration: 'Self-Paced or Live',
    mode: 'Associate',
    href: '/courses/seed-course-aws-dev',
    reason: 'Aligned with your goal of developing cloud applications.',
  },
  architect: {
    title: 'AWS Solutions Architect – Associate',
    category: 'AWS',
    duration: 'Self-Paced or Live',
    mode: 'Associate',
    href: '/courses/seed-course-aws-saa',
    reason: 'Designed to teach you how to architect robust AWS infrastructure.',
  },
  devops: {
    title: 'AWS DevOps Engineer – Professional',
    category: 'AWS',
    duration: 'Self-Paced or Live',
    mode: 'Professional',
    href: '/courses/seed-course-aws-devops',
    reason: 'Advanced curriculum to master CI/CD and DevOps automation.',
  },
};

export function CourseFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQ = QUESTIONS[step];
  const isComplete = step >= QUESTIONS.length;

  const handleSelect = (val: string) => {
    const updated = { ...answers, [currentQ.id]: val };
    setAnswers(updated);
    setStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
  };

  const recommendation = RECOMMENDATIONS[answers.goal] ?? RECOMMENDATIONS.beginner;

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-b from-primary/5 via-surface to-background p-6 shadow-xl sm:p-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
        <div>
          <h2 className="mt-2 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Not Sure Which AWS Course Is Right for You?
          </h2>
        </div>

        {!isComplete ? (
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <span>Step {step + 1} of {QUESTIONS.length}</span>
            <div className="flex gap-1">
              {QUESTIONS.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 w-6 rounded-full transition-colors ${
                    idx <= step ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <Button variant="ghost" size="sm" onClick={handleReset} className="gap-1.5 text-xs text-muted-foreground">
            <RotateCcw className="size-3.5" />
            Start over
          </Button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isComplete ? (
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">{currentQ.title}</h3>
              <p className="text-sm text-muted-foreground">{currentQ.subtitle}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {currentQ.options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className="group flex flex-col items-start rounded-2xl border border-border/80 bg-background/80 p-4 text-left transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {opt.label}
                  </span>
                  <span className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {opt.description}
                  </span>
                </button>
              ))}
            </div>

            {step > 0 && (
              <div className="pt-2">
                <Button variant="ghost" size="sm" onClick={() => setStep((s) => s - 1)} className="text-xs">
                  ← Back to previous question
                </Button>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-primary/20 bg-background p-6 shadow-sm sm:p-8">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="size-3.5" />
                Recommended for you
              </div>

              <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {recommendation.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {recommendation.reason}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <GraduationCap className="size-4 text-primary" />
                  {recommendation.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-4 text-primary" />
                  {recommendation.duration}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Target className="size-4 text-primary" />
                  {recommendation.mode}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  className="rounded-full bg-linear-to-r from-brand-blue to-violet-600 text-white shadow-sm transition-transform hover:scale-105"
                  nativeButton={false}
                  render={<Link href={recommendation.href}>Explore This Course <ArrowRight className="ml-1.5 size-4" /></Link>}
                />
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  nativeButton={false}
                  render={<Link href="/contact">Talk to a Counsellor</Link>}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
