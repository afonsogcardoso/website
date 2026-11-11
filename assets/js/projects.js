/* =============================================================
   projects.js — single source of truth for all portfolio data.
   To add a new project: add an entry to window.PROJECTS below.
   project.html + assets/js/project.js render everything from this data.
   Section types: overview, screenshot-grid, ios-gallery, features, use-cases, flow, stack.
   ============================================================= */

window.PROJECTS = {

  /* ─── Petter ──────────────────────────────────────────────── */
  'petter': {
    title:    'Petter',
    subtitle: 'A SaaS platform for pet-care businesses: scheduling, clients and a marketplace in one place, with an AI assistant built in.',
    kind: 'SaaS · Web + iOS',
    meta: [
      { label: 'Role', text: 'Full-stack product development' },
      { label: 'Platforms', text: 'Web app, native iOS app' }
    ],
    cta: { label: 'Visit petter.pt', href: 'https://petter.pt' },
    sections: [
      {
        type:  'overview',
        label: 'Web App',
        title: 'Powerful dashboard, anywhere',
        desc:  'Manage your full business from the browser — scheduling, client records, analytics, and marketplace settings all in one place.',
        image: 'assets/img/work/petter-webapp.webp',
        alt:   'Petter Web App'
      },
      {
        type:  'ios-gallery',
        label: 'iOS App',
        title: 'Your business in your pocket',
        desc:  'Native iPhone app with offline support and real-time sync — manage appointments on the go, from anywhere.',
        items: [
          { src: 'assets/img/work/petter-ios-home.webp',                     alt: 'Petter iOS Home',                caption: 'Home' },
          { src: 'assets/img/work/petter-ios-appointments-weekview.webp',    alt: 'Petter iOS Week View',           caption: 'Week View' },
          { src: 'assets/img/work/petter-ios-appointment-details.webp',      alt: 'Petter iOS Appointment Details', caption: 'Appointment Details' }
        ]
      },
      {
        type:  'features',
        label: 'Features',
        title: 'Everything you need to run your business',
        desc:  'Eight capabilities built for professional pet care service providers.',
        cols:  4,
        cards: [
          { title: 'Smart Scheduling',    desc: 'Day, week, month, and list views with load-balanced calendar management.' },
          { title: 'Client & Pet Profiles', desc: 'Unlimited clients and animals with full history, notes, and medical records.' },
          { title: 'Marketplace',         desc: 'Commission-free channel to attract new customers through a public profile.' },
          { title: 'Online Payments',     desc: 'Stripe-powered payment links — or accept cash on arrival. Your choice.' },
          { title: 'Team Access',         desc: 'Multi-user support with role-based permissions: Owner, Admin, Member.' },
          { title: 'Recurring Bookings',  desc: 'Set up weekly, biweekly, or monthly recurring appointments effortlessly.' },
          { title: 'Forms & Photos',      desc: 'Custom intake forms and before/after photo documentation per appointment.' },
          { title: 'WhatsApp & QR',       desc: 'Automated WhatsApp confirmations and QR code pages for customers.' }
        ]
      },
      {
        type:  'flow',
        label: 'AI assistant',
        title: 'An assistant that acts, and asks first',
        desc:  'Inside the app, people can ask for things in plain language. The assistant works out what they mean, picks the matching action and, when that action changes data, proposes it for confirmation instead of doing it silently.',
        steps: [
          { title: 'Message',    desc: 'The user asks in plain language.' },
          { title: 'Understand', desc: 'LLM intent classification and entity extraction.' },
          { title: 'Route',      desc: 'A multi-provider gateway: Anthropic Claude, Google Gemini or any OpenAI-compatible model.' },
          { title: 'Act',        desc: 'A registry of actions that call the internal APIs.' },
          { title: 'Confirm',    desc: 'Write actions are proposed for the user to approve.' },
          { title: 'Record',     desc: 'Audit logging, plus token and cost tracking.' }
        ]
      },
      {
        type:  'features',
        label: 'AI imports',
        title: 'From a photo of a price list to a service catalogue',
        desc:  'Getting a new business set up is mostly data entry. Petter takes that work away.',
        cols:  3,
        cards: [
          { title: 'AI document extraction', desc: "Imports a business's service catalogue from PDFs or photos into structured records, using Gemini's multimodal input with a JSON schema." },
          { title: 'CSV and Excel',          desc: 'Spreadsheet imports for businesses that already keep their data in files.' },
          { title: 'Calendar (.ics)',        desc: 'Calendar imports, so existing appointments come along too.' }
        ]
      },
      {
        type:  'use-cases',
        label: 'Use Cases',
        title: 'Built for every pet care professional',
        desc:  '',
        cards: [
          { title: 'Grooming',    desc: 'Load-balanced scheduling by pet size and service duration.' },
          { title: 'Veterinary',  desc: 'Routine consultations with full medical history tracking.' },
          { title: 'Pet Sitting', desc: 'Daily route planning with per-visit task checklists.' },
          { title: 'Pet Hotels',  desc: 'Check-in/check-out management with occupancy control.' }
        ]
      },
      {
        type:  'stack',
        label: 'Tech Stack',
        title: 'Built with modern tools',
        desc:  '',
        tags:  ['Node.js', 'Next.js', 'React', 'SwiftUI', 'Supabase', 'PostgreSQL', 'Anthropic Claude', 'Google Gemini', 'Stripe', 'Vercel', 'Tailwind CSS', 'Resend', 'Google Maps API']
      }
    ]
  },

  /* ─── HealthOS ────────────────────────────────────────────── */
  'healthos': {
    title:    'HealthOS',
    subtitle: 'A personal health and training analytics platform that turns wearable data into dashboards, and adds an AI coach on top.',
    kind: 'Personal platform · Web + iOS',
    meta: [
      { label: 'Role', text: 'Personal project' },
      { label: 'Platforms', text: 'Web app, companion iOS app' }
    ],
    sections: [
      {
        type:  'flow',
        label: 'How it works',
        title: 'From the wrist to a coaching conversation',
        desc:  '',
        steps: [
          { title: 'Collect',   desc: 'A companion iOS app reads wearable data from Apple HealthKit.' },
          { title: 'Sync',      desc: 'Data is synced into Convex as time series.' },
          { title: 'Visualise', desc: 'A Next.js app turns it into time-series dashboards.' },
          { title: 'Coach',     desc: 'AI features built on the Vercel AI SDK and Gemini.' }
        ]
      },
      {
        type:  'features',
        label: 'AI coaching',
        title: 'What the coach does',
        desc:  '',
        cols:  4,
        cards: [
          { title: 'Chat',                    desc: 'Ask questions about your own health and training data.' },
          { title: 'Training-plan proposals', desc: 'The coach proposes training plans.' },
          { title: 'Insights',                desc: 'Observations drawn from the data.' },
          { title: 'Recaps',                  desc: 'Summaries of how things have been going.' }
        ]
      },
      {
        type:  'stack',
        label: 'Tech Stack',
        title: 'Built with',
        desc:  '',
        tags:  ['Next.js', 'Convex', 'iOS', 'Apple HealthKit', 'Vercel AI SDK', 'Google Gemini']
      }
    ]
  },

  /* ─── Content Library ────────────────────────────────────── */
  'content-library': {
    title:    'Content Library',
    subtitle: 'Seamless access to digital assets — directly inside the project management workflow, without switching tools.',
    kind: 'Integration · DAM',
    meta: [
      { label: 'For', text: 'Skills Workflow and a production agency' }
    ],
    sections: [
      {
        type:  'overview',
        label: 'Overview',
        title: 'Assets where you need them',
        desc:  'The integration embeds DAM search and asset management directly inside the project management platform, eliminating the need to switch tools when working with creative assets.',
        image: 'assets/img/work/content-library.webp',
        alt:   'Content Library — main view'
      },
      {
        type:  'screenshot-grid',
        label: 'Screens',
        title: 'Inside the workflow',
        desc:  'From browsing assets to creating orders — all without leaving the platform.',
        cols:  2,
        items: [
          { img: 'assets/img/work/content-library-new-order.webp', caption: 'Creating a new asset order' },
          { img: 'assets/img/work/content-library-orders.webp',    caption: 'Orders overview' }
        ]
      },
      {
        type:  'features',
        label: 'Features',
        title: 'Core functionalities',
        desc:  'Six capabilities designed to connect asset management with project delivery.',
        cols:  3,
        cards: [
          { title: 'Embedded DAM Search',  desc: 'Search and filter digital assets by metadata, keywords, and criteria — directly inside the project management UI.' },
          { title: 'Asset Shopping Cart',  desc: 'Select assets and group them into a cart for batch management and processing in a single request.' },
          { title: 'Change Requests',      desc: 'Provide an interface to request modifications to selected assets — text adaptations, language updates, size requirements.' },
          { title: 'Structured Process',   desc: 'A defined flow for specifying asset changes, ensuring requests are clear and actionable before they reach production.' },
          { title: 'Automated Tasks',      desc: 'Tasks are automatically generated from asset requests — keeping project tracking aligned without manual effort.' },
          { title: 'Bidirectional Sync',   desc: 'Asset status and order updates flow between the DAM and the project platform, keeping both systems in sync.' }
        ]
      }
    ]
  },

  /* ─── Online Proofing ────────────────────────────────────── */
  'online-proofing': {
    title:    'Online Proofing',
    subtitle: 'Review and approve creative assets without leaving the project management platform — powered by Ziflow.',
    kind: 'Integration · Review & approval',
    meta: [
      { label: 'For', text: 'Skills Workflow and a production agency' },
      { label: 'Partner', text: 'Ziflow' }
    ],
    sections: [
      {
        type:  'overview',
        label: 'Overview',
        title: "Proof review, inside your workflow",
        desc:  "Ziflow's proofing interface is embedded directly inside the project management platform via an iframe, so teams can review, annotate, and approve creative assets without context-switching.",
        image: 'assets/img/work/online-proofing.webp',
        alt:   'Online Proofing — main view'
      },
      {
        type:  'features',
        label: 'Features',
        title: 'Core functionalities',
        desc:  'Six capabilities that bring structured review and approval into the project management flow.',
        cols:  3,
        cards: [
          { title: 'Embedded Ziflow Viewer',       desc: "Ziflow's proofing interface loads directly inside the platform via an iframe — no separate tab or tool switch required." },
          { title: 'Proof Creation via API',       desc: 'Proofs are created in Ziflow through REST API calls triggered directly from the platform — no manual upload needed.' },
          { title: 'Participant Management',       desc: 'Assign reviewers to proof stages, ensuring the right people are looped in at the right point in the review process.' },
          { title: 'Shareable Links',             desc: 'Generate shareable proof links to bring in external stakeholders for feedback without requiring platform access.' },
          { title: 'Annotations & Version Tracking', desc: "Reviewers can annotate directly on assets and track version history — full Ziflow proofing capabilities preserved in context." },
          { title: 'Automated Task Creation',     desc: 'Tasks are automatically created from proof review outcomes, keeping project tracking aligned with approval status.' }
        ]
      }
    ]
  },

  /* ─── Documentation ─────────────────────────────────────── */
  'documentation': {
    title:    'Documentation',
    subtitle: 'A clear, searchable knowledge base that keeps users informed across every version of the product.',
    kind: 'Website · Knowledge base',
    meta: [
      { label: 'For', text: 'Skills Workflow team and clients' },
      { label: 'Live', text: 'documentation.skillsworkflow.com', href: 'https://documentation.skillsworkflow.com' }
    ],
    sections: [
      {
        type:  'overview',
        label: 'Overview',
        title: 'One place for everything',
        desc:  "The Skills Workflow Documentation website gives users a structured, always up-to-date resource for product guides, technical references, and release notes. Built with Docusaurus and continuously deployed via Netlify.",
        image: 'assets/img/work/documentation.webp',
        alt:   'Documentation — main view'
      },
      {
        type:  'screenshot-grid',
        label: 'Screens',
        title: 'Across the platform',
        desc:  'From guided tutorials to university-style learning paths and instant search.',
        cols:  3,
        items: [
          { img: 'assets/img/work/documentation-docs.webp',       caption: 'Product documentation' },
          { img: 'assets/img/work/documentation-university.webp', caption: 'University learning paths' },
          { img: 'assets/img/work/documentation-search.webp',     caption: 'Algolia-powered search' }
        ]
      },
      {
        type:  'features',
        label: 'Features',
        title: 'Core functionalities',
        desc:  'Eight capabilities built to serve product teams and end-users alike.',
        cols:  3,
        cards: [
          { title: 'Centralized Hub',          desc: 'A single source of truth for all product documentation — guides, references, and release notes in one place.' },
          { title: 'Algolia Search',           desc: 'Fast, accurate full-text search powered by Algolia — users find what they need in seconds, not minutes.' },
          { title: 'Multi-language Support',   desc: 'Content available in multiple languages to serve a global user base without maintaining separate sites.' },
          { title: 'Clear Content Structure',  desc: 'Categories, tags, and intuitive navigation make it easy to browse and discover relevant content.' },
          { title: 'Markdown-based Authoring', desc: 'Content is written in Markdown — fast to create, easy to review, and seamless to collaborate on via GitHub.' },
          { title: 'Continuous Deployment',    desc: 'Every merge to the main branch triggers an automatic Netlify deployment — zero manual publishing steps.' },
          { title: 'Version Control',          desc: 'Content lives in GitHub — full history, branching, and pull request reviews keep documentation in sync with the product.' },
          { title: 'Fully Responsive',         desc: 'Optimised layout for desktop, tablet, and mobile — documentation is accessible wherever users are working.' }
        ]
      },
      {
        type:  'stack',
        label: 'Built with',
        title: 'Tech stack',
        desc:  'Modern tooling chosen for developer experience and operational simplicity.',
        tags:  ['Docusaurus', 'Algolia', 'Netlify', 'GitHub', 'Markdown', 'React']
      }
    ]
  }

};
