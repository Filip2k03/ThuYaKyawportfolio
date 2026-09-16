import { NextResponse } from 'next/server';
import { site } from '@/data/site';

export const dynamic = 'force-static';

/** Lightweight monitor target so DNS/uptime checks do not have to parse HTML. */
export function GET() {
  return NextResponse.json(
    {
      ok: true,
      service: site.name,
      canonical: site.url,
      apex: site.apex,
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=60',
      },
    },
  );
}
