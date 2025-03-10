import { type FC } from "react";

import { Container } from "@/shared/ui/Container/Container";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

import Image from "next/image";

const Header: FC = () => {
   return (
      <header className='relative z-70 w-full'>
         <Container
            tag='div'
            className='mx-auto w-full max-w-[113.5rem] px-33 pt-10 pb-22 max-[87.8125rem]:pb-15 max-[64rem]:px-10 max-[97.5rem]:px-16'
         >
            <HeaderLogo />
            <HeaderNav />
         </Container>
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
