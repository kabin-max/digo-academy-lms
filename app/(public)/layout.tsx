import type { ReactNode } from 'react';
import Image from 'next/image';

import { PublicFooter } from '@/shared/components/public/PublicFooter';
import { PublicHeader } from '@/shared/components/public/PublicHeader';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-background relative">
      <PublicHeader />
      <main className="flex-1">{children}</main>
      <PublicFooter />

      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-[10%] right-6 z-50">
        <a
          href="https://wa.me/9779801820900?text=Hi%20%2C%20We%20are%20digo%20academy%20do%20you%20want%20to%20disucss%20anything%20like%20type%20message%20over%20there"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center transition-transform hover:scale-110 focus:outline-none"
          aria-label="Connect on Whatsapp"
        >
          <Image src="/whatsapp.png" alt="WhatsApp" width={64} height={64} className="object-contain drop-shadow-lg" />
          
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-full top-1/2 mr-4 w-max -translate-y-1/2 scale-95 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-all group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-800">
            Connect On Whatsapp
            <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-[5px] border-transparent border-l-gray-900 dark:border-l-gray-800" />
          </span>
        </a>
      </div>
    </div>
  );
}
