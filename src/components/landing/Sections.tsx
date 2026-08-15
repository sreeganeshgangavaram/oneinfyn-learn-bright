import {
  ArrowRight,
  BookOpen,
  Clock,
  Compass,
  FlaskConical,
  GraduationCap,
  Landmark,
  Layers,
  Lightbulb,
  ListChecks,
  MonitorPlay,
  Sigma,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

const subjects = [
  { name: "Maths", icon: Sigma, note: "Algebra, geometry, trigonometry" },
  { name: "Science", icon: FlaskConical, note: "Physics, chemistry, biology" },
  { name: "Social Science", icon: Landmark, note: "History, civics, geography" },
  { name: "English", icon: BookOpen, note: "Grammar, writing, literature" },
];

export function Subjects() {
  return (
    <section id="subjects" className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Classes & subjects"
        title="Everything your school year covers"
        description="Pick your class, then dive into the subject you need help with today. Every lecture is mapped to your syllabus chapters."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-3 reveal">
        {["Class 8", "Class 9", "Class 10"].map((c) => (
          <span
            key={c}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-soft)]"
          >
            <GraduationCap className="size-4 text-primary" />
            {c}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {subjects.map((s) => (
          <div
            key={s.name}
            className="reveal group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-accent-soft group-hover:text-accent-foreground">
              <s.icon className="size-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold">{s.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    icon: Layers,
    title: "Structured, class-wise lectures",
    body: "No endless playlists. Chapters follow your textbook order, so you always know what comes next.",
  },
  {
    icon: Lightbulb,
    title: "Concepts explained simply",
    body: "Every idea is broken into small steps with examples on screen — rewind any part until it clicks.",
  },
  {
    icon: Clock,
    title: "Learn at your own pace",
    body: "Study late at night or ten minutes before class. Your lectures are ready whenever you are.",
  },
  {
    icon: ListChecks,
    title: "Built for the 8–10 syllabus",
    body: "Exam-focused explanations and practice-style questions shaped around what your school actually tests.",
  },
];

export function Features() {
  return (
    <section id="about" className="bg-secondary/60 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading
          eyebrow="Why Oneinfyn"
          title="Lessons that respect your time"
          description="We built Oneinfyn for students who want to understand, not just memorise — and for parents who want to see real progress."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cta-gradient text-primary-foreground">
                <f.icon className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: GraduationCap, title: "Pick your class", body: "Class 8, 9 or 10 — your content set is ready instantly." },
  { icon: Compass, title: "Choose a subject", body: "Jump to Maths, Science, Social Science or English." },
  { icon: MonitorPlay, title: "Start watching", body: "Follow the chapter lectures and revise anytime you like." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24">
      <SectionHeading eyebrow="How it works" title="Three steps to your first lecture" />

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="reveal relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
          >
            <span className="absolute -top-4 left-7 grid size-9 place-items-center rounded-xl bg-accent font-display text-sm font-bold text-accent-foreground shadow-[var(--shadow-soft)]">
              {i + 1}
            </span>
            <s.icon className="mt-3 size-6 text-primary" />
            <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const trust = [
  { icon: BookOpen, title: "Syllabus aligned", body: "Mapped to CBSE and major state board chapters." },
  { icon: Users, title: "Designed by educators", body: "Planned with teachers who know these classrooms." },
  { icon: MonitorPlay, title: "Clear, focused lessons", body: "Short lectures made for real attention spans." },
];

export function Trust() {
  return (
    <section className="bg-secondary/60 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading
          eyebrow="Built on trust"
          title="Made for school students, backed by teachers"
          description="We are just getting started, and we are building openly with the students and families using Oneinfyn every day."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {trust.map((t) => (
            <div
              key={t.title}
              className="reveal rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]"
            >
              <span className="mx-auto grid size-11 place-items-center rounded-xl bg-accent-soft text-accent-foreground">
                <t.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-bold">{t.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section id="cta" className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24">
      <div className="reveal rounded-4xl bg-cta-gradient px-6 py-14 text-center shadow-[var(--shadow-lift)] sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-primary-foreground sm:text-4xl">
          Your next chapter is one lecture away
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
          Start with a free lecture in your class and see how much easier the tough topics feel.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="onDark" size="xl" asChild>
            <a href="#home">
              Get started free <ArrowRight />
            </a>
          </Button>
          <Button variant="accent" size="xl" asChild>
            <a href="#subjects">Browse subjects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Infinite learning, one platform. Video lectures for Classes 8, 9 and 10.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2 sm:justify-end">
          {["Home", "Subjects", "How it Works", "About"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border px-5 py-5">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} Oneinfyn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
