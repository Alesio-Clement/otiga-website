import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import Testimonial from "./components/Testimonial";
import Subscription from "./components/Subscription";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <div className="container  mx-auto">
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <ProjectsSection />
        <Testimonial />
        <Subscription/>
      </div>
    </main>
  );
}
