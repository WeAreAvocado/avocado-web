import About from "@/components/about";
import { getAboutData } from "@/lib/utils";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

const AboutPage = async () => {
  const aboutData = await getAboutData();

  return (
    <div className="flex flex-col before:w-screen items-center max-w-screen-xl 2xl:max-w-screen-2xl m-auto">
      {/* <div className="flex w-full flex-col md:flex-row gap-4 md:items-center">
        <div className="flex-1">hiiiiiiiiiiiiiiiiii</div>
        <div className="flex-1 w-full md:9/12 flex justify-center">
          <Image
            src="/assets/about/our-story.jpg"
            alt="Our Story"
            width={500}
            height={500}
            className="m-auto rounded-lg px-4"
          />
        </div>
      </div> */}
      <div
        className="min-w-full mt-36 md:mt-56 mb-24
        prose
        prose-headings:text-white
        prose-headings:font-semibold
        prose-h1:text-6xl
        md:prose-h1:text-7xl
        prose-h2:text-5xl
        md:prose-h2:text-6xl
        prose-h3:text-4xl
        md:prose-h3:text-5xl
        prose-h4:text-3xl
        md:prose-h4:text-4xl
        prose-h5:text-2xl
        md:prose-h5:text-3xl
        prose-h6:text-xl
        md:prose-h6:text-2xl
        prose-p:text-lg
        md:prose-p:text-xl
        prose-p:text-[#C7C7C7]
        prose-a:text-brand
        prose-ol:text-[#C7C7C7]
        prose-ul:text-[#C7C7C7]
        prose-li:text-[#C7C7C7]
        px-4
        "
      >
        <MDXRemote source={aboutData.content} />
      </div>
      <About isSeparatePage />
    </div>
  );
};

export default AboutPage;
