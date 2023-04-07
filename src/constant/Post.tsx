import Attach from "@components/Icons/Attach";
import Camera from "@components/Icons/Camera";
import Comment from "@components/Icons/Comment";
import Image from "@components/Icons/Image";
import Location from "@components/Icons/Location";
import Share from "@components/Icons/Share";
import Smile from "@components/Icons/Smile";
import ThumbUp from "@components/Icons/ThumbUp";
import { Button, CreatePostIconProps } from "src/models/Post";

export const createPostIconData: CreatePostIconProps[] = [
  {
    icon: <Camera />,
  },
  {
    icon: <Image />,
  },
  {
    icon: <Attach />,
  },
  {
    icon: <Location />,
  },
  {
    icon: <Smile />,
  },
];

export const buttons: Button[] = [
  {
    icon: <ThumbUp />,
    label: "Like",
    count: "1.7k",
    activeColor: true,
  },
  {
    icon: <Comment />,
    label: "Comment",
    count: "29",
  },
  {
    icon: <Share />,
    label: "Share",
    count: "11",
  },
];
