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
    title: 'What is your primary learning goal?',
    subtitle: 'Choose what you want to achieve in the next 3-6 months.',
    options: [
      {
        label: 'Become a Full-Stack Developer',
        description: 'Master React, Next.js, Node.js, and build production SaaS apps.',
        value: 'fullstack',
      },
      {
        label: 'Master AI & Modern Generative Apps',
        description: 'Learn LLMs, LangChain, vector databases, and AI agent architectures.',
        value: 'ai',
      },
      {
        label: 'Crack Tech Interviews & DSA',
        description: 'Solve algorithms, data structures, and systemic problem solving.',
        value: 'dsa',
      },
      {
        label: 'Design Modern UI/UX Products',
        description: 'Figma to code, design systems, micro-interactions, and spatial layouts.',
        value: 'design',
      },
    ],
  },
  {
    id: 'experience',
    title: 'What is your current coding background?',
    subtitle: 'We personalize paths for beginners as well as seasoned developers.',
    options: [
      {
        label: 'Absolute Beginner',
        description: 'No prior programming experience, ready to learn from scratch.',
        value: 'beginner',
      },
      {
        label: 'Know the Basics',
        description: 'Familiar with HTML/CSS or basic JavaScript/Python syntax.',
        value: 'intermediate',
      },
      {
        label: 'Experienced Developer',
        description: 'Already working in tech and wanting to upskill in AI or architecture.',
        value: 'advanced',
      },
    ],
  },
  {
    id: 'time',
    title: 'How much time can you commit weekly?',
    subtitle: 'Select your realistic learning pace.',
    options: [
      {
        label: '5–10 hours / week',
        description: 'Flexible self-paced schedule with weekend office hours.',
        value: 'part-time',
      },
      {
        label: '15–25 hours / week',
        description: 'Intensive hybrid pace with live code reviews and sprints.',
        value: 'full-time',
      },
      {
        label: '30+ hours / week',
        description: 'Full immersive bootcamp mode with daily mentorship.',
        value: 'bootcamp',
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
  fullstack: {
    title: 'Full Stack Web & Next.js Pro Bootcamp',
    category: 'Web Development',
    duration: '16 Weeks',
    mode: 'Live Mentorship + Projects',
    href: '/register',
    reason: 'Matches your goal of mastering real-world full-stack development with hands-on capstones.',
  },
  ai: {
    title: 'Generative AI & Agent Architecture Masterclass',
    category: 'Artificial Intelligence',
    duration: '12 Weeks',
    mode: 'Live Sessions + Labs',
    href: '/register',
    reason: 'Perfect for learning cutting-edge AI orchestration, MCP servers, and LLM application design.',
  },
  dsa: {
    title: 'Data Structures, Algorithms & Competitive Coding',
    category: 'Computer Science',
    duration: '10 Weeks',
    mode: 'Problem Solving + Mocks',
    href: '/register',
    reason: 'Designed to build intuitive algorithmic thinking and ace top-tier technical interviews.',
  },
  design: {
    title: 'Product Design, UI Engineering & Design Systems',
    category: 'Design & Frontend',
    duration: '8 Weeks',
    mode: 'Portfolio Driven',
    href: '/register',
    reason: 'Focused on high-converting product interfaces, design systems, and frontend craftsmanship.',
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

  const recommendation = RECOMMENDATIONS[answers.goal] ?? RECOMMENDATIONS.fullstack;

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-b from-primary/5 via-surface to-background p-6 shadow-xl sm:p-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
            <Sparkles className="size-3.5" />
            30-Second Course Finder
          </div>
          <h2 className="mt-2 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Not sure which path to take?
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
