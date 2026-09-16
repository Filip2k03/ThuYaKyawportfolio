'use client';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          padding: '2rem',
          background: '#08090b',
          color: '#ecebe7',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <main style={{ maxWidth: '40rem', display: 'grid', gap: '1.25rem' }}>
          <p style={{ letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c8a56b', fontSize: '0.8rem' }}>
            Error / system
          </p>
          <h1 style={{ margin: 0, fontSize: '2.4rem', letterSpacing: '-0.04em' }}>The studio could not load.</h1>
          <p style={{ margin: 0, color: '#a3a49f' }}>
            Retry this request. If it keeps failing after a deploy, the usual cause is a DNS or TLS mismatch between
            Cloudflare and Vercel — not missing pages.
            {error.digest ? ` Reference ${error.digest}.` : ''}
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              justifySelf: 'start',
              minHeight: 48,
              padding: '0.8rem 1.4rem',
              border: 0,
              borderRadius: 6,
              background: '#c8a56b',
              color: '#08090b',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Retry
          </button>
        </main>
      </body>
    </html>
  );
}
