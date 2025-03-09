import { type FC } from "react";

import { HeroInformation } from "./HeroInformation";
import { HeroBanner } from "./HeroBanner";
import { HeroAbout } from "./HeroAbout";
import { Container } from "@/shared/ui/Container/Container";

const Hero: FC = () => {
   return (
      <Container
         tag='section'
         className='relative mx-auto min-h-[48rem] w-full max-w-[90rem] px-33 pb-31 max-[90rem]:min-h-[43rem] max-[90rem]:px-14 max-[64rem]:gap-[3rem] max-[64rem]:px-10 max-[64rem]:flex max-[64rem]:flex-col'
      >
         <HeroInformation />
         <HeroBanner />
         <HeroAbout />
      </Container>
   );
};

export { Hero };
