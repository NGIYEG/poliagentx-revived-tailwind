const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              POLI<span className="text-primary">AGENTX</span>
            </h3>
            <p className="text-muted-foreground">
              Empowering policymakers with advanced simulation and analysis tools for evidence-based decision making.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#team" className="block text-muted-foreground hover:text-primary transition-colors">
                Team
              </a>
              <a href="#partners" className="block text-muted-foreground hover:text-primary transition-colors">
                Partners
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Templates
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                API Reference
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Support
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Johns Hopkins University</p>
              <p>Baltimore, MD</p>
              <p>contact@poliagentx.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 POLIAGENTX. All rights reserved. Built with Lovable.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;