import { NavLink } from "react-router-dom";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Heart, Shield, Stethoscope, User, Scissors } from "lucide-react";

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
                Your Partner in Holistic and Compassionate Primary Care
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
              Trusted Medical Care Rooted in Experience and Empathy
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
              Healthcare provided
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-centre">
              <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Preventative Health & Lifestyle Support
              </h3>
            </div>
            <div className="text-centre">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Chronic Disease & General Practice
              </h3>
            </div>
            <div className="text-centre">
              <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                <User className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Men's Health & Contraception
              </h3>
            </div>
            <div className="text-centre">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                <Scissors className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Minor Surgical Procedures
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
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Dr. Maithri Wickramasinghe
              </h3>
              <p className="text-gray-300">MBChB, MRCGP, FRACGP</p>
              <p className="text-gray-300">General Practitioner</p>
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
                  About
                </NavLink>
                <NavLink
                  to="/services"
                  className="block text-gray-300 hover:text-white"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block text-gray-300 hover:text-white"
                >
                  Contact
                </NavLink>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-300 mb-2">📞 [Phone Number]</p>
              <p className="text-gray-300 mb-2">📧 [Email Address]</p>
              <p className="text-gray-300">📍 [Clinic Address]</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-centre">
            <p className="text-gray-400">
              © 2025 Dr. Maithri Wickramasinghe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
