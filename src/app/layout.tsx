import type { Metadata } from "next";
import { DM_Sans, Marcellus, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ReduxProvider from "@/components/ReduxProvider";

const dmSans = DM_Sans({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-dm-sans',
});

const marcellus = Marcellus({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: '--font-marcellus',
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "latin-ext"],
  variable: '--font-dancing',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackstarbeautyy.com"),
  title: "Blackstar Beauty Center | Profesyonel Güzellik ve Cilt Bakımı",
  description: "Blackstar Beauty Center'da lazer epilasyon, hydrafacial, cilt bakımı ve kalıcı makyaj hizmetlerini modern, hijyenik ve şık bir merkez deneyimiyle keşfedin.",
  keywords: [
    "blackstar beauty center",
    "blackstar beauty",
    "güzellik merkezi",
    "cilt bakımı",
    "lazer epilasyon",
    "hydrafacial",
    "kalıcı makyaj",
    "istanbul güzellik merkezi",
    "esenler güzellik merkezi",
    "profesyonel cilt bakımı",
    "premium güzellik merkezi",
    "lazer epilasyon istanbul",
    "bakım merkezi istanbul"
  ].join(", "),
  authors: [{ name: "Blackstar Beauty Center" }],
  creator: "Blackstar Beauty Center",
  publisher: "Blackstar Beauty Center",
  robots: "index, follow",
  alternates: {
    canonical: "https://blackstarbeautyy.com"
  },
  category: "beauty",
  classification: "Business",
  other: {
    "geo.region": "TR-34",
    "geo.placename": "İstanbul",
    "geo.position": "41.0082;28.9784",
    "ICBM": "41.0082, 28.9784"
  },
  icons: {
    icon: [
      { url: '/browser_icon.png', sizes: '16x16', type: 'image/png' },
      { url: '/browser_icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/browser_icon.png', sizes: '48x48', type: 'image/png' },
      { url: '/browser_icon.png', sizes: '96x96', type: 'image/png' },
      { url: '/browser_icon.png', sizes: '128x128', type: 'image/png' },
      { url: '/browser_icon.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/browser_icon.png',
    apple: [
      { url: '/browser_icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/browser_icon.png' },
    ],
  },
  openGraph: {
    title: "Blackstar Beauty Center | Güzelliğin Işıltısı Seninle",
    description: "Lazer epilasyon, hydrafacial, cilt bakımı ve kalıcı makyaj için modern güzellik merkezi deneyimi.",
    type: "website",
    locale: "tr_TR",
    siteName: "Blackstar Beauty Center",
    url: "https://blackstarbeautyy.com",
    images: [
      {
        url: '/blackstar-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Blackstar Beauty Center'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackstar Beauty Center",
    description: "Profesyonel güzellik ve cilt bakımı hizmetleri.",
    images: ['/blackstar-logo.svg']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMRRXTMT');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C0CDXP5F4H"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C0CDXP5F4H');
              gtag('config', 'AW-16813075076');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
      </head>
      <body className={`${dmSans.variable} ${marcellus.variable} ${dancingScript.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMRRXTMT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ReduxProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </ReduxProvider>
      </body>
    </html>
  );
}

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  // Admin sayfalarında Header, Footer ve FloatingContact gösterme
  // Bu kontrol client-side'da yapılacak
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingContact />
    </>
  );
}
