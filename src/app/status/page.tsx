import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Status',
  description: 'Canonical host, DNS and deployment notes for the Thu Ya Kyaw studio.',
  alternates: { canonical: '/status' },
  robots: { index: false, follow: true },
};

const checks = [
  ['Canonical host', site.url.replace('https://', '')],
  ['Apex host', `${site.apex.replace('https://', '')} → ${site.url.replace('https://', '')}`],
  ['Nameservers', 'Cloudflare (anahi / viddy)'],
  ['Origin', 'Vercel Git integration on main'],
  ['Health', `${site.url}/health`],
] as const;

export default function StatusPage() {
  return (
    <>
      <PageHeader
        eyebrow="SYSTEM / STATUS"
        title={
          <>
            Host, DNS and <span>origin.</span>
          </>
        }
        description="The public site is served from Vercel. Cloudflare answers DNS and currently proxies TLS. The canonical host is www."
      />
      <section className="section status-page">
        <dl className="status-grid">
          {checks.map(([label, value]) => (
            <div key={label} className="status-row">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <p className="fine-print">
          If a browser shows ERR_CONNECTION_FAILED or a DNS probe error after a git push, the deploy on Vercel is usually
          already live on the *.vercel.app URL. The failure is almost always Cloudflare SSL set to Flexible, a www/apex
          redirect loop, or the orange-cloud proxy racing a new certificate. Set SSL/TLS to Full (strict), keep a single
          redirect direction (apex → www), and grey-cloud the records if the proxy is interfering.
        </p>
        <div className="contact-actions">
          <Button asChild>
            <a href="/health">
              Health JSON <ArrowUpRight size={16} />
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              Return home <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
