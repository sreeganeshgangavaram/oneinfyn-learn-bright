import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-learning.jpg";

export function Hero() {
  return (
    <section id="home" className="bg-hero-glow">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-primary shadow-[var(--shadow-soft)]">
            <Sparkles className="size-3.5" />
            Made for Classes 8, 9 &amp; 10
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            Learn Maths, Science and more through{" "}
            <span className="text-gradient-brand">video lectures</span> that finally make sense.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Oneinfyn turns your school syllabus into short, structured lessons — taught step by step,
            built around your class, and focused on the questions that actually show up in exams.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#cta">
                Get started free <ArrowRight />
              </a>
            </Button>
            <Button variant="soft" size="xl" asChild>
              <a href="#how-it-works">
                <PlayCircle /> See how it works
              </a>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              ["3", "Classes covered"],
              ["4", "Core subjects"],
              ["24/7", "Learn anytime"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-bold text-primary">{value}</dt>
                <dd className="mt-0.5 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-primary-soft/70 blur-2xl" />
          <img
            src={heroImage}
            alt="Students in Classes 8 to 10 watching an Oneinfyn video lecture on maths and science"
            width={1280}
            height={1024}
            className="relative w-full rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]"
          />
          <div className="relative -mt-8 ml-4 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)]">
            <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-accent-foreground">
              <PlayCircle className="size-5" />
            </span>
            <span className="text-sm">
              <span className="block font-semibold">Now playing</span>
              <span className="text-muted-foreground">Class 9 · Linear Equations</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
