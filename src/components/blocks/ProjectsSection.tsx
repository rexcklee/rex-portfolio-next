"use client";
import { ProjectsProps } from "@/types";
import { StrapiImage } from "../StrapiImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCube } from "swiper/modules";
import "swiper/css/bundle";
import { bebas } from "@/app/fonts";
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
      <div className="flex items-center max-w-6xl w-full mb-10">
        <h2
          className={`${bebas.className} text-3xl sm:text-6xl mr-10 bg-gradient-to-r py-10 from-highlight via-second/90 to-highlightsecond inline-block text-transparent bg-clip-text`}
        >
          Projects
        </h2>
        <div className="flex-grow h-0.5 bg-highlightsecond"></div>
      </div>

      {projects &&
        projects.map((project) => (
          <div
            key={project.id}
            className="max-w-4xl w-full flex flex-col justify-center items-start mb-10 sm:m-10 border-2 border-special rounded-4xl p-10 bg-special inset-shadow-xs inset-shadow-highlight/20 shadow-xl shadow-highlight/20"
          >
            <div className="flex flex-row mx-auto w-4/5 mb-6">
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
                <p className="p-3 text-xl text-highlight">{project.name}</p>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="flex items-center p-1 m-1 sm:mr-2 border rounded-md border-highlight text-xl text-highlight hover:text-second hover:border-second"
                  >
                    <FaLink className="" />
                  </a>
                )}
                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    className="flex items-center px-1 py-1 m-1 border rounded-md border-highlight text-xl text-highlight hover:text-second hover:border-second"
                  >
                    <FaGithub className="" />
                  </a>
                )}
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
