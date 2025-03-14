import { type FC } from "react";

import Link from "next/link";

import { motion } from "framer-motion";

import { headerNav } from "../data/nav";

export const HeaderNav: FC = () => {
   return (
      <nav className='relative z-50 max-w-fit max-[62rem]:hidden'>
         <ul className='flex w-full items-center gap-10'>
            {headerNav.map((item) => (
               <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
               >
                  <Link href={item.href} className='text-[1.125rem] text-white'>
                     {item.label}
                  </Link>
               </motion.li>
            ))}
         </ul>
      </nav>
   );
};
