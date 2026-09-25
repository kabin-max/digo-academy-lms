'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cloud,
  Code2,
  Network,
  Rocket,
  ArrowRight,
  Sparkles,
  Bot,
  Layers,
  Activity,
  Terminal,
  Server,
  Zap,
  CheckCircle2,
  GitBranch,
} from 'lucide-react';

import certAI from '@/shared/components/public/Cert/AI_practitioner.png';
import certCloudPractitioner from '@/shared/components/public/Cert/cloudPractitioner.png';
import certDeveloper from '@/shared/components/public/Cert/developerAssociate.png';
import certDevOps from '@/shared/components/public/Cert/devopsEngineerProfessional.png';
import certSAA from '@/shared/components/public/Cert/solutionArchitectAssociate.png';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/utils/cn';

type SpecializationTrack = 'developer' | 'architect';

export function AwsLearningJourney() {
  const [activeBranch, setActiveBranch] = useState<SpecializationTrack>('architect');
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-muted/20 py-20 lg:py-28">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 size-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-2/3 size-96 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue"
          >
            <Sparkles className="size-3.5" />
            Your AWS Learning Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            From your first cloud concept <br className="hidden sm:inline" />
            to <span className="bg-gradient-to-r from-brand-blue via-cyan-600 to-violet-600 bg-clip-text text-transparent">advanced DevOps</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-muted-foreground sm:text-lg"
          >
            Follow a structured path from AWS fundamentals to specialization and advanced cloud expertise.
          </motion.p>

          {/* Interactive Flow Indicator Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border/70 bg-card/80 p-2 shadow-xs backdrop-blur-xs text-xs font-medium text-muted-foreground"
          >
            <span
              className={cn(
                'flex items-center gap-1.5 rounded-xl px-3 py-1.5 transition-colors',
                hoveredStep === 1 ? 'bg-brand-blue text-white shadow-xs' : 'hover:bg-muted'
              )}
            >
              <span className="font-bold">01</span> FUNDAMENTALS
            </span>
            <span className="text-border">→</span>
            <span
              className={cn(
                'flex items-center gap-1.5 rounded-xl px-3 py-1.5 transition-colors',
                hoveredStep === 2 ? 'bg-cyan-600 text-white shadow-xs' : 'hover:bg-muted'
              )}
            >
              <span className="font-bold">02</span> SPECIALIZE
            </span>
            <span className="text-border">→</span>
            <span
              className={cn(
                'flex items-center gap-1.5 rounded-xl px-3 py-1.5 transition-colors',
                hoveredStep === 3 ? 'bg-violet-600 text-white shadow-xs' : 'hover:bg-muted'
              )}
            >
              <span className="font-bold">03</span> ADVANCE
            </span>
            <span className="text-border">→</span>
            <span
              className={cn(
                'flex items-center gap-1.5 rounded-xl px-3 py-1.5 transition-colors',
                hoveredStep === 4 ? 'bg-emerald-600 text-white shadow-xs' : 'hover:bg-muted'
              )}
            >
              <Rocket className="size-3.5" /> BUILD & DEPLOY
            </span>
          </motion.div>
        </div>

        {/* Roadmap Roadmap Timeline Container */}
        <div className="relative mt-16 lg:mt-24">
          {/* Animated Connecting SVG Spine for Desktop */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
            <svg className="h-full w-full" viewBox="0 0 1000 1200" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                  <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="65%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Guide Path */}
              <path
                d="M 500,40 L 500,180 C 500,240 500,280 500,320 M 500,420 C 500,470 300,500 300,560 L 300,640 C 300,700 500,730 500,790 M 500,420 C 500,470 700,500 700,560 L 700,640 C 700,700 500,730 500,790 L 500,940 L 500,1050"
                stroke="currentColor"
                className="text-border/60"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              {/* Glowing Animated Active Path */}
              <path
                d="M 500,40 L 500,180 C 500,240 500,280 500,320 M 500,420 C 500,470 300,500 300,560 L 300,640 C 300,700 500,730 500,790 M 500,420 C 500,470 700,500 700,560 L 700,640 C 700,700 500,730 500,790 L 500,940 L 500,1050"
                stroke="url(#roadmapGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#glow)"
                className="opacity-75"
              />
            </svg>
          </div>

          {/* ============================================================= */}
          {/* STEP 0: STARTING CLOUD NODE                                  */}
          {/* ============================================================= */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5 }}
              className="group relative flex flex-col items-center"
            >
              <div className="absolute -inset-3 rounded-full bg-brand-blue/20 blur-md transition-all group-hover:bg-brand-blue/40 animate-pulse" />
              <div className="relative flex size-14 items-center justify-center rounded-full bg-linear-to-br from-brand-blue to-cyan-500 text-white shadow-lg ring-4 ring-background">
                <Cloud className="size-7" />
              </div>
              <span className="mt-3 text-xs font-bold tracking-widest text-brand-blue uppercase">
                Start: AWS Cloud Platform
              </span>
            </motion.div>
          </div>

          {/* ============================================================= */}
          {/* STEP 01: FUNDAMENTALS                                         */}
          {/* ============================================================= */}
          <div
            className="relative mt-16 sm:mt-20"
            onMouseEnter={() => setHoveredStep(1)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-8"
              >
                {/* Header ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue font-mono font-bold text-sm">
                      01
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                        Fundamentals
                      </h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        Build rock-solid core knowledge of AWS cloud infrastructure & modern AI
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                    Foundational Milestone
                  </span>
                </div>

                {/* 2 Core Foundation Badges */}
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {/* Cloud Practitioner */}
                  <div className="group relative flex flex-col rounded-2xl border border-border/60 bg-muted/20 p-5 transition-all duration-300 hover:border-brand-blue/40 hover:bg-card hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={certCloudPractitioner}
                          alt="AWS Certified Cloud Practitioner"
                          width={72}
                          height={72}
                          className="size-16 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
                          <Cloud className="size-3.5" />
                          <span>Core Infrastructure</span>
                        </div>
                        <h4 className="mt-1 font-heading text-base font-bold text-foreground">
                          Cloud Practitioner (CLF-C02)
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          Core cloud concepts, security, IAM, compute (EC2), storage (S3), pricing models & global infrastructure.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="size-3.5 text-emerald-500" /> Exam preparation included
                      </span>
                      <Link
                        href="/courses?q=Cloud+Practitioner"
                        className="font-medium text-brand-blue hover:underline inline-flex items-center gap-1"
                      >
                        Explore <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>

                  {/* AI Practitioner */}
                  <div className="group relative flex flex-col rounded-2xl border border-border/60 bg-muted/20 p-5 transition-all duration-300 hover:border-brand-blue/40 hover:bg-card hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={certAI}
                          alt="AWS Certified AI Practitioner"
                          width={72}
                          height={72}
                          className="size-16 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                          <Bot className="size-3.5" />
                          <span>Generative AI Track</span>
                        </div>
                        <h4 className="mt-1 font-heading text-base font-bold text-foreground">
                          AI Practitioner (AIF-C01)
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          Foundational machine learning, AWS Bedrock, prompt engineering, generative AI security & ethical governance.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="size-3.5 text-emerald-500" /> Live AI lab workshops
                      </span>
                      <Link
                        href="/courses?q=AI+Practitioner"
                        className="font-medium text-brand-blue hover:underline inline-flex items-center gap-1"
                      >
                        Explore <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ============================================================= */}
          {/* STEP 02: SPECIALIZE (BRANCHING INTERACTION)                   */}
          {/* ============================================================= */}
          <div
            className="relative mt-20 sm:mt-28"
            onMouseEnter={() => setHoveredStep(2)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Milestone Label */}
            <div className="mb-6 flex flex-col items-center text-center">
              <span className="flex size-10 items-center justify-center rounded-xl bg-cyan-600/10 text-cyan-600 font-mono font-bold text-sm">
                02
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Specialize Your Path
              </h3>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                Specialization branches into your career goal: write cloud-native code or design enterprise architecture.
              </p>

              {/* Branch Selector Tabs */}
              <div className="mt-6 flex items-center gap-2 rounded-full border border-border/80 bg-card p-1.5 shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveBranch('developer')}
                  className={cn(
                    'flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer',
                    activeBranch === 'developer'
                      ? 'bg-cyan-600 text-white shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <Code2 className="size-4" />
                  Developer Track
                </button>
                <button
                  type="button"
                  onClick={() => setActiveBranch('architect')}
                  className={cn(
                    'flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer',
                    activeBranch === 'architect'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <Network className="size-4" />
                  Solutions Architect Track
                </button>
              </div>
            </div>

            {/* Interactive Dual-Branch Cards */}
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              {/* Branch A: Developer Associate */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setActiveBranch('developer')}
                className={cn(
                  'group relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 transition-all duration-300',
                  activeBranch === 'developer'
                    ? 'border-cyan-500 bg-card shadow-xl ring-2 ring-cyan-500/20'
                    : 'border-border/70 bg-card/60 hover:border-cyan-500/50 hover:bg-card shadow-xs'
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      <Code2 className="size-3.5" /> Branch A · Developer
                    </span>
                    {activeBranch === 'developer' && (
                      <span className="flex size-2.5 rounded-full bg-cyan-500 animate-ping" />
                    )}
                  </div>

                  <div className="mt-6 flex items-start gap-4">
                    <div className="relative shrink-0">
                      <Image
                        src={certDeveloper}
                        alt="AWS Certified Developer Associate"
                        width={84}
                        height={84}
                        className="size-20 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                        AWS Developer – Associate
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Code, deploy & debug cloud-native serverless applications.
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-cyan-600 shrink-0" />
                      <span>AWS Lambda, API Gateway, DynamoDB & SQS/SNS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-cyan-600 shrink-0" />
                      <span>CI/CD pipelines with CodePipeline & GitHub Actions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-cyan-600 shrink-0" />
                      <span>Containerization with Docker, Amazon ECS & Fargate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-cyan-600 shrink-0" />
                      <span>Authentication & security with Amazon Cognito</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-border/50">
                  <Button
                    className={cn(
                      'w-full justify-between transition-all',
                      activeBranch === 'developer'
                        ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    )}
                    nativeButton={false}
                    render={
                      <Link href="/courses?q=Developer">
                        <span>Explore Developer Course</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    }
                  />
                </div>
              </motion.div>

              {/* Branch B: Solutions Architect Associate */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setActiveBranch('architect')}
                className={cn(
                  'group relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 transition-all duration-300',
                  activeBranch === 'architect'
                    ? 'border-blue-500 bg-card shadow-xl ring-2 ring-blue-500/20'
                    : 'border-border/70 bg-card/60 hover:border-blue-500/50 hover:bg-card shadow-xs'
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      <Network className="size-3.5" /> Branch B · Architecture
                    </span>
                    {activeBranch === 'architect' && (
                      <span className="flex size-2.5 rounded-full bg-blue-500 animate-ping" />
                    )}
                  </div>

                  <div className="mt-6 flex items-start gap-4">
                    <div className="relative shrink-0">
                      <Image
                        src={certSAA}
                        alt="AWS Certified Solutions Architect Associate"
                        width={84}
                        height={84}
                        className="size-20 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                        AWS Solutions Architect – Associate
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Design resilient, highly available & cost-optimized systems.
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                      <span>Multi-tier VPC networking, subnets, NAT & Route 53</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                      <span>High availability with Auto Scaling & Elastic Load Balancing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                      <span>Enterprise storage & relational databases (RDS, Aurora)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                      <span>Disaster recovery, backup architectures & cost optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-border/50">
                  <Button
                    className={cn(
                      'w-full justify-between transition-all',
                      activeBranch === 'architect'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    )}
                    nativeButton={false}
                    render={
                      <Link href="/courses?q=Solutions+Architect">
                        <span>Explore Architect Course</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    }
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* ============================================================= */}
          {/* STEP 03: ADVANCED MASTERY (BRANCHES CONVERGE)                */}
          {/* ============================================================= */}
          <div
            className="relative mt-20 sm:mt-28"
            onMouseEnter={() => setHoveredStep(3)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-8"
              >
                {/* Visual convergence pill */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-600 dark:text-violet-400">
                  <GitBranch className="size-3.5 rotate-180" />
                  <span>Branches Converge · Professional Level</span>
                </div>

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-5">
                    <div className="relative shrink-0">
                      <Image
                        src={certDevOps}
                        alt="AWS Certified DevOps Engineer Professional"
                        width={96}
                        height={96}
                        className="size-20 sm:size-24 object-contain drop-shadow-md"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="flex size-7 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 font-mono font-bold text-xs">
                          03
                        </span>
                        <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                          Advanced DevOps Mastery
                        </h3>
                      </div>
                      <p className="mt-1 font-semibold text-sm text-violet-600 dark:text-violet-400">
                        AWS Certified DevOps Engineer – Professional (DOP-C02)
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl">
                        Unite developer agility and architectural robustness. Master Infrastructure as Code, continuous delivery, automated guardrails, and enterprise multi-account governance.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex md:flex-col items-center gap-3">
                    <Button
                      className="bg-violet-600 hover:bg-violet-700 text-white w-full sm:w-auto shadow-md"
                      nativeButton={false}
                      render={
                        <Link href="/courses?q=DevOps">
                          <span>Explore DevOps Pro</span>
                          <ArrowRight className="size-4 ml-1.5" />
                        </Link>
                      }
                    />
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/50 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="rounded-xl bg-muted/30 p-2.5">
                    <span className="text-[11px] font-bold text-foreground block">Terraform & CDK</span>
                    <span className="text-[10px] text-muted-foreground">Infrastructure as Code</span>
                  </div>
                  <div className="rounded-xl bg-muted/30 p-2.5">
                    <span className="text-[11px] font-bold text-foreground block">CI/CD Automation</span>
                    <span className="text-[10px] text-muted-foreground">Zero-downtime releases</span>
                  </div>
                  <div className="rounded-xl bg-muted/30 p-2.5">
                    <span className="text-[11px] font-bold text-foreground block">AWS Organizations</span>
                    <span className="text-[10px] text-muted-foreground">Multi-account governance</span>
                  </div>
                  <div className="rounded-xl bg-muted/30 p-2.5">
                    <span className="text-[11px] font-bold text-foreground block">CloudWatch & Alarms</span>
                    <span className="text-[10px] text-muted-foreground">Self-healing systems</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ============================================================= */}
          {/* STEP 04: DESTINATION (BUILD REAL-WORLD EXPERTISE)             */}
          {/* ============================================================= */}
          <div
            className="relative mt-20 sm:mt-28"
            onMouseEnter={() => setHoveredStep(4)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl bg-linear-to-b from-card via-card to-emerald-500/5 border border-emerald-500/30 p-8 sm:p-12 shadow-xl"
              >
                {/* Glow ring */}
                <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-48 rounded-full bg-emerald-500/20 blur-3xl" />

                <div className="inline-flex size-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shadow-sm ring-8 ring-emerald-500/5 mb-6">
                  <Rocket className="size-8" />
                </div>

                <span className="block text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Capstone Destination
                </span>

                <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Build Real-World Expertise
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Certifications validate knowledge, but real enterprise engineering proves it. At Digo Academy, every track culminates in production deployment, automation, and observability.
                </p>

                {/* 3 Value Pillars */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
                  <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/20 p-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                      <Server className="size-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        ☁ Deploy
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Production workloads on Amazon ECS, EKS & serverless architectures.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/20 p-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600">
                      <Terminal className="size-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        ⚙ Automate
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        GitOps, Terraform, CloudFormation, and robust test pipelines.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/20 p-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                      <Activity className="size-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        📊 Monitor
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        CloudWatch, distributed tracing, alerting & high-availability SRE.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white shadow-md font-semibold px-8"
                    nativeButton={false}
                    render={
                      <Link href="#courses">
                        Explore All Courses
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    }
                  />
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border/70"
                    nativeButton={false}
                    render={
                      <Link href="/contact">
                        Speak with a Cloud Advisor
                      </Link>
                    }
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
