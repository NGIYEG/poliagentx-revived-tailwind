import { BarChart, DollarSign, Network, FileText, Download } from 'lucide-react';

const ModelComponentsSection = () => {
  const components = [
    {
      icon: BarChart,
      title: "Indicators",
      description: "POLIAGENTX needs development indicators as one of its inputs. Ideally, you should collect time series of indicators across different policy dimensions (e.g., education, governance, poverty, health, pollution).",
      downloadText: "Download Template",
      downloadFile: "template_indicators.xlsx"
    },
    {
      icon: DollarSign,
      title: "Budget",
      description: "There are two ways in which you can provide information about government expenditure. The first is by entering a total budget amount. The second option is to provide a file with the budget disaggregated into expenditure programmes.",
      downloadText: "Download Template",
      downloadFile: "template_budget.xlsx"
    },
    {
      icon: Network,
      title: "Network",
      description: "One of the model's inputs is a network of conditional dependencies between all the indicators in the data. The user can provide a file containing a matrix representation of the network.",
      downloadText: "Download Template",
      downloadFile: "template_network.xlsx"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Model Components
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Core POLIAGENTX's model components
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {components.map((component, index) => {
            const IconComponent = component.icon;
            return (
              <div
                key={component.title}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {component.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {component.description}
                  </p>

                  {/* Download Button */}
                  <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 group">
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                    <span>{component.downloadText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Card */}
        <div className="mt-16 bg-gradient-orange rounded-xl p-8 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto space-y-4">
            <FileText className="w-12 h-12 text-primary-foreground mx-auto" />
            <h3 className="text-2xl font-bold text-primary-foreground">
              Ready to Get Started?
            </h3>
            <p className="text-primary-foreground/90 text-lg">
              Download all templates and begin your policy analysis journey with POLIAGENTX today.
            </p>
            <button className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Download All Templates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelComponentsSection;