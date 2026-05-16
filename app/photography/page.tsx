import { getAllImages } from "@/lib/imagekit";
import Photography from "@/components/photography/photography";

export default async function Home() {
  const images = await getAllImages();
  return <Photography images={images} />;
}
