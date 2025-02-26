import { ALL_FEATURES } from "@/config/feature";
import Image from "next/image";
import React from "react";
import { RoughNotation } from "react-rough-notation";
import { Button } from "../ui/button";
import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";
const Feature = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FEATURES = ALL_FEATURES[`FEATURES_${langName.toUpperCase()}`];
  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 pt-16"
    >
      <h2 className="text-center text-white">
        <RoughNotation type="highlight" show={true} color="#DC2626">
          {locale.title}
        </RoughNotation>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES?.map((feature, index) => (
          <div
            key={feature.title}
            className={`
              flex flex-col items-center text-center px-8 py-6 border-b
              ${index === 0 ? "md:border-r" : ""}
              ${index === 1 ? "lg:border-r" : ""}
              ${index === 2 ? "md:border-r lg:border-r-0" : ""}
              ${index === 3 ? "lg:border-b-0 lg:border-r" : ""}
              ${index === 4 ? "md:border-b-0 md:border-r" : ""}
              ${index === 5 ? "border-b-0 border-r-0" : ""}
            `}
          >
            <div className="p-4 w-16 h-16 dark:text-white rounded-full flex items-center justify-center">
            </div>
            <h2 className={"text-xl font-semibold mb-2"}>{feature.title}</h2>
            <Link href={feature.video_url}>
              <Image
                src={feature.image_url}
                alt="product image"
                width={256}
                height={256}
                className="rounded-md"
              />
            </Link>
            <Link href={feature.purchase_link}>
              <Button className="m-2 bg-red-500 hover:bg-red-600">
                Purchase
              </Button>
            </Link>
            <Link href={feature.whatsapp_link}>
              <Button className="m-2 bg-green-500 hover:bg-green-600">
                <MdWhatsapp />
                Whatsapp
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Feature;
