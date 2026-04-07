import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/ui/header";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isPl = locale === "pl";

  return {
    title: isPl
      ? "Hanna Mikulska-Delgardo | Kupiec obuwia"
      : "Hanna Mikulska-Delgardo | Footwear Buyer",
    description: isPl
      ? "Ekspert branży fashion z 5-letnim doświadczeniem jako kupiec obuwia."
      : "Fashion industry expert with 5 years of experience as a professional footwear buyer.",
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
      siteName: "Hanna Mikulska-Delgardo",
      title: isPl
        ? "Hanna Mikulska-Delgardo | Kupiec obuwia"
        : "Hanna Mikulska-Delgardo | Footwear Buyer",
      description: isPl
        ? "Ekspert branży fashion z 5-letnim doświadczeniem jako kupiec obuwia."
        : "Fashion industry expert with 5 years of experience as a professional footwear buyer.",
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
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
