import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-illustration.jpg';
import { PartnersCarousel } from '@/components/home/PartnersCarousel';
import { EligibilityDashboard } from '@/components/home/EligibilityDashboard';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { SocialMediaGallery } from '@/components/home/SocialMediaGallery';
import { EventGallery } from '@/components/home/EventGallery';
import { OpportunitiesCarousel } from '@/components/home/OpportunitiesCarousel';
import { IndiaMapVisualization } from '@/components/home/IndiaMapVisualization';

export default function Home() {
  return (
    <div className="space-y-12 p-6">
      {/* Hero Section */}
      <section className="hero-gradient rounded-2xl p-8 text-white shadow-strong md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Welcome to DISHA
              </h1>
              <h2 className="text-xl font-semibold text-white/90 md:text-2xl">
                AI Automation Engine for PM Recommendation Scheme
              </h2>
              <p className="text-lg text-white/80">
                Discover government internship opportunities tailored to your skills and aspirations. 
                Let AI help you find the perfect match for your career growth.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/auth?mode=login">
                <Button size="lg" variant="hero" className="w-full gap-2 sm:w-auto">
                  Login with Aadhaar
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/auth?mode=signup">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
                >
                  Create New Account
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src={heroImage} 
              alt="Government internship platform illustration" 
              className="max-w-full rounded-xl shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <PartnersCarousel />

      {/* Eligibility Dashboard */}
      <EligibilityDashboard />

      {/* Core Benefits */}
      <BenefitsSection />

      {/* Social Media Gallery */}
      <SocialMediaGallery />

      {/* Event Gallery */}
      <EventGallery />

      {/* Opportunities Carousel */}
      <OpportunitiesCarousel />

      {/* India Map Visualization */}
      <IndiaMapVisualization />
    </div>
  );
}