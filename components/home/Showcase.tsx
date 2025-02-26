import { showcases } from "@/config/showcases";
import { createModernMetaScraper, ModernMetaScraper } from "@/lib/metaScraper";
import { Spacer } from "@nextui-org/react";
import { RoughNotation } from "react-rough-notation";
import Video from "next-video";
const scraper: ModernMetaScraper = createModernMetaScraper();
const Showcase = async ({ id, locale }: { id: string; locale: any }) => {
  const sites = await scraper.scrapeMultiple(showcases);
  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-7xl items-center pt-16"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#DC2626">
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-500">{locale.description}</p>
      </div>
      <Spacer y={8} />
      <div className="flex items-center justify-center gap-4 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/kl0GOHwJsos?si=40RRGZW6eiLETCdz"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        >
        </iframe>
      </div>
    </section>
  );
};
export default Showcase;
