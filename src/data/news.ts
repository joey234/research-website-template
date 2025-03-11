export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "Jan 2025",
    title: "New position",
    description: "I started as a postdoc at the University of Melbourne, working with Jianzhong Qi and Jey Han Lau on spatial understanding of language models.",
    // link: "https://icml.cc/",
  }
];
