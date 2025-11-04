import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Join the Export Evolution
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            We're building India's first AI-driven trade infrastructure — starting with 100 MSMEs.
          </p>
          <p className="text-lg text-primary-foreground/80">
            Be part of the pilot. Get early access, shape the product, and make exporting simpler for everyone.
          </p>

          <div className="max-w-md mx-auto space-y-4 pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="cta" size="lg" className="group shrink-0">
                Join Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Free for pilot users · Limited slots
            </p>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
              <span>Startup India Recognized</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
              <span>Elevate 2025 Shortlisted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
              <span>MSME Udyam Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
