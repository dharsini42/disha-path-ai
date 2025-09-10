export interface Event {
  id: string;
  title: string;
  image: string;
  date: string;
  description: string;
  location: string;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'National Skills Development Conference 2024',
    image: '/placeholder.svg',
    date: '2024-03-15',
    description: 'Annual conference showcasing skill development initiatives across India',
    location: 'New Delhi'
  },
  {
    id: '2', 
    title: 'Digital India Innovation Summit',
    image: '/placeholder.svg',
    date: '2024-03-20',
    description: 'Technology innovation summit for government digital services',
    location: 'Bengaluru'
  },
  {
    id: '3',
    title: 'Startup India Internship Fair',
    image: '/placeholder.svg', 
    date: '2024-03-25',
    description: 'Connect with startups offering government-backed internships',
    location: 'Mumbai'
  },
  {
    id: '4',
    title: 'AI in Governance Workshop',
    image: '/placeholder.svg',
    date: '2024-04-01',
    description: 'Learn how AI is transforming government services and policy-making',
    location: 'Hyderabad'
  },
  {
    id: '5',
    title: 'Green Technology Internship Program Launch',
    image: '/placeholder.svg',
    date: '2024-04-10',
    description: 'Launch of new environmental technology internship opportunities',
    location: 'Chennai'
  }
];