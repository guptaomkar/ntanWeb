import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { USBProductShowcase } from './components/USBProductShowcase';
import { WhyDigitalSignature } from './components/WhyDigitalSignature';
import { ServicesSection } from './components/ServicesSection';
import { AutomationSection } from './components/AutomationSection';
import { DashboardShowcase } from './components/DashboardShowcase';
import { ReportingSection } from './components/ReportingSection';
import { HowItWorks } from './components/HowItWorks';
import { Industries } from './components/Industries';
import { SecuritySection } from './components/SecuritySection';
import { TechnologyStack } from './components/TechnologyStack';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F7F6]">
      <Navbar
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main>
        <Hero />
        <USBProductShowcase />
        <WhyDigitalSignature />
        <ServicesSection />
        <AutomationSection />
        <DashboardShowcase />
        <ReportingSection />
        <HowItWorks />
        <Industries />
        <SecuritySection />
        <TechnologyStack />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
