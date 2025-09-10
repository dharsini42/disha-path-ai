import { EnhancedCarousel, CarouselItem } from '@/components/ui/carousel-enhanced';
import { partners } from '@/data/partners';

export function PartnersCarousel() {
  return (
    <section className="py-8 bg-muted/20 rounded-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Our Government Partners</h3>
        <p className="text-muted-foreground">Trusted ministries and departments offering internship opportunities</p>
      </div>
      
      <EnhancedCarousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex">
          {partners.map((partner) => (
            <CarouselItem key={partner.id} className="md:basis-1/3 lg:basis-1/5">
              <div className="p-4">
                <div className="flex flex-col items-center space-y-3 p-4 bg-background rounded-lg border hover:shadow-medium transition-all duration-200">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-sm text-foreground leading-tight">{partner.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{partner.sector}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </div>
      </EnhancedCarousel>
    </section>
  );
}