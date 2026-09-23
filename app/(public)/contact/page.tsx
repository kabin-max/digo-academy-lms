import { Clock, Mail, MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react';

import { ContactForm } from '@/shared/components/public/ContactForm';
import { Reveal } from '@/shared/components/public/Reveal';

export const metadata = {
  title: 'Contact Us | Digo Academy',
  description:
    'Have questions about our live cohorts, curriculum, or career mentorship? Get in touch with our team or schedule a free counseling session.',
};

const CHANNELS = [
  {
    icon: MessageCircle,
    title: 'Chat on WhatsApp',
    subtitle: 'Instant responses during working hours',
    href: 'https://wa.me/9779800000000',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    icon: Phone,
    title: 'Book a Guidance Call',
    subtitle: '15-min call with an academic advisor',
    href: '#form',
    color: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    icon: MapPin,
    title: 'Visit Our Campus',
    subtitle: 'Drop by for an in-person walkthrough',
    href: '#location',
    color: 'bg-brand-coral/10 text-brand-coral',
  },
];

const FAQS = [
  {
    q: 'How fast do you respond to inquiries?',
    a: 'We reply to all email and form inquiries within 24 hours on business days, and WhatsApp messages typically receive answers within 1–2 hours.',
  },
  {
    q: 'Can I take a free demo class before enrolling?',
    a: 'Yes! When submitting the form, mention that you would like a demo seat. We regularly host weekend preview sessions for our flagship cohorts.',
  },
  {
    q: 'Do you offer offline or hybrid options?',
    a: 'Our core curriculum is delivered live online with recordings, but we host in-person weekend hackathons, project sprints, and networking meetups.',
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col py-12 lg:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
            <Sparkles className="size-3.5" />
            We&apos;re Here To Help
          </div>
          <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s talk about your future
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Have questions about prerequisites, cohort timelines, or career transitions? Reach out and we&apos;ll guide you to the right path.
          </p>
        </Reveal>

        {/* Quick Action Channels */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          {CHANNELS.map((ch) => {
            const Icon = ch.icon;
            return (
              <a
                key={ch.title}
                href={ch.href}
                className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${ch.color}`}>
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{ch.subtitle}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Main Two-Column Layout */}
        <div id="form" className="grid gap-8 lg:grid-cols-12">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-lg sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground mb-6">
                Fill out the form below and an advisor will reach out to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Details & Info Side */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8 space-y-6">
              <h3 className="font-heading text-xl font-bold text-foreground">Direct Contact</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</p>
                    <a href="mailto:hello@digoacademy.com" className="font-medium text-foreground hover:text-primary transition-colors">
                      hello@digoacademy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Admissions Hotline</p>
                    <a href="tel:+9779800000000" className="font-medium text-foreground hover:text-primary transition-colors">
                      +977 980-000-0000
                    </a>
                  </div>
                </div>

                <div id="location" className="flex items-start gap-3">
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Learning Hub &amp; Labs</p>
                    <p className="font-medium text-foreground">
                      Kathmandu Technology Hub, Bagmati, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Support Hours</p>
                    <p className="font-medium text-foreground">
                      Mon – Sat: 9:00 AM – 7:00 PM NPT
                    </p>
                  </div>
                </div>
              </div>

              {/* Mini Map Card Representation */}
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-muted/40 p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
                  <MapPin className="size-4 text-brand-coral" />
                  Live classes online globally • In-person workshops in Kathmandu
                </div>
              </div>
            </div>

            {/* Short FAQ */}
            <div className="rounded-3xl border border-border/80 bg-muted/20 p-6 space-y-4">
              <h3 className="font-heading text-lg font-bold text-foreground">Frequently Asked</h3>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <div key={faq.q} className="border-t border-border/60 pt-3 first:border-0 first:pt-0">
                    <p className="text-sm font-semibold text-foreground">{faq.q}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
