import { playwrite } from "@/app/fonts";
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
      <h2
        className={`${playwrite.className} text-highlight text-3xl sm:text-6xl mb-5`}
      >
        Skills
      </h2>
      <div className="max-w-5xl w-full flex flex-col justify-center items-start mb-10 sm:m-10 border-2 border-special rounded-4xl p-10 bg-special inset-shadow-xs inset-shadow-highlight/20 shadow-xl shadow-highlight/20">
        <div className="py-14 max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between md:items-start text-center">
          {skillCategories &&
            skillCategories.map((category) => (
              <div className="m-4" key={category.id}>
                <p className=" text-second text-2xl mb-4">{category.name}</p>
                {category.skills.map((skill, index) => (
                  <p key={skill.id} className="mx-auto text-lg mb-3">
                    {skill.name}
                  </p>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
