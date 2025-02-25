import { LucideIcon, MagnetIcon } from "lucide-react";
import { title } from "process";
import { IconType } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";

export const FEATURES_EN = [
  {
    title: "R4S 6 Cylinder",
    image_url: "/images/R4S-6-cylinder.jpg",
    purchase_link:
      "https://app.fawaterk.com/invoices/item/11719/r4s-6-cylinder",
  },
  {
    title: "R4S8 Ultra HI Power",
    image_url: "/images/R4S8-Ultra.jpg",
    purchase_link:
      "https://app.fawaterk.com/invoices/item/11721/r4s8-ultra-hi-power",
  },
  {
    title: "R4S 4 Cylinder",
    image_url: "/images/R4S-4-Cylinder.png",
    purchase_link:
      "https://app.fawaterk.com/invoices/item/11720/r4s-4-cylinder",
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    image_url: string;
    purchase_link: string;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
};
