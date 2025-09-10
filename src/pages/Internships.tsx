import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Clock, IndianRupee, Building2, Search, Filter, Eye } from 'lucide-react';
import { internships } from '@/data/internships';

export default function Internships() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sectorFilter, setSectorFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  // Get unique values for filters
  const sectors = Array.from(new Set(internships.map(i => i.sector)));
  const locations = Array.from(new Set(internships.map(i => i.location)));
  const types = Array.from(new Set(internships.map(i => i.type)));

  // Filter internships
  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.sector.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = sectorFilter === 'all' || internship.sector === sectorFilter;
    const matchesLocation = locationFilter === 'all' || internship.location === locationFilter;
    const matchesType = typeFilter === 'all' || internship.type === typeFilter;

    return matchesSearch && matchesSector && matchesLocation && matchesType;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'remote': return 'bg-accent/20 text-accent border-accent/30';
      case 'hybrid': return 'bg-primary/20 text-primary border-primary/30';
      case 'on-site': return 'bg-orange/20 text-orange border-orange/30';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Available Internships</h1>
        <p className="text-muted-foreground">Discover government internship opportunities across various sectors</p>
      </div>

      {/* Search and Filters */}
      <Card className="modern-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search internships by title, company, or sector..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Sector</label>
              <Select value={sectorFilter} onValueChange={setSectorFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Sectors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  {sectors.map(sector => (
                    <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Work Type</label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSectorFilter('all');
                  setLocationFilter('all');
                  setTypeFilter('all');
                }}
                className="w-full gap-2"
              >
                <Filter className="h-4 w-4" />
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {filteredInternships.length} of {internships.length} internships
        </p>
      </div>

      {/* Internships Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredInternships.map((internship) => (
          <Card key={internship.id} className="transition-all duration-300 hover:shadow-medium hover:-translate-y-1 modern-card group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors">{internship.title}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    {internship.company}
                  </div>
                </div>
                <Badge className={getTypeColor(internship.type)}>
                  {internship.type}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <CardDescription className="line-clamp-3">
                {internship.description}
              </CardDescription>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{internship.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <IndianRupee className="h-4 w-4 text-muted-foreground" />
                  <span>{internship.stipend}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{internship.duration}</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="text-xs font-medium text-muted-foreground">SKILLS REQUIRED</div>
                <div className="flex flex-wrap gap-1">
                  {internship.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                  {internship.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-gradient-to-r from-orange/10 to-orange/20 text-orange border-orange/30">
                      +{internship.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <Link to={`/internships/${internship.id}`}>
                  <Button className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 btn-primary-hover">
                    <Eye className="h-4 w-4" />
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredInternships.length === 0 && (
        <div className="py-12 text-center">
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <Search className="h-8 w-8 text-primary" />
        </div>
          <h3 className="text-lg font-semibold">No internships found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or filters
          </p>
        </div>
      )}
    </div>
  );
}