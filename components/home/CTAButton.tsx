import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";
const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="#products"
      target="_blank"
      rel="noopener noreferrer nofollow"
      scroll={true}
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white"
        aria-label="Get Boilerplate"
      >
        <RocketIcon />
        {locale.title}
      </Button>
    </Link>
  );
};
export default CTAButton;
