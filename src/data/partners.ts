export interface Partner {
  id: string;
  name: string;
  logo: string;
  sector: string;
}

export const partners: Partner[] = [
  { id: '1', name: 'Ministry of Electronics & IT', logo: '/placeholder.svg', sector: 'Technology' },
  { id: '2', name: 'NITI Aayog', logo: '/placeholder.svg', sector: 'Policy' },
  { id: '3', name: 'Startup India', logo: '/placeholder.svg', sector: 'Entrepreneurship' },
  { id: '4', name: 'National Informatics Centre', logo: '/placeholder.svg', sector: 'Technology' },
  { id: '5', name: 'Ministry of Environment & Forests', logo: '/placeholder.svg', sector: 'Environment' },
  { id: '6', name: 'Digital India Corporation', logo: '/placeholder.svg', sector: 'Digital Services' },
  { id: '7', name: 'Indian Railways', logo: '/placeholder.svg', sector: 'Infrastructure' },
  { id: '8', name: 'DRDO', logo: '/placeholder.svg', sector: 'Defense' },
  { id: '9', name: 'ISRO', logo: '/placeholder.svg', sector: 'Space' },
  { id: '10', name: 'Ministry of Health', logo: '/placeholder.svg', sector: 'Healthcare' },
];