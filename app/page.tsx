import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProblemStatement from "./components/ProblemStatement";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import PrayerTypes from "./components/PrayerTypes";
import FamilyCircle from "./components/FamilyCircle";
import MemorialShowcase from "./components/MemorialShowcase";
import TrackingShowcase from "./components/TrackingShowcase";
import Community from "./components/Community";
import Screenshots from "./components/Screenshots";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <ProblemStatement />
      <Features />
      <HowItWorks />
      <PrayerTypes />
      <FamilyCircle />
      <MemorialShowcase />
      <TrackingShowcase />
      <Community />
      <Screenshots />
      <Download />
      <FAQ />
      <Footer />
    </main>
  );
}
