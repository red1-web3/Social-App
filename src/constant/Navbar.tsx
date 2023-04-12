import Community from "@components/Icons/Community";
import Event from "@components/Icons/Event";
import Home from "@components/Icons/Home";
import NewsFeed from "@components/Icons/NewsFeed";
import Suitcase from "@components/Icons/Suitcase";
import { NavItem } from "src/models/Navbar";

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    logo: <Home />,
    path: "/",
  },
  {
    label: "Community",
    logo: <Community />,
    path: "/community",
  },
  {
    label: "Marketplace",
    logo: <Suitcase />,
    path: "/marketplace",
    newListing: 4,
  },
  {
    label: "Events",
    logo: <Event />,
    path: "/events",
  },
  {
    label: "News feed",
    logo: <NewsFeed />,
    path: "/feed",
  },
];
