import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 lg:py-20 bg-[#17212B] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - Company */}
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-white/95 px-3 py-1.5 rounded-lg inline-flex items-center shadow-md">
                <img src="/logo.png" alt="Ntan LLP" className="h-7 w-auto object-contain" />
              </div>
              <span className="text-lg font-bold tracking-wider text-white font-mono">LLP</span>
            </div>
            <p className="text-white/60 text-sm mt-4 leading-relaxed">
              Empowering businesses with secure digital signatures, automated workflows, and enterprise technology solutions.
            </p>
            <ul className="mt-4 space-y-2">
              <li><a href="#about" className="text-white/60 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#get-started" className="text-white/60 hover:text-white text-sm transition-colors">Contact</a></li>
              <li><a href="#solutions" className="text-white/60 hover:text-white text-sm transition-colors">Solutions</a></li>
            </ul>
          </div>

          {/* Column 2 - Digital Signature */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Digital Signature</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">Digital Signature Certificates</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">USB Tokens</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">Certificate Services</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">Digital Signing</a></li>
            </ul>
          </div>

          {/* Column 3 - Technology */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Technology</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">Web Development</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">Dashboards</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">Automation</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">Reporting</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">API Integration</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">AI Solutions</a></li>
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50 text-center md:text-left">
            &copy; {currentYear > 2026 ? currentYear : 2026} Ntan LLP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/50 hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/50 hover:text-white/80 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
