import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Shield, User, Mail, Phone, KeyRound } from 'lucide-react';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login';
  const isLogin = mode === 'login';

  const [formData, setFormData] = useState({
    aadhaar: '',
    otp: '',
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy authentication - redirect to profile
    window.location.href = '/profile';
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Auth Card */}
        <Card className="shadow-medium">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </CardTitle>
              <CardDescription>
                {isLogin 
                  ? 'Sign in to your DISHA account with Aadhaar'
                  : 'Join DISHA to discover internship opportunities'
                }
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {isLogin ? (
                // Login Form
                <>
                  <div className="space-y-2">
                    <Label htmlFor="aadhaar" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Aadhaar Number
                    </Label>
                    <Input
                      id="aadhaar"
                      type="text"
                      placeholder="Enter 12-digit Aadhaar number"
                      maxLength={12}
                      value={formData.aadhaar}
                      onChange={(e) => handleInputChange('aadhaar', e.target.value)}
                      className="text-center tracking-wider"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="otp" className="flex items-center gap-2">
                      <KeyRound className="h-4 w-4" />
                      OTP
                    </Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                      value={formData.otp}
                      onChange={(e) => handleInputChange('otp', e.target.value)}
                      className="text-center tracking-wider"
                    />
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                      Resend OTP
                    </Button>
                  </div>
                </>
              ) : (
                // Sign Up Form
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter 10-digit phone number"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-aadhaar" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Aadhaar Number
                    </Label>
                    <Input
                      id="signup-aadhaar"
                      type="text"
                      placeholder="Enter 12-digit Aadhaar number"
                      maxLength={12}
                      value={formData.aadhaar}
                      onChange={(e) => handleInputChange('aadhaar', e.target.value)}
                      className="text-center tracking-wider"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center gap-2">
                      <KeyRound className="h-4 w-4" />
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                  </div>
                </>
              )}

              <Button type="submit" className="w-full">
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <Separator />

            <div className="text-center text-sm">
              {isLogin ? (
                <span>
                  Don't have an account?{' '}
                  <Link to="/auth?mode=signup" className="text-primary hover:underline">
                    Sign up here
                  </Link>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <Link to="/auth?mode=login" className="text-primary hover:underline">
                    Sign in here
                  </Link>
                </span>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="rounded-lg bg-muted/50 p-4 text-center text-xs text-muted-foreground">
          <Shield className="mx-auto mb-2 h-4 w-4" />
          Your Aadhaar information is secure and encrypted. We follow government data protection guidelines.
        </div>
      </div>
    </div>
  );
}