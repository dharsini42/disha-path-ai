import { EnhancedCarousel, CarouselItem } from '@/components/ui/carousel-enhanced';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { opportunities } from '@/data/opportunities';
import { ArrowRight } from 'lucide-react';

export function OpportunitiesCarousel() {
  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Explore Opportunities by Sector</h2>
        <p className="text-muted-foreground text-lg">Discover internships across diverse government sectors and ministries</p>
      </div>

      <EnhancedCarousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex">
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <CarouselItem key={opportunity.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-3">
                  <Card className="h-full shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6 space-y-4 text-center">
                      <div className="space-y-4">
                        <div className="mx-auto w-16 h-16 bg-muted/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <Icon className={`h-8 w-8 ${opportunity.color}`} />
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-bold text-foreground text-lg leading-tight">
                            {opportunity.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {opportunity.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-center">
                          <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                            {opportunity.count}+ Openings
                          </Badge>
                        </div>
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full group/btn opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        View Opportunities
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
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