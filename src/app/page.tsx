import { AboutMeSection } from "@/components/blocks/AboutMeSection";
import { ExperiencesSection } from "@/components/blocks/ExperiencesSection";
import { ProjectsSection } from "@/components/blocks/ProjectsSection";
import { SkillsSection } from "@/components/blocks/SkillsSection";
import MouseTrackerBackground from "@/components/MouseTrackerBackground";
import {
  getAboutPage,
  getExperiencesPage,
  getProjectsPage,
  getSkillsPage,
} from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const aboutMeData = await getAboutPage();
  const skillsData = await getSkillsPage();
  const projectsData = await getProjectsPage();
  const experienceData = await getExperiencesPage();

  if (!aboutMeData || !skillsData) notFound();
  return {
    aboutMe: aboutMeData.data,
    skills: skillsData.data,
    projects: projectsData.data,
    experiences: experienceData.data,
  };
}

export default async function HomeRoute() {
  const data = await loader();
  return (
    <>
      <MouseTrackerBackground color="var(--color-special)" size="70em">
        <AboutMeSection aboutMe={data.aboutMe}></AboutMeSection>
        <ProjectsSection projects={data.projects}></ProjectsSection>
        <ExperiencesSection experiences={data.experiences}></ExperiencesSection>
        <SkillsSection skillCategories={data.skills}></SkillsSection>
      </MouseTrackerBackground>
    </>
  );
}
