import Hero from "@/app/components/sections/Hero";
import Features from "@/app/components/sections/Features";
import UseCases from "@/app/components/sections/UseCases";
import Pricing from "@/app/components/sections/Pricing";
import Reviews from "@/app/components/sections/Reviews";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-zinc-50 dark:bg-black">
      <main className="flex w-full flex-col py-0 px-0">
        {/* Hero Section */}
        <section id="home" className="w-full">
          <Hero />
        </section>

        {/* Features Section */}
        <section id="features" className="w-full">
          <Features />
        </section>

        {/* Use Cases Section */}
        <section id="usecases" className="w-full">
          <UseCases />
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full">
          <Pricing />
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="w-full">
          <Reviews />
        </section>
      </main>
    </div>
  );
}
