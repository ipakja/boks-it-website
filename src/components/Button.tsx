import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: never;
    external?: never;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent',
  secondary:
    'bg-brand-800 text-white hover:bg-brand-900 focus-visible:ring-brand-800',
  outline:
    'border border-slate-300 bg-white text-brand-800 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-slate-400',
};

const baseStyles =
  'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

/** Wiederverwendbarer Button als Link oder mailto. */
export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ('href' in props && props.href) {
    const { href, external } = props;
    const isExternal = external || href.startsWith('mailto:') || href.startsWith('http');

    if (isExternal) {
      return (
        <a href={href} className={styles}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <a className={styles} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  );
}
