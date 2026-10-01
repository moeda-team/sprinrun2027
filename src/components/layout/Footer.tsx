import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';

function InstagramIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
}

function TikTokIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M16.6 3c.4 2.4 1.8 3.8 4.1 4.1v3.1a8.1 8.1 0 0 1-4.1-1.2v6.6a5.6 5.6 0 1 1-4.8-5.6v3.1a2.5 2.5 0 1 0 1.7 2.4V3h3.1Z" /></svg>;
}

function YouTubeIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29.4 29.4 0 0 0 2 12a29.4 29.4 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29.4 29.4 0 0 0 22 12a29.4 29.4 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" /></svg>;
}

export function Footer() {
  return (
    <footer className="bg-deep-green py-12 text-off-white sm:py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-[1.3fr_.65fr_1fr] sm:gap-12">
          <div className="max-w-sm">
            <a href="#home" className="font-display text-2xl uppercase italic tracking-tight">SPRIN RUN <span className="text-off-white">2027</span></a>
            <p className="mt-4 text-sm leading-relaxed text-off-white/60">Lebih dari sekadar lari, SPRIN RUN 2027 adalah cerita untuk melangkah lebih jauh, lebih kuat, dan lebih terhubung.</p>
            <div className="mt-5 flex gap-2 text-off-white/70">
              <a href="#about" aria-label="Instagram" className="focus-ring inline-flex min-h-10 min-w-10 items-center justify-center rounded-full transition hover:bg-off-white/10 hover:text-off-white"><InstagramIcon /></a>
              <a href="#about" aria-label="TikTok" className="focus-ring inline-flex min-h-10 min-w-10 items-center justify-center rounded-full transition hover:bg-off-white/10 hover:text-off-white"><TikTokIcon /></a>
              <a href="#about" aria-label="YouTube" className="focus-ring inline-flex min-h-10 min-w-10 items-center justify-center rounded-full transition hover:bg-off-white/10 hover:text-off-white"><YouTubeIcon /></a>
            </div>
          </div>
          <nav aria-label="Menu footer">
            <h2 className="mb-4 font-bold">Menu</h2>
            <ul className="space-y-2 text-sm text-off-white/60">{site.navigation.map((item) => <li key={item.href}><a className="hover:text-off-white" href={item.href}>{item.label}</a></li>)}</ul>
          </nav>
          <div>
            <h2 className="mb-4 font-bold">Kontak</h2>
            <a href="/kontak/" className="text-sm text-off-white/60 hover:text-off-white">Hubungi tim SPRIN RUN</a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-off-white/15 pt-5 text-xs text-off-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2027 SPRIN RUN. All rights reserved.</p>
          <div className="flex gap-5"><a href="/kontak/" className="hover:text-off-white">Kebijakan Privasi</a><a href="/kontak/" className="hover:text-off-white">Syarat &amp; Ketentuan</a></div>
        </div>
      </Container>
    </footer>
  );
}
