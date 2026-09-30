import Link from 'next/link';
import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof Link> & { children: React.ReactNode };

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-md bg-hot-pink px-5 py-3 font-medium text-off-white transition-all duration-300 ease-out hover:bg-forest-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hot-pink focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
