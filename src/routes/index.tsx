import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, BellRing, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flight Price Notifier — 機票降價通知" },
      {
        name: "description",
        content:
          "Set a route and a target price — we email you when the cheapest fare from Taipei drops to your budget.",
      },
      { property: "og:title", content: "Flight Price Notifier — 機票降價通知" },
      {
        property: "og:description",
        content: "設定航線與目標價，機票降價就通知你。Email alerts for cheap fares from Taipei.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const features = [
  {
    icon: Plane,
    title: "盯緊熱門航線 (Always-on route watching)",
    body: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: BellRing,
    title: "達標自動通知 (Target-price email alerts)",
    body: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  {
    icon: XCircle,
    title: "隨時取消 (Cancel anytime)",
    body: "月訂閱制，不想用隨時停，沒有綁約。",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="flex items-center gap-2 font-semibold tracking-tight">
            <Plane className="h-5 w-5 text-primary" />
            Flight Price Notifier
          </span>
          <Button asChild size="sm">
            <Link to="/auth">Sign in / 登入</Link>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:py-32">
            <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="text-brand-gradient">Flight Price Notifier</span>
            </h1>
            <p
              className="animate-fade-up mt-6 text-xl font-medium text-foreground sm:text-2xl"
              style={{ animationDelay: "80ms" }}
            >
              設定航線與目標價，機票降價就通知你
            </p>
            <p
              className="animate-fade-up mt-3 text-base text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              Set a route and a target price — we email you when the fare drops.
            </p>
            <div
              className="animate-fade-up mt-10 flex justify-center"
              style={{ animationDelay: "240ms" }}
            >
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/auth">Sign in / 登入</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <article
                key={feature.title}
                className="animate-fade-up rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                  <feature.icon className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-lg font-semibold leading-snug">{feature.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        © 2026 Flight Price Notifier
      </footer>
    </div>
  );
}
