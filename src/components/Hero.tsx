
const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
            Welcome to Cloudbest
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
            Streamline Your Team Management
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Empower your organization with our advanced team management solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
