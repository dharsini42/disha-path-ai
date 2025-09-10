import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, GraduationCap, Calendar, MapPin } from 'lucide-react';

export function EligibilityDashboard() {
  const eligibilityItems = [
    {
      icon: Calendar,
      title: 'Age Requirement',
      description: '18-28 years',
      status: 'eligible',
      details: 'Valid age range for PM internship scheme'
    },
    {
      icon: Users,
      title: 'Job Status', 
      description: 'Student/Graduate',
      status: 'eligible',
      details: 'Currently enrolled or recent graduate'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Pan India',
      status: 'eligible', 
      details: 'Available across all states and UTs'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: '10th+ Qualification',
      status: 'eligible',
      details: 'Minimum 10th grade completion required'
    }
  ];

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Eligibility Dashboard</h2>
        <p className="text-muted-foreground text-lg">Check if you meet the criteria for PM Internship Scheme</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {eligibilityItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="card-gradient shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                  <p className="text-primary font-semibold text-xl">{item.description}</p>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-600">Eligible</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}