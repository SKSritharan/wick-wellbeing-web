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
    id: "take-charge-your-health",
    title:
      "Take Charge of Your Health: Your GP Is Your Partner in Lifelong Wellbeing",
    excerpt:
      "Good health doesn't come from waiting—it comes from acting early. Discover how your GP can support you across all aspects of health management.",
    coverImage:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=400&fit=crop",
    content: `
      <p>Good health doesn't come from waiting—it comes from acting early. Whether it's a quick check-up or long-term management, your GP offers expert support tailored to your needs. From screening and prevention to ongoing care, staying engaged with your health provider is one of the most effective ways to stay well and live fully.</p>
      
      <h2>Asthma: Stay in Control, Breathe Easy</h2>
      <p>Asthma isn't static—it evolves. The latest Australian Asthma Handbook (Version 2.2) recommends anti-inflammatory treatment even for mild asthma, because early control reduces long-term damage.</p>
      
      <p>Here's how your GP supports asthma management:</p>
      <ul>
        <li>Reviews your current regimen and adapts based on symptoms and risk</li>
        <li>Checks inhaler technique for better medication delivery</li>
        <li>Adjusts treatments as needed—stepping up or down safely</li>
        <li>Addresses associated conditions like anxiety or hay fever</li>
        <li>Helps identify and manage triggers in your environment</li>
      </ul>
      <p>These check-ins don't just reduce flare-ups—they improve quality of life.</p>
      
      <h2>Type 2 Diabetes: Take Control Early, Stay Ahead</h2>
      <p>Diabetes can do silent damage long before symptoms show. But early detection and tailored treatment can slow progression, prevent complications—and even achieve remission in some cases.</p>
      
      <p>Your GP can:</p>
      <ul>
        <li>Order diagnostic tests and monitor blood sugar regularly</li>
        <li>Prescribe modern medications that also protect heart and kidneys</li>
        <li>Help with regular check-ups to track cholesterol, kidney function, and more</li>
        <li>Support real-world lifestyle changes around food and movement</li>
        <li>Help build your understanding and confidence to manage the condition</li>
      </ul>
      <p>It's not just good care—it can be a life-saving strategy.</p>
      
      <h2>Weight Management: Healthier, Stronger, More Energised</h2>
      <p>Excess weight increases risk for heart disease, diabetes, joint pain and more—but it's not about blame. It's about support.</p>
      
      <p>Your GP can guide you through a personalised plan that includes:</p>
      <ul>
        <li>Nutrition coaching for sustainable eating habits</li>
        <li>Exercise guidance to fit your abilities and schedule</li>
        <li>Behavioural support to tackle emotional eating and build mindset strength</li>
        <li>Medications that help manage weight and improve metabolism</li>
        <li>Very Low Energy Diets (VLEDs) under clinical supervision</li>
        <li>Specialist referrals if needed, including bariatric care</li>
      </ul>
      <p>The goal: not just weight loss, but reclaiming confidence, energy and long-term wellbeing.</p>
      
      <h2>Smoking Cessation: Every Smoke-Free Day is a Win</h2>
      <p>Quitting isn't easy—but with support, it becomes possible. Your GP can create a personalised quit plan and check in with you at every stage.</p>
      
      <p>Available support includes:</p>
      <ul>
        <li>Nicotine replacement products like patches and lozenges</li>
        <li>Prescription medications such as varenicline or bupropion</li>
        <li>Free tools like the My QuitBuddy app and calls to Quitline</li>
        <li>Emotional strategies to beat cravings and manage triggers</li>
      </ul>
      <p>The first step brings benefits within minutes—clearer breathing, better circulation, and a stronger future.</p>
      
      <h2>Men's Health: Confidential, Expert Care Without Judgment</h2>
      <p>Men often delay care for sensitive issues, but early action can make all the difference.</p>
      
      <p>Your GP can help with:</p>
      <ul>
        <li>Prostate screening tests</li>
        <li>Treatment for erectile difficulties or premature ejaculation</li>
        <li>Candid, professional advice to protect your health and confidence</li>
      </ul>
      <p>These are common concerns—and your doctor's here to help with discretion and real solutions.</p>
      
      <h2>Haemorrhoids: Relief Starts with a Conversation</h2>
      <p>Discomfort from piles is nothing to be embarrassed about—and solutions are often simple.</p>
      
      <p>Your GP may recommend:</p>
      <ul>
        <li>Diet changes like adding fibre and water</li>
        <li>Topical creams or suppositories</li>
        <li>Rubber band ligation—an in-clinic procedure that shrinks haemorrhoids without needing hospital care</li>
      </ul>
      <p>Addressing it early prevents worsening symptoms and restores comfort.</p>
      
      <h2>Contraception: Choices That Fit Your Life</h2>
      <p>From implants and IUDs to other contraceptives, there's no universal method—just the one that suits you.</p>
      
      <p>Your GP can:</p>
      <ul>
        <li>Review your health needs and lifestyle</li>
        <li>Guide you through options, including newer methods</li>
        <li>Provide a confidential space to explore what's best for you</li>
      </ul>
      <p>Curious? Visit Sexual Health Victoria for a helpful overview, then talk to your GP for personalised advice.</p>
      
      <h2>Immunisation: Protection at Every Stage of Life</h2>
      <p>Vaccines don't stop at childhood. Whether it's flu, shingles, HPV or more, adult immunisations are essential.</p>
      
      <p>Your GP can:</p>
      <ul>
        <li>Check your vaccine history</li>
        <li>Advise on state-funded options based on age or risk</li>
        <li>Help schedule catch-up or booster shots</li>
      </ul>
      <p>Up-to-date immunisation helps keep you—and your community—safe.</p>
      
      <h2>Why It All Matters: Proactive Care Means Living Better</h2>
      <p>Your GP isn't just for emergencies—they're your partner in prevention, personal health goals, and long-term vitality. These visits build trust, continuity, and confidence in your health journey.</p>
      
      <p>Book a check-up today. Ask questions, express concerns, and take the next step toward better health—for body, mind, and future.</p>
    `,
    author: "Dr. Maithri Wickramasinghe",
    date: "14th July 2025",
    readTime: "8 min read",
  },
];
