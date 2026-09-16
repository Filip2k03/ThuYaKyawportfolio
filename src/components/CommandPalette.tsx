'use client';

import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useId, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { navigation, site } from '@/data/site';
import { projects } from '@/data/projects';
import { COMMAND_PALETTE_EVENT } from '@/lib/commandPalette';

const pages = [
  ['Home', '/'],
  ...navigation,
  ['CV', '/cv'],
  ['Contact', '/contact'],
  ['Status', '/status'],
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const headingId = useId();
  const inputId = useId();

  const setOpenAndReset = (value: boolean) => {
    setOpen(value);
    if (!value) setQuery('');
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((current) => !current);
        setQuery('');
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener(COMMAND_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener(COMMAND_PALETTE_EVENT, onOpen);
    };
  }, []);

  const needle = query.trim().toLowerCase();
  const pageHits = useMemo(
    () => pages.filter(([name, url]) => !needle || name.toLowerCase().includes(needle) || url.includes(needle)),
    [needle],
  );
  const workHits = useMemo(
    () =>
      projects.filter(
        (project) =>
          !needle ||
          project.title.toLowerCase().includes(needle) ||
          project.category.toLowerCase().includes(needle) ||
          project.slug.includes(needle),
      ),
    [needle],
  );

  const go = (url: string) => {
    setOpenAndReset(false);
    router.push(url);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpenAndReset}>
      <Dialog.Portal>
        <Dialog.Overlay className="command-backdrop" />
        <Dialog.Content className="command-dialog" aria-labelledby={headingId}>
          <Dialog.Title id={headingId} className="eyebrow">
            Jump to
          </Dialog.Title>
          <Dialog.Description className="visually-hidden">
            Search pages and work, then choose a destination.
          </Dialog.Description>
          <label className="visually-hidden" htmlFor={inputId}>
            Search pages and work
          </label>
          <input
            id={inputId}
            className="command-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`Search ${site.name}`}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          <div className="command-results">
            <p className="command-group">Pages</p>
            {pageHits.length === 0 ? (
              <p className="fine-print">No matching pages.</p>
            ) : (
              pageHits.map(([name, url]) => (
                <Link key={url} href={url} className="command-hit" onClick={() => setOpenAndReset(false)}>
                  {name}
                  <span>{url}</span>
                </Link>
              ))
            )}
            <p className="command-group">Work</p>
            {workHits.length === 0 ? (
              <p className="fine-print">No matching work.</p>
            ) : (
              workHits.map((project) => (
                <button key={project.slug} type="button" className="command-hit" onClick={() => go(`/work/${project.slug}`)}>
                  {project.title}
                  <span>{project.category}</span>
                </button>
              ))
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
