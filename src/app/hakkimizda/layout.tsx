import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Blackstar Beauty Center',
  description: 'Blackstar Beauty Center hikayesi, misyonumuz, vizyonumuz ve zarafet felsefemiz hakkında bilgi edinin. Güzelliği ve bakımı uzman kadromuz ve en son teknoloji cihazlarımızla sunuyoruz.',
  alternates: {
    canonical: 'https://www.blackstarbeauty.com/hakkimizda',
  },
  openGraph: {
    title: 'Hakkımızda | Blackstar Beauty Center',
    description: 'Blackstar Beauty Center hikayesi, misyonumuz, vizyonumuz ve zarafet felsefemiz hakkında bilgi edinin.',
    url: 'https://www.blackstarbeauty.com/hakkimizda',
    type: 'website',
  },
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
