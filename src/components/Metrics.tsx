import { TrendingUp, CheckCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const metrics = [
  {
    icon: Clock,
    value: "50%",
    label: "faster compliance turnaround"
  },
  {
    icon: CheckCircle,
    value: "60%",
    label: "fewer document errors"
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "faster order closures"
  }
];

const Metrics = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Efficiency That Scales Trust
          </h2>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            AIiIMEX turns bureaucracy into measurable efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="p-8 text-center bg-primary-foreground/5 border-primary-foreground/20 hover:bg-primary-foreground/10 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <metric.icon className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-5xl font-bold text-accent mb-2">{metric.value}</div>
              <p className="text-primary-foreground/90">{metric.label}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
          <p className="text-lg text-primary-foreground/90">
            Backed by real exporter insights, policy data, and pilot testing with 100 MSMEs 
            across Karnataka and Maharashtra.
          </p>
          <p className="text-xl font-medium">
            "We measure what matters — time saved, errors prevented, and trust gained."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
