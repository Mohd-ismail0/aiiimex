import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-trade.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              India builds great products.
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                We make sure the world can trust them.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AIiIMEX is India's first AI-powered Export Operating System — simplifying compliance, 
              automating workflows, and building trust across every trade stakeholder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="group">
                Join Early Access
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero" size="lg">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Launching soon – be among the first 100 exporters in our pilot.
            </p>
          </div>
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Global trade network visualization" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
