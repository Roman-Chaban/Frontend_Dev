import { type FC } from "react";

import { heroAboutList } from "../data/hero-about";

const HeroAbout: FC = () => {
   return (
      <div className='relative z-50'>
         <ul className='flex flex-col items-end justify-end gap-[5rem] max-[71.875rem]:gap-[2rem]'>
            {heroAboutList.map((item) => (
               <li
                  key={item.id}
                  className='w-fit-content flex flex-col items-end justify-end gap-[1rem] max-[71.875rem]:gap-[0.7rem]'
               >
                  <h4 className='max-[90rem] text-right text-[1.5rem] text-[#868490]'>
                     {item.title}
                  </h4>
                  <p className='max-w-[15rem] text-center text-[3rem] text-white max-[90rem]:text-end max-[90rem]:text-[2rem]'>
                     {item.subtitle}
                  </p>
               </li>
            ))}
         </ul>
      </div>
   );
};

export { HeroAbout };
