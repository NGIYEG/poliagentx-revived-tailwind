import { Target, Lightbulb, CheckCircle, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "The Problem",
      description: "Decision-makers struggle to analyze government policies effectively using traditional methods.",
      color: "text-red-500"
    },
    {
      icon: Lightbulb,
      title: "The Solution", 
      description: "With our app evaluation and analysis of policies are simplified. All within a few clicks",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Our Mission",
      description: "To empower policymakers with a low‑cost decision simulation engine tailored to Kenya.",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Our Objective",
      description: "To deliver a powerful tool integrating PPI data to drive evidence-based growth.",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore more about our project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 bg-card rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-3 rounded-full bg-background ${feature.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;