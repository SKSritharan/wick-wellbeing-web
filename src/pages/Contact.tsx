import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Contact Dr. Wick
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch to schedule an appointment or ask any questions about
            our services. We're here to help you on your journey to better
            health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-gray-600">
                    124-126 Camberwell Road Hawthorn East,
                  </p>
                  <p className="text-gray-600">VIC 3123</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">(03) 9834 7600</p>
                </div>
              </div>

              {/* <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">[Insert email address]</p>
                </div>
              </div> */}

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Clinic Hours
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4">Location</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.3541365165543!2d145.0530662!3d-37.8285945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6418130c497d3%3A0x57db79c6e8be292d!2sCamberwell%20Road%20Medical%20Practice%2C%20124-126%20Camberwell%20Rd%2C%20Hawthorn%20East%20VIC%203123%2C%20Australia!5e0!3m2!1sen!2slk!4v1752501250399!5m2!1sen!2slk"
                  width="550"
                  height="300"
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need advice or want to schedule a consultation?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Dr. Wick and his team are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://share.google/SUTyWWduaIEwU25z7"
              className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colours"
            >
              Book an Appointment
            </a>
            <a
              href="tel:0398347600"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition-colors font-medium"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
