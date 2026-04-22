import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ui/ThemeProvider";
import CustomCursor from "../components/ui/CustomCursor";
import ScrollProgress from "../components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Owais Khan | Full Stack Web Developer — PHP, Laravel, MySQL",
  description:
    "Owais Khan is a Full Stack Web Developer based in Karachi, Pakistan, specializing in PHP, Laravel, MySQL, and modern frontend technologies.",
  keywords: [
    "Owais Khan",
    "Full Stack Developer",
    "PHP Developer",
    "Laravel Expert",
    "MySQL",
    "Web Developer Pakistan",
  ],
  authors: [{ name: "Owais Khan", url: "https://www.linkedin.com/in/owaisskhann/" }],
  creator: "Owais Khan",
  metadataBase: new URL("https://owaiskhan.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Owais Khan | Full Stack Web Developer",
    description:
      "Full Stack Developer crafting robust web applications with PHP, Laravel, MySQL, and modern JavaScript.",
    url: "https://owaiskhan.dev",
    siteName: "Owais Khan Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Owais Khan - Full Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owais Khan | Full Stack Web Developer",
    description:
      "Full Stack Developer specializing in PHP, Laravel, MySQL. View my portfolio.",
    creator: "@owaisskhann",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Owais Khan",
              jobTitle: "Full Stack Web Developer",
              url: "https://owaiskhan.dev",
              sameAs: [
                "https://www.linkedin.com/in/owaisskhann/",
                "https://github.com/owaiskhan123455",
                "https://www.instagram.com/uxelio_expert",
              ],
              knowsAbout: [
                "PHP",
                "Laravel",
                "MySQL",
                "JavaScript",
                "React",
                "Next.js",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karachi",
                addressCountry: "Pakistan",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} bg-background text-text-primary antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <CustomCursor />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}