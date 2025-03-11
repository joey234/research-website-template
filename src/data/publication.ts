export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2024",
    conference: "NAACL",
    title: "Revisiting subword tokenization: A case study on affixal negation in large language models",
    authors: "Thinh Hung Truong, Yulia Otmakhova, Karin Verspoor, Trevor Cohn, Timothy Baldwin",
    paperUrl: "https://arxiv.org/abs/2404.02421",
    codeUrl: "https://github.com/joey234/affixal-negation",
    tldr: "We study the effect of subword tokenization on the understanding of affixal negation in large language models.",
    imageUrl:
      "/images/affixal.png",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "*SEM",
    title: "Language models are not naysayers: An analysis of language models on negation benchmarks",
    authors: "Thinh Hung Truong, Timothy Baldwin, Karin Verspoor, Trevor Cohn",
    paperUrl: "https://arxiv.org/abs/2306.08189",
    codeUrl: "https://github.com/joey234/llm-neg-bench",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "We benchmark negation understanding capabilities of LLMs.",
    imageUrl:
      "/images/naysayer.png",
    award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2022",
    conference: "AACL",
    title: "Not another Negation Benchmark: The NaN-NLI Test Suite for Sub-clausal Negation",
    authors: "Thinh Hung Truong, Yulia Otmakhova, Timothy Baldwin, Trevor Cohn, Jey Han Lau, Karin Verspoor",
    paperUrl: "https://arxiv.org/abs/2210.03256",
    codeUrl: "https://github.com/joey234/nan-nli",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "We introduce a new benchmark for sub-clausal negation, where negation is not at the clause level.",
    imageUrl:
      "/images/nan-nli.png",
    award: "🏆 Best Paper Award - Runner Up",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },

];
