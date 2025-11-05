import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="problem"><Problem /></div>
      <div id="solution"><Solution /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="metrics"><Metrics /></div>
      <div id="vision"><Vision /></div>
      <div id="cta"><CTA /></div>
      <Footer />
    </div>
  );
};

export default Index;
