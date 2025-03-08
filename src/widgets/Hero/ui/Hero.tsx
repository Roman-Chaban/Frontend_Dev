import { type FC } from "react";

import { HeroInformation } from "./HeroInformation";
import { HeroBanner } from "./HeroBanner";
import { HeroAbout } from "./HeroAbout";

const Hero: FC = () => {
   return (
      <div className='relative mx-auto flex items-center justify-between px-[5rem] pt-[5.75rem] pb-[7.5rem] max-[90rem]:px-[3.5rem] max-[90rem]:pt-[3rem]'>
         <HeroInformation />
         <HeroBanner />
         <HeroAbout />
      </div>
   );
};

export { Hero };
