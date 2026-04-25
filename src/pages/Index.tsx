import heroImg from "@/assets/hero-glasses.jpg";
import avatarsImg from "@/assets/avatars.jpg";
import { Play, Eye, Sparkles } from "lucide-react";

const navItems = ["Features", "How It Works", "About us", "Packages"];

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero image */}
      <img
        src={heroImg}
        alt="Person wearing Lumen smart glasses, smiling and looking upward"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
      />
      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Nav pill */}
        <header className="px-4 pt-5 sm:px-8 sm:pt-7">
          <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl sm:px-5 sm:py-3">
            <a href="#" className="flex items-center gap-2 pl-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--brand))] text-[hsl(var(--brand-foreground))]">
                <Eye className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-base font-semibold tracking-[0.2em]">LUMEN</span>
            </a>
            <ul className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold tracking-wide text-background transition-transform hover:scale-[1.02] sm:text-sm"
            >
              GET LUMEN
            </a>
          </nav>
        </header>

        {/* Floating feature badges */}
        <div className="pointer-events-none absolute right-[6%] top-[28%] hidden flex-col items-center gap-1 text-center md:flex">
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-foreground shadow-[0_0_24px_4px_hsl(var(--brand)/0.5)]" />
          <span className="mt-2 max-w-[110px] text-xs font-medium leading-tight text-foreground/90">
            Real-time<br />obstacle alerts
          </span>
        </div>
        <div className="pointer-events-none absolute right-[14%] top-[52%] hidden flex-col items-center gap-1 text-center lg:flex">
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-foreground shadow-[0_0_24px_4px_hsl(var(--brand)/0.5)]" />
          <span className="mt-2 max-w-[120px] text-xs font-medium leading-tight text-foreground/90">
            AI scene<br />description
          </span>
        </div>
        <div className="pointer-events-none absolute left-[46%] top-[18%] hidden flex-col items-center gap-1 text-center lg:flex">
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-foreground shadow-[0_0_24px_4px_hsl(var(--brand)/0.5)]" />
          <span className="mt-2 max-w-[120px] text-xs font-medium leading-tight text-foreground/90">
            Voice-first<br />navigation
          </span>
        </div>

        {/* Bottom content */}
        <section className="mt-auto px-4 pb-10 sm:px-8 sm:pb-14">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              {/* Users joined */}
              <div className="mb-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-8 w-8 overflow-hidden rounded-full border-2 border-background bg-cover"
                      style={{
                        backgroundImage: `url(${avatarsImg})`,
                        backgroundSize: "300% 100%",
                        backgroundPosition: `${i * 50}% 0%`,
                      }}
                    />
                  ))}
                  <span className="flex h-8 items-center rounded-full border-2 border-background bg-white/10 px-2 text-[11px] font-semibold backdrop-blur">
                    +12k
                  </span>
                </div>
                <span className="text-sm text-foreground/80">Lives empowered</span>
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                SEE THE WORLD
                <br />
                THROUGH SOUND.
              </h1>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-semibold tracking-wide text-background transition-transform hover:scale-[1.02] sm:text-base"
                >
                  ORDER LUMEN
                </a>
                <p className="text-sm leading-snug text-foreground/75">
                  30-day risk-free trial
                  <br />
                  then $79/month with care plan
                </p>
              </div>
            </div>

            {/* Video card */}
            <button
              type="button"
              className="group relative aspect-[4/3] w-full max-w-[260px] overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md transition-transform hover:scale-[1.02] lg:w-[260px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[hsl(var(--brand))]/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform group-hover:scale-110">
                  <Play className="h-5 w-5 translate-x-[1px] fill-current" />
                </span>
                <span className="text-sm font-medium">See how it works</span>
              </div>
              <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium backdrop-blur">
                <Sparkles className="h-3 w-3" /> 90s demo
              </div>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
