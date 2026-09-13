import { useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Your dashboard — Flight Price Notifier" },
      {
        name: "description",
        content: "Your route-watching dashboard for cheap flights departing Taipei.",
      },
      { property: "og:title", content: "Your dashboard — Flight Price Notifier" },
      {
        property: "og:description",
        content: "Route subscriptions and target-price alerts, all in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AppShell,
});

function AppShell() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth", replace: true });
  }, [loading, user, navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/", replace: true });
  };

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
        Loading…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Plane className="h-5 w-5 text-primary" />
            Flight Price Notifier
          </Link>
          <Button variant="secondary" size="sm" onClick={signOut}>
            Sign out / 登出
          </Button>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-5 py-20">
          <h1 className="animate-fade-up text-3xl font-bold tracking-tight sm:text-4xl">
            Hi {user.email}
          </h1>
          <div
            className="animate-fade-up mt-8 rounded-xl border border-border bg-card p-8"
            style={{ animationDelay: "100ms" }}
          >
            <p className="text-lg font-medium">
              你的航線追蹤儀表板即將上線 — 下一個里程碑會加上訂閱航線的功能。
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Your dashboard is coming soon. Route-subscription will be added in the next milestone.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
