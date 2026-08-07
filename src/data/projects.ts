import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'p1',
    name: 'Meridian',
    tagline: 'Real-time collaborative whiteboard',
    description:
      'A multiplayer whiteboard for distributed teams with sub-100ms sync, infinite canvas, and offline-first conflict resolution.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop',
    stack: ['React', 'TypeScript', 'WebSockets', 'Rust', 'Redis'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop',
    ],
    features: [
      'Conflict-free replicated data type (CRDT) sync engine',
      'Infinite pannable/zoomable canvas at 60fps',
      'Presence cursors with per-user color and name tags',
      'Offline editing with automatic merge on reconnect',
    ],
    challenges:
      'Keeping cursor and shape updates smooth under high-latency networks while avoiding conflicting edits from multiple users.',
    solutions:
      'Implemented a custom CRDT layer over WebSockets with optimistic local updates and server-side reconciliation, batched via requestAnimationFrame.',
    architecture:
      'React front end, a Rust WebSocket relay for low-latency broadcast, and Redis for ephemeral presence state, deployed on Fly.io.',
  },
  {
    id: 'p2',
    name: 'Ledgerline',
    tagline: 'Financial dashboard for indie founders',
    description:
      'Unifies revenue, expenses, and runway across Stripe, bank feeds, and spreadsheets into a single live dashboard.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    stack: ['Next.js', 'PostgreSQL', 'Prisma', 'tRPC', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    ],
    features: [
      'Automatic categorization of transactions via rules engine',
      'Runway forecasting with adjustable growth scenarios',
      'Stripe + Plaid data ingestion with nightly reconciliation',
      'Exportable investor-ready monthly reports',
    ],
    challenges:
      'Normalizing inconsistent data shapes from multiple financial providers into one reliable ledger without losing precision.',
    solutions:
      'Designed a canonical transaction schema with provider-specific adapters and decimal-safe arithmetic throughout the pipeline.',
    architecture:
      'Next.js App Router, tRPC for type-safe APIs, PostgreSQL with Prisma, background jobs on a queue worker for data syncs.',
  },
  {
    id: 'p3',
    name: 'Formcraft',
    tagline: 'Headless form builder with logic branching',
    description:
      'A drag-and-drop form builder with conditional logic, validation rules, and an embeddable runtime under 12kb gzipped.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    stack: ['React', 'Zustand', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    ],
    features: [
      'Visual logic-branch editor with live preview',
      'Reusable field library with custom validation',
      'Lightweight embeddable runtime for any website',
      'Response analytics with drop-off tracking',
    ],
    challenges:
      'Keeping the embeddable runtime tiny while supporting complex conditional logic and accessible form controls.',
    solutions:
      'Compiled logic rules to a small bytecode-like format evaluated at runtime instead of shipping a full rules interpreter.',
    architecture:
      'React builder app, Node.js API for form definitions, MongoDB storage, and a framework-agnostic vanilla-JS embed script.',
  },
  {
    id: 'p4',
    name: 'Waypoint',
    tagline: 'Developer-first status page and incident tool',
    description:
      'Status pages, on-call routing, and incident timelines built for small engineering teams who want signal, not noise.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    stack: ['Remix', 'PostgreSQL', 'Docker', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    gallery: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    ],
    features: [
      'Public status pages with subscriber notifications',
      'On-call rotations with escalation policies',
      'Incident timelines auto-generated from status changes',
      'Webhook-based integrations with monitoring tools',
    ],
    challenges:
      'Delivering reliable notifications during the exact moments infrastructure is unstable.',
    solutions:
      'Decoupled the notification pipeline onto independent infrastructure in a separate region with its own queue and retry policy.',
    architecture:
      'Remix for server-rendered pages, PostgreSQL for incident data, containerized services on AWS ECS behind an ALB.',
  },
];
