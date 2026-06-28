import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Blackstar Beauty Center',
  description: 'Blackstar Beauty Center ayrıcalığıyla sunulan lazer epilasyon, cilt bakımı, leke bakımı, hydrafacial, kalıcı makyaj ve diğer profesyonel bakım hizmetlerimizi inceleyin.',
  alternates: {
    canonical: 'https://blackstarbeautyy.com/hizmetlerimiz',
  },
  openGraph: {
    title: 'Hizmetlerimiz | Blackstar Beauty Center',
    description: 'Blackstar Beauty Center ayrıcalığıyla sunulan profesyonel cilt bakımı, epilasyon, kalıcı makyaj ve tüm hizmetlerimiz.',
    url: 'https://blackstarbeautyy.com/hizmetlerimiz',
    type: 'website',
  },
};

export default function HizmetlerimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
