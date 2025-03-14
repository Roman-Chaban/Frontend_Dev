import { type FC } from "react";

import Link from "next/link";

import { PATHS } from "@/shared/enums/paths";

export const HeaderLogo: FC = () => {
   return (
      <div className='relative z-50 max-w-fit'>
         <span className='after:bg-logo-after relative flex justify-end gap-1 text-3xl font-semibold uppercase after:absolute after:top-1.5 after:right-[-12] after:h-2 after:w-2 after:rounded-[100%] after:content-[""]'>
            <Link href={PATHS.HOME}>Chaban</Link>
         </span>
      </div>
   );
};
