import { LucideIcon, MagnetIcon } from "lucide-react";
import { title } from "process";
import { IconType } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";
export const FEATURES_EN = [
  {
    title: "Energy Booster",
    image_url: "/images/energy-booster.jpeg",
    whatsapp_link: "https://wa.me/201289792007",
    video_url:
      "https://www.youtube.com/playlist?list=PL5rqmfVWIkhmw1gIZKHM84i5tNOCXgTXL",
    purchase_link: "https://app.fawaterk.com/store/energy-booster",
  },
  {
    title: "Electric Generator",
    image_url: "/images/Elictric-Generator.jpg",
    whatsapp_link: "https://wa.me/201148788383",
    video_url:
      "https://www.youtube.com/playlist?list=PL5rqmfVWIkhmggbB10pFzQR6Nopmtekvs",
    purchase_link: "https://app.fawaterk.com/store/electric-generator",
  },
  {
    title: "Power Factor And Protection",
    image_url: "/images/Power-Factore.jpg",
    whatsapp_link: "https://wa.me/201148788383",
    video_url:
      "https://www.youtube.com/playlist?list=PL5rqmfVWIkhk9biT_R9bYEj4SHMMXEpNO",
    purchase_link: "https://app.fawaterk.com/store/power-factor",
  },
];
interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    image_url: string;
    video_url: string;
    whatsapp_link: string;
    purchase_link: string;
  }[];
}
export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
};
