import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-background">
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="min-h-[calc(100vh-4rem-120px)] p-2 lg:p-0">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}