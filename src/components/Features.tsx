
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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-gray-600">Core Features</div>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600">User Adoption</div>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">30%</div>
                <div className="text-gray-600">Efficiency Boost</div>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">5★</div>
                <div className="text-gray-600">User Rating</div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Features that Empower Your Team
              </h2>
              <p className="text-lg text-gray-600">
                Discover the tools that will transform your team management experience and boost productivity.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary text-xl font-semibold">{(index + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
