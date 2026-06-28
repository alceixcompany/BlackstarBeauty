import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim & Randevu | Blackstar Beauty Center',
  description: 'Blackstar Beauty Center ile iletişime geçin, adres ve konum bilgilerimizi öğrenin ya da online randevu formu doldurarak hemen randevunuzu planlayın.',
  alternates: {
    canonical: 'https://blackstarbeautyy.com/iletisim',
  },
  openGraph: {
    title: 'İletişim & Randevu | Blackstar Beauty Center',
    description: 'Blackstar Beauty Center ile iletişime geçin, adres ve konum bilgilerimizi öğrenin ya da randevunuzu planlayın.',
    url: 'https://blackstarbeautyy.com/iletisim',
    type: 'website',
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
