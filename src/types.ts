export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

export interface AboutMeProps {
  id: number;
  documentId: string;
  headline: string;
  subheadline: string;
  detail: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  profile_photo: ImageProps;
}

export interface SkillProps {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SkillCategoriesProps {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  skills: SkillProps[];
}

export interface ProjectsProps {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  description: string;
  demoLink: string;
  gitHubLink: string;
  year: string;
  skills: SkillProps[];
  pictures: ImageProps[];
}

export interface ExperiencesProps {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  company: string;
  titles: string;
  description: string;
  period: string;
}
