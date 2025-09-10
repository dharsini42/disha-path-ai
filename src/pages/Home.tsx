import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-illustration.jpg';

export default function Home() {
  return (
    <div className="space-y-8 p-6">
      {/* Hero Section */}
      <section className="hero-gradient rounded-2xl p-8 text-white shadow-strong md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Welcome to DISHA
              </h1>
              <h2 className="text-xl font-semibold text-white/90 md:text-2xl">
                AI Automation Engine for PM Recommendation Scheme
              </h2>
              <p className="text-lg text-white/80">
                Discover government internship opportunities tailored to your skills and aspirations. 
                Let AI help you find the perfect match for your career growth.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/auth?mode=login">
                <Button size="lg" variant="hero" className="w-full gap-2 sm:w-auto">
                  Login with Aadhaar
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/auth?mode=signup">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
                >
                  Create New Account
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src={heroImage} 
              alt="Government internship platform illustration" 
              className="max-w-full rounded-xl shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-gradient shadow-soft transition-transform hover:scale-105">
          <CardHeader className="text-center">
            <Target className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="text-lg">AI Matching</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              Advanced AI algorithms match your skills with the perfect internship opportunities
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="card-gradient shadow-soft transition-transform hover:scale-105">
          <CardHeader className="text-center">
            <Users className="mx-auto h-12 w-12 text-accent" />
            <CardTitle className="text-lg">Government Backed</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              Official government internships from various ministries and departments
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="card-gradient shadow-soft transition-transform hover:scale-105">
          <CardHeader className="text-center">
            <Award className="mx-auto h-12 w-12 text-orange" />
            <CardTitle className="text-lg">Certified Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              Gain valuable certificates and experience through structured internship programs
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="card-gradient shadow-soft transition-transform hover:scale-105">
          <CardHeader className="text-center">
            <TrendingUp className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="text-lg">Career Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              Build your career with mentorship and real-world experience in government sector
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="rounded-xl bg-muted/50 p-8">
        <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
          Platform Statistics
        </h3>
        <div className="grid gap-6 text-center md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Active Internships</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">25,000+</div>
            <div className="text-sm text-muted-foreground">Registered Students</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange">15+</div>
            <div className="text-sm text-muted-foreground">Government Ministries</div>
          </div>
        </div>
      </section>
    </div>
  );
}