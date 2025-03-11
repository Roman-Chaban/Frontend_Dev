import { type FC } from "react";

import { heroAboutList } from "../data/hero-about";

const HeroAbout: FC = () => {
   return (
      <div className='relative z-20 flex-1'>
         <ul className='flex h-full flex-col justify-between gap-[5.8125rem]'>
            {heroAboutList.map((item) => (
               <li
                  key={item.id}
                  className='flex flex-col items-end gap-3 max-[86.25rem]:items-start'
               >
                  <span className='text-2xl max-[86.25rem]:text-xl'>
                     {item.title}
                  </span>
                  <h3 className='text-start text-5xl max-[86.25rem]:text-3xl'>
                     {item.subtitle}
                  </h3>
               </li>
            ))}
         </ul>
      </div>
   );
};

export { HeroAbout };
