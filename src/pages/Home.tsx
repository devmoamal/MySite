import About from "@/sections/Home/About";
import SkillsMarquee from "@/sections/Home/SkillsMarquee";
import FeaturedProjects from "@/sections/Home/FeaturedProjects";
import OpenSourceSection from "@/sections/Home/OpenSourceSection";
import GithubContributions from "@/sections/Home/GithubContributions";
import ContactSection from "@/sections/Home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 pb-16">
      <About />
      <SkillsMarquee />
      <FeaturedProjects />
      <OpenSourceSection />
      <GithubContributions />
      <ContactSection />
    </div>
  );
}
