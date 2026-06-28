import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri | Blackstar Beauty Center',
  description: 'Blackstar Beauty Center salonumuzdan kareler, uzman uygulamalarımız ve misafirlerimizin değişim hikayelerini galerimizde inceleyin.',
  alternates: {
    canonical: 'https://blackstarbeautyy.com/galeri',
  },
  openGraph: {
    title: 'Galeri | Blackstar Beauty Center',
    description: 'Blackstar Beauty Center salonumuzdan kareler, uzman uygulamalarımız ve değişim hikayeleri.',
    url: 'https://blackstarbeautyy.com/galeri',
    type: 'website',
  },
};

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
