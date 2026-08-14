import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeaturedCourses from "../components/FeaturedCourses";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedCourses />
    </>
  );
}