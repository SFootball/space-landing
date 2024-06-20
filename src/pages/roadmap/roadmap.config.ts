import { RoadmapItemType } from "./roadmap.types";

export const roadmapItems: RoadmapItemType[] = [
  {
    date: new Date(2024, 3, 25),
    title: "Q1 2024",
    badgeColor: "green",
    description:
      "Developing additional features, such as player profiles, game analytics, and integration with social media. Creating smart contract for nft reward for football players and other users. Building telegram mini app.",
  },
  {
    date: new Date(2024, 4, 27),
    title: "Q2 2024",
    badgeColor: "blue",
    description:
      "Started design user interface and experience for the app. Prepared backend architecture, infrastructure. Started the development of the backend that integrates with the TON blockchain for NFT and app token distribution.",
  },
  {
    date: new Date(2024, 5, 3),
    title: "Q2 2024",
    badgeColor: "yellow",
    description:
      "Brainstorm and refining the core idea of using a Telegram mini-app for player recruitment and incentives via blockchain. Definihion target audience and recruitment criteria for football players. Identification technical requirements and potential challenges.",
  },
];
