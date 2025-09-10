import { EnhancedCarousel, CarouselItem } from '@/components/ui/carousel-enhanced';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { events } from '@/data/events';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export function EventGallery() {
  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
        <p className="text-muted-foreground text-lg">Join us for workshops, conferences, and networking opportunities</p>
      </div>

      <EnhancedCarousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex">
          {events.map((event) => (
            <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-3">
                <Card className="h-full shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary text-primary-foreground">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-3">
                      <h3 className="font-bold text-foreground text-lg leading-tight line-clamp-2">
                        {event.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString('en-IN')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button variant="outline" className="w-full group/btn">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </div>
      </EnhancedCarousel>
    </section>
  );
}