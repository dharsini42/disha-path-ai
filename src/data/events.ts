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
    image: '/src/assets/events/skills-conference.jpg',
    date: '2024-03-15',
    description: 'Annual conference showcasing skill development initiatives across India',
    location: 'New Delhi'
  },
  {
    id: '2', 
    title: 'Digital India Innovation Summit',
    image: '/src/assets/events/digital-summit.jpg',
    date: '2024-03-20',
    description: 'Technology innovation summit for government digital services',
    location: 'Bengaluru'
  },
  {
    id: '3',
    title: 'Startup India Internship Fair',
    image: '/src/assets/events/startup-fair.jpg', 
    date: '2024-03-25',
    description: 'Connect with startups offering government-backed internships',
    location: 'Mumbai'
  },
  {
    id: '4',
    title: 'AI in Governance Workshop',
    image: '/src/assets/events/ai-workshop.jpg',
    date: '2024-04-01',
    description: 'Learn how AI is transforming government services and policy-making',
    location: 'Hyderabad'
  },
  {
    id: '5',
    title: 'Green Technology Internship Program Launch',
    image: '/src/assets/events/green-tech-launch.jpg',
    date: '2024-04-10',
    description: 'Launch of new environmental technology internship opportunities',
    location: 'Chennai'
  },
  {
    id: '6',
    title: 'Technology Innovation Workshop',
    image: '/src/assets/events/tech-workshop.jpg',
    date: '2024-04-15',
    description: 'Hands-on workshop on emerging technologies in government sector',
    location: 'Pune'
  },
  {
    id: '7',
    title: 'Government Policy Internship Fair',
    image: '/src/assets/events/policy-fair.jpg',
    date: '2024-04-20',
    description: 'Meet policy makers and explore internship opportunities in governance',
    location: 'Kolkata'
  }
];