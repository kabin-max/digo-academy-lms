import type { ReactNode } from 'react';

import { Breadcrumbs, type Crumb } from '@/shared/components/dashboard/Breadcrumbs';

export interface PageHeaderProps {
  title: ReactNode;
  /** Optional supporting copy or metadata under the title. */
  description?: ReactNode;
  /** Optional right-aligned action, e.g. a primary button. */
  action?: ReactNode;
  /** Optional leading icon tile (e.g. a lucide icon element). */
  icon?: ReactNode;
  /**
   * Ancestor path shown above the title, e.g.
   * `[{ label: 'Admin', href: '/admin' }, { label: 'Courses', href: '/admin/courses' }]`.
   * Don't include the current page — `title` is appended automatically as the
   * trail's last (non-link) segment.
   */
  breadcrumbs?: Crumb[];
}

/**
 * Header block for a page's content. The page title + icon now live in the top
 * bar (see Topbar), so this masthead only carries the breadcrumb trail and an
 * optional right-aligned action. `title` is still used as the breadcrumb's
 * current (non-link) segment. Renders nothing when there's neither a breadcrumb
 * trail nor an action, so pages don't show an empty header block.
 *
 * `description` and `icon` are accepted for backwards compatibility but no
 * longer rendered.
 */
export function PageHeader({ title, action, breadcrumbs = [] }: PageHeaderProps) {
  const hasBreadcrumbs = breadcrumbs.length > 0;
  if (!hasBreadcrumbs && !action) return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-5">
      <Breadcrumbs items={breadcrumbs} current={hasBreadcrumbs ? title : undefined} />
      {action && <div className="ml-auto flex items-center gap-2">{action}</div>}
    </div>
  );
}
