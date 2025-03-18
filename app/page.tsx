import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { DownloadSection } from "@/components/download-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <DownloadSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}

