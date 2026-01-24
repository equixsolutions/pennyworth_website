import  { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: Record<string, unknown>) {
  return builder.image(source);
}
