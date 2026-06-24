import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Haberler & Blog | Blackstar Beauty Center',
  description: 'Güzellik ipuçları, cilt bakımı trendleri, yeni teknolojiler ve Blackstar Beauty Center’dan en son haberler ve makaleler.',
  alternates: {
    canonical: 'https://www.blackstarbeauty.com/haberler',
  },
  openGraph: {
    title: 'Haberler & Blog | Blackstar Beauty Center',
    description: 'Güzellik ipuçları, cilt bakımı trendleri ve Blackstar Beauty Center’dan en son haberler.',
    url: 'https://www.blackstarbeauty.com/haberler',
    type: 'website',
  },
};

export default function HaberlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
