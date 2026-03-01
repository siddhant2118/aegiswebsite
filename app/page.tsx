"use client"

import "./landing.css"
import { LandingFooter } from "@/components/landing/LandingFooter"
import { LandingNav } from "@/components/landing/LandingNav"
import { FeatureRailSection } from "@/components/landing/FeatureRailSection"
import { HeroSection } from "@/components/landing/HeroSection"
import { HowItWorksSection } from "@/components/landing/HowItWorksSection"
import { ProblemSection } from "@/components/landing/ProblemSection"
import { TrustSection } from "@/components/landing/TrustSection"
import { WaitlistSection } from "@/components/landing/WaitlistSection"
import { useLandingAnimations } from "@/components/landing/useLandingAnimations"

export default function LandingPage() {
  useLandingAnimations()

  return (
    <div className="landing-page">
      <LandingNav />

      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeatureRailSection />
        <TrustSection />
        <WaitlistSection />
      </main>

      <LandingFooter />
    </div>
  )
}
