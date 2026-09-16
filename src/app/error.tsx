'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <section className="section not-found">
      <p className="eyebrow">
        <span className="status-dot" /> ERROR / RECOVERABLE
      </p>
      <h1>
        This view failed to <span>render.</span>
      </h1>
      <p className="section-description">
        The rest of the studio is still available. Retry this page, or continue from home.
        {error.digest ? ` Reference ${error.digest}.` : ''}
      </p>
      <div className="contact-actions">
        <Button type="button" onClick={reset}>
          Retry
        </Button>
        <Button asChild variant="outline">
          <Link href="/">
            Return home <ArrowUpRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
}
