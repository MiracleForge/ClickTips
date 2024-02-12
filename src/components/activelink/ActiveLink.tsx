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
      <span className={`absolute whitespace-nowrap  text-lg tracking-tighter opacity duration-1000 text-rickblack  ${isActive ? 'translate-y-8 opacity-100' : 'translate-y-0 opacity-0'}`}>
        {children}
      </span>
      <span className={` duration-[1000ms] text-center block text-3xl rounded-full ${isActive ? '-translate-y-9 opacity-100 text-Cerulean bg-PrussianBlue p-3 border-8 border-white' : 'translate-y-0 text-white'}`}>
        {icon}
      </span>
      <span className='Indicador bg-red-500'>

      </span>
    </Link>
  );
};

export default ActiveLink;

