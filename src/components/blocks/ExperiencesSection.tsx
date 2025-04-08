import { playwrite } from "@/app/fonts";
import { ExperiencesProps } from "@/types";
import ReactMarkdown from "react-markdown";

export function ExperiencesSection({
  experiences,
}: {
  experiences: Readonly<ExperiencesProps[]>;
}) {
  console.log(experiences[0].description);
  return (
    <section
      id="experiences"
      className="flex flex-col justify-center items-center p-6 sm:p-16 w-full min-h-screen"
    >
      <h2
        className={`${playwrite.className} text-highlight text-3xl sm:text-6xl mb-5`}
      >
        Experience
      </h2>
      {experiences &&
        experiences.map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col w-full max-w-5xl justify-center items-start sm:m-10"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
              <p className="text-xl text-second">{experience.company}</p>
              <p className="px-3 py-1 border border-highlightsecond bg-special text-highlightsecond rounded-md">
                {experience.period}
              </p>
            </div>

            <p className="text-lg text-highlight">{experience.titles}</p>
            <div className="py-5 text-start basis-2/3">
              <div className="list-disc pl-5">
                <ReactMarkdown>{experience.description}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
