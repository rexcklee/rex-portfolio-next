"use client";
import { AboutMeProps } from "@/types";
import { StrapiImage } from "../StrapiImage";
import ReactMarkdown from "react-markdown";
import { TypeAnimation } from "react-type-animation";
import { playwrite } from "@/app/fonts";

export function AboutMeSection({
  aboutMe,
}: {
  aboutMe: Readonly<AboutMeProps>;
}) {
  return (
    <section
      id="about_me"
      className="flex flex-col justify-center items-center p-6 sm:p-16 w-full min-h-screen"
    >
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          `${aboutMe.headline}`,
          1000, // wait 1s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        speed={50}
        className={`${playwrite.className} text-highlight text-2xl sm:text-5xl mb-8`}
        repeat={Infinity}
      />
      <h2 className="text-second text-2xl md:text-4xl mb-5">
        {aboutMe.subheadline}
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center max-w-5xl">
        <div className="">
          <StrapiImage
            src={aboutMe.profile_photo.url}
            alt={
              aboutMe.profile_photo.alternativeText ||
              "No alternative text provided"
            }
            width={400}
            height={400}
            className="h-72 w-72 mx-auto sm:mx-10 object-cover rounded-full opacity-80"
          />
        </div>
        <div className="py-5 text-lg text-justify basis-2/3">
          <ReactMarkdown>{aboutMe.detail}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
