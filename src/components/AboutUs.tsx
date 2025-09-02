import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Leaf, Users, Award, Target } from "lucide-react";

export default function AboutUs() {
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
              <a href="/about-us" className="text-pvpink-500 font-semibold">
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
      <section className="py-16 bg-gradient-to-r from-pvpink-500 to-pvpink-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About PV Farms</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Pioneering sustainable agriculture and empowering rural communities
            through sustainable beetroot farming
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                PV Farms was founded with a vision to transform rural
                agriculture in Zambia. We recognized the potential of beetroot
                as a superfood and saw an opportunity to create sustainable
                livelihoods for rural farmers while providing healthy, quality
                products to consumers.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Starting in Chikupi, Lusaka, we began working with local farmers
                to transition from environmentally harmful practices like
                charcoal production to sustainable beetroot farming. Today, we
                support over 200 farmers across multiple districts.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment goes beyond business – we're building a movement
                that protects the environment, improves livelihoods, and
                provides nutritious food for communities.
              </p>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url(/images/PV produce.jpg)",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-pvpink-500 mr-3" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  To empower rural communities through sustainable agriculture,
                  providing economic opportunities while producing high-quality
                  beetroot products that promote health and wellness.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-pvpink-500 mr-3" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  To be the leading sustainable agriculture company in Africa,
                  creating a model for environmental stewardship, community
                  empowerment, and premium food production.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from working with
              farmers to creating our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize environmental protection and sustainable farming
                practices that preserve our planet for future generations.
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in empowering rural communities and creating
                opportunities that improve lives and strengthen local economies.
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from
                farming practices to product development and customer service.
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 mx-auto mb-4">
                <Target className="h-8 w-8 text-pvpink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new ways to improve our processes,
                products, and impact on the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that tell the story of our commitment to sustainable
              agriculture and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-pvpink-500 mb-2">
                200+
              </div>
              <p className="text-gray-600">Farmers Supported</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-pvpink-500 mb-2">
                500+
              </div>
              <p className="text-gray-600">Hectares Under Cultivation</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-pvpink-500 mb-2">
                150%
              </div>
              <p className="text-gray-600">Average Income Increase</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-pvpink-500 mb-2">85%</div>
              <p className="text-gray-600">Reduction in Charcoal Production</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pvpink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Whether you're a farmer looking to join our program or a customer
            interested in our products, we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-pvpink-500 hover:bg-gray-100 font-semibold border-2 border-white"
            >
              <a
                href="/outgrower-program"
                className="text-pvpink-500 no-underline font-semibold"
              >
                Become a Partner Farmer
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-pvpink-500 font-semibold bg-transparent"
            >
              <a
                href="/contact-us"
                className="text-white hover:text-pvpink-500 no-underline font-semibold"
              >
                Contact Us
              </a>
            </Button>
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
                Premium beetroot products for health-conscious consumers.
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
                <p>Email: info@pvbeets.farm</p>
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
