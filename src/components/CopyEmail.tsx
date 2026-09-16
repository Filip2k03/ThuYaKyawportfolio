'use client';

import { useState } from 'react';
import { site } from '@/data/site';

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" className="copy-email" onClick={copy}>
      {copied ? 'Copied' : 'Copy email'}
      <span className="visually-hidden" aria-live="polite">
        {copied ? `${site.email} copied to clipboard` : ''}
      </span>
    </button>
  );
}
