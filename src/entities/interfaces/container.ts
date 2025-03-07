import { type ReactNode, HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
}
