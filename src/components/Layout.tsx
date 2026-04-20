import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';

export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-solar-500/30 bg-solar-500/10 text-solar-500 text-xs font-bold mb-6 uppercase tracking-wider ${className}`}>
    <span className="w-2 h-2 rounded-full bg-solar-500" />
    {children}
  </div>
);

export const Button = ({ children, variant = 'primary', className = "", to }: { children: React.ReactNode, variant?: 'primary' | 'ghost', className?: string, to?: string }) => {
  const baseStyle = "px-[28px] py-[14px] font-semibold rounded-full transition-all duration-200 ease-in-out flex items-center justify-center gap-2 group text-sm md:text-base";
  const variants = {
    primary: "bg-solar-500 text-white hover:bg-solar-600",
    ghost: "bg-transparent border-[1.5px] border-white text-white hover:bg-white/10"
  };
  
  const Component = to ? Link : 'button';
  
  return (
    <Component to={to || '#'} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Services', path: '/services' },
    { name: 'Who We Work With', path: '/who-we-work-with' },
    { name: 'Results', path: '/results' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-light-bg text-dark-900 font-sans selection:bg-solar-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <svg className="w-7 h-7 text-[#A87B20] group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 A 10 10 0 0 1 6 22" strokeWidth="1.5" />
              <path d="M6 6 A 6 6 0 0 1 6 18" strokeWidth="2.5" />
              <path d="M6 10 A 2 2 0 0 1 6 14" strokeWidth="3.5" />
            </svg>
            <span className={`font-display text-2xl tracking-tight transition-colors ${isScrolled ? 'text-dark-900' : 'text-white'}`}>
              <span className="font-light">Solar</span><span className="font-bold">Reclaim</span>
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`transition-colors ${location.pathname === link.path ? 'text-solar-500' : (isScrolled ? 'text-dark-600 hover:text-dark-900' : 'text-white/80 hover:text-white')}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact" className="px-6 py-3 bg-dark-900 text-white text-sm font-semibold rounded-full hover:bg-black transition-colors duration-200 ease-in-out">
              Book a Free Lead Audit
            </Link>
          </div>

          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-dark-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-dark-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-xl py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-lg font-semibold ${location.pathname === link.path ? 'text-solar-500' : 'text-dark-900'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-4 px-6 py-4 bg-dark-900 hover:bg-black transition-colors text-white text-center font-semibold rounded-xl">
              Book a Free Lead Audit
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Footer */}
      <footer className="relative bg-dark-bg text-white pt-24 pb-12 overflow-hidden border-t border-white/10 mt-auto">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop" 
            alt="Solar panels background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/95 to-dark-900" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col">
          {/* Logo and Tagline Centered */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <svg className="w-8 h-8 text-white transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
              </svg>
              <span className="font-display text-3xl tracking-tight text-white">
                <span className="font-light">Solar</span><span className="font-bold">Reclaim</span>
              </span>
            </Link>
            <p className="text-white/80 max-w-md mx-auto text-sm leading-relaxed mb-6">
              Experience long-lasting performance and true energy independence with solar power.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 4 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-b border-white/10 pb-16">
            
            {/* Newsletter Column */}
            <div className="lg:col-span-4">
              <h4 className="text-lg text-white mb-4">Stay Powered With the Latest Updates</h4>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Get energy-saving tips, product updates, and solar insights delivered straight to your inbox—no spam, just smarter living.
              </p>
              <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="bg-white/10 border border-white/5 rounded-full px-4 py-2 w-full text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/20"
                />
                <button type="submit" className="bg-white text-dark-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-neutral-100 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Menu Links */}
            <div className="lg:col-span-3 lg:col-start-6">
              <h4 className="text-lg text-white mb-6">Main Menu</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/results" className="hover:text-white transition-colors">Results</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-lg text-white mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="mailto:contact@solarreclaim.com" className="hover:text-white transition-colors">contact@solarreclaim.com</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between text-white/60 text-xs mt-auto relative z-20">
            <p>© {new Date().getFullYear()} SolarReclaim. All Rights Reserved</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms Of Use</Link>
            </div>
          </div>
          
          {/* Huge Faint Watermark Text */}
          <div className="absolute bottom-[-5%] left-0 right-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span className="font-display font-bold text-[18vw] leading-none text-white opacity-[0.03] whitespace-nowrap">
              SolarReclaim
            </span>
          </div>

        </div>
      </footer>
    </div>
  );
}
