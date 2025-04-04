// 

'use client';

import React from 'react';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname(); 

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-[#1C1F2E] p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
      
      <div className='flex flex-col gap-6'>
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link 
              href={link.route}
              key={link.label}
              className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                'bg-[#0E78F9]': isActive,
              })}
            >
              <Image
                src={link.imgURL} // Corrected from Link.imgURL to link.imgURL
                alt={link.label} // Corrected from Link.label to link.label
                width={24}
                height={24}
              />
              <p className='text-lg font-semibold max-lg:hidden'>
                {link.label} 
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
