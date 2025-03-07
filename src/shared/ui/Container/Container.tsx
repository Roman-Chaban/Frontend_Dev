import { type FC } from "react";

import { ContainerProps } from "@/entities/interfaces/container";

const Container: FC<ContainerProps> = ({ children, className = "" }) => {
   return (
      <div className={`grid h-full w-full grid-cols-12 ${className}`}>
         {children}
      </div>
   );
};

export { Container };
