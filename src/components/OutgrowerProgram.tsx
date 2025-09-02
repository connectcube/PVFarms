import React from "react";
import { Button } from "./ui/button";
import HeroSection from "./HeroSection";
import ProgramOverview from "./ProgramOverview";
import ImpactSection from "./ImpactSection";
import ContactForm from "./ContactForm";

export default function OutgrowerProgram() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src="/images/1.png"
                alt="PV Farms Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-gray-800">PV Farms</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-pvpink-500">
                Home
              </a>
              <a
                href="/#products"
                className="text-gray-600 hover:text-pvpink-500"
              >
                Products
              </a>
              <a
                href="/about-us"
                className="text-gray-600 hover:text-pvpink-500"
              >
                About
              </a>
              <a
                href="/contact-us"
                className="text-gray-600 hover:text-pvpink-500"
              >
                Contact
              </a>
            </div>
            <Button className="bg-pvpink-500 hover:bg-pvpink-600 text-white font-semibold border-2 border-pvpink-500">
              <a
                href="/outgrower-program"
                className="text-white no-underline font-semibold"
              >
                Join Our Program
              </a>
            </Button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <HeroSection backgroundImage="/images/beetroot-field.jpg" />

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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/images/2.png"
                  alt="PV Farms Logo"
                  className="h-8 w-8 object-contain"
                />
                <span className="text-lg font-bold">PV Farms</span>
              </div>
              <p className="text-gray-400 mb-4">
                Premium organic beetroot products for health-conscious
                consumers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/#products" className="hover:text-white">
                    Beetroot Powder
                  </a>
                </li>
                <li>
                  <a href="/#products" className="hover:text-white">
                    Beetroot Tea
                  </a>
                </li>
                <li>
                  <a href="/#products" className="hover:text-white">
                    Beetroot Pickles
                  </a>
                </li>
                <li>
                  <a href="/#products" className="hover:text-white">
                    Beetroot Bites
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/about-us" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/outgrower-program" className="hover:text-white">
                    Outgrower Program
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: sales@pvfarms.com</p>
                <p>Phone: +260 971 235 020</p>
                <p>Address: Chikupi, Lusaka, Zambia</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} PV Farms. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
