"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/client";
import { homeVideosQuery } from "@/sanity/queries";
import { PlayIcon } from "lucide-react";

type VideoItem = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
};

type SanityVideo = {
  _key: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
};

function AboutMoreSection() {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    let mounted = true;

    client.fetch(homeVideosQuery).then((data) => {
      if (!mounted) return;

      const items: VideoItem[] = (data?.videos ?? [])
        .map((v: SanityVideo) => ({
          id: v._key,
          title: v.title,
          url: v.videoUrl,          
          thumbnail: v.thumbnail,    
        }))
        .filter((v: VideoItem) => Boolean(v.url && v.thumbnail)); 

      setVideos(items.slice(0, 3));
    });

    return () => {
      mounted = false;
    };
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
          <button
            key={item.id}
            type="button"
            onClick={() => window.open(item.url, "_blank", "noopener,noreferrer")}
            className="relative group text-left"
            aria-label={`Play ${item.title}`}
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={600}
              height={304}
              className="w-full h-[304px] object-cover rounded-lg"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />

            <div
              className="absolute inset-0 flex items-center justify-center
                         opacity-100 transition-opacity"
            >
              <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                <PlayIcon className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default AboutMoreSection;
