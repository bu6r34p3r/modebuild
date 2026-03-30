export interface Product {
  name: string;
  tagline: string;
  description: string;
  url?: string;
  type: "live" | "deployed" | "app";
}

export const products: Product[] = [
  {
    name: "Brokerlytics",
    tagline: "M&A analytics platform",
    description: "Analytics and insights platform built for business brokers and M&A advisors. Streamlines deal analysis and valuation workflows.",
    url: "https://brokerlytics.io",
    type: "live",
  },
  {
    name: "DemandDrop",
    tagline: "Demand validation tool",
    description: "Validate product demand before you build. Scans real market signals to tell you if people actually want what you're planning to create.",
    url: "https://demanddrop.io",
    type: "live",
  },
  {
    name: "NameDropped",
    tagline: "LLM visibility monitor",
    description: "Find out if AI assistants like ChatGPT, Claude, and Perplexity are recommending your product. Track your visibility across LLMs.",
    url: "https://namedropped.io",
    type: "live",
  },
  {
    name: "Reddit Miner",
    tagline: "SaaS idea finder",
    description: "Find validated SaaS ideas from Reddit complaints in 60 seconds. AI analyzes pain points, scores opportunities, and generates MVP specs.",
    type: "live",
  },
  {
    name: "PetDose",
    tagline: "Pet medication tracker",
    description: "iOS app for pet owners to track medications with smart reminders. AI-powered prescription scanning and one-tap dose logging.",
    type: "app",
  },
  {
    name: "Enterprise AI Chatbots",
    tagline: "2 chatbots deployed for real businesses",
    description: "Built and deployed AI chatbots connected to SharePoint and internal documentation. Powered by Claude API. Made company knowledge searchable and interactive for entire teams.",
    type: "deployed",
  },
];
