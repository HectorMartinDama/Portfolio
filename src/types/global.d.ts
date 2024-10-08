export type Project = {
  title: string;
  description: string;
  date: string;
  technologies: string[];
  repository?: string;
  deploy: string;
  article?: string;
  image: Image;
};

export type Entry = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    layout: string;
    title: string;
    date: string;
    author: string;
    image: Image;
    description: string;
    draf: boolean;
    category: string;
  };
};

export type Experience = {
  date: string;
  title: string;
  workMode: WorkMode;
  company: string;
  responsibilities: string[];
};

export type WorkMode = "On Site" | "Remote";

interface ResponseData {
  englishDocsEntries: Entry[];
}

export type Image = {
  src: string;
  alt: string;
};
