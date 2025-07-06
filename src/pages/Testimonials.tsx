
import Header from '@/components/Header';
import TestimonialCard from '@/components/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "K. Fernando",
      text: "Dr. Wick takes time to listen and always makes me feel respected. His advice on weight loss has been life-changing.",
      rating: 5
    },
    {
      name: "M. Jayasinghe",
      text: "It's rare to find a doctor who combines professionalism with such warmth and genuine care.",
      rating: 5
    },
    {
      name: "D. Pereira",
      text: "I had a minor skin procedure and was nervous, but Dr. Wick made the whole process easy and reassuring.",
      rating: 5
    },
    {
      name: "A. Smith",
      text: "Dr. Wick is thorough, kind, and always willing to listen. I feel heard and cared for.",
      rating: 5
    },
    {
      name: "R. Thompson",
      text: "The annual health check was comprehensive and Dr. Wick explained everything clearly. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-centre mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Patient Testimonials</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read what our patients have to say about their experience with Dr. Wick's compassionate and comprehensive care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-blue-800 text-white rounded-lg p-8 text-centre">
          <h2 className="text-3xl font-bold mb-4">Experience Quality Care Yourself</h2>
          <p className="text-xl mb-6 text-blue-100">
            Join our community of satisfied patients and experience Dr. Wick's compassionate care.
          </p>
          <button className="bg-white text-blue-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colours font-medium">
            Book Your Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
