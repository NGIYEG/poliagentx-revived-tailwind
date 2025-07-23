import heroIllustration from '@/assets/hero-illustration.png';

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                A <span className="text-primary">Policy Tracking</span>
                <br />
                and <span className="text-primary">Simulation</span>
                <br />
                <span className="text-foreground">platform</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                simplifies evaluation and analysis of policies through interactive 
                simulations and real-time data visualizations
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-orange text-primary-foreground font-semibold rounded-lg hover:shadow-elevated transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <img
                src={heroIllustration}
                alt="Policy tracking illustration"
                className="w-full max-w-lg h-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;