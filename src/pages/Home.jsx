"use client"
import { NavBar } from '../components/nav-bar'
import { HeroSection } from '../components/hero-section'
import AboutUsComponent from '../components/About-Us-Section';
import HighlightsSection from '../components/Highlights';
import LeadsSection from '../components/LeadsSection';
import JoinUs from '../components/JoinUs';
import ContactForm from '../components/Form';

export default function Home() {
  return (
    (<main className="min-h-screen bg-background p-0">
      <NavBar />
      <HeroSection />
      <AboutUsComponent />
      <HighlightsSection />
      <LeadsSection />
      <JoinUs />
      <ContactForm />
    </main>)
  );
}

