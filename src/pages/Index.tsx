import { NavLink } from "react-router-dom";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Heart,
  Shield,
  Stethoscope,
  User,
  Scissors,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-centre">
            <div className="text-centre lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Your Local Family GP in Camberwell & Hawthorn East
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Dr. Maithri Wickramasinghe (MBChB, MRCGP, FRACGP) – UK-trained
                and Melbourne-based General Practitioner committed to
                evidence-based, patient-centred care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-centre lg:justify-start">
                <a
                  href="https://www.ipn.com.au/gp/vic-hawthorn-east-camberwell-road-medical-practice/our-doctors/dr-maithri-wickramasinge/"
                  target="_blank"
                  className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colours"
                >
                  Book an Appointment
                </a>
                <NavLink
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colours"
                >
                  Explore Services
                </NavLink>
              </div>
            </div>
            <div className="flex justify-centre lg:justify-end">
              <div className="relative">
                <img
                  src="/uploads/c7629ccb-c6d3-46ac-91aa-9f631e9a08f6.png"
                  alt="Dr. Maithri Wickramasinghe"
                  className="w-80 h-96 lg:w-96 lg:h-[450px] object-cover rounded-lg shadow-2xl border-4 border-white/20"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Bulk Billing GP Services Near You
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Dr. Wick brings over 25 years of diverse medical experience from
              the UK and Australia, blending modern clinical standards with a
              personal touch. Whether it's preventative health, chronic care, or
              minor procedures, Dr. Wick ensures every patient receives
              tailored, comprehensive care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              General Practitioner for All Ages
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-centre">
              <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                <NavLink
                  to="/services"
                  className="hover:text-green-600 transition-colors"
                >
                  Preventative Health & Lifestyle Support
                </NavLink>
              </h3>
            </div>
            <div className="text-centre">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                <NavLink
                  to="/services"
                  className="hover:text-blue-600 transition-colors"
                >
                  Chronic Disease & General Practice
                </NavLink>
              </h3>
            </div>
            <div className="text-centre">
              <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                <User className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                <NavLink
                  to="/services"
                  className="hover:text-orange-600 transition-colors"
                >
                  Men's Health & Contraception
                </NavLink>
              </h3>
            </div>
            <div className="text-centre">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                <Scissors className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                <NavLink
                  to="/services"
                  className="hover:text-purple-600 transition-colors"
                >
                  Minor Surgical Procedures
                </NavLink>
              </h3>
            </div>
          </div>
          <div className="text-centre">
            <NavLink
              to="/services"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colours font-medium"
            >
              View All Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* Detailed Services Section with Internal Links */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Online Doctor Appointments Available
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Comprehensive medical services tailored to your family's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                <NavLink to="/services" className="hover:underline">
                  Mental Health Services
                </NavLink>
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive mental health support and counselling services for
                all ages.
              </p>
              <NavLink
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </NavLink>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                <NavLink to="/services" className="hover:underline">
                  Skin Check Services
                </NavLink>
              </h3>
              <p className="text-gray-600 mb-4">
                Professional skin cancer screening and dermatological
                assessments.
              </p>
              <NavLink
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </NavLink>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                <NavLink to="/services" className="hover:underline">
                  Diabetes Management
                </NavLink>
              </h3>
              <p className="text-gray-600 mb-4">
                Expert diabetes care, monitoring, and lifestyle management
                support.
              </p>
              <NavLink
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </NavLink>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                <NavLink to="/services" className="hover:underline">
                  Asthma Care
                </NavLink>
              </h3>
              <p className="text-gray-600 mb-4">
                Complete asthma management including action plans and medication
                reviews.
              </p>
              <NavLink
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </NavLink>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                <NavLink to="/services" className="hover:underline">
                  Men's Health
                </NavLink>
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized men's health services including prostate checks and
                health screening.
              </p>
              <NavLink
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </NavLink>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                <NavLink to="/services" className="hover:underline">
                  Contraception Services
                </NavLink>
              </h3>
              <p className="text-gray-600 mb-4">
                Family planning advice and contraceptive options for all life
                stages.
              </p>
              <NavLink
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* After-Hours Support Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              After-Hours GP Support
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              When you need medical care outside regular hours, Dr. Wick
              provides guidance and support for urgent health concerns.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <span className="font-medium">Extended Hours Available</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-3" />
                <span className="font-medium">Emergency Contact Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Female GP Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Female GP Available
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Dr. Maithri Wickramasinghe provides comfortable, culturally
              sensitive care for patients who prefer a female GP. Specialized in
              women's health, family planning, and providing a safe space for
              all patients.
            </p>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Conveniently located to serve the Camberwell and Hawthorn East
              communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-centre">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Near Camberwell Junction
              </h3>
              <p className="text-gray-600 mb-4">
                Easy access from Camberwell Junction shopping and transport hub
              </p>
              <a
                href="https://maps.google.com/?q=GP+near+Camberwell+Junction+Melbourne"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                View on Google Maps
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-centre">
              <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Near Glenferrie Road
              </h3>
              <p className="text-gray-600 mb-4">
                Convenient location on popular Glenferrie Road corridor
              </p>
              <a
                href="https://maps.google.com/?q=GP+near+Glenferrie+Road+Hawthorn+East"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-block"
              >
                View on Google Maps
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-centre">
              <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Near Auburn Station
              </h3>
              <p className="text-gray-600 mb-4">
                Walking distance from Auburn Railway Station for easy commute
              </p>
              <a
                href="https://maps.google.com/?q=GP+near+Auburn+Station+Melbourne"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors inline-block"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-centre">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a GP who listens and guides you with care?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            📞 Call now or use our online form to reach Dr. Wick's clinic.
          </p>
          <NavLink
            to="/contact"
            className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colours"
          >
            Contact Dr. Wick
          </NavLink>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Dr. Maithri Wickramasinghe
              </h3>
              <p className="text-gray-300">MBChB, MRCGP, FRACGP</p>
              <p className="text-gray-300">General Practitioner</p>
              <p className="text-gray-300 mt-2">Camberwell & Hawthorn East</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-2">
                <NavLink
                  to="/"
                  className="block text-gray-300 hover:text-white"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="block text-gray-300 hover:text-white"
                >
                  About Dr. Wick
                </NavLink>
                <NavLink
                  to="/services"
                  className="block text-gray-300 hover:text-white"
                >
                  Medical Services
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block text-gray-300 hover:text-white"
                >
                  Contact & Appointments
                </NavLink>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <nav className="space-y-2">
                <NavLink
                  to="/services"
                  className="block text-gray-300 hover:text-white text-sm"
                >
                  Mental Health
                </NavLink>
                <NavLink
                  to="/services"
                  className="block text-gray-300 hover:text-white text-sm"
                >
                  Skin Checks
                </NavLink>
                <NavLink
                  to="/services"
                  className="block text-gray-300 hover:text-white text-sm"
                >
                  Diabetes Care
                </NavLink>
                <NavLink
                  to="/services"
                  className="block text-gray-300 hover:text-white text-sm"
                >
                  Men's Health
                </NavLink>
                <NavLink
                  to="/services"
                  className="block text-gray-300 hover:text-white text-sm"
                >
                  Bulk Billing
                </NavLink>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-300 mb-2">📞 [Phone Number]</p>
              <p className="text-gray-300 mb-2">📧 [Email Address]</p>
              <p className="text-gray-300 mb-2">📍 [Clinic Address]</p>
              <p className="text-gray-300 text-sm">
                Camberwell & Hawthorn East
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-centre">
            <p className="text-gray-400">
              © 2025 Dr. Maithri Wickramasinghe. All rights reserved. | Trusted
              GP in Camberwell & Hawthorn East
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
