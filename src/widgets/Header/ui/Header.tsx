import { FC, useEffect, useState } from "react";

import Image from "next/image";

import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { BurgerButton } from "../../../shared/ui/BurgerButton";
import { BurgerMenu } from "../../../features/Burger/Burger";

export const Header: FC = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

   const handleToggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState);
   };

   const handleCloseMenu = () => {
      setIsMenuOpen(false);
   };

   useEffect(() => {
      if (isMenuOpen) {
         document.body.style.overflow = "hidden";
      }

      return () => {
         document.body.style.overflow = "auto";
      };
   }, [isMenuOpen]);

   return (
      <header className='relative z-10 col-span-12 h-full w-full'>
         <div className='relative mx-auto flex w-full max-w-[96.875rem] items-center justify-between px-30 pt-10 pb-23 max-[90.0625rem]:px-18 max-[86.25rem]:px-10 max-[30.8125rem]:px-5'>
            <HeaderLogo />
            <HeaderNav />
            <BurgerButton onClick={handleToggleMenu} isOpen={isMenuOpen} />
         </div>
         <BurgerMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
         <Image
            priority
            className='absolute top-0 right-0 h-auto w-auto max-w-[100%]'
            src={"/backgrounds/header-bg.svg"}
            alt='Header background'
            width={500}
            height={500}
         />
      </header>
   );
};
