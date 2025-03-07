import { type FC } from "react";

const HeaderLogo: FC = () => {
   return (
      <div className='col-span-2'>
         <span className='content relative text-[2rem] font-bold text-[#e5e5e5] uppercase after:absolute after:top-[0.5rem] after:right-[-0.7rem] after:inline-block after:h-[0.5rem] after:w-[0.5rem] after:rounded-[100%] after:bg-[#f8e7a1] after:content-[""]'>
            Chaban
         </span>
      </div>
   );
};

export { HeaderLogo };
