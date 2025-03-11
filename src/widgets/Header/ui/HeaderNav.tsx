import { type FC } from "react";

import Link from "next/link";

import { headerNav } from "../data/nav";

const HeaderNav: FC = () => {
   return (
      <nav className='max-w-fit relative z-50'>
         <ul className='flex w-full items-center gap-10'>
            {headerNav.map((item) => (
               <li key={item.id}>
                  <Link
                     href={item.href}
                     className='text-[1.125rem] text-white opacity-70'
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
