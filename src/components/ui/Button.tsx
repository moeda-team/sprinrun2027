import Link from 'next/link';
import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof Link> & { children: React.ReactNode };

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 py-3 font-medium text-white transition-all duration-300 ease-out hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
