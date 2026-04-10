import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import ProjectList from "@/components/project-list";

const Cover = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure>
    <Image src={src} alt={alt} width={1200} height={630} className="rounded-xl" loading="eager" />
    <figcaption className="text-center">{caption}</figcaption>
  </figure>
);

const Img = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure>
    <Image src={src} alt={alt} width={1920} height={1080} className="rounded-xl" loading="lazy" />
    <figcaption className="text-center">{caption}</figcaption>
  </figure>
);

export const mdxComponents: MDXComponents = {
  Cover,
  Img,
  ProjectList,
  p: ({ children }: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-4 text-zinc-600 dark:text-zinc-400">{children}</p>
  ),
  ul: ({ children }: ComponentPropsWithoutRef<"ul">) => (
    <ul className="paragraph mb-4 list-inside list-disc space-y-1">{children}</ul>
  ),
  li: ({ children }: ComponentPropsWithoutRef<"li">) => (
    <li className="mb-2 text-zinc-600 dark:text-zinc-400">{children}</li>
  ),
};
