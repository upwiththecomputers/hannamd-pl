import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/ui/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import { type SanityDocument } from "next-sanity";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { client } from "@/sanity/client";
import "../globals.css";

const inter = localFont({
  src: [
    { path: "../../fonts/inter-latin-standard-normal.woff2", weight: "100 900" },
    { path: "../../fonts/inter-latin-ext-standard-normal.woff2", weight: "100 900" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const lora = localFont({
  src: [
    { path: "../../fonts/lora-latin-wght-normal.woff2", style: "normal", weight: "400 700" },
    { path: "../../fonts/lora-latin-ext-wght-normal.woff2", style: "normal", weight: "400 700" },
    { path: "../../fonts/lora-latin-wght-italic.woff2", style: "italic", weight: "400 700" },
    { path: "../../fonts/lora-latin-ext-wght-italic.woff2", style: "italic", weight: "400 700" },
  ],
  variable: "--font-heading",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const rakkas = localFont({
  src: [
    { path: "../../fonts/rakkas-latin-400-normal.woff2", weight: "400" },
    { path: "../../fonts/rakkas-latin-ext-400-normal.woff2", weight: "400" },
  ],
  variable: "--font-rakkas",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const POST_QUERY = `*[_type == "post" && slug.current == "welcome"][0] {
  title, body, poster
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isPl = locale === "pl";

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    {},
    { next: { revalidate: 30 } },
  );
  const ogImageUrl = post?.poster
    ? urlFor(post.poster)?.width(1200).height(630).url()
    : undefined;

  const title = isPl
    ? "Hanna Mikulska-Delgaldo | Kupiec obuwia"
    : "Hanna Mikulska-Delgaldo | Footwear Buyer";
  const description = isPl
    ? "Ekspert branży fashion z 5-letnim doświadczeniem jako kupiec obuwia."
    : "Fashion industry expert with 5 years of experience as a professional footwear buyer.";

  return {
    title,
    description,
    alternates: {
      canonical: isPl ? "/" : "/en",
      languages: {
        pl: "/",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: isPl ? "pl_PL" : "en_GB",
      url: isPl ? "https://hannamd.pl/" : "https://hannamd.pl/en",
      siteName: "Hanna Mikulska-Delgaldo",
      title,
      description,
      images: ogImageUrl
        ? [{ url: ogImageUrl, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`h-full antialiased ${inter.variable} ${lora.variable} ${rakkas.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:rounded focus:ring-2 focus:ring-ring"
            >
              {locale === "pl"
                ? "Przejdź do treści głównej"
                : "Skip to main content"}
            </a>
            <Header />
            <main id="main-content">{children}</main>
            <SpeedInsights />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
