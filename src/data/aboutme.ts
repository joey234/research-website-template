export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Thinh Hung Truong",
  title: "Research Fellow",
  institution: "University of Melbourne",
  // Note that links work in the description
  description:
    "I'm a Research Fellow at the University of Melbourne.\n\nMy research focus is about exploring niche capabilities of LLMs (past: negation, now: geo-spatial).\n\nI also build apps on the side, check out my `vibe-coding' projects below.",
  email: "truonghungthinh21@gmail.com",
  imageUrl:
    "/images/profile_crop.JPG",
  googleScholarUrl: "https://scholar.google.com/citations?user=EWUVMr4AAAAJ&hl=en",
  githubUsername: "joey234",
  twitterUsername: "ththinh_",
  blogUrl: "https://joey234.github.io",
  // cvUrl: "https://",
  institutionUrl: "https://www.unimelb.edu.au",
  // altName: "",
  // secretDescription: "I like dogs.",
};
