import { TrendingUp, CheckCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const metrics = [
  {
    icon: Clock,
    value: 50,
    label: "faster compliance turnaround"
  },
  {
    icon: CheckCircle,
    value: 60,
    label: "fewer document errors"
  },
  {
    icon: TrendingUp,
    value: 30,
    label: "faster order closures"
  }
];

const Metrics = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation(0.1);
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation(0.2);
  
  const [counters, setCounters] = useState(metrics.map(() => 0));

  useEffect(() => {
    if (metricsVisible) {
      metrics.forEach((metric, index) => {
        let current = 0;
        const increment = metric.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= metric.value) {
            current = metric.value;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 30);
        return () => clearInterval(timer);
      });
    }
  }, [metricsVisible]);

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Efficiency That Scales Trust
          </h2>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            AIiIMEX turns bureaucracy into measurable efficiency.
          </p>
        </div>

        <div ref={metricsRef} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className={`p-8 text-center bg-primary-foreground/5 border-primary-foreground/20 hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-500 scroll-fade-in ${metricsVisible ? 'visible' : ''}`}
              style={{ 
                transitionDelay: metricsVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <metric.icon className="w-12 h-12 text-accent mx-auto mb-4 transition-transform duration-300 hover:rotate-12" />
              <div className="text-5xl font-bold text-accent mb-2">
                {counters[index]}%
              </div>
              <p className="text-primary-foreground/90">{metric.label}</p>
            </Card>
          ))}
        </div>

        <div 
          ref={footerRef}
          className={`max-w-3xl mx-auto text-center space-y-4 scroll-fade-in ${footerVisible ? 'visible' : ''}`}
        >
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
