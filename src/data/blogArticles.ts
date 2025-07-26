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
    excerpt: `<ul class="list-disc pl-6 mb-4 space-y-2">
      <li class="mb-2">🫁 Asthma Care: Stay in Control, Breathe with Confidence</li>
      <li class="mb-2">🧪 Diabetes Management: Take Charge Before Complications Begin</li>
      <li class="mb-2">⚖️ Weight Management: Personalised Support for Whole-Body Health</li>
      <li class="mb-2">🚭 Quit Smoking: Support That Makes It Stick</li>
      <li class="mb-2">👨‍⚕️ Men's Health: Straightforward, Supportive Care</li>
      <li class="mb-2">💡 Haemorrhoid Relief: Gentle Solutions, Real Results</li>
      <li class="mb-2">🔄 Contraception: Choices That Fit Your Life and Health</li>
      <li class="mb-2">💉 Immunisation: Lifelong Protection Starts Here</li>
      <li class="mb-2">🗓️ Why It All Matters: Your GP Is Your Health Ally</li>
      `,
    coverImage:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=400&fit=crop",
    content: `
      <p class="mb-4">Regular visits to your GP aren't just about fixing problems—they’re about staying well, preventing illness, and living fully. Whether you’re managing a condition or checking in for peace of mind, proactive care supports lifelong health and confidence.</p>
      
      <h2 class="text-2xl font-bold flex items-center gap-2 mt-8 mb-4">🫁 Asthma Care: Stay in Control, Breathe with Confidence</h2>
      <p class="mb-4">Asthma can change over time—so should your treatment. Your GP helps:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li class="mb-2">Tailor medications to your needs</li>
        <li class="mb-2">Check inhaler technique</li>
        <li class="mb-2">Prevent flare-ups with updated guidelines</li>
        <li class="mb-2">Address triggers and related conditions</li>
      </ul>
      <p class="mb-8">Early reviews mean better breathing and fewer disruptions to life.</p>
      
      <h2 class="text-2xl font-bold flex items-center gap-2 mt-8 mb-4">🧪 Diabetes Management: Take Charge Before Complications Begin</h2>
      <p class="mb-4">Type 2 diabetes can often be silent—but it doesn’t have to be. With early intervention, your GP can:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li class="mb-2">Detect diabetes before damage begins</li>
        <li class="mb-2">Prescribe medications that protect your heart and kidneys</li>
        <li class="mb-2">Support lifestyle changes and empower self-care</li>
        <li class="mb-2">Monitor for silent complications like eye or nerve damage</li>
      </ul>
      <p class="mb-8">It’s never too early—or too late—to take control.</p>
      
      <h2 class="text-2xl font-bold flex items-center gap-2 mt-8 mb-4">⚖️ Weight Management: Personalised Support for Whole-Body Health</h2>
      <p class="mb-4">Extra weight affects more than your waistline—it can strain your heart, joints, sleep, and energy. Your GP provides:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li class="mb-2">Tailored nutrition and activity plans</li>
        <li class="mb-2">Behavioural strategies to support change</li>
        <li class="mb-2">Medication or VLEDs if appropriate</li>
        <li class="mb-2">Referrals for specialist or surgical support</li>
      </ul>
      <p class="mb-8">This isn’t about fad diets—it’s about feeling strong, healthy, and confident.</p>
      
      <h2 class="text-2xl font-bold flex items-center gap-2 mt-8 mb-4">🚭 Quit Smoking: Support That Makes It Stick</h2>
      <p class="mb-4">Stopping smoking isn’t just a choice—it’s a journey. Your GP offers:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li class="mb-2">Nicotine replacement tools like patches or gum</li>
        <li class="mb-2">Prescription medications to ease cravings</li>
        <li class="mb-2">Emotional and behavioural support</li>
        <li class="mb-2">Access to trusted tools like My QuitBuddy and Quitline</li>
      </ul>
      <p class="mb-8">Every smoke-free day is a win—for your heart, lungs, energy, and future.</p>
      
      <h2 class="text-2xl font-bold flex items-center gap-2 mt-8 mb-4">👨‍⚕️ Men’s Health: Straightforward, Supportive Care</h2>
      <p class="mb-4">Many men wait too long to ask for help—especially when it involves:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li class="mb-2">Bedroom health or performance</li>
        <li class="mb-2">Prostate checks</li>
        <li class="mb-2">Fertility and mental wellbeing</li>
      </ul>
      <p class="mb-8">Your GP provides expert care and practical solutions—without judgment, and with total discretion.</p>
      
      <h2 class="text-2xl font-bold flex items-center gap-2 mt-8 mb-4">💡 Haemorrhoid Relief: Gentle Solutions, Real Results</h2>
      <p class="mb-4">If you're dealing with haemorrhoids, your GP can guide you through:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li class="mb-2">Diet and lifestyle tweaks</li>
        <li class="mb-2">Topical treatments for relief</li>
        <li class="mb-2">In-clinic procedures like rubber band ligation</li>
      </ul>
      <p class="mb-8">No need for hospital visits—just effective care and restored comfort.</p>
      
      <h2 class="text-2xl font-bold flex items-center gap-2 mt-8 mb-4">🔄 Contraception: Choices That Fit Your Life and Health</h2>
      <p class="mb-4">Whether you’re starting birth control or exploring new options, your GP can help with:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li class="mb-2">Long-acting methods (implants, IUDs)</li>
        <li class="mb-2">Pills, injections, and barrier options</li>
        <li class="mb-2">Up-to-date advice tailored to your lifestyle</li>
      </ul>
      <p class="mb-8">Visit Sexual Health Victoria for a broad overview, then talk to your doctor for personalised care.</p>
      
      <h2 class="text-2xl font-bold flex items-center gap-2 mt-8 mb-4">💉 Immunisation: Lifelong Protection Starts Here</h2>
      <p class="mb-4">Vaccines protect you from serious illnesses—and your GP knows what’s needed based on your:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li class="mb-2">Age</li>
        <li class="mb-2">Health conditions</li>
        <li class="mb-2">State-funded eligibility</li>
      </ul>
      <p class="mb-8">Whether it's catch-up shots or boosters, staying current keeps everyone safer.</p>
      
      <h2 class="text-2xl font-bold flex items-center gap-2 mt-8 mb-4">🗓️ Why It All Matters: Your GP Is Your Health Ally</h2>
      <p class="mb-4">From prevention to personalised treatment, GP visits aren’t about reacting—they’re about planning. They help build:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li class="mb-2">Trust over time</li>
        <li class="mb-2">Confidence in your care</li>
        <li class="mb-2">Early support before issues escalate</li>
      </ul>
      <p class="mb-8">Take the first step today—book an appointment, start the conversation, and let your GP help you thrive.</p>
    `,
    author: "Dr. Maithri Wickramasinghe",
    date: "14th July 2025",
    readTime: "8 min read",
  },
];
