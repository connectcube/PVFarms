import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactUs() {
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
              <a href="/contact-us" className="text-pvpink-500 font-semibold">
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
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Get in touch with us for product inquiries, partnership
            opportunities, or to learn more about our outgrower program
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                We'd love to hear from you. Whether you're interested in our
                products, want to join our outgrower program, or have any
                questions, don't hesitate to reach out.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pvpink-100 mr-4">
                    <MapPin className="h-6 w-6 text-pvpink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">Chikupi, Lusaka, Zambia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pvpink-100 mr-4">
                    <Phone className="h-6 w-6 text-pvpink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+260 971 235 020</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pvpink-100 mr-4">
                    <Mail className="h-6 w-6 text-pvpink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">sales@pvfarms.com</p>
                    <p className="text-gray-600">info@pvfarms.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pvpink-100 mr-4">
                    <Clock className="h-6 w-6 text-pvpink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+260 XXX XXX XXX"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-pvpink-500 hover:bg-pvpink-600 text-white font-semibold border-2 border-pvpink-500"
                  >
                    <span className="text-white font-semibold">
                      Send Message
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Looking for Something Specific?
            </h2>
            <p className="text-lg text-gray-600">
              Here are some quick links to help you find what you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🌱</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Join Our Program</h3>
                <p className="text-gray-600 mb-4">
                  Interested in becoming a partner farmer? Learn about our
                  outgrower program.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-pvpink-500 text-pvpink-500 hover:bg-pvpink-500 hover:text-white font-semibold bg-white"
                >
                  <a
                    href="/outgrower-program"
                    className="text-pvpink-500 hover:text-white no-underline font-semibold"
                  >
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🛒</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Products</h3>
                <p className="text-gray-600 mb-4">
                  Explore our range of premium organic beetroot products.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-pvpink-500 text-pvpink-500 hover:bg-pvpink-500 hover:text-white font-semibold bg-white"
                >
                  <a
                    href="/#products"
                    className="text-pvpink-500 hover:text-white no-underline font-semibold"
                  >
                    View Products
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">ℹ️</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">About Us</h3>
                <p className="text-gray-600 mb-4">
                  Learn more about our mission, values, and impact.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-pvpink-500 text-pvpink-500 hover:bg-pvpink-500 hover:text-white font-semibold bg-white"
                >
                  <a
                    href="/about-us"
                    className="text-pvpink-500 hover:text-white no-underline font-semibold"
                  >
                    Read Our Story
                  </a>
                </Button>
              </CardContent>
            </Card>
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
