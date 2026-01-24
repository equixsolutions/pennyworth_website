import { urlFor } from "@/sanity/image";

interface SanityEngagement {
  _key: string;
  title?: string;
  image?: { asset: { _ref: string } };
}

interface SanityVideo {
  _key: string;
  title?: string;
  videoUrl: string;
  thumbnail?: { asset: { _ref: string } };
}

export function mapSanityEngagementsToCarouselItems(engagements: SanityEngagement[] = []) {
  return engagements.map((e) => ({
    id: e._key,
    title: e.title ?? "",
    image: e.image ? urlFor(e.image).width(800).quality(80).url() : "",
  }));
}



export function mapSanityVideosToCarouselItems(videos: SanityVideo[] = []) {
  return videos.map((v) => ({
    id: v._key,
    title: v.title ?? "",
    videoUrl: v.videoUrl,
    thumbnail: v.thumbnail
      ? urlFor(v.thumbnail).width(800).quality(80).url()
      : "",
  }));
}
