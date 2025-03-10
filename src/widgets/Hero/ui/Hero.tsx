import { type FC } from "react";

import { HeroInformation } from "./HeroInformation";
import { HeroBanner } from "./HeroBanner";
import { HeroAbout } from "./HeroAbout";
import { Container } from "@/shared/ui/Container/Container";

const Hero: FC = () => {
   return (
      <Container
         tag='section'
         className='relative z-70 mx-auto w-full max-w-[113.5rem] px-33 pb-20 max-[113.5rem]:pb-16 max-[97.5rem]:px-16 max-[90rem]:px-14 max-[64rem]:flex max-[64rem]:flex-col max-[64rem]:gap-[3rem] max-[64rem]:px-10'
      >
         <HeroInformation />
         <HeroBanner />
         <HeroAbout />
      </Container>
   );
};

export { Hero };
