import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { images, integrations, practice, seo } from "@/content/site";
import { ConsentManager } from "@/components/ConsentManager";
import { AnalyticsListener } from "@/components/AnalyticsListener";

// Free geometric stand-in for the brand's licensed Euclid Circular A (see docs/brand/BRAND.md).
const brandFont = DM_Sans({
  variable: "--font-brand",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = integrations.siteUrl;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  applicationName: practice.name,
  ...(siteUrl && {
    metadataBase: new URL(siteUrl),
    alternates: { canonical: "/" },
  }),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: practice.name,
    title: seo.title,
    description: seo.description,
    ...(siteUrl && {
      url: "/",
      images: [
        {
          url: new URL(images.hero.src, siteUrl).href,
          width: images.hero.width,
          height: images.hero.height,
          alt: images.hero.alt,
        },
      ],
    }),
  },
  twitter: {
    card: siteUrl ? "summary_large_image" : "summary",
    title: seo.title,
    description: seo.description,
  },
  formatDetection: { telephone: false },
  ...(integrations.noindex && { robots: { index: false, follow: false } }),
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${brandFont.variable} antialiased`}>
      <body className="min-h-dvh">
        {children}
        <AnalyticsListener />
        <ConsentManager />
      </body>
    </html>
  );
}
