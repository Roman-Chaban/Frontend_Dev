import { type FC } from "react";

import { heroAboutList } from "../data/hero-about";

export const HeroAbout: FC = () => {
   return (
      <div className='relative z-20 flex-1'>
         <ul className='flex h-full flex-col justify-between gap-[5.8125rem] max-[51.5rem]:flex-row max-[37rem]:flex-col max-[37rem]:gap-[3rem]'>
            {heroAboutList.map((item) => (
               <li
                  key={item.id}
                  className='flex flex-col items-start gap-3 max-[86.25rem]:items-start max-[62rem]:items-end max-[51.5rem]:items-start'
               >
                  <span className='text-2xl max-[86.25rem]:text-xl max-[51.5rem]:min-h-[3.3rem] max-[37rem]:text-2xl'>
                     {item.title}
                  </span>
                  <h3 className='text-start text-5xl max-[86.25rem]:text-3xl max-[62rem]:text-end max-[51.5rem]:text-start max-[37rem]:text-4xl'>
                     {item.subtitle}
                  </h3>
               </li>
            ))}
         </ul>
      </div>
   );
};
