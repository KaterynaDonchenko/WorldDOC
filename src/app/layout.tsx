import type { Metadata } from "next";
import { Toaster } from 'sonner'

import SiteLayout from "@/components/site-layout/SiteLayout";
import { SITE_NAME } from "@/constants/seo.constants";
import { Inter } from "next/font/google";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: "Best one for finding your doctor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteLayout>
          {children}

          <Toaster
            theme="dark"
            position="bottom-right"
            duration={1500}
          />
        </SiteLayout>
      </body>
    </html>
  );
}
