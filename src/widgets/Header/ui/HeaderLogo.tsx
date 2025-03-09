import { type FC } from "react";

const HeaderLogo: FC = () => {
   return (
      <div className='relative z-50 col-span-2'>
         <span className='content text-header-logo after:bg-header-logo-after relative text-[2rem] font-bold uppercase after:absolute after:top-[0.5rem] after:right-[-0.7rem] after:inline-block after:h-[0.5rem] after:w-[0.5rem] after:rounded-[100%] after:content-[""]'>
            Chaban
         </span>
      </div>
   );
};

export { HeaderLogo };
