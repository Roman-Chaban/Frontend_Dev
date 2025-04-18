import { Fragment, type FC } from "react";

import { ArrowIcon } from "@/shared/ui/ArrowIcon";

import { heroInformationItems } from "../data/hero-info";
import Link from "next/link";

export const HeroInformation: FC = () => {
   return (
      <div className='flex-3 max-[90rem]:flex-4 max-[62rem]:flex-2'>
         {heroInformationItems.map((item) => (
            <Fragment key={item.id}>
               <span className='inline-block pb-3 text-5xl font-semibold max-[86.25rem]:pb-5 max-[86.25rem]:text-4xl max-[26.5625rem]:text-3xl'>
                  {item.role}
               </span>
               <h1 className='after:bg-logo-after relative pb-8 text-[5rem] font-semibold after:absolute after:bottom-0 after:left-0 after:h-2 after:w-46.5 after:content-[""] max-[86.25rem]:text-6xl max-[26.5625rem]:text-4xl'>
                  {item.fullname}
               </h1>
               <p className='pt-10 text-justify text-[1.125rem] max-[86.25rem]:text-[0.9rem]'>
                  {item.about}
               </p>
               <button className='text-logo-after flex w-full max-w-fit items-center gap-24 pt-15 text-start text-[1.25rem]'>
                  <Link className="flex items-center gap-5" href={"https://t.me/romanchaban"} target='_blank'>
                     Le&apos;ts talk <ArrowIcon />
                  </Link>
               </button>
            </Fragment>
         ))}
      </div>
   );
};
