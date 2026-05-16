"use client";
import { InView } from "@/components/ui/in-view";
import { motion } from "motion/react";
import { MorphingDialog, MorphingDialogTrigger, MorphingDialogContent, MorphingDialogClose, MorphingDialogImage, MorphingDialogContainer } from "@/components/ui/morphing-dialog";
import { XIcon } from "lucide-react";
import { ImageKitProvider, buildSrc } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

export default function Photography({ images }: { images: { path: string; name: string }[] }) {
  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <div className="h-full w-full overflow-auto">
        <div className="flex justify-center pb-12">
          <InView
            viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.09 },
              },
            }}
          >
            <div className="columns-2 gap-4 px-8 sm:columns-3">
              {images.map(({ path, name }) => {
                const thumbnailSrc = buildSrc({
                  urlEndpoint,
                  src: path,
                });

                const fullSrc = buildSrc({
                  urlEndpoint,
                  src: path,
                });

                return (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                      visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                    }}
                    key={path}
                    className="mb-4"
                  >
                    <MorphingDialog transition={{ duration: 0.3, ease: "easeInOut" }}>
                      <MorphingDialogTrigger>
                        <MorphingDialogImage src={thumbnailSrc} alt={name} className="max-w-lg rounded-lg size-full object-contain" />
                      </MorphingDialogTrigger>
                      <MorphingDialogContainer>
                        <MorphingDialogContent className="relative">
                          <MorphingDialogImage src={fullSrc} alt={name} className="h-auto w-full max-w-[90vw] rounded-lg object-cover lg:h-[90vh]" />
                        </MorphingDialogContent>
                        <MorphingDialogClose
                          className="fixed right-6 top-6 h-fit w-fit rounded-full p-1"
                          variants={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
                            exit: { opacity: 0, transition: { duration: 0 } },
                          }}
                        >
                          <XIcon className="h-5 w-5 text-zinc-500" />
                        </MorphingDialogClose>
                      </MorphingDialogContainer>
                    </MorphingDialog>
                  </motion.div>
                );
              })}
            </div>
          </InView>
        </div>
      </div>
    </ImageKitProvider>
  );
}
