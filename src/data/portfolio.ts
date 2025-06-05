export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Name translator",
    description:
      "A tool for finding ``equivalent names'' (similar in meaning or pronunciation) in other languages.",
    projectUrl: "https://yournamein.xyz",
    imageUrl:
      "/images/yournameinxyz.png",
  },
];
