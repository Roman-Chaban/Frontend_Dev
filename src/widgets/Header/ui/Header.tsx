import { type FC } from "react";

import { Container } from "@/shared/ui/Container/Container";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import Image from "next/image";

const Header: FC = () => {
   return (
      <header className='relative h-full w-full px-[7.5rem] pt-[2.5rem]'>
         <Container className=''>
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
