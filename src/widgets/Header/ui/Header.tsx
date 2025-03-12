import { type FC } from "react";

import Image from "next/image";

import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

const Header: FC = () => {
   return (
      <header className='relative z-10 col-span-12 h-full w-full'>
         <div className='relative mx-auto flex w-full max-w-[96.875rem] items-center justify-between px-30 pt-10 pb-23 max-[90.0625rem]:px-18 max-[86.25rem]:px-10 max-[30.8125rem]:px-5 max-[26.5625rem]:pb-15'>
            <HeaderLogo />
            <HeaderNav />
         </div>
         <Image
            priority
            className='absolute top-0 right-0 z-5 h-auto w-auto max-w-[100%]'
            src={"/backgrounds/header-bg.svg"}
            alt='Header background'
            width={500}
            height={500}
         />
      </header>
   );
};

export { Header };
