import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="bg-deep-green py-12 text-off-white sm:py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-[1.3fr_.65fr_1fr] sm:gap-12">
          <div className="max-w-sm">
            <a href="#home" className="font-display text-2xl uppercase italic tracking-tight">SPRIN RUN <span className="text-off-white">2027</span></a>
            <p className="mt-4 text-sm leading-relaxed text-off-white/60">Lebih dari sekadar lari, SPRIN RUN 2027 adalah cerita untuk melangkah lebih jauh, lebih kuat, dan lebih terhubung.</p>
            <div className="mt-5 flex gap-4 text-sm font-bold text-off-white/70"><a href="#about" aria-label="Instagram">IG</a><a href="#about" aria-label="TikTok">TT</a><a href="#about" aria-label="YouTube">YT</a></div>
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
