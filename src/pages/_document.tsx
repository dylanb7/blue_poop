import { type Viewport, type Metadata } from "next";
import { Head, Html, Main, NextScript } from "next/document";

export const siteDetails = {
  name: "Blue Poop Info",
  description:
    "Home base for the blue poop project. This is an effort to make bowel movement transit time assessment a non invasive at home measure.",
  url: "https://bluepoop.info",
  authorName: "Dylan Baker",
  authorURL: "https://dylanbaker.netlify.app",
  keywords: ["Blue Poop", "Poop", "Transit Time", "Research", "GI"],
};

export const metadata: Metadata = {
  title: {
    default: siteDetails.name,
    template: `%s - ${siteDetails.name}`,
  },
  metadataBase: new URL(siteDetails.url),
  description: siteDetails.description,
  keywords: siteDetails.keywords,
  authors: [
    {
      name: siteDetails.authorName,
      url: siteDetails.authorURL,
    },
  ],
  creator: siteDetails.authorName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteDetails.url,
    title: siteDetails.name,
    description: siteDetails.description,
    siteName: siteDetails.name,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <Main />
      <body className="bg-background font-sans antialiased">
        <div vaul-drawer-wrapper="">
          <div className="relative flex flex-col bg-background">{children}</div>
        </div>
      </body>
      <NextScript />
    </Html>
  );
}
