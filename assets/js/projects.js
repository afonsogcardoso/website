/* =============================================================
   projects.js — single source of truth for all portfolio data.
   To add a new project: add an entry to window.PROJECTS below.
   The project.html template renders everything from this data.
   ============================================================= */

window.PROJECTS = {

  /* ─── Petter ──────────────────────────────────────────────── */
  'petter': {
    pageTitle: 'Petter — Portfolio',
    title:    'Petter',
    subtitle: 'The management app for pet care professionals — scheduling, clients, and marketplace in one place.',
    badges: [
      { icon: 'bi bi-globe',  label: 'Web App' },
      { icon: 'bi bi-apple',  label: 'iOS' }
    ],
    pills: [
      { icon: 'bi bi-building', text: 'Petter' }
    ],
    cta: { label: 'Visit petter.pt', href: 'https://petter.pt' },
    sections: [
      {
        type:  'overview',
        label: 'Web App',
        title: 'Powerful dashboard, anywhere',
        desc:  'Manage your full business from the browser — scheduling, client records, analytics, and marketplace settings all in one place.',
        image: 'assets/img/portfolio/petter-webapp.png',
        alt:   'Petter Web App'
      },
      {
        type:  'ios-gallery',
        label: 'iOS App',
        title: 'Your business in your pocket',
        desc:  'Native iPhone app with offline support and real-time sync — manage appointments on the go, from anywhere.',
        items: [
          { src: 'assets/img/portfolio/petter-ios-home.png',                     alt: 'Petter iOS Home',                caption: 'Home' },
          { src: 'assets/img/portfolio/petter-ios-appointments-weekview.png',    alt: 'Petter iOS Week View',           caption: 'Week View' },
          { src: 'assets/img/portfolio/petter-ios-appointment-details.png',      alt: 'Petter iOS Appointment Details', caption: 'Appointment Details' }
        ]
      },
      {
        type:  'features',
        label: 'Features',
        title: 'Everything you need to run your business',
        desc:  'Eight capabilities built for professional pet care service providers.',
        cols:  4,
        cards: [
          { icon: 'bi bi-calendar3',        title: 'Smart Scheduling',    desc: 'Day, week, month, and list views with load-balanced calendar management.' },
          { icon: 'bi bi-people',           title: 'Client & Pet Profiles', desc: 'Unlimited clients and animals with full history, notes, and medical records.' },
          { icon: 'bi bi-shop',             title: 'Marketplace',         desc: 'Commission-free channel to attract new customers through a public profile.' },
          { icon: 'bi bi-credit-card',      title: 'Online Payments',     desc: 'Stripe-powered payment links — or accept cash on arrival. Your choice.' },
          { icon: 'bi bi-person-badge',     title: 'Team Access',         desc: 'Multi-user support with role-based permissions: Owner, Admin, Member.' },
          { icon: 'bi bi-arrow-repeat',     title: 'Recurring Bookings',  desc: 'Set up weekly, biweekly, or monthly recurring appointments effortlessly.' },
          { icon: 'bi bi-file-earmark-text',title: 'Forms & Photos',      desc: 'Custom intake forms and before/after photo documentation per appointment.' },
          { icon: 'bx bxl-whatsapp',        title: 'WhatsApp & QR',       desc: 'Automated WhatsApp confirmations and QR code pages for customers.' }
        ]
      },
      {
        type:  'use-cases',
        label: 'Use Cases',
        title: 'Built for every pet care professional',
        desc:  '',
        cards: [
          { icon: 'bi bi-scissors',    title: 'Grooming',    desc: 'Load-balanced scheduling by pet size and service duration.' },
          { icon: 'bi bi-heart-pulse', title: 'Veterinary',  desc: 'Routine consultations with full medical history tracking.' },
          { icon: 'bi bi-house-heart', title: 'Pet Sitting', desc: 'Daily route planning with per-visit task checklists.' },
          { icon: 'bi bi-building',    title: 'Pet Hotels',  desc: 'Check-in/check-out management with occupancy control.' }
        ]
      },
      {
        type:  'stack',
        label: 'Tech Stack',
        title: 'Built with modern tools',
        desc:  '',
        tags:  ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'Stripe', 'Vercel', 'Tailwind CSS', 'Resend', 'Google Maps API']
      }
    ]
  },

  /* ─── Content Library ────────────────────────────────────── */
  'content-library': {
    pageTitle: 'Content Library — Portfolio',
    title:    'Content Library',
    subtitle: 'Seamless access to digital assets — directly inside the project management workflow, without switching tools.',
    badges: [
      { icon: 'bi bi-puzzle', label: 'Integration' },
      { icon: 'bi bi-images', label: 'DAM' }
    ],
    pills: [
      { icon: 'bi bi-building', text: 'Skills Workflow & Production Agency' }
    ],
    sections: [
      {
        type:  'overview',
        label: 'Overview',
        title: 'Assets where you need them',
        desc:  'The integration embeds DAM search and asset management directly inside the project management platform, eliminating the need to switch tools when working with creative assets.',
        image: 'assets/img/portfolio/content-library.png',
        alt:   'Content Library — main view'
      },
      {
        type:  'screenshot-grid',
        label: 'Screens',
        title: 'Inside the workflow',
        desc:  'From browsing assets to creating orders — all without leaving the platform.',
        cols:  2,
        items: [
          { img: 'assets/img/portfolio/content-library-new-order.png', caption: 'Creating a new asset order' },
          { img: 'assets/img/portfolio/content-library-orders.png',    caption: 'Orders overview' }
        ]
      },
      {
        type:  'features',
        label: 'Features',
        title: 'Core functionalities',
        desc:  'Six capabilities designed to connect asset management with project delivery.',
        cols:  3,
        cards: [
          { icon: 'bi bi-search',          title: 'Embedded DAM Search',  desc: 'Search and filter digital assets by metadata, keywords, and criteria — directly inside the project management UI.' },
          { icon: 'bi bi-cart3',           title: 'Asset Shopping Cart',  desc: 'Select assets and group them into a cart for batch management and processing in a single request.' },
          { icon: 'bi bi-pencil-square',   title: 'Change Requests',      desc: 'Provide an interface to request modifications to selected assets — text adaptations, language updates, size requirements.' },
          { icon: 'bi bi-list-check',      title: 'Structured Process',   desc: 'A defined flow for specifying asset changes, ensuring requests are clear and actionable before they reach production.' },
          { icon: 'bi bi-lightning-charge',title: 'Automated Tasks',      desc: 'Tasks are automatically generated from asset requests — keeping project tracking aligned without manual effort.' },
          { icon: 'bi bi-arrow-left-right',title: 'Bidirectional Sync',   desc: 'Asset status and order updates flow between the DAM and the project platform, keeping both systems in sync.' }
        ]
      }
    ]
  },

  /* ─── Online Proofing ────────────────────────────────────── */
  'online-proofing': {
    pageTitle: 'Online Proofing — Portfolio',
    title:    'Online Proofing',
    subtitle: 'Review and approve creative assets without leaving the project management platform — powered by Ziflow.',
    badges: [
      { icon: 'bi bi-puzzle',        label: 'Integration' },
      { icon: 'bi bi-check2-circle', label: 'Review & Approval' }
    ],
    pills: [
      { icon: 'bi bi-building', text: 'Skills Workflow & Production Agency' }
    ],
    sections: [
      {
        type:  'overview',
        label: 'Overview',
        title: "Proof review, inside your workflow",
        desc:  "Ziflow's proofing interface is embedded directly inside the project management platform via an iframe, so teams can review, annotate, and approve creative assets without context-switching.",
        image: 'assets/img/portfolio/online-proofing.png',
        alt:   'Online Proofing — main view'
      },
      {
        type:  'features',
        label: 'Features',
        title: 'Core functionalities',
        desc:  'Six capabilities that bring structured review and approval into the project management flow.',
        cols:  3,
        cards: [
          { icon: 'bi bi-display',          title: 'Embedded Ziflow Viewer',       desc: "Ziflow's proofing interface loads directly inside the platform via an iframe — no separate tab or tool switch required." },
          { icon: 'bi bi-plus-circle',      title: 'Proof Creation via API',       desc: 'Proofs are created in Ziflow through REST API calls triggered directly from the platform — no manual upload needed.' },
          { icon: 'bi bi-people',           title: 'Participant Management',       desc: 'Assign reviewers to proof stages, ensuring the right people are looped in at the right point in the review process.' },
          { icon: 'bi bi-share',            title: 'Shareable Links',             desc: 'Generate shareable proof links to bring in external stakeholders for feedback without requiring platform access.' },
          { icon: 'bi bi-chat-square-text', title: 'Annotations & Version Tracking', desc: "Reviewers can annotate directly on assets and track version history — full Ziflow proofing capabilities preserved in context." },
          { icon: 'bi bi-lightning-charge', title: 'Automated Task Creation',     desc: 'Tasks are automatically created from proof review outcomes, keeping project tracking aligned with approval status.' }
        ]
      }
    ]
  },

  /* ─── Documentation ─────────────────────────────────────── */
  'documentation': {
    pageTitle: 'Documentation — Portfolio',
    title:    'Documentation',
    subtitle: 'A clear, searchable knowledge base that keeps users informed across every version of the product.',
    badges: [
      { icon: 'bi bi-globe', label: 'Website' },
      { icon: 'bi bi-book',  label: 'Knowledge Base' }
    ],
    pills: [
      { icon: 'bi bi-building',         text: 'Skills Workflow Team & Clients' },
      { icon: 'bi bi-box-arrow-up-right', text: 'documentation.skillsworkflow.com', href: 'https://documentation.skillsworkflow.com' }
    ],
    sections: [
      {
        type:  'overview',
        label: 'Overview',
        title: 'One place for everything',
        desc:  "The Skills Workflow Documentation website gives users a structured, always up-to-date resource for product guides, technical references, and release notes. Built with Docusaurus and continuously deployed via Netlify.",
        image: 'assets/img/portfolio/documentation.png',
        alt:   'Documentation — main view'
      },
      {
        type:  'screenshot-grid',
        label: 'Screens',
        title: 'Across the platform',
        desc:  'From guided tutorials to university-style learning paths and instant search.',
        cols:  3,
        items: [
          { img: 'assets/img/portfolio/documentation-docs.png',       caption: 'Product documentation' },
          { img: 'assets/img/portfolio/documentation-university.png', caption: 'University learning paths' },
          { img: 'assets/img/portfolio/documentation-search.png',     caption: 'Algolia-powered search' }
        ]
      },
      {
        type:  'features',
        label: 'Features',
        title: 'Core functionalities',
        desc:  'Eight capabilities built to serve product teams and end-users alike.',
        cols:  3,
        cards: [
          { icon: 'bi bi-collection',    title: 'Centralized Hub',          desc: 'A single source of truth for all product documentation — guides, references, and release notes in one place.' },
          { icon: 'bi bi-search',        title: 'Algolia Search',           desc: 'Fast, accurate full-text search powered by Algolia — users find what they need in seconds, not minutes.' },
          { icon: 'bi bi-translate',     title: 'Multi-language Support',   desc: 'Content available in multiple languages to serve a global user base without maintaining separate sites.' },
          { icon: 'bi bi-diagram-3',     title: 'Clear Content Structure',  desc: 'Categories, tags, and intuitive navigation make it easy to browse and discover relevant content.' },
          { icon: 'bi bi-markdown',      title: 'Markdown-based Authoring', desc: 'Content is written in Markdown — fast to create, easy to review, and seamless to collaborate on via GitHub.' },
          { icon: 'bi bi-cloud-upload',  title: 'Continuous Deployment',    desc: 'Every merge to the main branch triggers an automatic Netlify deployment — zero manual publishing steps.' },
          { icon: 'bi bi-git',           title: 'Version Control',          desc: 'Content lives in GitHub — full history, branching, and pull request reviews keep documentation in sync with the product.' },
          { icon: 'bi bi-phone',         title: 'Fully Responsive',         desc: 'Optimised layout for desktop, tablet, and mobile — documentation is accessible wherever users are working.' }
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
