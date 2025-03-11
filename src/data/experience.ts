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
  // {
  //   date: "2023-2024",
  //   title: "Research Assistant",
  //   company: "University of Melbourne",
  //   description:
  //     "Worked on a project about benchmarking LLM robustness to linguistic changes",
  //   supervisor: "Dr. Jey Han Lau",
  //   companyUrl: "https://unimelb.edu.au",
  // },

  
  {
    date: "2022-2024",
    title: "Teaching Assistant",
    company: "University of Melbourne",
    description:
      "Head tutor for the course NLP for Health",
    supervisor: "Prof. Mike Conway",
    companyUrl: "https://handbook.unimelb.edu.au/2023/subjects/comp90090",
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
  // {
  //   date: "Summer 2019",
  //   title: "Research Intern",
  //   company: "NII",
  //   description:
  //     "Worked on knowledge graph embedding for fact checking",
  //   supervisor: "Prof. Hideaki Takeda",
  //   companyUrl: "https://nii.ac.jp",
  // },
];
