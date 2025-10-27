
export interface Article {
  title: string;
  summary: string;
  author: string;
  date: string; // YYYY-MM-DD
  imageUrl: string;
  slug: string;
  theme: 'Technology' | 'Sustainability' | 'Health';
  tags: string[];
  content: string;
}

export interface ThematicArea {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  shortName: 'Technology' | 'Sustainability' | 'Health';
}

export interface Person {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  degree?: string;
  latestWorks?: { title: string; slug?: string }[];
  thematicAreas?: string[];
}

export interface Podcast {
  title: string;
  summary: string;
  date: string; // YYYY-MM-DD
  imageUrl: string;
  episodeUrl: string; // Fallback link to Spotify, Apple Podcasts, etc.
  slug: string;
  episodeNumber: number;
  transcript: string;
  audioUrl: string; // Direct link to audio file
}

export const podcasts: Podcast[] = [
  {
    episodeNumber: 3,
    title: "Episode 03: The Ethics of AI in Public Services",
    summary: "A conversation with Dr. Zoya Rehman on the ethical frameworks needed as governments in the Global South adopt AI for public services, from healthcare to social security.",
    date: "2023-11-05",
    imageUrl: "https://picsum.photos/seed/podcast3/500/500",
    episodeUrl: "https://open.spotify.com/episode/placeholder3",
    slug: "episode-03-ethics-of-ai",
    audioUrl: "https://storage.googleapis.com/maker-studio-preview-clips/creative-audio/music-library/2-minute-timer-with-chimes-music.mp3",
    transcript: `
      <p><strong>Host:</strong> Welcome back to Policy in Focus. Today, we're thrilled to have Dr. Zoya Rehman with us to discuss a critical topic: the ethics of artificial intelligence in public services across the Global South. Dr. Rehman, thank you for joining us.</p>
      <p><strong>Dr. Zoya Rehman:</strong> It's my pleasure. This is a conversation we urgently need to have. As governments adopt AI for everything from healthcare diagnostics to social security distribution, we're facing a new frontier of ethical challenges.</p>
      <p><strong>Host:</strong> What do you see as the primary ethical risk?</p>
      <p><strong>Dr. Zoya Rehman:</strong> The biggest risk is algorithmic bias. These systems are trained on data, and if that data reflects existing societal biases, the AI will perpetuate and even amplify them. For example, if an algorithm for loan approvals is trained on historical data from a bank that has traditionally discriminated against rural populations, the AI will learn and automate that discrimination. In the context of public services, this could mean marginalized communities are unfairly denied access to essential resources.</p>
      <p><strong>Host:</strong> So how do we mitigate that? Is it about cleaning the data?</p>
      <p><strong>Dr. Zoya Rehman:</strong> That's part of it, but it's not enough. We need a multi-pronged approach. First, we need transparency. Governments must be open about where and how they are using AI systems. Citizens have a right to know if a decision affecting their life was made by an algorithm. Second, we need accountability. There must be clear channels for appeal. If someone believes an AI system has made an unfair decision, they need a human to review the case. And third, we need to invest in local capacity. We can't simply import AI models from the West; we need local experts who understand the nuances of their own societies to build and oversee these systems.</p>
      <p><strong>Host:</strong> That sounds like a significant undertaking.</p>
      <p><strong>Dr. Zoya Rehman:</strong> It is, but the cost of inaction is far greater. If we don't build ethical frameworks now, we risk creating digital systems that entrench inequality for generations. The goal is to ensure that AI serves the public good, and that requires careful, deliberate, and inclusive policymaking from the very beginning.</p>
    `,
  },
  {
    episodeNumber: 2,
    title: "Episode 02: Building Climate-Resilient Cities",
    summary: "Featuring urban planner Ali Hassan, this episode explores innovative policies and infrastructure projects that are making cities in the MENA region more resilient to climate change.",
    date: "2023-10-20",
    imageUrl: "https://picsum.photos/seed/podcast2/500/500",
    episodeUrl: "https://open.spotify.com/episode/placeholder2",
    slug: "episode-02-climate-resilient-cities",
    audioUrl: "https://storage.googleapis.com/maker-studio-preview-clips/creative-audio/music-library/2-minute-timer-with-chimes-music.mp3",
    transcript: `<p>Transcript placeholder for Episode 02. The full text would explore themes of urban planning, sustainable infrastructure, and policy solutions for climate adaptation in the MENA region with guest Ali Hassan.</p>`,
  },
  {
    episodeNumber: 1,
    title: "Episode 01: The Future of Healthcare in Africa",
    summary: "In our inaugural episode, we talk with public health expert Fatima Shah about the role of telemedicine and local manufacturing in bridging Africa's healthcare gap.",
    date: "2023-10-01",
    imageUrl: "https://picsum.photos/seed/podcast1/500/500",
    episodeUrl: "https://open.spotify.com/episode/placeholder1",
    slug: "episode-01-healthcare-africa",
    audioUrl: "https://storage.googleapis.com/maker-studio-preview-clips/creative-audio/music-library/2-minute-timer-with-chimes-music.mp3",
    transcript: `<p>Transcript placeholder for Episode 01. The full text would feature a detailed conversation with Fatima Shah on telemedicine, local pharmaceutical manufacturing, and the future of public health policy in Africa.</p>`,
  },
];

export const podcastPlatforms = [
    { name: 'Apple Podcasts', url: '#', icon: 'ApplePodcastsIcon' },
    { name: 'Spotify', url: '#', icon: 'SpotifyIcon' },
];


export const thematicAreas: ThematicArea[] = [
  {
    title: "Technology & AI Governance",
    description: "Analyzing the ethical, social, and economic implications of emerging technologies and artificial intelligence in the Global South.",
    slug: "technology-ai-governance",
    imageUrl: "https://picsum.photos/seed/tech/600/400",
    shortName: 'Technology'
  },
  {
    title: "Sustainable Development & Urban Futures",
    description: "Investigating policy frameworks for environmental sustainability, climate action, and equitable economic growth in our cities.",
    slug: "sustainable-development-urban-futures",
    imageUrl: "https://picsum.photos/seed/cityscape/600/400",
    shortName: 'Sustainability'
  },
  {
    title: "Health Policy & Equity",
    description: "Examining public health challenges, healthcare access, and the role of policy in creating resilient and equitable health systems.",
    slug: "health-policy-equity",
    imageUrl: "https://picsum.photos/seed/hospital/600/400",
    shortName: 'Health'
  },
];

const placeholderContent = `
    <p>This is where the full article content would be dynamically generated or loaded. For now, this placeholder text demonstrates the layout and styling of the article body. The actual content would explore the nuances of the topic in detail, providing evidence-based analysis and policy recommendations.</p>
    <h2 class="text-3xl font-bold text-ink pt-6 scroll-mt-32">Introduction The Core Problem</h2>
    <p>Further paragraphs would continue here, breaking down complex ideas into understandable sections. The use of subheadings helps structure the content and guide the reader through the argument. Data, quotes, and examples would be used to support the author's claims.</p>
    <h3 class="text-2xl font-bold text-ink pt-4 scroll-mt-32">Historical Context</h3>
    <p>Understanding the historical context is crucial. Policies do not exist in a vacuum; they are the product of decades of debate, trial, and error. This section will explore the background leading up to the current policy landscape.</p>
    <h2 class="text-3xl font-bold text-ink pt-6 scroll-mt-32">Data and Analysis</h2>
    <p>Here we present the core data driving our analysis. Charts, figures, and direct evidence will be presented to substantiate our claims. This section forms the backbone of our argument.</p>
    <blockquote class="border-l-4 border-accent/70 pl-6 py-2 my-8 italic text-primary/90">"This is an insightful blockquote that emphasizes a key point from the article. It should stand out and make the reader pause and reflect."</blockquote>
    <h3 class="text-2xl font-bold text-ink pt-4 scroll-mt-32">Case Studies</h3>
    <p>To illustrate our points, we will examine two case studies from different regions. This comparative analysis will highlight the different approaches and outcomes, providing valuable lessons.</p>
    <h2 class="text-3xl font-bold text-ink pt-6 scroll-mt-32">Policy Recommendations</h2>
    <p>Based on the analysis, this section outlines concrete policy recommendations. We aim to provide actionable steps for policymakers and stakeholders.</p>
    <p>The article would conclude with a summary of the key findings and a call to action or a forward-looking statement on the future of the policy issue.</p>
`;

export const articles: Article[] = [
  {
    title: "Who Decides When AI Becomes a Threat?",
    summary: "New threats emerge as our lives become increasingly technologically saturated. With the integration of artificial intelligence into critical sectors, concerns about accountability, transparency, and societal impact become increasingly critical.",
    author: "Fatima Hussain",
    date: "2023-11-10",
    imageUrl: "https://picsum.photos/seed/ai-threat/400/250",
    slug: "who-decides-when-ai-becomes-a-threat",
    theme: "Technology",
    tags: ["AI", "Security", "Policy", "Governance"],
    content: `
      <p>New threats emerge as our lives become increasingly technologically saturated. With the integration of artificial intelligence into critical sectors such as finance, employment, and healthcare, concerns about accountability, transparency, and societal impact become increasingly critical. With continuing barriers to entry being lowered, more people have access to build artificial intelligence systems, even those without expertise.</p>
      <p>AI systems are enabling computers to see, understand, and interact with the world in ways that were inconceivable just a decade ago. This growing accessibility amplifies its potential for misuse, raising concerns about implications for national and global security. The potential repercussions of AI have been underscored both academically and in policy circles, with warnings against autonomous weapons, AI-driven cyberattacks, mass surveillance, and disinformation campaigns sourced by machine learning. These threats exceed technical or ethical bounds and are increasingly framed as security issues that require urgent policy responses.</p>
      <h2 class="text-3xl font-bold text-ink pt-6 scroll-mt-32">The Language of Threats</h2>
      <p>AI's transformative potential is often discussed in terms of risk, crisis, and security. Actors portray AI as an existential threat. Political leaders, technology executives, international organizations, and policy experts operate from different institutional bases but draw on overlapping concerns to project AI as a security issue.</p>
      <p>The Biden administration's <em>Executive Order on Safe, Secure, and Trustworthy Artificial Intelligence</em> connects AI directly to national security, economic leadership, and civil liberties. Similarly, China's <em>Next Generation AI Development Plan</em> posits AI as a strategic priority, underlining its role in national competitiveness and military modernization.</p>
      <p>International organizations have echoed this language. The UN Secretary-General described AI as a “defining issue of our time,” warning of its potential for catastrophic consequences. The European Commission's president called for “human-centric” AI. Together, these actors possess the authority to construct threat narratives and resonate with wide audiences.</p>
      <p>Speech acts often take the form of warning statements, policy documents, and symbolic gestures. One recurrent act is comparing AI to nuclear weapons, pandemics, or other global catastrophic risks, analogies that place AI within a vocabulary of existential threat.</p>
      <h2 class="text-3xl font-bold text-ink pt-6 scroll-mt-32">When Policy Echoes Fear</h2>
      <p>Audience responses have been mixed but increasingly accepting. The U.S. Executive Order mandates national-security reviews of AI systems and data-sharing obligations on developers. The EU's AI Act classifies certain systems as “high-risk,” placing them under a heightened security-oriented regime.</p>
      <p>The U.S. has created the <em>National Artificial Intelligence Initiative Office</em>, integrating intelligence and defense sectors into AI oversight. The OECD's AI Policy Observatory and the UN's High-Level Advisory Board on AI reflect growing efforts to coordinate global governance. These developments show that securitization has real policy consequences, surpassing discourse into practice.</p>
      <h2 class="text-3xl font-bold text-ink pt-6 scroll-mt-32">Security Logic in Everyday Innovation</h2>
      <p>Once AI is labeled a priority for national or international security, governments reallocate budgets, private companies revise product roadmaps, and multi-stakeholder initiatives merge ethical guidelines with military or geopolitical considerations. Research funding shifts toward defense applications; corporations adapt to meet new compliance and reporting demands.</p>
      <p>Calls for “responsible AI” increasingly incorporate defense imperatives, resilience to cyberattacks, prevention of model theft, and detection of data poisoning. The EU AI Act and the U.S. Executive Order reflect this synthesis: frameworks for accountability that also mirror the logic of securitization, where AI's dangers justify extraordinary interventions.</p>
      <h2 class="text-3xl font-bold text-ink pt-6 scroll-mt-32">Opening Space for De-Securitization</h2>
      <p>Although AI is now widely perceived as an existential risk, securitization is neither absolute nor irreversible. Civil-society groups and academic centers advocate shifting AI away from a purely state-centric threat lens toward “AI for public good.” Emphasizing socio-technical harms, algorithmic discrimination, labor displacement, or environmental costs can decouple AI from the security logic and return it to the realm of normal politics.</p>
      <p>Techno-diplomacy offers another path: transparency, mutual audits, and limits on lethal or manipulative applications. If realized, such measures could lessen the strong sense of "AI arms racing” that drives threat inflation.</p>
      <h2 class="text-3xl font-bold text-ink pt-6 scroll-mt-32">Power, Trust, and the Future of AI Governance</h2>
      <p>The securitization of AI reshapes power, sovereignty, and diplomacy. Machine-learning models and data flows cross borders, complicating state control. Corporations that own critical datasets or algorithms gain leverage in security policymaking. Discrepancies in AI capabilities may drive new security imbalances, reinforcing global inequalities. Yet, as with previous arms races, partial frameworks for restraint remain possible.</p>
      <h2 class="text-3xl font-bold text-ink pt-6 scroll-mt-32">The Cost of Treating Technology as Threat</h2>
      <p>While securitization of AI has attracted attention and funding, it also invites criticism. Overreaction and policy exceptionalism risk sweeping regulation and surveillance that stifle innovation and narrow democratic debate. Security framing can reinforce global inequalities, keeping control of technology in a few hands while obscuring structural harms such as algorithmic bias or data exploitation.</p>
      <p>Critics argue that not all AI risks are objectively existential; some are speculative yet leveraged by powerful actors to justify exceptional policies. Securitization can be action-enabling but dissent-suppressing, power-centralizing, and masking actual harms.</p>
      <h2 class="text-3xl font-bold text-ink pt-6 scroll-mt-32">From Paranoia to Partnership</h2>
      <p>Artificial intelligence has been transformed from a regulatory concern into a matter of survival and global security. Policies such as the U.S. AI Executive Order, the EU AI Act, and calls for UN treaties on lethal autonomous weapons show a growing tendency to regulate AI from a security rather than an innovation perspective.</p>
      <p>This case demonstrates how technological objects, not just political or military threats, are increasingly governed through security logic. Securitization of AI broadens our understanding of power: not solely a matter of states and armies, but also of scientists, technologists, and institutions shaping the futures they claim to secure.</p>
    `,
  },
  {
    title: "The Future of Digital Identity in the Global South",
    summary: "A deep dive into the challenges and opportunities of implementing national digital identity systems.",
    author: "Ayesha Khan",
    date: "2023-10-26",
    imageUrl: "https://picsum.photos/seed/article1/400/250",
    slug: "future-of-digital-identity-global-south",
    theme: "Technology",
    tags: ["Digital ID", "Governance", "Privacy"],
    content: placeholderContent,
  },
  {
    title: "Climate Resilience in South Asia's Agricultural Sector",
    summary: "Exploring innovative policy solutions to help small-scale farmers adapt to climate change.",
    author: "Bilal Ahmed",
    date: "2023-10-15",
    imageUrl: "https://picsum.photos/seed/article2/400/250",
    slug: "climate-resilience-south-asia-agriculture",
    theme: "Sustainability",
    tags: ["Climate Change", "Agriculture", "Adaptation"],
    content: placeholderContent,
  },
  {
    title: "Bridging the Urban-Rural Healthcare Divide in Africa",
    summary: "Telemedicine and mobile health clinics are promising, but policy support is crucial for impact.",
    author: "Fatima Shah",
    date: "2023-09-28",
    imageUrl: "https://picsum.photos/seed/article3/400/250",
    slug: "bridging-urban-rural-healthcare-divide-africa",
    theme: "Health",
    tags: ["Telemedicine", "Healthcare", "Equity"],
    content: placeholderContent,
  },
  {
    title: "AI Governance: A Framework for Emerging Economies",
    summary: "How can developing nations create ethical AI policies that foster innovation while protecting citizens?",
    author: "Dr. Zoya Rehman",
    date: "2023-09-05",
    imageUrl: "https://picsum.photos/seed/article4/400/250",
    slug: "ai-governance-framework-emerging-economies",
    theme: "Technology",
    tags: ["AI", "Ethics", "Policy"],
    content: placeholderContent,
  },
  {
    title: "Sustainable Urban Futures in the MENA Region",
    summary: "Rethinking urban planning to create greener, more equitable cities for the next generation.",
    author: "Ali Hassan",
    date: "2023-08-21",
    imageUrl: "https://picsum.photos/seed/article5/400/250",
    slug: "sustainable-urban-futures-mena",
    theme: "Sustainability",
    tags: ["Urban Planning", "Sustainability", "Cities"],
    content: placeholderContent,
  },
  {
    title: "Health Equity and Access to Essential Medicines",
    summary: "An analysis of policy barriers and solutions for ensuring access to medicines for all.",
    author: "Sana Chaudhry",
    date: "2023-08-10",
    imageUrl: "https://picsum.photos/seed/article6/400/250",
    slug: "health-equity-access-to-medicines",
    theme: "Health",
    tags: ["Health Equity", "Pharmaceuticals", "Access"],
    content: placeholderContent,
  },
   {
    title: "The Role of FinTech in Financial Inclusion",
    summary: "Can technology bridge the gap for unbanked populations in emerging economies?",
    author: "Ayesha Khan",
    date: "2023-07-19",
    imageUrl: "https://picsum.photos/seed/article7/400/250",
    slug: "role-of-fintech-in-financial-inclusion",
    theme: "Technology",
    tags: ["FinTech", "Financial Inclusion", "Banking"],
    content: placeholderContent,
  },
  {
    title: "Water Scarcity and Policy in the Indus Basin",
    summary: "Addressing the urgent need for collaborative water management strategies.",
    author: "Bilal Ahmed",
    date: "2023-06-25",
    imageUrl: "https://picsum.photos/seed/article8/400/250",
    slug: "water-scarcity-and-policy-indus-basin",
    theme: "Sustainability",
    tags: ["Water Security", "Policy", "Environment"],
    content: placeholderContent,
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getThematicAreaBySlug = (slug: string): ThematicArea | undefined => {
  return thematicAreas.find(area => area.slug === slug);
};

export const getPodcastBySlug = (slug: string): Podcast | undefined => {
  return podcasts.find(p => p.slug === slug);
};


export const researchers: Person[] = [
  {
    name: "Fatima Hussain",
    title: "Researcher",
    imageUrl: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    bio: "Fatima Hussain is a researcher specializing in technology and AI policy, focusing on governance and security implications. She is passionate about making complex technological issues accessible to a wider audience.",
    linkedin: "https://www.linkedin.com/in/fatimahussain-placeholder",
    twitter: "https://twitter.com/fatimahussain-placeholder",
    degree: "BA.Hons Political Science, Istanbul Bilgi University",
    latestWorks: [
      { 
        title: "Who Decides When AI Becomes a Threat?",
        slug: "who-decides-when-ai-becomes-a-threat"
      }
    ],
    thematicAreas: ["Technology & AI Governance"],
  },
  {
    name: "Amna Kazmi",
    title: "Researcher",
    imageUrl: "https://picsum.photos/seed/amna/200/200",
    bio: "Amna Kazmi's research focuses on urban futures and sustainable development. She explores policy solutions for creating equitable and resilient cities in the Global South.",
    linkedin: "https://www.linkedin.com/in/amnakazmi-placeholder",
    twitter: "https://twitter.com/amnakazmi-placeholder",
    degree: "BSc Economics, Institute of Business Administration",
    latestWorks: [
        { title: "Working Paper: Urban Housing Policies in South Asia" }
    ],
    thematicAreas: ["Sustainable Development & Urban Futures"],
  },
];

export const mentors: Person[] = [
    {
        name: "Professor Anwar Siddiqui",
        title: "Lead Mentor, Economics",
        imageUrl: "https://picsum.photos/seed/mentor1/200/200",
        bio: "Professor Anwar Siddiqui is a distinguished economist with over 30 years of experience in academia and policy advisory. His work centers on sustainable development and macroeconomic stability in South Asia.",
        linkedin: "https://www.linkedin.com/in/anwarsiddiqui/",
        twitter: "https://twitter.com/anwarsiddiqui",
    },
    {
        name: "Dr. Fariha Abbasi",
        title: "Mentor, International Relations",
        imageUrl: "https://picsum.photos/seed/mentor2/200/200",
        bio: "Dr. Fariha Abbasi is a seasoned diplomat and academic specializing in international relations and governance. She provides guidance on geopolitical analysis and policy formulation.",
        linkedin: "https://www.linkedin.com/in/farihaabbasi/",
        twitter: "https://twitter.com/farihaabbasi",
    },
    {
        name: "Dr. Lena Kovalenko",
        title: "Mentor, Health Systems",
        imageUrl: "https://picsum.photos/seed/mentor3/200/200",
        bio: "With a background in public health and crisis management, Dr. Kovalenko advises on building resilient health systems, drawing on her extensive experience in Eastern Europe and Central Asia.",
        linkedin: "https://linkedin.com/in/lenakovalenko",
        twitter: "https://twitter.com/lenakovalenko",
    }
];

export const infographics = [
    { title: "Digital Divide in the Global South", imageUrl: "https://picsum.photos/seed/infog1/500/500" },
    { title: "Renewable Energy Potential in Africa", imageUrl: "https://picsum.photos/seed/infog2/500/500" },
    { title: "Healthcare Access Across Regions", imageUrl: "https://picsum.photos/seed/infog3/500/500" },
    { title: "Global Startup Ecosystem Growth", imageUrl: "https://picsum.photos/seed/infog4/500/500" },
];
