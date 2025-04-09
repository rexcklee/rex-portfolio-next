import { bebas } from "@/app/fonts";
import { SkillCategoriesProps } from "@/types";

export function SkillsSection({
  skillCategories,
}: {
  skillCategories: Readonly<SkillCategoriesProps[]>;
}) {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center p-6 sm:p-16 w-full min-h-screen"
    >
      <div className="flex items-center max-w-6xl w-full">
        <h2
          className={`${bebas.className} text-3xl sm:text-6xl mr-10 bg-gradient-to-r py-10 from-highlight via-second/90 to-highlightsecond inline-block text-transparent bg-clip-text`}
        >
          Skills
        </h2>
        <div className="flex-grow h-0.5 bg-highlightsecond"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row md:justify-evenly text-center">
        {skillCategories &&
          skillCategories.map((category) => (
            <div
              key={category.id}
              className="w-1/5 flex flex-col justify-start mb-10 sm:m-10 border-2 border-special rounded-xl p-10 bg-special inset-shadow-xs inset-shadow-highlight/20 shadow-xl shadow-highlightsecond/20 hover:shadow-highlight/20"
            >
              <p className=" text-second text-2xl mb-4">{category.name}</p>
              {category.skills.map((skill) => (
                <p key={skill.id} className="mx-auto text-lg mb-3">
                  {skill.name}
                </p>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
}
