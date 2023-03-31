import { ReactNode } from "react";

export interface NavItem {
  logo: ReactNode;
  label: string;
  path: string;
  newListing?: number | string;
}
