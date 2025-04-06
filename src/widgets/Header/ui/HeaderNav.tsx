import { type FC } from "react";

import Link from "next/link";

import { useRouter } from "next/router";

import { headerNav } from "../data/nav";

import { motion } from "framer-motion";

export const HeaderNav: FC = () => {
   const { pathname } = useRouter();

   return (
      <nav className='relative z-50 max-w-fit max-[62rem]:hidden'>
         <ul className='flex w-full items-center gap-10'>
            {headerNav.map((item) => {
               const isActive = pathname === item.href;
               return (
                  <motion.li
                     key={item.id}
                     whileHover={{ scale: 1.1, y: -3 }}
                     transition={{ type: "spring", stiffness: 300 }}
                  >
                     <Link
                        href={item.href}
                        className={`text-[1.125rem] text-white ${
                           isActive ? "bg-skills rounded px-3 py-1" : ""
                        }`}
                     >
                        {item.label}
                     </Link>
                  </motion.li>
               );
            })}
         </ul>
      </nav>
   );
};
