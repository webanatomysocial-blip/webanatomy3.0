import case2 from "../works/Work-images/Theat.png";
import case3 from "../works/Work-images/togglenow.png";
import case4 from "../works/Work-images/Pied.png";
import sase from "../works/Work-images/sase.png";
import { FiArrowUpRight, FiStar, FiActivity, FiBriefcase, FiHeart } from "react-icons/fi";


export const worksMetadata = [
  {
    id: "ToggleNow",
    title: "ToggleNow - Transforming Project Management",
    category: "UI/UX",
    description: "ToggleNow is a comprehensive SaaS platform designed to streamline project management, team collaboration, and business automation.",
    image: case3,
    slug: "togglenow",
    icon: FiArrowUpRight,
    logoImage: null, // Add your logo import here
  },
  {
    id: "threatsenseai",
    title: "ThreatSenseAI",
    category: "Branding",
    description: "ThreatSenseAI is a comprehensive SaaS platform designed to streamline project management, team collaboration, and business automation.",
    image: case2,
    slug: "threatsenseai",
    icon: FiActivity,
    logoImage: null, // Add your logo import here
  },
  {
    id: "TheSase",
    title: "TheSase - Transforming Project Management",
    category: "UI/UX",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: sase,
    slug: "thesase",
    icon: FiBriefcase,
    logoImage: null, // Add your logo import here
  },
  {
    id: "piedpippers",
    title: "The Pied Piper: A Children's Club",
    category: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: case4,
    slug: "pied-piper",
    icon: FiStar,
    logoImage: null, // Add your logo import here
  },
  {
    id: 4,
    title: "HealthConnect: Telemedicine Platform",
    category: "UI/UX",
    hasPopup: true,
    description: "Joyalukkas is a renowned jewelry brand known for its exquisite designs and craftsmanship. We helped them expand their reach through a modern e-commerce platform.",
    image: case2,
    slug: "health-connect",
    icon: FiHeart,
    logoImage: null, // Add your logo import here
  },
  
];
