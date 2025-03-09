import { type FC } from "react";

import { heroInformationItems } from "../data/hero-info";

const HeroInformation: FC = () => {
   return (
      <article className='relative z-70 col-span-6'>
         {heroInformationItems.map((item) => (
            <div key={item.id} className=''>
               <span className='text-hero-about-heading inline-block pb-3 text-5xl font-bold max-[87.8125rem]:text-4xl'>
                  {item.role}
               </span>
               <h1 className='text-main-heading after:bg-header-logo-after relative pb-8 font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-2 after:w-46 after:content-[""] max-[87.8125rem]:text-6xl'>
                  {item.fullname}
               </h1>
               <p className='leading-large text-main-paragraph text-hero-about-heading pt-10 text-justify max-[87.8125rem]:text-[1rem]'>
                  {item.about}
               </p>
            </div>
         ))}
      </article>
   );
};

export { HeroInformation };
