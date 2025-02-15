
const Services = () => {
  const services = [
    {
      title: "Enterprise Solutions",
      description: "Customized solutions for large-scale organizations",
      price: "Custom Pricing",
    },
    {
      title: "Team Management",
      description: "Complete team management and collaboration tools",
      price: "Starting at $99/mo",
    },
    {
      title: "Resource Planning",
      description: "Advanced resource allocation and planning tools",
      price: "Starting at $149/mo",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect solution for your team's needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <p className="text-primary font-semibold">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
