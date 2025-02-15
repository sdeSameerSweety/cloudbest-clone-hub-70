
const Services = () => {
  const services = [
    {
      title: "Enterprise Solutions",
      description: "Customized solutions for large-scale organizations",
      price: "Comprehensive Enterprise Package",
    },
    {
      title: "Team Management",
      description: "Complete team management and collaboration tools",
      price: "Full Team Collaboration Suite",
    },
    {
      title: "Resource Planning",
      description: "Advanced resource allocation and planning tools",
      price: "Advanced Planning Toolkit",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Services
              </h2>
              <p className="text-lg text-gray-600">
                Choose the perfect solution for your team's needs with our comprehensive range of services designed to enhance your business operations.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary text-xl font-semibold">{(index + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mt-1">{service.description}</p>
                      <p className="text-primary font-semibold mt-2">{service.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Service Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-gray-600">Service Uptime</div>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Integration Options</div>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
