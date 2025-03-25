
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#products' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-apple py-4 px-6",
        isScrolled ? "backdrop-blur-md bg-white/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="text-xl font-display font-semibold tracking-tight"
          aria-label="Home"
        >
          Stylish.
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-sm font-medium text-gray-800 hover:text-black transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="rounded-full px-4 py-2 transition-all duration-300 hover:shadow-button">
            Shop Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-slide-down">
          <div className="py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-gray-800 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Cart">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button className="rounded-full w-full">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
