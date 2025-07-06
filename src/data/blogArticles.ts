
export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "preventive-care-importance",
    title: "The Importance of Preventive Care in Modern Healthcare",
    excerpt: "Understanding how preventive healthcare measures can save lives and reduce long-term medical costs.",
    coverImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    content: `
      <p>Preventive care is the cornerstone of modern healthcare practice. It involves taking proactive steps to prevent illness and disease before they occur, rather than simply treating conditions after they develop.</p>
      
      <h2>What is Preventive Care?</h2>
      <p>Preventive care encompasses a wide range of healthcare services designed to prevent illness, detect health problems early, and maintain optimal health. This includes regular check-ups, screenings, vaccinations, and lifestyle counselling.</p>
      
      <h2>Benefits of Preventive Care</h2>
      <ul>
        <li><strong>Early Detection:</strong> Many serious conditions can be detected and treated more effectively when caught early.</li>
        <li><strong>Cost Effectiveness:</strong> Preventing illness is often less expensive than treating advanced diseases.</li>
        <li><strong>Improved Quality of Life:</strong> Regular preventive care helps maintain better overall health and wellbeing.</li>
        <li><strong>Reduced Healthcare Burden:</strong> Fewer emergency visits and hospitalisations.</li>
      </ul>
      
      <h2>Key Preventive Care Services</h2>
      <p>At Dr. Wick's practice, we emphasise comprehensive preventive care including:</p>
      <ul>
        <li>Annual health assessments</li>
        <li>Cancer screening programmes</li>
        <li>Cardiovascular risk assessments</li>
        <li>Immunisation updates</li>
        <li>Lifestyle and nutrition counselling</li>
      </ul>
      
      <p>By prioritising preventive care, we can work together to maintain your health and catch potential issues before they become serious problems.</p>
    `,
    author: "Dr. Maithri Wickramasinghe",
    date: "15th November 2024",
    readTime: "5 min read"
  },
  {
    id: "mens-health-matters",
    title: "Men's Health Matters: Breaking the Silence",
    excerpt: "Addressing the unique health challenges men face and encouraging proactive healthcare engagement.",
    coverImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=400&fit=crop",
    content: `
      <p>Men's health has long been an overlooked area in healthcare, with many men reluctant to seek medical attention until problems become severe. It's time to change this narrative.</p>
      
      <h2>Common Men's Health Issues</h2>
      <p>Men face unique health challenges that require specific attention and care:</p>
      
      <h3>Cardiovascular Health</h3>
      <p>Heart disease remains a leading cause of death among men. Regular cardiovascular screening and lifestyle modifications can significantly reduce risk.</p>
      
      <h3>Prostate Health</h3>
      <p>Prostate problems become increasingly common with age. Regular screening can detect issues early when treatment is most effective.</p>
      
      <h3>Mental Health</h3>
      <p>Men are less likely to seek help for mental health issues, yet depression and anxiety are significant concerns that require attention.</p>
      
      <h2>Breaking Down Barriers</h2>
      <p>Several factors prevent men from seeking healthcare:</p>
      <ul>
        <li>Social stigma around vulnerability</li>
        <li>Busy work schedules</li>
        <li>Fear of medical procedures</li>
        <li>Assumption that minor symptoms will resolve on their own</li>
      </ul>
      
      <h2>Taking Action</h2>
      <p>It's crucial for men to take an active role in their health. This includes regular check-ups, open communication with healthcare providers, and addressing concerns promptly rather than waiting.</p>
      
      <p>Remember, seeking healthcare is a sign of strength, not weakness. Your health matters not just to you, but to your family and community.</p>
    `,
    author: "Dr. Maithri Wickramasinghe",
    date: "8th November 2024",
    readTime: "4 min read"
  },
  {
    id: "minor-surgery-explained",
    title: "Minor Surgery in General Practice: What to Expect",
    excerpt: "A comprehensive guide to minor surgical procedures performed in a GP setting and what patients should know.",
    coverImage: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=400&fit=crop",
    content: `
      <p>Minor surgery in general practice has become increasingly common, offering patients convenient access to procedures without the need for hospital visits.</p>
      
      <h2>What Constitutes Minor Surgery?</h2>
      <p>Minor surgery refers to surgical procedures that can be safely performed in a general practice setting under local anaesthetic. These procedures typically involve:</p>
      <ul>
        <li>Skin lesion removal</li>
        <li>Mole excisions</li>
        <li>Cyst removal</li>
        <li>Ingrown toenail treatment</li>
        <li>Minor wound repairs</li>
      </ul>
      
      <h2>Benefits of GP-Based Minor Surgery</h2>
      <h3>Convenience</h3>
      <p>Procedures can be performed in familiar surroundings with your regular GP, eliminating the need for hospital referrals in many cases.</p>
      
      <h3>Reduced Waiting Times</h3>
      <p>GP-based procedures often have shorter waiting times compared to hospital-based surgery.</p>
      
      <h3>Continuity of Care</h3>
      <p>Your GP can provide comprehensive pre- and post-operative care, ensuring seamless treatment.</p>
      
      <h2>What to Expect</h2>
      <h3>Pre-procedure Consultation</h3>
      <p>Before any minor surgery, a thorough consultation will assess your suitability for the procedure and discuss all aspects of treatment.</p>
      
      <h3>The Procedure</h3>
      <p>Most minor surgical procedures are performed under local anaesthetic and take between 15-45 minutes, depending on complexity.</p>
      
      <h3>Aftercare</h3>
      <p>Detailed aftercare instructions will be provided, including wound care, activity restrictions, and follow-up appointments.</p>
      
      <h2>Safety and Standards</h2>
      <p>All minor surgical procedures are performed to the highest standards with appropriate sterile techniques and equipment. Patient safety is always the top priority.</p>
      
      <p>If you have any concerns about a skin lesion or require minor surgery, don't hesitate to book a consultation to discuss your options.</p>
    `,
    author: "Dr. Maithri Wickramasinghe",
    date: "1st November 2024",
    readTime: "6 min read"
  },
  {
    id: "lifestyle-medicine-approach",
    title: "Lifestyle Medicine: Your Path to Better Health",
    excerpt: "Exploring how lifestyle changes can be as powerful as medication in treating and preventing disease.",
    coverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    content: `
      <p>Lifestyle medicine represents a evidence-based approach to preventing, treating, and often reversing disease by addressing lifestyle factors that are the root cause of many chronic conditions.</p>
      
      <h2>The Six Pillars of Lifestyle Medicine</h2>
      
      <h3>1. Nutrition</h3>
      <p>A whole food, plant-predominant eating pattern has been shown to prevent and reverse many chronic diseases including heart disease, diabetes, and certain cancers.</p>
      
      <h3>2. Physical Activity</h3>
      <p>Regular physical activity is one of the most powerful interventions for both preventing and treating chronic disease. Even moderate exercise can have profound health benefits.</p>
      
      <h3>3. Sleep</h3>
      <p>Quality sleep is essential for optimal health. Poor sleep is linked to obesity, diabetes, cardiovascular disease, and compromised immune function.</p>
      
      <h3>4. Stress Management</h3>
      <p>Chronic stress contributes to numerous health problems. Learning effective stress management techniques is crucial for long-term health.</p>
      
      <h3>5. Social Connection</h3>
      <p>Strong social relationships and community connections are fundamental to both mental and physical health.</p>
      
      <h3>6. Avoiding Risky Substances</h3>
      <p>Avoiding tobacco, limiting alcohol consumption, and avoiding other harmful substances is essential for optimal health.</p>
      
      <h2>The Power of Lifestyle Changes</h2>
      <p>Research consistently shows that lifestyle interventions can be as effective as medication for many conditions:</p>
      <ul>
        <li>Type 2 diabetes can often be reversed through diet and exercise</li>
        <li>High blood pressure frequently responds to lifestyle modifications</li>
        <li>Depression and anxiety can be significantly improved through lifestyle changes</li>
        <li>Many cardiovascular risk factors can be reduced without medication</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>The key to successful lifestyle change is starting small and building sustainable habits. Focus on one area at a time and make gradual, sustainable changes rather than attempting dramatic overnight transformations.</p>
      
      <p>As your GP, I'm here to support you on your journey towards better health through lifestyle medicine. Together, we can create a personalised plan that works for your unique circumstances and goals.</p>
    `,
    author: "Dr. Maithri Wickramasinghe",
    date: "25th October 2024",
    readTime: "7 min read"
  }
];
