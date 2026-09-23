import type { ReactNode } from 'react';
import { MessageCircle } from 'lucide-react';

import { PublicFooter } from '@/shared/components/public/PublicFooter';
import { PublicHeader } from '@/shared/components/public/PublicHeader';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-background relative">
      <PublicHeader />
      <main className="flex-1">{children}</main>
      <PublicFooter />

      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-12 right-6 z-50">
        <a
          href="https://wa.me/9779801820900"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
          aria-label="Connect on Whatsapp"
        >
          <MessageCircle className="size-7" />
          
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-full top-1/2 mr-4 w-max -translate-y-1/2 scale-95 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-all group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-800">
            Connect on Whatsapp
            <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-[5px] border-transparent border-l-gray-900 dark:border-l-gray-800" />
          </span>
        </a>
      </div>
    </div>
  );
}
