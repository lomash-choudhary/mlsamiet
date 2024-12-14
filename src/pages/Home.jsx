"use client"
import { NavBar } from '../components/nav-bar'
import { HeroSection } from '../components/hero-section'

export default function Home() {
  return (
    (<main className="min-h-screen bg-background p-0">
      <NavBar />
      <HeroSection />
    </main>)
  );
}

