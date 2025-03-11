import { type FC } from "react";

import { footerSocialList } from "../data/footer-social";

const Footer: FC = () => {
   return (
      <footer className='10 col-span-12 w-full'>
         <section className='bg-skills mx-auto flex w-full max-w-[96.875rem] flex-col p-10 px-30 max-[90.0625rem]:px-18 max-[86.25rem]:px-10'>
            <h2 className='mb-10 text-7xl leading-[110%] font-semibold max-[90rem]:text-6xl'>
               Do you want to contact me?
            </h2>
            <ul className='relative flex items-center justify-end gap-8'>
               <h5 className='absolute left-0 text-4xl leading-[110%] font-medium max-[90rem]:text-3xl'>
                  Follow me
               </h5>
               {footerSocialList.map((item) => (
                  <li
                     key={item.id}
                     className='flex items-center justify-center rounded-full bg-sky-500/10 p-3'
                  >
                     {item.icon}
                  </li>
               ))}
            </ul>
         </section>
      </footer>
   );
};

export { Footer };
