import { EnhancedCarousel, CarouselItem } from '@/components/ui/carousel-enhanced';
import { Card, CardContent } from '@/components/ui/card';
import { socialMediaPosts } from '@/data/socialMedia';
import { Twitter, Linkedin, Youtube, Heart, Share, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function SocialMediaGallery() {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return Twitter;
      case 'linkedin': return Linkedin; 
      case 'youtube': return Youtube;
      default: return MessageCircle;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'twitter': return 'text-blue-500';
      case 'linkedin': return 'text-blue-700';
      case 'youtube': return 'text-red-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Social Media Updates</h2>
        <p className="text-muted-foreground text-lg">Stay connected with our latest updates and success stories</p>
      </div>

      <EnhancedCarousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex">
          {socialMediaPosts.map((post) => {
            const PlatformIcon = getPlatformIcon(post.platform);
            const platformColor = getPlatformColor(post.platform);
            
            return (
              <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-3">
                  <Card className="h-full shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <PlatformIcon className={`h-5 w-5 ${platformColor}`} />
                          <Badge variant="secondary" className="text-xs">
                            {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>

                      {post.image && (
                        <div className="w-full h-32 bg-muted rounded-lg overflow-hidden">
                          <img 
                            src={post.image} 
                            alt="Post image" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="space-y-3">
                        <p className="text-sm text-foreground leading-relaxed line-clamp-4">
                          {post.content}
                        </p>
                        
                        <div className="text-xs text-muted-foreground font-medium">
                          by {post.author}
                        </div>

                        <div className="flex items-center gap-4 pt-2 border-t">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4 text-red-500" />
                            <span className="text-xs font-medium">{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share className="h-4 w-4 text-blue-500" />
                            <span className="text-xs font-medium">{post.shares}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </div>
      </EnhancedCarousel>
    </section>
  );
}