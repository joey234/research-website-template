export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021—2024",
    institution: "University of Melbourne",
    degree: "Ph.D. in Engineering & IT",
    advisor: "Prof. Timothy Baldwin, Prof. Karin Verspoor, Prof. Trevor Cohn",
    thesis: "Negation understanding in NLP"
  },
  {
    year: "2014—2018",
    institution: "Ho Chi Minh City University of Science",
    degree: "B.S. in Computer Science",
    // thesis: "Improving Vietnamese NER",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
