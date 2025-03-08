import { Fragment, type FC } from "react";

import { heroInformationItems } from "../data/hero-info";

const HeroInformation: FC = () => {
   return (
      <article className='relative z-60 w-full max-[90rem]:max-w-[37.5rem]'>
         {heroInformationItems.map((item) => (
            <Fragment key={item.id}>
               <span className='inline-block pb-[0.75rem] text-[2.9375rem] font-bold text-[#868490] max-[71.875rem]:text-[2rem]'>
                  {item.role}
               </span>
               <h1 className='relative pb-[2rem] text-[5rem] font-bold text-white after:absolute after:bottom-0 after:left-0 after:inline-block after:h-[0.5rem] after:w-[8.625rem] after:bg-[#f8e7a1] after:content-[""] max-[75rem]:text-[3.5rem] max-[71.875rem]:text-[3rem]'>
                  {item.fullname}
               </h1>
               <p className='pt-[2.5rem] text-justify text-[1.25rem] leading-[180%] text-white max-[90rem]:max-w-[30rem] max-[75rem]:text-[0.9rem]'>
                  {item.about}
               </p>
            </Fragment>
         ))}
      </article>
   );
};

export { HeroInformation };
