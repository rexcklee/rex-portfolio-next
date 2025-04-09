import { bebas } from "@/app/fonts";
import { ExperiencesProps } from "@/types";
import ReactMarkdown from "react-markdown";

export function ExperiencesSection({
  experiences,
}: {
  experiences: Readonly<ExperiencesProps[]>;
}) {
  return (
    <section
      id="experiences"
      className="flex flex-col justify-center items-center p-6 sm:p-16 w-full min-h-screen"
    >
      <div className="flex items-center max-w-6xl w-full mb-10">
        <h2
          className={`${bebas.className} text-3xl sm:text-6xl mr-10 bg-gradient-to-r py-10 from-highlight via-second/90 to-highlightsecond inline-block text-transparent bg-clip-text`}
        >
          Experiences
        </h2>
        <div className="flex-grow h-0.5 bg-highlightsecond"></div>
      </div>

      {experiences &&
        experiences.map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col w-full max-w-4xl justify-center items-start sm:m-10"
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
