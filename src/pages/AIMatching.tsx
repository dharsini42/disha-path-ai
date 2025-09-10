import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Brain, Target, Star, MapPin, Clock, IndianRupee, Building2, Eye, RefreshCw } from 'lucide-react';
import { internships } from '@/data/internships';

export default function AIMatching() {
  // Mock AI recommendations (in real app, this would come from AI analysis)
  const recommendations = [
    {
      internship: internships[0], // Data Analyst
      matchScore: 92,
      reasons: [
        "Your Python and data analysis skills are a perfect match",
        "Your academic background in Computer Science aligns well",
        "Location preference matches (New Delhi)",
        "Stipend expectation is within range"
      ]
    },
    {
      internship: internships[3], // Software Development
      matchScore: 88,
      reasons: [
        "Strong match for your programming skills (Java, Python)",
        "React experience directly applicable",
        "Government sector experience opportunity",
        "Duration matches your availability"
      ]
    },
    {
      internship: internships[5], // UI/UX Design
      matchScore: 75,
      reasons: [
        "Cross-functional opportunity to expand your skill set",
        "Remote work option matches your preferences",
        "Growing field with good career prospects",
        "Government experience will be valuable"
      ]
    }
  ];

  const getMatchColor = (score: number) => {
    if (score >= 85) return 'text-green-600 bg-green-50';
    if (score >= 70) return 'text-blue-600 bg-blue-50';
    return 'text-orange-600 bg-orange-50';
  };

  const getMatchLevel = (score: number) => {
    if (score >= 85) return 'Excellent Match';
    if (score >= 70) return 'Good Match';
    return 'Potential Match';
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Brain className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">AI-Powered Recommendations</h1>
        <p className="mt-2 text-muted-foreground">
          Based on your profile, skills, and preferences, here are personalized internship matches
        </p>
      </div>

      {/* AI Analysis Summary */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Your Profile Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">Key Skills Identified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">3</div>
            <div className="text-sm text-muted-foreground">Preferred Locations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange">Technology</div>
            <div className="text-sm text-muted-foreground">Primary Interest Area</div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Recommended for You</h2>
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh Recommendations
          </Button>
        </div>

        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <Card key={rec.internship.id} className="transition-all duration-200 hover:shadow-medium">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                      {index + 1}
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{rec.internship.title}</CardTitle>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        {rec.internship.company}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${getMatchColor(rec.matchScore)}`}>
                      <Star className="h-4 w-4 fill-current" />
                      {rec.matchScore}% Match
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {getMatchLevel(rec.matchScore)}
                    </div>
                  </div>
                </div>

                {/* Match Score Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>AI Match Confidence</span>
                    <span>{rec.matchScore}%</span>
                  </div>
                  <Progress value={rec.matchScore} className="h-2" />
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Internship Details */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{rec.internship.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <IndianRupee className="h-4 w-4 text-muted-foreground" />
                    <span>{rec.internship.stipend}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{rec.internship.duration}</span>
                  </div>
                </div>

                {/* Why This Matches */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Why this is perfect for you:</h4>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {rec.reasons.map((reason, reasonIndex) => (
                      <li key={reasonIndex} className="flex items-start gap-2 text-sm">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Match */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Matching Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {rec.internship.skills.slice(0, 4).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Actions */}
                <div className="flex gap-3">
                  <Link to={`/internships/${rec.internship.id}`} className="flex-1">
                    <Button className="w-full gap-2">
                      <Eye className="h-4 w-4" />
                      View Details & Apply
                    </Button>
                  </Link>
                  <Button variant="outline" size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Improve Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Improve Your Recommendations</CardTitle>
          <CardDescription>
            Help our AI provide better matches by updating your profile
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="text-sm font-medium">Profile Completeness</div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>85% Complete</span>
                  <span>Add skills for better matching</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Link to="/profile">
                <Button variant="outline">Update Profile</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}