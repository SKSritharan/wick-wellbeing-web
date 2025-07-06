import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import DoctorIcon from "@/components/DoctorIcon";
import {
  Shield,
  Activity,
  User,
  Stethoscope,
  Calendar,
  UserCheck,
  Heart,
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-centre mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>
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

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-centre">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Book an appointment today to discuss how Dr. Wick can help with your
            health goals.
          </p>
          <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colours font-medium">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
