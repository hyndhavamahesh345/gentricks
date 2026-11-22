export interface CommunityRecord {
  id: string;
  name: string;
  focus?: string;
}

export interface EventRecord {
  id: string;
  title: string;
  startsAt: string;
  format: 'in-person' | 'online' | 'hybrid';
  category?: 'hackathon' | 'workshop' | 'meetup' | 'conference';
  status?: 'upcoming' | 'ongoing' | 'past';
  venue?: string;
  dates?: string;
  round1Deadline?: string;
  shortlistDate?: string;
  link?: string;
  description?: string;
  communityId?: string;
  bannerImage?: string;
}

export interface OpportunityRecord {
  id: string;
  title: string;
  type: 'internship' | 'hackathon' | 'collaboration';
  organization?: string;
  deadline?: string;
  dates?: string;
  link?: string;
  communityId?: string;
}

export const ecosystemData: {
  communities: CommunityRecord[];
  events: EventRecord[];
  opportunities: OpportunityRecord[];
} = {
  communities: [],
  events: [
    {
      id: 'agentic-x-2',
      title: 'AGENTIC X 2.0',
      startsAt: '2026-12-08',
      format: 'in-person',
      category: 'hackathon',
      status: 'upcoming',
      venue: 'Woxsen University',
      dates: '8–9 Dec',
      round1Deadline: '27 Nov',
      shortlistDate: '28 Nov',
      link: 'https://fts.aircwou.in/hackathon',
      description: '48-hour builder hackathon on autonomous agents, full-stack systems, and product prototypes at Woxsen University.',
    },
  ],
  opportunities: [
    {
      id: 'agentic-x-2-opp',
      title: 'AGENTIC X 2.0 Hackathon',
      type: 'hackathon',
      organization: 'Woxsen University',
      deadline: 'Round 1: 27 Nov · Shortlist: 28 Nov',
      dates: '8–9 Dec',
      link: 'https://fts.aircwou.in/hackathon',
    },
  ],
};

export const ecosystemPeople = [
  ['Builders', 'Write code, ship working prototypes, and run live system tests.'],
  ['Creators', 'Design product interfaces, craft demos, and document technical breakdowns.'],
  ['Students', 'Learn modern stacks, compete in hackathons, and build a verified portfolio.'],
  ['Entrepreneurs', 'Turn hackathon projects into production tools and find early users.'],
] as const;

export const programAreas = [
  ['AI Systems & Engineering', 'Hands-on sprints on autonomous agents, model APIs, and production deployments.'],
  ['Workshops & Sprints', 'Code-along sessions led by developers actively building and shipping software.'],
  ['Hackathons & Bounties', 'Weekend sprint challenges with real technical judging and cash prize pools.'],
  ['Meetups & Demo Days', 'In-person project showcases, lightning talks, and developer networking.'],
  ['Internships & Roles', 'Direct referrals to partner startups and engineering teams hiring student talent.'],
  ['Startup Launchpad', 'Architecture reviews, early adopter distribution, and founder mentorship.'],
] as const;

export const participationPaths = [
  ['Build', 'Full-stack developers, AI engineers, and system architects.'],
  ['Create', 'UI/UX designers, technical writers, and product demo makers.'],
  ['Learn', 'College students mastering modern engineering workflows.'],
  ['Lead', 'Campus chapter leads and local developer meetup organizers.'],
  ['Launch', 'Founders taking prototypes to early customer trials.'],
  ['Partner', 'Tech companies, mentors, and hiring engineering teams.'],
] as const;
