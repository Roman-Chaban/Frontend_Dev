import { FC } from "react";

const BurgerButton: FC<{ onClick: () => void; isOpen: boolean }> = ({
   onClick,
   isOpen,
}) => {
   return (
      <button
         className='relative z-20 hidden h-8 w-10 cursor-pointer flex-col items-center justify-center gap-1 max-[62rem]:flex'
         onClick={onClick}
         aria-label='Toggle menu'
      >
         <span
            className={`h-1 w-7 rounded-2xl bg-white transition-transform duration-300 ${
               isOpen ? "translate-y-2 rotate-45" : ""
            }`}
         ></span>
         <span
            className={`h-1 w-7 rounded-2xl bg-white transition-opacity duration-300 ${
               isOpen ? "opacity-0" : ""
            }`}
         ></span>
         <span
            className={`h-1 w-7 rounded-2xl bg-white transition-transform duration-300 ${
               isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
         ></span>
      </button>
   );
};

export { BurgerButton };
