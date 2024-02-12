import React, { ReactNode, ReactElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = {
  href: string;
  children: ReactNode;
  icon: ReactElement;
};

const ActiveLink = ({ href, children, icon }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`flex flex-col items-center ${isActive ? '' : ''}`}>
      <span className={`absolute whitespace-nowrap  text-base tracking-tighter opacity duration-1000  ${isActive ? 'translate-y-2 opacity-100' : 'translate-y-0 opacity-0'}`}>
        {children}
      </span>
      <span className={`duration-[1800ms] text-center block text-3xl ${isActive ? '-translate-y-8 opacity-100 text-rickblack' : 'translate-y-0 text-white'}`}>
        {icon}
      </span>
    </Link>
  );
};

export default ActiveLink;

