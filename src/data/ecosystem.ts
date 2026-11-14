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
  venue?: string;
  dates?: string;
  round1Deadline?: string;
  shortlistDate?: string;
  link?: string;
  description?: string;
  communityId?: string;
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
      venue: 'Woxsen University',
      dates: '8–9 Dec',
      round1Deadline: '27 Nov',
      shortlistDate: '28 Nov',
      link: 'https://fts.aircwou.in/hackathon',
      description: 'Next-generation AI and builder experience bringing developers, creators, and future founders together.',
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
  ['Builders', 'Turn curiosity into things that work.'],
  ['Creators', 'Shape stories people want to share.'],
  ['Students', 'Find practical ways to grow.'],
  ['Entrepreneurs', 'Move ideas toward momentum.'],
] as const;

export const programAreas = [
  ['AI & Emerging Technology', 'Explore the ideas changing how we build.'],
  ['Workshops & Learning', 'Build useful skills through practical learning.'],
  ['Hackathons & Innovation', 'Meet challenges with ideas, teams, and action.'],
  ['Events & Experiences', 'Make room for conversations that move things forward.'],
  ['Career & Opportunities', 'Find ways to contribute and grow.'],
  ['Startup & Founder Ecosystem', 'Connect early ideas with an ecosystem around them.'],
] as const;

export const participationPaths = [
  ['Build', 'For developers and makers.'],
  ['Create', 'For creators and storytellers.'],
  ['Learn', 'For students and curious minds.'],
  ['Lead', 'For community builders and future leaders.'],
  ['Start', 'For entrepreneurs and founders.'],
  ['Connect', 'For professionals and organizations.'],
] as const;
