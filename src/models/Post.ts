import { ReactNode } from "react";

export interface CreatePostIconProps {
  icon: ReactNode;
}
export interface Button {
  icon: JSX.Element;
  label: string;
  count: string;
  activeColor?: boolean;
}
