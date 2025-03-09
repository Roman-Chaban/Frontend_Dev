import { type FC } from "react";

import { headerNav } from "../data/nav";

import Link from "next/link";

const HeaderNav: FC = () => {
   return (
      <nav className='background-no-repeat relative z-20 col-span-10 flex w-full justify-end max-[64rem]:hidden'>
         <ul className='flex items-center justify-end gap-[2.5rem]'>
            {headerNav.map((item) => (
               <li key={item.id} className='w-content flex h-full items-center'>
                  <Link
                     href={item.href}
                     className='text-[1.125rem] font-medium text-white opacity-[0.7]'
                  >
                     {item.label}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export { HeaderNav };
