type Project = {
  name: string;
  description: string;
  link: string;
  cover: string;
  id: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Gallery",
    description: "Photo gallery to display a small collection of photos you're proud of.",
    link: "/photography",
    cover: "/images/gallery-preview.png",
    id: "p1",
  },
];
