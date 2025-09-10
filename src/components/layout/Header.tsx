import { Button } from '@/components/ui/button';
import { Bell, LogOut } from 'lucide-react';

export function Header() {
  return (
    <header className="ml-64 flex h-16 items-center justify-between border-b bg-background px-6 shadow-soft">
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded bg-primary"></div>
        <span className="text-lg font-semibold text-foreground">
          Government Internship Portal
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        
        <Button variant="outline" size="sm" className="gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  );
}