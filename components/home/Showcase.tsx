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
        <div className="position: relative; width: 100%; aspect-ratio: 53/30;">
          <iframe
            src="https://player.mux.com/6zh7K0100vmAhYx5YINzN6SPP01YzJV6w01mrRmpFH3FRP8?primary-color=%23ffffff&secondary-color=%23000000&accent-color=%23fa50b5"
            width={640}
            height={320}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
