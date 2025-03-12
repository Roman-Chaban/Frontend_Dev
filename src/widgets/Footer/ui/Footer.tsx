import { type FC } from "react";

import Link from "next/link";

import { footerSocialList } from "../data/footer-social";

const Footer: FC = () => {
   return (
      <footer className='bg-skills relative col-span-12 w-full'>
         <section className='mx-auto flex w-full max-w-[96.875rem] flex-col p-10 px-30 max-[90.0625rem]:px-18 max-[86.25rem]:px-10 max-[30.8125rem]:px-5'>
            <h2 className='relative z-100 mb-10 text-7xl leading-[110%] font-semibold max-[90rem]:text-6xl max-[51.5rem]:text-5xl max-[31.3125rem]:pb-15 max-[26.5625rem]:text-2xl'>
               Do you want to contact me?
            </h2>
            <ul className='relative flex items-center justify-end gap-8 max-[35.875rem]:gap-4 max-[31.3125rem]:justify-start'>
               <h5 className='absolute left-0 text-4xl leading-[110%] font-medium max-[90rem]:text-3xl max-[31.3125rem]:bottom-20 max-[26.5625rem]:text-2xl'>
                  Follow me
               </h5>
               {footerSocialList.map((item) => (
                  <li
                     key={item.id}
                     className='flex items-center justify-center rounded-full bg-sky-500/10 p-3'
                  >
                     <Link target={"_blank"} href={item.href}>
                        {item.icon}
                     </Link>
                  </li>
               ))}
            </ul>
         </section>
      </footer>
   );
};

export { Footer };
