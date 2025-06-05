export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  supervisor?: string;
  companyUrl?: string;
  manager?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2025 - Present",
    title: "Research Fellow",
    company: "University of Melbourne",
    description:
      "Work on LLM and geospatial understanding",
    supervisor: "Prof. Jianzhong Qi, Dr. Jey Han Lau",
    companyUrl: "https://unimelb.edu.au",
  },


  {
    date: "2020-2021",
    title: "Research Intern",
    company: "VinAI Research",
    description:
      "Worked on creating new resources for Vietnamese NLP",
    supervisor: "Dr. Dat Quoc Nguyen",
    companyUrl: "https://vinai.io",
  },
  {
    date: "Summer 2019",
    title: "Research Intern",
    company: "NII",
    description:
      "Worked on knowledge graph embedding for fact checking",
    supervisor: "Prof. Hideaki Takeda",
    companyUrl: "https://nii.ac.jp",
  },
];
