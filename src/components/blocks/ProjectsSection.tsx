"use client";
import { ProjectsProps } from "@/types";
import { StrapiImage } from "../StrapiImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCube } from "swiper/modules";
import "swiper/css/bundle";
import { playwrite } from "@/app/fonts";
import { FaGithub, FaLink } from "react-icons/fa6";

export function ProjectsSection({
  projects,
}: {
  projects: Readonly<ProjectsProps[]>;
}) {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center p-6 sm:p-16 w-full min-h-screen"
    >
      <h2
        className={`${playwrite.className} text-highlight text-3xl sm:text-6xl mb-5`}
      >
        Project
      </h2>
      {projects &&
        projects.map((project) => (
          <div
            key={project.id}
            className="max-w-4xl w-full flex flex-col justify-center items-start mb-10 sm:m-10 border-2 border-special rounded-4xl p-10 bg-special inset-shadow-xs inset-shadow-highlight/20 shadow-xl shadow-highlight/20"
          >
            <div className="flex flex-row mx-auto w-2/3 mb-6">
              <div className="w-full mx-auto h-auto">
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  pagination={true}
                  modules={[EffectCube, Pagination]}
                  className="mySwiper"
                >
                  {project.pictures.map((picture, index) => (
                    <SwiperSlide key={index} className="my-auto">
                      <StrapiImage
                        key={index}
                        src={picture.url}
                        alt={
                          `Project ${picture.alternativeText} image ${
                            index + 1
                          }` || "No alternative text provided"
                        }
                        width={1200}
                        height={1200}
                        className="max-w-7xl w-full mx-auto h-auto rounded-xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full">
              <div className="flex flex-col justify-start sm:flex-row sm:justify-between items-center">
                <p className="p-3 text-xl text-highlight hover:text-highlightsecond">
                  {project.name}
                </p>
                <a
                  href={project.demoLink}
                  target="_blank"
                  className="flex items-center px-1 py-1 m-1 sm:mr-2 border rounded-md border-highlight"
                >
                  <FaLink className="text-xl text-highlight hover:text-highlightsecond" />
                </a>
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  className="flex items-center px-1 py-1 m-1 border rounded-md border-highlight"
                >
                  <FaGithub className="text-xl text-highlight hover:text-highlightsecond" />
                </a>
              </div>
              <p className="px-3 py-1 m-1 border border-highlight text-highlight rounded-md">
                {project.year}
              </p>
            </div>
            <p className="mx-3 mb-3">{project.description}</p>
            <div className="flex flex-wrap ml-3 gap-3 justify-start w-full">
              {project.skills.map((skill, index) => (
                <p
                  key={index}
                  className="px-3 py-1 border border-second bg-primary text-second rounded-md"
                >
                  {skill.name}
                </p>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
}
