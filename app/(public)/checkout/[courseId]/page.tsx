'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Copy,
  CreditCard,
  FileCheck2,
  GraduationCap,
  Lock,
  QrCode,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/shared/components/ui/field';
import { Input } from '@/shared/components/ui/input';

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params?.courseId as string;

  const [step, setStep] = useState(1);
  const [method, setMethod] = useState<'qr' | 'bank' | 'assisted'>('qr');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Kathmandu',
    referenceId: '',
  });

  const handleCopyAccount = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Bank details copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!details.name || !details.email || !details.phone) {
        toast.error('Please complete all student contact details.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      setSubmitted(true);
      toast.success('Enrollment submitted! We are validating your payment receipt.');
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 sm:p-12 shadow-lg">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600">
            <CheckCircle2 className="size-8" />
          </div>
          <h1 className="mt-6 font-heading text-3xl font-extrabold text-foreground">
            Enrollment Request Received!
          </h1>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Thank you, <span className="font-semibold text-foreground">{details.name}</span>. Our admissions team will confirm your payment reference and activate your classroom access within 2 business hours.
          </p>

          <div className="mt-6 rounded-2xl border border-border/80 bg-background/90 p-4 text-left text-xs space-y-2">
            <p className="font-bold text-foreground">Next Steps:</p>
            <p className="text-muted-foreground">1. Check your inbox at <span className="font-mono text-foreground">{details.email}</span> for your student invitation link.</p>
            <p className="text-muted-foreground">2. You will be assigned to the upcoming cohort batch and Discord channel.</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full px-8" nativeButton={false} render={<Link href="/login">Go to Login</Link>} />
            <Button size="lg" variant="outline" className="rounded-full" nativeButton={false} render={<Link href="/courses">Browse Catalog</Link>} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-extrabold text-foreground">
          Enrollment &amp; Checkout
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Complete student registration and payment to secure your seat.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Side: Stepper & Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-md sm:p-8">
            {/* Stepper Header */}
            <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6 text-xs font-semibold text-muted-foreground">
              <span className={step === 1 ? 'text-primary' : ''}>1. Student Details</span>
              <span>→</span>
              <span className={step === 2 ? 'text-primary' : ''}>2. Payment Method</span>
              <span>→</span>
              <span className={step === 3 ? 'text-primary' : ''}>3. Verification</span>
            </div>

            <form onSubmit={handleComplete} className="space-y-6">
              {step === 1 && (
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="co-name">Full Legal Name</FieldLabel>
                    <Input
                      id="co-name"
                      required
                      placeholder="Jane Doe"
                      value={details.name}
                      onChange={(e) => setDetails({ ...details, name: e.target.value })}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="co-email">Email Address (for LMS login)</FieldLabel>
                    <Input
                      id="co-email"
                      type="email"
                      required
                      placeholder="kaka@example.com"
                      value={details.email}
                      onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="co-phone">Phone / WhatsApp</FieldLabel>
                      <Input
                        id="co-phone"
                        required
                        placeholder="+977 9800000000"
                        value={details.phone}
                        onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="co-city">City</FieldLabel>
                      <Input
                        id="co-city"
                        value={details.city}
                        onChange={(e) => setDetails({ ...details, city: e.target.value })}
                      />
                    </Field>
                  </div>
                </FieldGroup>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">Select Payment Method</h3>
                    <p className="text-xs text-muted-foreground">All options support instant confirmation.</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => setMethod('qr')}
                      className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all ${
                        method === 'qr' ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border/80 hover:bg-muted/40'
                      }`}
                    >
                      <QrCode className="size-6 text-primary mb-2" />
                      <span className="text-xs font-bold text-foreground">Fonepay / QR</span>
                      <span className="text-[10px] text-muted-foreground">Mobile Banking</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMethod('bank')}
                      className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all ${
                        method === 'bank' ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border/80 hover:bg-muted/40'
                      }`}
                    >
                      <Building2 className="size-6 text-primary mb-2" />
                      <span className="text-xs font-bold text-foreground">Direct Transfer</span>
                      <span className="text-[10px] text-muted-foreground">Bank Account / IPS</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMethod('assisted')}
                      className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all ${
                        method === 'assisted' ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border/80 hover:bg-muted/40'
                      }`}
                    >
                      <CreditCard className="size-6 text-primary mb-2" />
                      <span className="text-xs font-bold text-foreground">Assisted Invoice</span>
                      <span className="text-[10px] text-muted-foreground">EMI / Installment</span>
                    </button>
                  </div>

                  {/* Payment Details Card */}
                  <div className="rounded-2xl border border-border/80 bg-muted/30 p-5 space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground">Bank Name:</span>
                      <span className="font-mono">Global IME Bank Ltd</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground">Account Name:</span>
                      <span className="font-mono">DIGO ACADEMY PVT LTD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground">Account Number:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold">010101000123456</span>
                        <button
                          type="button"
                          onClick={() => handleCopyAccount('010101000123456')}
                          className="text-primary hover:underline"
                        >
                          <Copy className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <FieldGroup>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">Confirm &amp; Attach Receipt</h3>
                    <p className="text-xs text-muted-foreground">
                      Enter the bank transaction ID or payment reference number.
                    </p>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="co-ref">Transaction / Reference ID</FieldLabel>
                    <Input
                      id="co-ref"
                      required
                      placeholder="e.g. TXN-89342019"
                      value={details.referenceId}
                      onChange={(e) => setDetails({ ...details, referenceId: e.target.value })}
                    />
                  </Field>

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex items-center gap-3">
                    <ShieldCheck className="size-6 text-emerald-600 shrink-0" />
                    <p className="text-xs text-emerald-800 dark:text-emerald-300">
                      Your seat is placed on reserved hold upon submission. Admin verification completes within 2 hours.
                    </p>
                  </div>
                </FieldGroup>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-border/60">
                {step > 1 ? (
                  <Button type="button" variant="ghost" size="sm" onClick={() => setStep((s) => s - 1)}>
                    Back
                  </Button>
                ) : <div />}

                <Button type="submit" size="lg" className="rounded-full px-7">
                  {step === 1 ? 'Select Payment →' : step === 2 ? 'Verify Details →' : 'Complete Enrollment'}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8 space-y-6">
            <h3 className="font-heading text-lg font-bold text-foreground">Enrollment Summary</h3>

            <div className="flex items-start gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <GraduationCap className="size-7" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-coral">Cohort Program</span>
                <h4 className="font-heading text-base font-bold text-foreground">Full-Stack &amp; AI Academy</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Live Cohort • 16 Weeks</p>
              </div>
            </div>

            <div className="space-y-3 border-t border-border/60 pt-4 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tuition Fee</span>
                <span className="font-semibold text-foreground">NPR 45,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Early Bird Scholarship</span>
                <span className="font-semibold text-emerald-600">- NPR 10,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Platform &amp; Code Review Access</span>
                <span className="font-semibold text-foreground">Included</span>
              </div>
              <div className="flex justify-between border-t border-border/60 pt-3 text-sm font-bold">
                <span>Total Payable</span>
                <span className="font-mono text-primary">NPR 35,000</span>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 space-y-2 text-[11px] text-muted-foreground">
              <p className="flex items-center gap-1.5 font-semibold text-foreground">
                <Lock className="size-3.5 text-primary" />
                100% Risk-Free Guarantee
              </p>
              <p>
                Attend the first week of live classes. If you feel it&apos;s not the right fit, request a full refund without questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
