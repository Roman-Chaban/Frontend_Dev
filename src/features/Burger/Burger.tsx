"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeaderLogo } from "@/widgets/Header/ui/HeaderLogo";
import { BurgerButton } from "@/shared/ui/BurgerButton";
import { headerNav } from "@/widgets/Header/data/nav";

interface BurgerMenuProps {
   isOpen: boolean;
   onClose: () => void;
}

const menuVariants = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "-100%" },
};

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
   return (
      <motion.div
         initial='closed'
         animate={isOpen ? "open" : "closed"}
         variants={menuVariants}
         transition={{ duration: 0.3 }}
         className='bg-skills bg-opacity-80 fixed top-0 left-0 z-[100] flex h-screen w-full flex-col backdrop-blur-lg'
      >
         <div className='flex w-full items-center justify-between p-10 max-[30.8125rem]:px-5'>
            <HeaderLogo />
            <BurgerButton onClick={onClose} isOpen={isOpen} />
         </div>
         <div className='flex flex-grow items-center justify-center'>
            <nav className='flex flex-col items-center space-y-6'>
               {headerNav.map((item) => (
                  <Link
                     key={item.id}
                     href={item.href}
                     className='text-3xl font-semibold text-white transition hover:font-normal hover:text-gray-300'
                  >
                     {item.label}
                  </Link>
               ))}
            </nav>
         </div>
      </motion.div>
   );
};

export { BurgerMenu };
