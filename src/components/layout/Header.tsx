import { Button } from '@/components/ui/button';
import { LogOut, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/ui/mobile-nav';

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-6 shadow-soft lg:ml-64">
      <div className="flex items-center gap-4">
        {/* Mobile Navigation */}
        <MobileNav />
        
        {/* Logo - hidden on mobile when sidebar is visible */}
        <div className="flex items-center space-x-3 lg:hidden">
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center shadow-medium">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">DISHA</h1>
            <p className="text-xs text-muted-foreground">AI Automation Engine</p>
          </div>
        </div>

        {/* Desktop Logo */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center shadow-medium">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">DISHA</h1>
            <p className="text-xs text-muted-foreground">AI Automation Engine</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-orange">
              3
            </Badge>
          </Button>
        </div>
        
        <Button variant="outline" size="sm" className="gap-2 hover:bg-destructive hover:text-destructive-foreground">
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  );
}