import Gallery from "@/components/gallery";
import { getGalleryImages } from "@/lib/getGalleryImages";

export default function GalleryPage() {
  const images = getGalleryImages();
  return <Gallery images={images} />;
}
