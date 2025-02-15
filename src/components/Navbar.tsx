
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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/#about">About</NavLink>
            <NavLink to="/#features">Features</NavLink>
            <NavLink to="/#services">Services</NavLink>
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" mobile>Home</NavLink>
              <NavLink to="/#about" mobile>About</NavLink>
              <NavLink to="/#features" mobile>Features</NavLink>
              <NavLink to="/#services" mobile>Services</NavLink>
              <NavLink to="/career" mobile>Career</NavLink>
              <NavLink to="/#contact" mobile>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
};

const NavLink = ({ to, children, mobile }: NavLinkProps) => {
  const isHashLink = to.includes('#');
  
  if (isHashLink) {
    return (
      <a
        href={to}
        className={`
          text-gray-600 hover:text-primary transition-colors duration-300
          ${mobile ? 'block py-2' : ''}
        `}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={`
        text-gray-600 hover:text-primary transition-colors duration-300
        ${mobile ? 'block py-2' : ''}
      `}
    >
      {children}
    </Link>
  );
};

export default Navbar;
