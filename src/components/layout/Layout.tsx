import { ReactNode } from 'react';
import { ParticleBackground } from '../effects/ParticleBackground';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <main>{children}</main>
    </div>
  );
}