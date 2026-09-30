/**
 * ─────────────────────────────────────────────────────────────
 *  THE BUSINESS ARCHITECT — site content
 * ─────────────────────────────────────────────────────────────
 *  Almost every word on the website lives in this file, so you
 *  can edit copy without touching layout code.
 *
 *  Anything marked `TODO:` is a placeholder — replace it with
 *  your real details before launch. (Search this file for "TODO".)
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'The Business Architect',
  tagline: 'Business coaching for owners who want to design, not just survive.',
  description:
    'The Business Architect helps business owners design a company that runs on clear strategy, sound structure and reliable systems — so it can grow without consuming them.',

  // TODO: your real booking link (Calendly, Cal.com, TidyCal…)
  bookingUrl: 'https://calendly.com/your-link/discovery-call',

  // TODO: form endpoint (e.g. https://formspree.io/f/xxxxxx). Leave empty to fall back to email.
  formEndpoint: '',

  contact: {
    email: 'hello@thebusinessarchitect.example', // TODO
    phone: '+00 000 000 0000', // TODO (set to '' to hide)
    location: 'Your City, Country · Working with clients worldwide', // TODO
  },

  // TODO: your real profiles (remove any you don't use)
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { label: 'Instagram', url: 'https://www.instagram.com/' },
  ],

  nav: [
    { label: 'Method', href: '/method' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const founder = {
  name: 'Your Name', // TODO
  role: 'Founder & Lead Coach',
  // TODO: add your headshot to /public (e.g. /public/founder.jpg) and set the path here. Leave '' to show a placeholder.
  photo: '',
  shortBio:
    'I spent years inside growing businesses watching talented owners work harder every year for results that didn’t grow with them. The problem was rarely effort. It was design. The Business Architect exists to fix that.', // TODO: personalise
  story: [
    // TODO: replace with your own story — 2–4 short paragraphs work best.
    'Before coaching, I worked in and alongside businesses at every stage — from kitchen-table start-ups to established firms with teams of fifty. The pattern was always the same: owners who were brilliant at their craft, stretched thin by a business that had grown by accident rather than by design.',
    'I started The Business Architect to give owners what an architect gives a building: a clear plan before the concrete is poured. We look at the whole structure — strategy, offer, finances, team and systems — and design how each part should carry weight.',
    'My clients don’t come to me for motivation. They come for clarity, structure and an honest thinking partner who will hold them to the plan. That is what I bring to every engagement.',
  ],
  credentials: [
    // TODO: replace with your real qualifications & experience
    'XX years’ experience in business leadership & consulting',
    'Certified business coach (add accrediting body)',
    'Worked with 100+ owners across services, retail & professional practices',
    'Background in operations, finance & team development',
  ],
};

export const hero = {
  eyebrow: 'Business coaching & strategy',
  title: 'Design the business you actually want to run.',
  lead: 'Most businesses aren’t built — they accumulate. I help owners step back, draw the plans, and rebuild around a clear strategy, a sound structure and systems that don’t depend on you doing everything.',
  primaryCta: 'Book a discovery call',
  secondaryCta: 'See how it works',
};

export const painPoints = {
  eyebrow: 'Sound familiar?',
  title: 'You built something real. Now it needs an architect.',
  items: [
    {
      title: 'Everything runs through you',
      text: 'Decisions, approvals, problems — the business stops when you do. Holidays feel like a risk.',
    },
    {
      title: 'Growth has stalled — or got messy',
      text: 'Revenue has plateaued, or it’s growing while profit, cash and sanity are not.',
    },
    {
      title: 'Busy, but not moving forward',
      text: 'The urgent eats the important. Strategy is something you’ll “get to next quarter”.',
    },
    {
      title: 'Your team needs more direction',
      text: 'Good people, unclear roles. You’re managing tasks when you should be leading.',
    },
  ],
};

export const method = {
  eyebrow: 'The Blueprint Method',
  title: 'Four phases. One coherent plan.',
  lead: 'Good buildings aren’t improvised, and neither are good businesses. Every engagement follows the same disciplined sequence — so nothing important gets skipped, and every change supports the whole.',
  phases: [
    {
      number: '01',
      name: 'Survey',
      summary: 'Understand the ground you’re building on.',
      detail:
        'We take an honest look at where the business really is: numbers, offer, customers, team, time and the things that keep you up at night. You can’t design well on a site you haven’t measured.',
      deliverables: ['Business diagnostic & scorecard', 'Owner goals & constraints', 'Priority issues map'],
      duration: 'Weeks 1–2',
    },
    {
      number: '02',
      name: 'Blueprint',
      summary: 'Draw the plans before anything gets built.',
      detail:
        'Together we design the business you want: where it’s going, what it sells and to whom, how it makes money, and what structure it needs to get there. The result is a one-page strategic blueprint you’ll actually use.',
      deliverables: ['One-page strategic blueprint', '12-month targets', '90-day priorities'],
      duration: 'Weeks 3–4',
    },
    {
      number: '03',
      name: 'Build',
      summary: 'Put the structure in place, piece by piece.',
      detail:
        'We implement in focused 90-day cycles: tightening your offer and pricing, building the systems and processes that remove you as the bottleneck, and clarifying roles so your team can own outcomes.',
      deliverables: ['Core systems & processes', 'Roles & accountability chart', 'Fortnightly coaching sessions'],
      duration: 'Months 2–6',
    },
    {
      number: '04',
      name: 'Scale',
      summary: 'Build upward with confidence.',
      detail:
        'With solid foundations in place, growth stops being fragile. We review the numbers, refine the plan, and decide what to build next — with a business that can carry the extra weight.',
      deliverables: ['Quarterly strategy reviews', 'KPI dashboard', 'Leadership rhythm'],
      duration: 'Ongoing',
    },
  ],
};

export const services = {
  eyebrow: 'Ways to work together',
  title: 'Choose the engagement that fits the build.',
  lead: 'Every engagement starts with a free, no-pressure discovery call to see whether we’re a good fit.',
  items: [
    {
      name: 'Blueprint Intensive',
      tagline: 'A focused strategy sprint',
      description:
        'Two deep-dive working sessions to diagnose your business and produce a clear one-page blueprint with 90-day priorities. Ideal if you need direction fast.',
      includes: ['Pre-session business diagnostic', '2 × 3-hour strategy sessions', 'One-page strategic blueprint', '30-day follow-up call'],
      price: 'From $X,XXX', // TODO
      featured: false,
    },
    {
      name: '1:1 Architect Coaching',
      tagline: 'Our signature engagement',
      description:
        'A six-month partnership through the full Blueprint Method. We design the plan together, then build it — with regular coaching, accountability and practical support between sessions.',
      includes: ['Full Survey & Blueprint phases', 'Fortnightly 90-minute sessions', 'Messaging support between sessions', 'Templates, tools & KPI dashboard', 'Quarterly strategy review'],
      price: 'By application', // TODO
      featured: true,
    },
    {
      name: 'Workshops & Team Programmes',
      tagline: 'For leadership teams',
      description:
        'Facilitated workshops and short programmes that align your leadership team around strategy, roles and the rhythms that keep a growing business on course.',
      includes: ['Strategy & planning days', 'Leadership team alignment', 'Systems & delegation workshops', 'In-person or online'],
      price: 'Tailored quote', // TODO
      featured: false,
    },
  ],
};

export const stats = [
  // TODO: replace with your real numbers (or remove the section in index.astro)
  { value: '100+', label: 'business owners coached' },
  { value: '12', label: 'industries served' },
  { value: '4.9/5', label: 'average client rating' },
  { value: '90', label: 'days to a working plan' },
];

export const testimonials = [
  // TODO: replace with real client testimonials (with their permission).
  {
    quote:
      'For the first time in years I know exactly what the business is for and what I should be working on. The blueprint lives on my wall.',
    name: 'Client Name',
    role: 'Founder, Company Name',
  },
  {
    quote:
      'We went from me approving everything to a team that runs the day-to-day. I took a two-week holiday and nothing broke.',
    name: 'Client Name',
    role: 'Managing Director, Company Name',
  },
  {
    quote:
      'Practical, direct and genuinely invested. Every session ended with clear decisions, not just good conversation.',
    name: 'Client Name',
    role: 'Owner, Company Name',
  },
];

export const faqs = [
  {
    q: 'Who do you work with?',
    a: 'Owners and leaders of small and mid-sized businesses — typically established enough to have customers and a team, but feeling the strain of growth that happened without a plan.', // TODO: tailor
  },
  {
    q: 'Is this coaching or consulting?',
    a: 'Both, deliberately. I bring frameworks, tools and direct advice like a consultant, but you make the decisions and build the capability — so the business keeps improving after we finish.',
  },
  {
    q: 'Do you work online or in person?',
    a: 'Most coaching is delivered online over video, which means I can work with clients anywhere. Workshops and intensives can be run in person by arrangement.', // TODO
  },
  {
    q: 'How much time will it take?',
    a: 'Plan for a 90-minute session every fortnight plus a few hours between sessions to implement. The aim is to give you time back, not take more of it.',
  },
  {
    q: 'What happens on the discovery call?',
    a: 'A relaxed 30-minute conversation about where your business is and where you want it to go. If I can help, I’ll suggest the right engagement. If not, I’ll tell you — and point you somewhere better.',
  },
];

export const about = {
  eyebrow: 'About',
  title: 'Clarity, structure and an honest thinking partner.',
  philosophy: [
    {
      title: 'Design before effort',
      text: 'Working harder on a poorly designed business only makes the cracks bigger. We fix the design first.',
    },
    {
      title: 'Simple beats clever',
      text: 'A plan you can explain on one page beats a strategy deck nobody reads. Every tool we use is built to be used.',
    },
    {
      title: 'You own the building',
      text: 'I’m the architect, not the landlord. The goal is a business — and an owner — that no longer needs me.',
    },
  ],
};

export const ctaBand = {
  title: 'Ready to draw up the plans?',
  text: 'Book a free 30-minute discovery call. We’ll talk about where your business is, where you want it to be, and whether I’m the right person to help you get there.',
  button: 'Book your discovery call',
};
