"use client";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { PROJECTS } from "@/data/info";
import Link from "next/link";
import Image from "next/image";

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {PROJECTS.map((project) => (
        <Link key={project.id} href={project.link} data-id={project.id}>
          <Card className="bg-zinc-50 dark:bg-zinc-950">
            <Image
              src={project.cover}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
              width={500}
              height={500}
              loading="eager"
            />
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
