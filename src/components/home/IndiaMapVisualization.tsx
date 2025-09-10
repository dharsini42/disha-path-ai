import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Building, GraduationCap, TrendingUp } from 'lucide-react';

export function IndiaMapVisualization() {
  const stateData = [
    { name: 'Delhi', internships: 245, sectors: ['Technology', 'Policy', 'Administration'], coordinates: { x: 45, y: 30 } },
    { name: 'Maharashtra', internships: 189, sectors: ['Finance', 'Technology', 'Manufacturing'], coordinates: { x: 35, y: 60 } },
    { name: 'Karnataka', internships: 156, sectors: ['Technology', 'Aerospace', 'Biotechnology'], coordinates: { x: 38, y: 75 } },
    { name: 'Tamil Nadu', internships: 134, sectors: ['Healthcare', 'Technology', 'Education'], coordinates: { x: 42, y: 85 } },
    { name: 'West Bengal', internships: 98, sectors: ['Education', 'Culture', 'Industry'], coordinates: { x: 60, y: 50 } },
    { name: 'Gujarat', internships: 87, sectors: ['Manufacturing', 'Chemical', 'Energy'], coordinates: { x: 25, y: 50 } },
    { name: 'Rajasthan', internships: 76, sectors: ['Tourism', 'Mining', 'Agriculture'], coordinates: { x: 30, y: 40 } },
    { name: 'Uttar Pradesh', internships: 165, sectors: ['Agriculture', 'Administration', 'Education'], coordinates: { x: 50, y: 35 } }
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
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6" style={{ minHeight: '400px' }}>
                {/* Simplified India Map Outline */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full absolute inset-0"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                >
                  {/* Simplified India outline */}
                  <path
                    d="M20 35 Q25 25 35 30 Q45 25 55 30 Q65 25 75 35 Q80 45 75 55 Q70 65 60 70 Q50 75 40 80 Q30 85 25 75 Q20 65 15 55 Q15 45 20 35 Z"
                    fill="hsl(var(--primary)/0.1)"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                  />
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