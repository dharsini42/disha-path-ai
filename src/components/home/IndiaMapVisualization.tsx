import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Building, GraduationCap, TrendingUp } from 'lucide-react';

export function IndiaMapVisualization() {
  const stateData = [
    { name: 'Delhi', internships: 245, sectors: ['Technology', 'Policy', 'Administration'], coordinates: { x: 46, y: 24 } },
    { name: 'Maharashtra', internships: 189, sectors: ['Finance', 'Technology', 'Manufacturing'], coordinates: { x: 32, y: 55 } },
    { name: 'Karnataka', internships: 156, sectors: ['Technology', 'Aerospace', 'Biotechnology'], coordinates: { x: 41, y: 70 } },
    { name: 'Tamil Nadu', internships: 134, sectors: ['Healthcare', 'Technology', 'Education'], coordinates: { x: 48, y: 85 } },
    { name: 'West Bengal', internships: 98, sectors: ['Education', 'Culture', 'Industry'], coordinates: { x: 80, y: 45 } },
    { name: 'Gujarat', internships: 87, sectors: ['Manufacturing', 'Chemical', 'Energy'], coordinates: { x: 21, y: 48 } },
    { name: 'Rajasthan', internships: 76, sectors: ['Tourism', 'Mining', 'Agriculture'], coordinates: { x: 28, y: 35 } },
    { name: 'Uttar Pradesh', internships: 165, sectors: ['Agriculture', 'Administration', 'Education'], coordinates: { x: 58, y: 25 } },
    { name: 'Punjab', internships: 65, sectors: ['Agriculture', 'Technology'], coordinates: { x: 40, y: 15 } },
    { name: 'Haryana', internships: 54, sectors: ['Agriculture', 'Industry'], coordinates: { x: 48, y: 20 } },
    { name: 'Madhya Pradesh', internships: 89, sectors: ['Mining', 'Agriculture'], coordinates: { x: 48, y: 38 } },
    { name: 'Assam', internships: 43, sectors: ['Tea', 'Oil'], coordinates: { x: 85, y: 35 } }
  ];

  const sectors = [
    { name: 'Technology', count: 287, color: 'bg-blue-500' },
    { name: 'Healthcare', count: 189, color: 'bg-red-500' },
    { name: 'Education', count: 156, color: 'bg-green-500' },
    { name: 'Manufacturing', count: 134, color: 'bg-yellow-500' },
    { name: 'Policy & Administration', count: 98, color: 'bg-purple-500' }
  ];

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">India Internship Opportunities Map</h2>
        <p className="text-muted-foreground text-lg">
          Interactive visualization of internship distribution across states and sectors
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Interactive Map */}
        <div className="lg:col-span-2">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                State-wise Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6" style={{ minHeight: '500px' }}>
                {/* Detailed India Political Map */}
                <svg
                  viewBox="0 0 800 600"
                  className="w-full h-full absolute inset-0"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                >
                  {/* Background */}
                  <rect width="800" height="600" fill="transparent" />
                  
                  {/* Major States Outlines */}
                  {/* Rajasthan */}
                  <path d="M150 180 L250 170 L280 200 L290 250 L250 280 L200 290 L160 260 L140 220 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Gujarat */}
                  <path d="M120 250 L200 240 L220 280 L210 320 L180 340 L140 330 L110 300 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Maharashtra */}
                  <path d="M200 280 L300 270 L350 300 L360 350 L320 380 L250 390 L210 360 L190 320 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Karnataka */}
                  <path d="M280 380 L360 370 L380 420 L370 470 L320 480 L270 460 L260 420 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Tamil Nadu */}
                  <path d="M320 450 L380 440 L420 480 L430 520 L390 540 L340 530 L310 500 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Kerala */}
                  <path d="M280 480 L320 470 L340 510 L330 540 L300 550 L270 530 L265 500 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Andhra Pradesh & Telangana */}
                  <path d="M360 350 L450 340 L480 380 L470 420 L420 440 L370 430 L350 390 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Odisha */}
                  <path d="M450 300 L520 290 L540 330 L530 370 L480 380 L440 360 L430 320 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Chhattisgarh */}
                  <path d="M380 250 L450 240 L480 280 L470 320 L430 330 L390 310 L370 270 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Madhya Pradesh */}
                  <path d="M280 200 L450 190 L480 230 L470 270 L380 280 L320 270 L290 240 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Uttar Pradesh */}
                  <path d="M350 120 L550 110 L570 150 L560 190 L480 200 L420 180 L380 160 L340 140 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Bihar */}
                  <path d="M520 150 L600 140 L620 180 L610 210 L570 220 L540 200 L510 170 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Jharkhand */}
                  <path d="M540 200 L600 190 L620 230 L610 260 L570 270 L530 250 L520 220 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* West Bengal */}
                  <path d="M580 220 L650 210 L670 250 L660 290 L620 300 L590 280 L570 250 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Delhi NCR */}
                  <path d="M340 140 L370 135 L375 155 L365 165 L345 160 L335 150 Z" 
                    fill="hsl(var(--accent)/0.15)" stroke="hsl(var(--accent))" strokeWidth="2" />
                  
                  {/* Punjab */}
                  <path d="M280 80 L350 70 L370 100 L360 130 L320 140 L290 120 L270 100 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Haryana */}
                  <path d="M320 100 L380 90 L400 120 L390 150 L350 160 L330 130 L315 110 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Himachal Pradesh */}
                  <path d="M280 50 L380 40 L400 70 L390 90 L320 100 L290 80 L270 60 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Uttarakhand */}
                  <path d="M380 70 L450 60 L470 90 L460 120 L420 130 L390 110 L375 85 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Assam & Northeast */}
                  <path d="M650 160 L720 150 L740 190 L730 230 L700 240 L670 220 L640 190 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                </svg>

                {/* State markers */}
                {stateData.map((state, index) => (
                  <div
                    key={state.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${state.coordinates.x}%`, top: `${state.coordinates.y}%` }}
                  >
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse group-hover:scale-150 transition-transform duration-200"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background border rounded-lg p-2 shadow-lg whitespace-nowrap z-10">
                      <div className="text-sm font-semibold">{state.name}</div>
                      <div className="text-xs text-muted-foreground">{state.internships} opportunities</div>
                      <div className="text-xs text-primary">{state.sectors.slice(0, 2).join(', ')}</div>
                    </div>
                  </div>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-sm font-semibold mb-2">Legend</div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Internship Hub</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Panel */}
        <div className="space-y-4">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">1,500+</div>
                  <div className="text-xs text-muted-foreground">Total Opportunities</div>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-accent">28</div>
                  <div className="text-xs text-muted-foreground">States & UTs</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Top Sectors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {sectors.map((sector, index) => (
                <div key={sector.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${sector.color} rounded-full`}></div>
                    <span className="text-sm font-medium">{sector.name}</span>
                  </div>
                  <Badge variant="secondary">{sector.count}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Top States
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {stateData
                .sort((a, b) => b.internships - a.internships)
                .slice(0, 5)
                .map((state, index) => (
                  <div key={state.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{state.name}</span>
                    <Badge variant="outline">{state.internships}</Badge>
                  </div>
                ))}
            </CardContent>
          </Card>

          <Button className="w-full" variant="outline">
            <GraduationCap className="mr-2 h-4 w-4" />
            View Detailed Analytics
          </Button>
        </div>
      </div>
    </section>
  );
}