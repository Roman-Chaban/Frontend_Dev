import { type FC } from "react";

import { HeroInformation } from "./HeroInformation";
import { HeroProfile } from "./HeroProfile";
import { HeroAbout } from "./HeroAbout";

const Hero: FC = () => {
   return (
      <section className='relative z-20 w-full'>
         <div className='mx-auto max-w-[96.875rem] px-30 max-[90.0625rem]:px-18 max-[86.25rem]:px-10'>
            <div className='flex justify-between'>
               <HeroInformation />
               <HeroProfile />
               <HeroAbout />
            </div>
         </div>
      </section>
   );
};

export { Hero };
