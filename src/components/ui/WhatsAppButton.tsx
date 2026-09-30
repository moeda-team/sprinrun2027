import { site } from '@/config/site';

export function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return (
    <a
      aria-label="Chat via WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-20 inline-flex h-14 w-14 items-center justify-center rounded-full bg-hot-pink !text-white shadow-lg shadow-deep-green/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-golden-yellow hover:!text-white"
      href={href}
    >
      <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.25a9.7 9.7 0 0 0-8.38 14.58L2.25 21.75l5.1-1.34A9.75 9.75 0 1 0 12 2.25Zm0 17.68a7.92 7.92 0 0 1-4.04-1.1l-.29-.17-3.02.79.8-2.94-.19-.3A7.92 7.92 0 1 1 12 19.93Zm4.35-5.94c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.55.12-.16.24-.63.77-.77.93-.14.16-.29.18-.53.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.1-.1.24-.29.36-.43.12-.14.16-.24.24-.41.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.4-.57 1.6-1.13.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
}
