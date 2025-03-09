import { type FC } from "react";

import { heroAboutList } from "../data/hero-about";

const HeroAbout: FC = () => {
   return (
      <div className='relative z-50 col-span-2'>
         <ul className='flex h-full flex-col gap-24'>
            {heroAboutList.map((item) => (
               <li key={item.id} className='flex flex-col items-end'>
                  <h3 className='text-hero-about-heading text-end text-2xl max-[87.8125rem]:text-xl'>
                     {item.title}
                  </h3>
                  <span className='text-end text-5xl text-white max-[87.8125rem]:text-3xl'>
                     {item.subtitle}
                  </span>
               </li>
            ))}
         </ul>
      </div>
   );
};

export { HeroAbout };
