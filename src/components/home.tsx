import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Leaf, Heart, Shield, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src="https://6e7e06b4-e35a-4317-8aad-a3bbdeba05d7.tempo.build/images/1.png"
                alt="PV Farms Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-gray-800">PV Farms</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#products"
                className="text-gray-600 hover:text-pvpink-500"
              >
                Products
              </a>
              <a
                href="#benefits"
                className="text-gray-600 hover:text-pvpink-500"
              >
                Benefits
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
            <Button className="bg-pvpink-500 hover:bg-pvpink-600 text-white font-semibold">
              <a href="/outgrower-program" className="text-white">
                Join Our Program
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-pvpink-500 to-pvpink-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80)",
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Organic Beetroot Products
            </h1>
            <p className="text-xl mb-8 text-pink-100">
              Discover the power of nature with our organically grown beetroot
              products. From nutrient-rich powder to refreshing tea, pickles,
              and healthy bites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-pvpink-500 hover:bg-gray-100 font-semibold"
              >
                <a href="#products" className="text-pvpink-500">
                  Explore Products
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-pvpink-500 font-semibold"
              >
                <a
                  href="/about-us"
                  className="text-white hover:text-pvpink-500"
                >
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Premium Beetroot Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our products are made from 100% organically grown beetroots,
              carefully processed to retain maximum nutritional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Beetroot Powder */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://6e7e06b4-e35a-4317-8aad-a3bbdeba05d7.tempo.build/images/beet powder pv farms.jpg)",
                }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Beetroot Powder</h3>
                <p className="text-gray-600 mb-4">
                  Pure, concentrated beetroot powder packed with nitrates,
                  antioxidants, and essential nutrients.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Boosts athletic performance</li>
                  <li>• Supports heart health</li>
                  <li>• Rich in folate & fiber</li>
                </ul>
              </CardContent>
            </Card>

            {/* Beetroot Tea */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://6e7e06b4-e35a-4317-8aad-a3bbdeba05d7.tempo.build/images/beet tea.jpg)",
                }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Beetroot Tea</h3>
                <p className="text-gray-600 mb-4">
                  Refreshing herbal tea blend with natural beetroot extracts for
                  daily wellness.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Natural detoxification</li>
                  <li>• Improves digestion</li>
                  <li>• Caffeine-free energy</li>
                </ul>
              </CardContent>
            </Card>

            {/* Beetroot Pickles */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://6e7e06b4-e35a-4317-8aad-a3bbdeba05d7.tempo.build/images/PV pickles.jpg)",
                }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Beetroot Pickles</h3>
                <p className="text-gray-600 mb-4">
                  Tangy, flavorful pickles made from fresh organic beetroots
                  with traditional spices.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Probiotic benefits</li>
                  <li>• Low calorie snack</li>
                  <li>• Natural preservation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Beetroot Bites */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://6e7e06b4-e35a-4317-8aad-a3bbdeba05d7.tempo.build/images/PV products.jpg)",
                }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Beetroot Bites</h3>
                <p className="text-gray-600 mb-4">
                  Healthy, crunchy snacks made from dehydrated organic beetroots
                  with no artificial additives.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Guilt-free snacking</li>
                  <li>• High in vitamins</li>
                  <li>• Natural sweetness</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Our Organic Beetroot Products?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to organic farming and sustainable practices
              ensures you get the highest quality products with maximum health
              benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 mx-auto mb-4">
                <Leaf className="h-8 w-8 text-pvpink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
              <p className="text-gray-600">
                Grown without synthetic pesticides, herbicides, or chemical
                fertilizers. Pure, natural goodness in every product.
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Heart Healthy</h3>
              <p className="text-gray-600">
                Rich in nitrates that support cardiovascular health, improve
                blood flow, and help maintain healthy blood pressure.
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Antioxidant Rich</h3>
              <p className="text-gray-600">
                Packed with betalains and other antioxidants that help fight
                inflammation and protect against cellular damage.
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Carefully harvested and processed to maintain nutritional
                integrity and deliver consistent, superior quality products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Sustainably Grown, Ethically Sourced
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At PV Farms, we believe in the power of sustainable agriculture.
                Our beetroots are grown by local farmers using organic methods
                that protect the environment and support rural communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-pvpink-500 mr-3 mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Organic Certification</h4>
                    <p className="text-gray-600">
                      All our products meet strict organic standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-pvpink-500 mr-3 mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Fair Trade Practices</h4>
                    <p className="text-gray-600">
                      Supporting rural farmers with fair prices
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-pvpink-500 mr-3 mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Environmental Stewardship</h4>
                    <p className="text-gray-600">
                      Protecting soil health and biodiversity
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage:
                  "url(https://6e7e06b4-e35a-4317-8aad-a3bbdeba05d7.tempo.build/images/PV produce.jpg)",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pvpink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Experience Premium Organic Beetroot Products?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Join thousands of health-conscious customers who trust PV Farms for
            their organic beetroot needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-pvpink-500 hover:bg-gray-100 font-semibold"
            >
              <span className="text-pvpink-500">Order Now</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-pvpink-500 font-semibold"
            >
              <a
                href="/outgrower-program"
                className="text-white hover:text-pvpink-500"
              >
                Partner With Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://6e7e06b4-e35a-4317-8aad-a3bbdeba05d7.tempo.build/images/2.png"
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
                  <a href="#" className="hover:text-white">
                    Beetroot Powder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Beetroot Tea
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Beetroot Pickles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
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
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Certifications
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
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
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
