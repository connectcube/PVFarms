import React from "react";
import HeroSection from "./HeroSection";
import ProgramOverview from "./ProgramOverview";
import ImpactSection from "./ImpactSection";
import ContactForm from "./ContactForm";

export default function OutgrowerProgram() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Program Overview Section */}
      <ProgramOverview />

      {/* Impact Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Impact & Climate Action
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <p className="text-gray-600">Farmers Supported</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">150%</div>
              <p className="text-gray-600">Average Income Increase</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Hectares Under Cultivation</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-gray-600">Reduction in Charcoal Production</p>
            </div>
          </div>

          {/* Climate Smart Agriculture Section */}
          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-green-800">
              Climate-Smart Agriculture & Environmental Impact
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-green-700">
                  Climate-Smart Skills We Teach
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Sustainable soil management and conservation techniques
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Water-efficient irrigation and rainwater harvesting
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Organic composting and natural fertilizer production
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Crop rotation and intercropping for soil health
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Integrated pest management without harmful chemicals
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-green-700">
                  Fighting Climate Change Together
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Reducing deforestation by providing alternatives to charcoal
                    production
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Carbon sequestration through improved soil management
                    practices
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Promoting biodiversity through organic farming methods
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Building climate resilience in rural farming communities
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Supporting sustainable livelihoods that protect natural
                    resources
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Farmer Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
                  alt="Maria"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">Maria Nanyondo</h3>
                  <p className="text-gray-600">Masaka District</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Before joining PV Farms program, I struggled to feed my family.
                Now with beetroot farming, my income has tripled and I can send
                all my children to school."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                  alt="John"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">John Mukasa</h3>
                  <p className="text-gray-600">Mubende Region</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I used to produce charcoal which was destroying our forests. PV
                Farms showed me a better way with beetroot farming. Now I earn
                more and help protect our environment."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                  alt="Sarah"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">Sarah Namukasa</h3>
                  <p className="text-gray-600">Jinja District</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The guaranteed buyback program gives me peace of mind. I know
                that whatever I grow, PV Farms will purchase at a fair price.
                This security has changed my life."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              Join Our Outgrower Program
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Interested in becoming a partner farmer? Fill out the form below
              and we'll get in touch with you.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PV Farms</h3>
              <p className="mb-4">
                Empowering rural communities through sustainable agriculture.
              </p>
              <p>
                © {new Date().getFullYear()} PV Farms. All rights reserved.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-2">Email: info@pvfarms.com</p>
              <p className="mb-2">Phone: +260 971 235 020</p>
              <p>Address: Chikupi, Lusaka, Zambia</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-300">
                  Facebook
                </a>
                <a href="#" className="hover:text-green-300">
                  Twitter
                </a>
                <a href="#" className="hover:text-green-300">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
