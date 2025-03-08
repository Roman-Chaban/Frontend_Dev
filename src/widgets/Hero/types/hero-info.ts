type HeroInfoItem = {
   id: number;
   role: string;
   fullname: string;
   about: string;
};

type HeroInformationItems = Array<HeroInfoItem>;

export type { HeroInfoItem, HeroInformationItems };
