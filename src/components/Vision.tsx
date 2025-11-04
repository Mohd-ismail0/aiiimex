import { Quote } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Built by Exporters, for Exporters
            </h2>
          </div>

          <div className="space-y-8 animate-slide-up">
            <div className="relative">
              <Quote className="w-12 h-12 text-accent absolute -top-4 -left-4 opacity-50" />
              <div className="bg-secondary p-8 rounded-2xl space-y-6">
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

            <div className="text-center pt-8">
              <button className="text-primary hover:text-primary-glow transition-colors text-lg font-medium underline underline-offset-4">
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
