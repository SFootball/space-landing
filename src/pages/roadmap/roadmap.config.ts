import { RoadmapItemType } from "./roadmap.types";

export const roadmapItems: RoadmapItemType[] = [
  {
    date: new Date(2024, 3, 25),
    title: "Q1 2024",
    badgeColor: "green",
    description:
      "Develop additional features, such as player profiles, game analytics, and integration with social media. Create smart contract for nft reward for football players and other users. Build telegram mini app.",
  },
  {
    date: new Date(2024, 4, 27),
    title: "Q2 2024",
    badgeColor: "blue",
    description:
      "Start design user interface and experience for the app. Prepare backend architecture, infrastructure. Start the development of the backend that integrates with the TON blockchain for NFT and app token distribution.",
  },
  {
    date: new Date(2024, 5, 3),
    title: "Q2 2024",
    badgeColor: "yellow",
    description:
      "Brainstorm and finalize the core idea of using a Telegram mini-app for player recruitment and incentives via blockchain. Define target audience and recruitment criteria for football players. Identify technical requirements and potential challenges.",
  },
];
