export interface ResumeSectionsInterface {
  type: string;
  title: string;
  blocks: {
    subtitle: string;
    subtexts: string[];
  }[];
}

export const resumeSectionsArray:ResumeSectionsInterface[] = [
  {
    type: "infoblock",
    title: "matyskin maxim",
    blocks: [
      {
        subtitle: "professional status",
        subtexts: [
          "unemployed junior front-end developer"
        ]
      }
    ]
  },
  {
    type: "infoblock",
    title: "languages",
    blocks: [
      {
        subtitle: "languages",
        subtexts: [
          "russian — native",
          "english — upper-intermediate"
        ]
      },
      {
        subtitle: "programming languages",
        subtexts: [
          "javascript",
          "typescript"
        ]
      },
      {
        subtitle: "domain-specific languages",
        subtexts: [
          "angular",
          "sqilte3"
        ]
      }
    ]
  },
  {
    type: "infoblock",
    title: "skills",
    blocks: [
      {
        subtitle: "hard skills",
        subtexts: [
          "html / pug",
          "css / scss",
          "readymag / figma",
          "adobe ps",
          "webpack",
          "git cli"
        ]
      }
    ]
  }
]