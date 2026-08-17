import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'p1',
    name: 'Media Library',
    tagline: 'Web-based media collection management system',
    description:
      'A web-based media library that allows users to browse, search, organize, and manage a collection of movies, books, music, and other media items through a clean and structured interface.',
    image:
      'MediaLibrary.jpg',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/sithu669315-hash/MediaLibrary',
    liveUrl: 'https://example.com',
    featured: true,
    gallery: [
      'MediaLibrary01',
      'MediaLibrary02',
    ],
    features: [
      'Media browsing and detailed media information',
      'Search and filtering functionality',
      'Organized MVC-based application structure',
      'MySQL database integration with reusable data access logic',
      'Object-oriented PHP implementation',
    ],
    challenges:
      'Designing a maintainable application structure while keeping the controllers, business logic, database operations, and views separated and easy to manage.',
    solutions:
      'Applied object-oriented PHP with an MVC architecture and separated database access from application logic using reusable classes and structured components.',
    architecture:
      'PHP MVC application with controllers handling requests, models managing application and database operations, and views responsible for rendering the user interface. MySQL is used for persistent data storage.',
  },
];

  // {
  //   id: 'p2',
  //   name: 'Ledgerline',
  //   tagline: 'Financial dashboard for indie founders',
  //   description:
  //     'Unifies revenue, expenses, and runway across Stripe, bank feeds, and spreadsheets into a single live dashboard.',
  //   image:
  //     'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  //   stack: ['Next.js', 'PostgreSQL', 'Prisma', 'tRPC', 'Tailwind CSS'],
  //   githubUrl: 'https://github.com',
  //   liveUrl: 'https://example.com',
  //   featured: true,
  //   gallery: [
  //     'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  //     'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  //   ],
  //   features: [
  //     'Automatic categorization of transactions via rules engine',
  //     'Runway forecasting with adjustable growth scenarios',
  //     'Stripe + Plaid data ingestion with nightly reconciliation',
  //     'Exportable investor-ready monthly reports',
  //   ],
  //   challenges:
  //     'Normalizing inconsistent data shapes from multiple financial providers into one reliable ledger without losing precision.',
  //   solutions:
  //     'Designed a canonical transaction schema with provider-specific adapters and decimal-safe arithmetic throughout the pipeline.',
  //   architecture:
  //     'Next.js App Router, tRPC for type-safe APIs, PostgreSQL with Prisma, background jobs on a queue worker for data syncs.',
  // },
  // {
  //   id: 'p3',
  //   name: 'Formcraft',
  //   tagline: 'Headless form builder with logic branching',
  //   description:
  //     'A drag-and-drop form builder with conditional logic, validation rules, and an embeddable runtime under 12kb gzipped.',
  //   image:
  //     'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
  //   stack: ['React', 'Zustand', 'Node.js', 'MongoDB'],
  //   githubUrl: 'https://github.com',
  //   liveUrl: 'https://example.com',
  //   gallery: [
  //     'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
  //   ],
  //   features: [
  //     'Visual logic-branch editor with live preview',
  //     'Reusable field library with custom validation',
  //     'Lightweight embeddable runtime for any website',
  //     'Response analytics with drop-off tracking',
  //   ],
  //   challenges:
  //     'Keeping the embeddable runtime tiny while supporting complex conditional logic and accessible form controls.',
  //   solutions:
  //     'Compiled logic rules to a small bytecode-like format evaluated at runtime instead of shipping a full rules interpreter.',
  //   architecture:
  //     'React builder app, Node.js API for form definitions, MongoDB storage, and a framework-agnostic vanilla-JS embed script.',
  // },
  // {
  //   id: 'p4',
  //   name: 'Waypoint',
  //   tagline: 'Developer-first status page and incident tool',
  //   description:
  //     'Status pages, on-call routing, and incident timelines built for small engineering teams who want signal, not noise.',
  //   image:
  //     'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  //   stack: ['Remix', 'PostgreSQL', 'Docker', 'AWS'],
  //   githubUrl: 'https://github.com',
  //   liveUrl: 'https://example.com',
  //   gallery: [
  //     'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  //   ],
  //   features: [
  //     'Public status pages with subscriber notifications',
  //     'On-call rotations with escalation policies',
  //     'Incident timelines auto-generated from status changes',
  //     'Webhook-based integrations with monitoring tools',
  //   ],
  //   challenges:
  //     'Delivering reliable notifications during the exact moments infrastructure is unstable.',
  //   solutions:
  //     'Decoupled the notification pipeline onto independent infrastructure in a separate region with its own queue and retry policy.',
  //   architecture:
  //     'Remix for server-rendered pages, PostgreSQL for incident data, containerized services on AWS ECS behind an ALB.',
  // },
