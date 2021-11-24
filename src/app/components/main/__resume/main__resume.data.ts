export interface ResumeSectionsInterface {
  title: string;
  blocks: {
    subtitle: string;
    subtexts: string[];
  }[];
}

export const resumeSectionsArray = [
  {
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