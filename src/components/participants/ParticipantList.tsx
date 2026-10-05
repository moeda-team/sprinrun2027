'use client';

import { useEffect, useState } from 'react';

type Registration = { name: string; category: string };
type RegistrationResponse = { data: Registration[]; total: number; page: number; page_size: number; total_pages: number };

const pageSize = 6;

export function ParticipantList({ apiBaseUrl, eventId }: { apiBaseUrl?: string; eventId?: string }) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [result, setResult] = useState<RegistrationResponse | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const isConfigured = Boolean(apiBaseUrl && eventId);

  useEffect(() => {
    if (!apiBaseUrl || !eventId) return;
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setStatus('loading');
      try {
        const url = new URL(`/api/v1/events/${eventId}/paid-registrations`, apiBaseUrl);
        url.searchParams.set('q', query.trim());
        url.searchParams.set('page', String(page));
        url.searchParams.set('page_size', String(pageSize));
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`API request failed: ${response.status}`);
        const payload: RegistrationResponse = await response.json();
        if (!Array.isArray(payload.data) || typeof payload.total !== 'number') throw new Error('Invalid API response');
        setResult(payload);
        setStatus('ready');
      } catch (error) {
        if ((error as Error).name !== 'AbortError') setStatus('error');
      }
    }, 300);
    return () => { window.clearTimeout(timer); controller.abort(); };
  }, [apiBaseUrl, eventId, page, query]);

  const totalPages = result?.total_pages ?? 1;
  return (
    <section aria-label="Daftar peserta" className="mt-10">
      <label className="relative block rounded-3xl border border-line bg-off-white p-4 shadow-sm sm:p-5">
        <span className="sr-only">Cari peserta atau kategori</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="pointer-events-none absolute left-8 top-1/2 h-5 w-5 -translate-y-1/2 text-deep-green/55 sm:left-9" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></svg>
        <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Cari nama atau kategori" className="focus-ring w-full rounded-2xl border border-line bg-paper py-3 pl-11 pr-4 text-sm text-deep-green placeholder:text-deep-green/45" type="search" />
      </label>
      {status === 'ready' && result && <p className="mt-5 text-sm text-deep-green/65" aria-live="polite">Menampilkan <strong className="font-bold text-deep-green">{result.data.length}</strong> dari {result.total} peserta.</p>}
      <div className="mt-4 overflow-hidden rounded-3xl border border-line bg-off-white shadow-sm" aria-busy={status === 'loading'}>
        <div className="hidden grid-cols-[2fr_1fr] gap-4 border-b border-line bg-soft-mint/35 px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-deep-green/65 sm:grid"><span>Peserta</span><span>Kategori</span></div>
        {status === 'loading' && <div className="px-6 py-14 text-center text-sm text-deep-green/65">Memuat daftar peserta…</div>}
        {(!isConfigured || status === 'error') && <div className="px-6 py-14 text-center"><p className="font-bold text-deep-green">Daftar peserta belum dapat dimuat</p><p className="mt-2 text-sm text-deep-green/65">Silakan coba lagi beberapa saat lagi.</p></div>}
        {status === 'ready' && result?.data.length === 0 && <div className="px-6 py-14 text-center"><p className="font-bold text-deep-green">Peserta tidak ditemukan</p><p className="mt-2 text-sm text-deep-green/65">Coba gunakan nama atau kategori lain.</p></div>}
        {status === 'ready' && result && result.data.length > 0 && <ul className="divide-y divide-line">{result.data.map((participant, index) => <li key={`${participant.name}-${participant.category}-${index}`} className="grid gap-2 px-5 py-5 sm:grid-cols-[2fr_1fr] sm:items-center sm:gap-4 sm:px-6"><p className="font-bold text-deep-green">{participant.name}</p><p className="text-sm font-semibold text-deep-green"><span className="sm:hidden text-deep-green/60">Kategori: </span>{participant.category}</p></li>)}</ul>}
      </div>
      {status === 'ready' && result && totalPages > 1 && <nav className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" aria-label="Navigasi halaman peserta"><p className="text-sm text-deep-green/65">Halaman {result.page} dari {totalPages}</p><div className="flex items-center gap-2"><button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={result.page === 1} className="focus-ring rounded-full border border-line px-4 py-2 text-sm font-bold text-deep-green transition hover:bg-soft-mint disabled:cursor-not-allowed disabled:opacity-45">Sebelumnya</button><button type="button" onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={result.page === totalPages} className="focus-ring rounded-full border border-line px-4 py-2 text-sm font-bold text-deep-green transition hover:bg-soft-mint disabled:cursor-not-allowed disabled:opacity-45">Berikutnya</button></div></nav>}
    </section>
  );
}
