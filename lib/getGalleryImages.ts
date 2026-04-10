import fs from "fs";
import path from "path";

const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];

export interface GalleryImage {
  src: string;
  index: number;
}

export function getGalleryImages(): GalleryImage[] {
  const photosDirectory = path.join(process.cwd(), "public/photos");

  if (!fs.existsSync(photosDirectory)) {
    fs.mkdirSync(photosDirectory, { recursive: true });
    return [];
  }

  const filenames = fs.readdirSync(photosDirectory);

  return filenames
    .filter((file) => SUPPORTED_EXTENSIONS.includes(path.extname(file).toLowerCase()))
    .map((file, index) => ({
      src: `/photos/${file}`,
      index,
    }));
}
