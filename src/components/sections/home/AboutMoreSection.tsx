import { useEffect, useState } from "react";

import { client } from "@/sanity/client";
import { homeVideosQuery } from "@/sanity/queries";
import { mapSanityVideosToCarouselItems } from "@/lib/homeAdapter";
import { PlayIcon } from "lucide-react";

function AboutMoreSection() {
  const [videos, setVideos] = useState<
    { id: string; title: string; url?: string; thumbnail: string }[]
  >([]);

  useEffect(() => {
    client.fetch(homeVideosQuery).then((data) => {
      const items = mapSanityVideosToCarouselItems(data?.videos ?? []);
      setVideos(items.slice(0, 3));
    });
  }, []);

  if (!videos.length) return null;

  return (
    <section className="relative md:mx-10 mx-5 md:mt-12 mt-24 mb-10">
      <div className="mb-8">
        <h2 className="text-body-lg text-primary mb-2">
          Find Out More About Us
        </h2>
        <hr className="border-t border-main border-muted-foreground/50" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((item) => (
          <div key={item.id} className="relative group">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-[304px] object-cover rounded-lg"
              loading="lazy"
            />
            <button
              type="button"
              className="
                absolute inset-0 
                flex items-center justify-center
                opacity-100
                transition-opacity
              "
              aria-label={`Play ${item.title}`}
            >
              <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                <PlayIcon className="w-6 h-6 text-white ml-1" />
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutMoreSection;
