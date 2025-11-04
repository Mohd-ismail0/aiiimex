import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Vision = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-12 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Built by Exporters, for Exporters
            </h2>
          </div>

          <div ref={contentRef} className="space-y-8">
            <div className={`relative scroll-slide-right ${contentVisible ? 'visible' : ''}`}>
              <Quote className="w-12 h-12 text-accent absolute -top-4 -left-4 opacity-50 transition-all duration-500 hover:opacity-100 hover:scale-110" />
              <div className="bg-secondary p-8 rounded-2xl space-y-6 hover:shadow-elegant transition-shadow duration-500">
                <p className="text-xl leading-relaxed">
                  <span className="font-semibold text-foreground">AIiIMEX was born from real frustration.</span>
                  <br />
                  When our founder tried exporting garments to Saudi Arabia, the shipment failed 
                  due to a last-minute compliance gap. Hundreds of exporters in his community faced 
                  the same — document mismatches, penalties, and lost clients.
                </p>
                
                <p className="text-xl leading-relaxed text-muted-foreground">
                  The insight was simple: <span className="font-semibold text-foreground">India doesn't need more exporters — 
                  it needs trusted exporters.</span>
                </p>

                <p className="text-xl leading-relaxed font-medium">
                  AIiIMEX exists to make that trust possible.
                </p>
              </div>
            </div>

            <div 
              ref={ctaRef}
              className={`text-center pt-8 scroll-fade-in ${ctaVisible ? 'visible' : ''}`}
            >
              <button className="text-primary hover:text-primary-glow transition-all duration-300 text-lg font-medium underline underline-offset-4 hover:scale-105 inline-block">
                Read the Founder's Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
