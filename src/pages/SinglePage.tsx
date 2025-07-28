import ScrollingNavigation from "@/components/ScrollingNavigation";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import DoctorIcon from "@/components/DoctorIcon";
import { Shield, Stethoscope, User, Activity, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogArticles } from "@/data/blogArticles";
import { useNavigate } from "react-router-dom";

const SinglePage = () => {
  const navigate = useNavigate();

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Dr. Wick" },
    { id: "services", label: "Services" },
    { id: "blog", label: "Invest in your Health" },
    { id: "contact", label: "Contact" },
  ];

  const handleBlogClick = (articleId: string) => {
    navigate(`/blog/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollingNavigation sections={sections} />

      {/* Home Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20 min-h-screen flex items-center"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colours"
                >
                  Explore Services
                </button>
              </div>
            </div>
            <div className="flex justify-centre lg:justify-end">
              <div className="relative">
                <img
                  src="/uploads/c7629ccb-c6d3-46ac-91aa-9f631e9a08f6.png"
                  alt="Dr. Maithri Wickramasinghe"
                  className="w-80 h-96 lg:w-96 sm:h-[500px] object-cover rounded-lg shadow-2xl border-4 border-white/20"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              About Dr. Maithri Wickramasinghe
            </h2>
          </div>

          {/* Professional Journey */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Professional Journey
            </h3>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                Dr. Maithri Wickramasinghe, known as Dr. Wick graduated from the
                University of Aberdeen in Scotland in 1996. He initially trained
                in multiple surgical subspecialties before finding his true
                calling in General Practice.
              </p>
              <p className="mb-6">
                After completing his GP training in Cambridgeshire, UK, Dr. Wick
                earned membership of the Royal College of General Practitioners
                and a Diploma in Family Planning and Sexual Health. In 2011, he
                moved to Melbourne, Australia, and soon received his Fellowship
                from the Royal Australian College of General Practitioners
                (FRACGP).
              </p>
            </div>
          </div>

          {/* Qualifications */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Qualifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-centre">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">
                  MBChB
                </h4>
                <p className="text-gray-600">
                  University of Aberdeen, Scotland
                </p>
                <p className="text-sm text-gray-500">1996</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-centre">
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  MRCGP
                </h4>
                <p className="text-gray-600">
                  Royal College of General Practitioners, UK
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-centre">
                <h4 className="text-xl font-semibold text-purple-800 mb-2">
                  FRACGP
                </h4>
                <p className="text-gray-600">
                  Royal Australian College of General Practitioners
                </p>
              </div>
            </div>
          </div>

          {/* Experience and Philosophy */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Experience and Philosophy
            </h3>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                With broad exposure to both UK and Australian health systems,
                Dr. Wick has developed an adaptive, holistic approach to primary
                care. He places high importance on:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Preventative strategies</li>
                <li>Lifestyle and wellbeing</li>
                <li>Early detection and health optimisation</li>
                <li>Compassionate, patient-focussed communication</li>
              </ul>
              <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 italic text-lg">
                "I believe that good medicine is built on trust, respect, and
                evidence-based care tailored to each individual."
              </blockquote>
            </div>
          </div>

          {/* Beyond the clinic */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Beyond the clinic
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Dr. Wick enjoys a wide array of hobbies—from scuba diving and
                skiing, to gardening and restoring vintage cars. At home, he
                cherishes time with his wife, two daughters, and their lovable
                toy cavoodle, often relaxing over a good film and a small glass
                of single malt whisky.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 mx-auto">
              Dr. Wick offers comprehensive medical care with a focus on
              preventative health, evidence-based treatment, and compassionate
              patient care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <ServiceCard
              icon={<Shield className="w-8 h-8 text-green-600" />}
              title="Preventative Health"
              description="Proactive care is at the heart of Dr. Wick's practice. We focus on preventing illness before it starts."
              features={[
                "Weight loss and healthy living advice",
                "Cancer screening guidance",
                "Smoking cessation support",
                "Men's health screening",
                "Contraception and family planning",
              ]}
            />

            <ServiceCard
              icon={<DoctorIcon className="w-8 h-8 text-red-600" />}
              title="Minor Surgical Procedures"
              description="Dr. Wick is skilled in providing safe, efficient minor surgery in a general practice setting after a pre-planning consultation."
              features={[
                "Skin lesion and mole excisions",
                "Treatment for minor cuts and injuries",
                "Minor surgeries including ingrown toe nails",
                "Minimally invasive treatment of haemorrhoids including banding procedures",
              ]}
            />

            <ServiceCard
              icon={<Calendar className="w-8 h-8 text-blue-600" />}
              title="Annual & Medication Reviews"
              description="Ensuring patients stay on the best possible treatment with regular comprehensive reviews."
              features={[
                "Thorough annual health checks",
                "Medication optimisation reviews",
                "Treatment alignment with latest guidelines",
              ]}
            />

            <ServiceCard
              icon={<Stethoscope className="w-8 h-8 text-purple-600" />}
              title="Chronic Disease & General Care"
              description="Ongoing management and support for various health conditions with personalised care plans."
              features={[
                "Hypertension management",
                "Diabetes care",
                "Asthma and COPD support",
                "Mental health support",
              ]}
            />

            <ServiceCard
              icon={<Activity className="w-8 h-8 text-orange-600" />}
              title="Lifestyle & Wellness"
              description="Reflecting his belief in holistic health, Dr. Wick offers comprehensive lifestyle guidance."
              features={[
                "Physical activity planning",
                "Nutrition counselling",
                "Stress management techniques",
                "Work-life balance strategies",
              ]}
            />

            <ServiceCard
              icon={<User className="w-8 h-8 text-indigo-600" />}
              title="Men's Health"
              description="Specialised care addressing the unique health needs and concerns of men at all life stages."
              features={[
                "Prostate health screening",
                "Testosterone assessments",
                "Sexual health consultations",
                "Male contraception options",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Invest in Your Health Today
            </h2>
            <p className="text-lg text-gray-600 mx-auto">
              Stay informed with the latest insights on health, wellness, and
              medical care from Dr. Wick's expertise.
            </p>
          </div>

          <div className="relative">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {blogArticles.map((article) => (
                  <CarouselItem
                    key={article.id}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <BlogCard
                      article={article}
                      onClick={() => handleBlogClick(article.id)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-4xl font-bold mb-6">Contact Dr. Wick</h2>
            <p className="text-xl text-blue-100 mb-8">
              📞 Call now or use our online form to reach Dr. Wick's clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-centre text-blue-100">
                  <span className="mr-3">📞</span>
                  +61 3 9834-7600
                </p>
                {/* <p className="flex items-centre text-blue-100">
                  <span className="mr-3">📧</span>
                  [Email Address]
                </p> */}
                <p className="flex items-centre text-blue-100">
                  <span className="mr-3">📍</span>
                  124-126 Camberwell Road Hawthorn East, VIC 3123.
                </p>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to experience compassionate care?
              </h3>
              <p className="mb-6">
                Book an appointment with Dr. Maithri Wickramasinghe today
              </p>
              <a
                href="https://www.ipn.com.au/gp/vic-hawthorn-east-camberwell-road-medical-practice/our-doctors/dr-maithri-wickramasinge/"
                target="_blank"
                className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colours font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
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
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() =>
                      document
                        .getElementById(section.id)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="block text-gray-300 hover:text-white text-left"
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-300 mb-2">📞 +61 3 9834-7600</p>
              {/* <p className="text-gray-300 mb-2">📧 [Email Address]</p> */}
              <p className="text-gray-300">
                📍 124-126 Camberwell Road Hawthorn East, VIC 3123.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-centre">
            <p className="text-gray-400">
              © 2024 Dr. Maithri Wickramasinghe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SinglePage;
