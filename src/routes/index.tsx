import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import {
  CtaBanner,
  Features,
  Footer,
  HowItWorks,
  Subjects,
  Trust,
} from "@/components/landing/Sections";

const title = "Oneinfyn — Video Lectures for Classes 8, 9 & 10";
const description =
  "Structured video lectures in Maths, Science, Social Science and English for Class 8–10 students. Learn concepts step by step and revise anytime.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Subjects />
        <Features />
        <HowItWorks />
        <Trust />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
