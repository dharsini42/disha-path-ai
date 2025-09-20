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
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6" style={{ minHeight: '550px' }}>
                {/* Highly Detailed India Political Map */}
                <svg
                  viewBox="0 0 1000 800"
                  className="w-full h-full absolute inset-0"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                >
                  {/* Background */}
                  <rect width="1000" height="800" fill="transparent" />
                  
                  {/* Jammu & Kashmir */}
                  <path d="M350 50 L420 40 L450 70 L440 100 L400 120 L360 110 L340 80 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Ladakh */}
                  <path d="M420 40 L500 30 L520 60 L510 90 L470 100 L450 70 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Himachal Pradesh */}
                  <path d="M360 110 L440 100 L470 130 L460 160 L420 170 L380 160 L350 140 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Uttarakhand */}
                  <path d="M460 160 L530 150 L550 180 L540 210 L500 220 L470 200 L450 180 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Punjab */}
                  <path d="M320 140 L380 130 L400 160 L390 190 L350 200 L320 180 L310 160 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Haryana & Delhi */}
                  <path d="M380 160 L450 150 L470 180 L460 210 L420 220 L390 200 L370 180 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Delhi - Special highlight */}
                  <path d="M420 180 L440 175 L445 195 L435 205 L425 200 L415 190 Z" 
                    fill="hsl(var(--accent)/0.2)" stroke="hsl(var(--accent))" strokeWidth="2.5" />
                  
                  {/* Rajasthan */}
                  <path d="M200 200 L350 180 L380 220 L390 280 L370 340 L320 360 L280 350 L240 330 L200 310 L180 260 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Uttar Pradesh */}
                  <path d="M450 200 L650 180 L680 220 L670 260 L640 280 L580 290 L520 280 L480 270 L460 240 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Bihar */}
                  <path d="M640 260 L750 240 L770 280 L760 320 L720 340 L680 330 L650 310 L630 280 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Madhya Pradesh */}
                  <path d="M370 280 L580 260 L620 300 L610 360 L580 400 L520 420 L460 410 L420 390 L390 360 L350 330 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Gujarat */}
                  <path d="M150 350 L320 330 L350 370 L340 420 L320 460 L280 480 L240 470 L200 450 L170 420 L140 380 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Daman & Diu (small) */}
                  <path d="M190 420 L210 415 L215 435 L205 445 L195 440 L185 430 Z" 
                    fill="hsl(var(--accent)/0.15)" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                  
                  {/* Maharashtra */}
                  <path d="M320 400 L520 380 L560 420 L580 480 L560 540 L520 580 L460 590 L400 580 L360 560 L340 520 L310 480 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Goa */}
                  <path d="M340 560 L370 555 L375 575 L365 585 L355 580 L345 570 Z" 
                    fill="hsl(var(--accent)/0.15)" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                  
                  {/* Karnataka */}
                  <path d="M380 580 L520 560 L560 600 L580 660 L560 720 L520 740 L460 730 L420 710 L390 680 L370 640 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Kerala */}
                  <path d="M390 680 L430 670 L450 710 L460 750 L440 780 L420 790 L400 780 L380 750 L370 720 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Tamil Nadu */}
                  <path d="M460 730 L580 710 L620 750 L640 780 L620 810 L580 820 L540 810 L500 790 L470 770 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Andhra Pradesh */}
                  <path d="M560 540 L680 520 L720 560 L740 620 L720 680 L680 700 L620 710 L580 690 L560 650 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Telangana */}
                  <path d="M580 480 L650 460 L680 500 L670 540 L640 560 L600 550 L570 530 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Chhattisgarh */}
                  <path d="M580 360 L700 340 L730 380 L720 420 L690 440 L650 430 L620 410 L590 390 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Odisha */}
                  <path d="M720 380 L820 360 L850 400 L840 460 L810 500 L770 510 L730 490 L710 450 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Jharkhand */}
                  <path d="M680 310 L780 290 L810 330 L800 370 L770 390 L730 380 L700 360 L670 340 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* West Bengal */}
                  <path d="M750 280 L850 260 L880 300 L870 360 L840 400 L810 410 L780 390 L760 350 L740 320 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Sikkim */}
                  <path d="M820 220 L840 215 L845 235 L835 245 L825 240 L815 230 Z" 
                    fill="hsl(var(--accent)/0.15)" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                  
                  {/* Assam */}
                  <path d="M850 220 L950 200 L970 240 L960 280 L920 300 L880 290 L860 270 L840 250 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Arunachal Pradesh */}
                  <path d="M880 150 L980 130 L1000 170 L990 210 L950 230 L910 220 L890 200 L870 180 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Nagaland */}
                  <path d="M920 240 L960 230 L970 250 L965 270 L955 280 L945 270 L935 255 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Manipur */}
                  <path d="M920 280 L940 275 L945 295 L935 305 L925 300 L915 290 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Mizoram */}
                  <path d="M900 300 L920 295 L925 315 L915 325 L905 320 L895 310 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Tripura */}
                  <path d="M870 300 L890 295 L895 315 L885 325 L875 320 L865 310 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* Meghalaya */}
                  <path d="M840 270 L870 265 L875 285 L865 295 L855 290 L845 280 Z" 
                    fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.4)" strokeWidth="1.5" />
                  
                  {/* State Labels */}
                  <text x="425" y="185" className="fill-accent text-xs font-semibold">Delhi</text>
                  <text x="280" y="280" className="fill-primary text-sm font-medium">Rajasthan</text>
                  <text x="550" y="230" className="fill-primary text-sm font-medium">UP</text>
                  <text x="430" y="570" className="fill-primary text-sm font-medium">Karnataka</text>
                  <text x="550" y="760" className="fill-primary text-sm font-medium">Tamil Nadu</text>
                  <text x="760" y="330" className="fill-primary text-sm font-medium">West Bengal</text>
                  <text x="450" y="340" className="fill-primary text-sm font-medium">Madhya Pradesh</text>
                  <text x="250" y="420" className="fill-primary text-sm font-medium">Gujarat</text>
                  <text x="440" y="520" className="fill-primary text-sm font-medium">Maharashtra</text>
                  
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