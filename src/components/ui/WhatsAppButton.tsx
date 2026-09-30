import { site } from '@/config/site';

export function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return (
    <a
      className="focus-ring fixed bottom-5 right-5 z-20 rounded-full bg-accent px-4 py-3 text-sm font-medium text-white"
      href={href}
    >
      WhatsApp
    </a>
  );
}
