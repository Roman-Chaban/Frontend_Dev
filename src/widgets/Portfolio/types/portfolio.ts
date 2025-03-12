interface PortfolioProject {
   id: number;
   projectName: string;
   projectDescription: string;
   projectLink: string;
   projectImage: string;
}

type PortfolioProjects = Array<PortfolioProject>;

export type { PortfolioProject, PortfolioProjects };
