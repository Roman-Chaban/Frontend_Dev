import { JSX } from "react";

interface SocialItem {
   id: number;
   icon: JSX.Element;
}

type SocialItems = Array<SocialItem>;

export type { SocialItem, SocialItems };
