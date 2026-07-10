import { createFileRoute } from "@tanstack/react-router";
import { ApplyProvider } from "@/components/ApplyContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TopPerformers } from "@/components/TopPerformers";

import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
import { WhyChoose } from "@/components/WhyChoose";
import { Faculty } from "@/components/Faculty";
import { Results } from "@/components/Results";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ApplyModal } from "@/components/ApplyModal";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Success Group Tuition",
          description:
            "Modern tuition and coaching for Classes 6–12 with experienced faculty, personalized attention, and proven results.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "IP Road, FF-10,11& 20, Anaya Complex,Bamroli Rd",
            addressLocality: "Surat, Gujarat",
            postalCode: "394221",
            addressCountry: "IN",
          },
          telephone: "+91 74051 62060 & +91 88663 73336",
          email: "sesolution338@gmail.com",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ApplyProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <TopPerformers />

          <About />
          <Courses />
          <WhyChoose />
          <Faculty />
          <Results />
          <Gallery />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
        <ApplyModal />
      </div>
    </ApplyProvider>
  );
}
