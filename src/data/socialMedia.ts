export interface SocialMediaPost {
  id: string;
  platform: 'twitter' | 'linkedin' | 'youtube';
  content: string;
  author: string;
  date: string;
  likes: number;
  shares: number;
  image?: string;
}

export const socialMediaPosts: SocialMediaPost[] = [
  {
    id: '1',
    platform: 'twitter',
    content: '🚀 Amazing opportunity alert! Join the #DigitalIndia internship program and work on cutting-edge government tech projects. Applications now open! #InternshipOpportunity #TechForGood',
    author: '@DigitalIndiaGov',
    date: '2024-03-10',
    likes: 1250,
    shares: 340,
    image: '/src/assets/social/digital-india-post.jpg'
  },
  {
    id: '2', 
    platform: 'linkedin',
    content: 'Proud to announce that our DISHA AI platform has successfully matched 5000+ students with government internships! The future of skill development is here. #AIMatching #SkillDevelopment #GovernmentInterns',
    author: 'Ministry of Skill Development',
    date: '2024-03-08',
    likes: 2100,
    shares: 780,
    image: '/src/assets/social/government-announcement.jpg'
  },
  {
    id: '3',
    platform: 'youtube', 
    content: 'Watch: Success stories from our government internship program. See how young minds are contributing to nation building! 🇮🇳 #SuccessStories #InternshipImpact',
    author: 'NITI Aayog Official',
    date: '2024-03-05',
    likes: 3400,
    shares: 1200,
    image: '/src/assets/social/success-stories.jpg'
  },
  {
    id: '4',
    platform: 'twitter',
    content: '📈 Statistics speak volumes: 78% of our interns receive full-time offers after program completion. Join the success story! #CareerGrowth #GovernmentJobs #InternSuccess',
    author: '@StartupIndia',
    date: '2024-03-03',
    likes: 980,
    shares: 250,
    image: '/src/assets/social/linkedin-success.jpg'
  },
  {
    id: '5',
    platform: 'linkedin',
    content: 'Innovation meets opportunity! Our AI-powered matching system ensures the perfect fit between student skills and internship requirements. Experience the future of career matching. #AITechnology #CareerMatching',
    author: 'Digital India Corporation', 
    date: '2024-03-01',
    likes: 1680,
    shares: 420,
    image: '/src/assets/social/government-announcement.jpg'
  }
];