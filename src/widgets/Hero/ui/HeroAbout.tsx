import { type FC } from "react";

import { heroAboutList } from "../data/hero-about";

const HeroAbout: FC = () => {
   return (
      <div className='max-w-100% relative z-50 col-span-2 w-full'>
         <ul className='max-[64re]: flex h-full w-full flex-col gap-24 max-[64rem]:max-w-full max-[64rem]:gap-[4rem]'>
            {heroAboutList.map((item) => (
               <li
                  key={item.id}
                  className='flex flex-col items-end max-[64rem]:items-start max-[64rem]:gap-[1rem]'
               >
                  <h3 className='text-hero-about-heading text-end text-2xl max-[87.8125rem]:text-xl max-[64rem]:text-start'>
                     {item.title}
                  </h3>
                  <span className='text-end text-5xl text-white max-[87.8125rem]:text-4xl max-[64rem]:text-start'>
                     {item.subtitle}
                  </span>
               </li>
            ))}
         </ul>
      </div>
   );
};

export { HeroAbout };
