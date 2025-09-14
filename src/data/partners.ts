export interface Partner {
  id: string;
  name: string;
  logo: string;
  sector: string;
}

export const partners: Partner[] = [
  { id: '1', name: 'Ministry of Electronics & IT', logo: '/src/assets/partners/meity-logo.jpg', sector: 'Technology' },
  { id: '2', name: 'NITI Aayog', logo: '/src/assets/partners/niti-aayog-logo.jpg', sector: 'Policy' },
  { id: '3', name: 'Startup India', logo: '/src/assets/partners/startup-india-logo.jpg', sector: 'Entrepreneurship' },
  { id: '4', name: 'National Informatics Centre', logo: '/placeholder.svg', sector: 'Technology' },
  { id: '5', name: 'Ministry of Environment & Forests', logo: '/placeholder.svg', sector: 'Environment' },
  { id: '6', name: 'Digital India Corporation', logo: '/src/assets/partners/digital-india-logo.jpg', sector: 'Digital Services' },
  { id: '7', name: 'Indian Railways', logo: '/src/assets/partners/indian-railways-logo.jpg', sector: 'Infrastructure' },
  { id: '8', name: 'DRDO', logo: '/src/assets/partners/drdo-logo.jpg', sector: 'Defense' },
  { id: '9', name: 'ISRO', logo: '/src/assets/partners/isro-logo.jpg', sector: 'Space' },
  { id: '10', name: 'Ministry of Health', logo: '/placeholder.svg', sector: 'Healthcare' },
];