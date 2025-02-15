
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Cloudbest Software
              </h2>
              <p className="text-lg text-gray-600">
                CLOUDBEST SOFTWARE (OPC) PRIVATE LIMITED is a dynamic One Person Company established in 2021, specializing in advanced computer-related activities and digital solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary text-xl font-semibold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                    <p className="text-gray-600 mt-1">
                      To provide innovative digital solutions that empower businesses to thrive in the modern technological landscape.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary text-xl font-semibold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Our Expertise</h3>
                    <p className="text-gray-600 mt-1">
                      We excel in website maintenance, multimedia presentations, and creating comprehensive digital solutions for businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Technical Support</div>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
