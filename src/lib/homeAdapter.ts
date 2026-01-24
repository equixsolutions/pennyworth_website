import { urlFor } from "@/sanity/image";

export function mapSanityEngagementsToCarouselItems(engagements: any[] = []) {
  return engagements.map((e) => ({
    id: e._key,
    title: e.title ?? "",
    image: e.image ? urlFor(e.image).width(800).quality(80).url() : "",
  }));
}



export function mapSanityVideosToCarouselItems(videos: any[] = []) {
  return videos.map((v) => ({
    id: v._key,
    title: v.title ?? "",
    videoUrl: v.videoUrl,
    thumbnail: v.thumbnail
      ? urlFor(v.thumbnail).width(800).quality(80).url()
      : "",
  }));
}
