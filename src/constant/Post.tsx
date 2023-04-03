import Attach from "@components/Icons/Attach";
import Camera from "@components/Icons/Camera";
import Image from "@components/Icons/Image";
import Location from "@components/Icons/Location";
import Smile from "@components/Icons/Smile";
import { CreatePostIconProps } from "src/models/Post";

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
