
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Dr. Maithri Wickramasinghe</h1>
          
          {/* Professional Journey */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Professional Journey</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                Dr. Maithri Wickramasinghe, known as Dr. Wick graduated from the University of Aberdeen in Scotland in 1996. He initially trained in multiple surgical subspecialties before finding his true calling in General Practice.
              </p>
              <p className="mb-6">
                After completing his GP training in Cambridgeshire, UK, Dr. Wick earned membership of the Royal College of General Practitioners and a Diploma in Family Planning and Sexual Health. In 2011, he moved to Melbourne, Australia, and soon received his Fellowship from the Royal Australian College of General Practitioners (FRACGP).
              </p>
            </div>
          </section>

          {/* Qualifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Qualifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">MBChB</h3>
                <p className="text-gray-600">University of Aberdeen, Scotland</p>
                <p className="text-sm text-gray-500">1996</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-2">MRCGP</h3>
                <p className="text-gray-600">Royal College of General Practitioners, UK</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">FRACGP</h3>
                <p className="text-gray-600">Royal Australian College of General Practitioners</p>
              </div>
            </div>
          </section>

          {/* Experience and Philosophy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Experience and Philosophy</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                With broad exposure to both UK and Australian health systems, Dr. Wick has developed an adaptive, holistic approach to primary care. He places high importance on:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Preventative strategies</li>
                <li>Lifestyle and wellbeing</li>
                <li>Early detection and health optimization</li>
                <li>Compassionate, patient-focused communication</li>
              </ul>
              <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 italic text-lg">
                "I believe that good medicine is built on trust, respect, and evidence-based care tailored to each individual."
              </blockquote>
            </div>
          </section>

          {/* Beyond the clinic */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Beyond the clinic</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Dr. Wick enjoys a wide array of hobbies—from scuba diving and skiing, to gardening and restoring vintage cars. At home, he cherishes time with his wife, two daughters, and their lovable toy cavoodle, often relaxing over a good film and a small glass of single malt whisky.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-blue-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Ready to experience compassionate care?</h3>
              <p className="mb-6">Book an appointment with Dr. Wick today</p>
              <button className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
