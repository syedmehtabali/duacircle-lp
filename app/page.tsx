import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import PrayerTypes from "./components/PrayerTypes";
import FamilyCircle from "./components/FamilyCircle";
import Community from "./components/Community";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <PrayerTypes />
      <FamilyCircle />
      <Community />
      <Download />
      <Footer />
    </main>
  );
}
