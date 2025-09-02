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
                src="/images/1.png"
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
              <a href="/outgrower-program" className="text-white no-underline">
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
            backgroundImage: "url(/images/beetroot-field.jpg)",
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
                className="bg-white text-pvpink-500 hover:bg-gray-100 font-semibold border-2 border-white"
              >
                <a
                  href="#products"
                  className="text-pvpink-500 no-underline font-semibold"
                >
                  Explore Products
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-pvpink-500 font-semibold bg-transparent"
              >
                <a
                  href="/about-us"
                  className="text-white hover:text-pvpink-500 no-underline font-semibold"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Beetroot Powder */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/images/beetroot-powder-new.jpg)",
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
                  backgroundImage: "url(/images/beetroot-tea-new.jpg)",
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
                  backgroundImage: "url(/images/beetroot-pickles-new.jpg)",
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

            {/* Beetroot Products Collection */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/images/beetroot-products-collage.jpg)",
                }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Product Collection
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete range of premium beetroot products including powder,
                  tea, and pickles.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Premium quality</li>
                  <li>• Variety of options</li>
                  <li>• Natural ingredients</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Where to Buy Section */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-center mb-8">
              Where to Buy Our Products
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Zambia Retailers */}
              <div>
                <h4 className="text-2xl font-semibold mb-6 text-pvpink-500 flex items-center">
                  <span className="mr-3">🇿🇲</span>
                  Available in Zambia
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-pvpink-500 rounded-full mr-4"></div>
                    <span className="text-lg font-medium">Jumbo Stores</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-pvpink-500 rounded-full mr-4"></div>
                    <span className="text-lg font-medium">Abo Abbas</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-pvpink-500 rounded-full mr-4"></div>
                    <span className="text-lg font-medium">
                      Makeni Wholesale
                    </span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-pvpink-500 rounded-full mr-4"></div>
                    <span className="text-lg font-medium">Melissa</span>
                  </div>
                </div>
              </div>

              {/* UK Retailers */}
              <div>
                <h4 className="text-2xl font-semibold mb-6 text-pvpink-500 flex items-center">
                  <span className="mr-3">🇬🇧</span>
                  United Kingdom
                </h4>
                <div className="flex items-center justify-center h-40 bg-gradient-to-br from-pvpink-50 to-pvpink-100 rounded-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h5 className="text-2xl font-bold text-pvpink-600 mb-2">
                      Coming Soon!
                    </h5>
                    <p className="text-gray-600">
                      We're working to bring our products to UK retailers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Can't find our products at these locations? Contact us and we'll
                help you locate the nearest retailer.
              </p>
              <Button className="bg-pvpink-500 hover:bg-pvpink-600 text-white font-semibold border-2 border-pvpink-500">
                <a
                  href="/contact-us"
                  className="text-white no-underline font-semibold"
                >
                  Contact Us for More Info
                </a>
              </Button>
            </div>
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
                backgroundImage: "url(/images/PV produce.jpg)",
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
            Visit our retail partners in Zambia to get your PV Farms beetroot
            products today!
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
                <p>Email: info@pvbeets.farm</p>
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
