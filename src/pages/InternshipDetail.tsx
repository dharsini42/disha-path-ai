import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, MapPin, Clock, IndianRupee, Building2, Calendar, CheckCircle, Send } from 'lucide-react';
import { getInternshipById } from '@/data/internships';
import { ApplicationModal } from '@/components/ui/application-modal';

export default function InternshipDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const internship = id ? getInternshipById(id) : null;

  if (!internship) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">Internship Not Found</h2>
          <p className="mt-2 text-muted-foreground">The internship you're looking for doesn't exist.</p>
          <Link to="/internships">
            <Button className="mt-4">Back to Internships</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    setIsModalOpen(true);
  };

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
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Internships
      </Button>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Header */}
          <Card className="modern-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-2xl">{internship.title}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="h-5 w-5" />
                    <span className="text-lg">{internship.company}</span>
                  </div>
                </div>
                <Badge className={`${getTypeColor(internship.type)} text-sm`}>
                  {internship.type.charAt(0).toUpperCase() + internship.type.slice(1)}
                </Badge>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>{internship.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-muted-foreground" />
                  <span>{internship.stipend}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{internship.duration}</span>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Description */}
          <Card className="modern-card">
            <CardHeader>
              <CardTitle>About This Internship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {internship.description}
              </p>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="modern-card">
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {internship.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="modern-card">
            <CardHeader>
              <CardTitle>Skills You'll Develop</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill, index) => (
                  <Badge key={index} variant="default" className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Apply Card */}
          <Card className="sticky top-6 modern-card coral-gradient text-white">
            <CardHeader>
              <CardTitle className="text-center text-white">Apply Now</CardTitle>
              <CardDescription className="text-center text-white/90">
                Don't miss this opportunity to grow your career
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Application Deadline</span>
                  <div className="flex items-center gap-1 text-white">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{new Date(internship.deadline).toLocaleDateString('en-IN')}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Sector</span>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">{internship.sector}</Badge>
                </div>
              </div>

              <Separator />

              <Button 
                onClick={handleApply} 
                size="lg" 
                className="w-full gap-2 bg-white text-orange hover:bg-white/90 btn-primary-hover"
              >
                <Send className="h-5 w-5" />
                Apply for This Internship
              </Button>

              <div className="text-center text-xs text-white/70">
                By applying, you agree to our Terms of Service and Privacy Policy
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="modern-card">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Applications</span>
                  <span className="font-medium">127 applied</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Views</span>
                  <span className="font-medium">1,245 views</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Posted</span>
                  <span className="font-medium">2 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Similar Internships */}
          <Card className="modern-card">
            <CardHeader>
              <CardTitle>Similar Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link to="/internships/4" className="block">
                  <div className="rounded-lg border p-3 transition-colors hover:bg-muted/50">
                    <div className="font-medium text-sm">Software Development Intern</div>
                    <div className="text-xs text-muted-foreground">National Informatics Centre</div>
                  </div>
                </Link>
                <Link to="/internships/2" className="block">
                  <div className="rounded-lg border p-3 transition-colors hover:bg-muted/50">
                    <div className="font-medium text-sm">Policy Research Intern</div>
                    <div className="text-xs text-muted-foreground">NITI Aayog</div>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <ApplicationModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        internshipTitle={internship?.title || ""}
      />
    </div>
  );
}