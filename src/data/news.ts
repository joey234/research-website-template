export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "Mar 2025",
    title: "New preprint",
    description: "FLUKE: A Linguistically-Driven and Task-Agnostic Framework for Robustness Evaluation",
    link: "https://fluke-nlp.github.io/",
    // link: "https://icml.cc/",
  },

  {
    date: "Jan 2025",
    title: "New position",
    description: "I started as a postdoc at the University of Melbourne, working with Jianzhong Qi and Jey Han Lau on spatial understanding of language models.",
    // link: "https://icml.cc/",
  }
];
