import { Home, User, Briefcase, Brain, Settings, LogOut } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navItems = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Profile', url: '/profile', icon: User },
  { title: 'Internships', url: '/internships', icon: Briefcase },
  { title: 'AI Matching', url: '/matching', icon: Brain },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar shadow-medium lg:block hidden">
      <div className="flex h-full flex-col">
        {/* Logo Section */}
        <div className="flex items-center justify-center border-b border-sidebar-border p-6">
          <div className="text-center">
            <h1 className="text-xl font-bold text-sidebar-foreground">DISHA</h1>
            <p className="text-xs text-sidebar-foreground/80">AI Automation Engine</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.title}
                to={item.url}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(item.url)
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-soft'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </NavLink>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="border-t border-sidebar-border p-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}