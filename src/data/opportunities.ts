import { 
  Laptop, 
  Heart, 
  Building, 
  Leaf, 
  GraduationCap, 
  Shield, 
  Plane, 
  Factory,
  Briefcase,
  Users
} from 'lucide-react';

export interface Opportunity {
  id: string;
  title: string;
  icon: any;
  count: number;
  description: string;
  color: string;
  image?: string;
}

export const opportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Information Technology',
    icon: Laptop,
    count: 150,
    description: 'Software development, data analysis, cybersecurity',
    color: 'text-blue-600',
    image: '/src/assets/sectors/it-sector.jpg'
  },
  {
    id: '2', 
    title: 'Healthcare & Medicine',
    icon: Heart,
    count: 85,
    description: 'Public health, medical research, healthcare administration',
    color: 'text-red-500',
    image: '/src/assets/sectors/healthcare-sector.jpg'
  },
  {
    id: '3',
    title: 'Infrastructure & Construction', 
    icon: Building,
    count: 120,
    description: 'Urban planning, civil engineering, smart cities',
    color: 'text-gray-600'
  },
  {
    id: '4',
    title: 'Environment & Climate',
    icon: Leaf,
    count: 95,
    description: 'Environmental research, climate policy, sustainability',
    color: 'text-green-600'
  },
  {
    id: '5',
    title: 'Education & Training',
    icon: GraduationCap, 
    count: 110,
    description: 'Educational technology, curriculum development, training',
    color: 'text-purple-600'
  },
  {
    id: '6',
    title: 'Defense & Security',
    icon: Shield,
    count: 75,
    description: 'Defense technology, national security, research',
    color: 'text-orange-600'
  },
  {
    id: '7',
    title: 'Aerospace & Aviation',
    icon: Plane,
    count: 60,
    description: 'Space technology, aviation, satellite systems', 
    color: 'text-indigo-600'
  },
  {
    id: '8',
    title: 'Manufacturing & Industry',
    icon: Factory,
    count: 140,
    description: 'Industrial automation, quality control, production',
    color: 'text-yellow-600'
  },
  {
    id: '9',
    title: 'Public Administration',
    icon: Briefcase,
    count: 100,
    description: 'Policy research, governance, public services',
    color: 'text-teal-600'
  },
  {
    id: '10',
    title: 'Social Development',
    icon: Users,
    count: 80,
    description: 'Community development, social welfare, NGO partnerships',
    color: 'text-pink-600'
  }
];