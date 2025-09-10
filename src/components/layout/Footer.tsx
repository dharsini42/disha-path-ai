import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

  return (
    <footer className="ml-64 border-t bg-muted/30 py-8">
      <div className="px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <p>support@disha.gov.in</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <p>1800-111-363</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <p>New Delhi, India</p>
              </div>
              <p className="text-xs">Help Desk: Mon-Fri, 9 AM - 6 PM</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Help Center</a>
            </div>
          </div>

          {/* Government Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Government Portal</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Ministry of Skill Development</p>
              <p>& Entrepreneurship</p>
              <p>Government of India</p>
              <div className="pt-2">
                <img src="/placeholder.svg" alt="Government of India Logo" className="h-12 w-auto" />
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Follow Us</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline" 
                    size="sm"
                    className="p-2 h-9 w-9"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              Stay connected for latest updates and opportunities
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left text-sm text-muted-foreground">
              <p>© 2024 DISHA - AI Automation Engine. All rights reserved.</p>
              <p>Developed for PM Recommendation Scheme | Government of India</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/placeholder.svg" alt="Digital India" className="h-8 w-auto" />
              <img src="/placeholder.svg" alt="Make in India" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}