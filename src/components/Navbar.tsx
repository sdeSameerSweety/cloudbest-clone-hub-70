
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Cloudbest
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/#features">Features</NavLink>
            <NavLink href="/#services">Services</NavLink>
            <NavLink href="/career">Career</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink href="/" mobile>Home</NavLink>
              <NavLink href="/#features" mobile>Features</NavLink>
              <NavLink href="/#services" mobile>Services</NavLink>
              <NavLink href="/career" mobile>Career</NavLink>
              <NavLink href="/#contact" mobile>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ 
  href, 
  children, 
  mobile 
}: { 
  href: string; 
  children: React.ReactNode; 
  mobile?: boolean;
}) => {
  const isExternal = href.startsWith('#');
  const Component = isExternal ? 'a' : Link;
  const props = isExternal ? { href } : { to: href };

  return (
    <Component
      {...props}
      className={`
        text-gray-600 hover:text-primary transition-colors duration-300
        ${mobile ? 'block py-2' : ''}
      `}
    >
      {children}
    </Component>
  );
};

export default Navbar;
