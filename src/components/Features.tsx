
const Features = () => {
  const features = [
    {
      title: "Team Collaboration",
      description: "Foster seamless communication and collaboration within your teams",
    },
    {
      title: "Task Management",
      description: "Efficiently organize and track tasks with our intuitive interface",
    },
    {
      title: "Resource Planning",
      description: "Optimize resource allocation for maximum productivity",
    },
    {
      title: "Performance Analytics",
      description: "Track and analyze team performance with detailed insights",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features that Empower Your Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the tools that will transform your team management experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
