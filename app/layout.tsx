import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/public/styles/globals.scss";
import ReduxProvider from "@/libs/Provider";

const vazirFont = localFont({
  src: [
    {
      path: '../public/fonts/vazir/Vazirmatn-ExtraBold.ttf',
      weight: '900'
    },
    {
      path: '../public/fonts/vazir/Vazirmatn-Bold.ttf',
      weight: '800'
    },
    {
      path: '../public/fonts/vazir/Vazirmatn-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/vazir/Vazirmatn-SemiBold.ttf',
      weight: '600'
    },
    {
      path: '../public/fonts/vazir/Vazirmatn-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/vazir/Vazirmatn-Medium.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/vazir/Vazirmatn-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/vazir/Vazirmatn-ExtraLight.ttf',
      weight: '200'
    },
    {
      path: '../public/fonts/vazir/Vazirmatn-Thin.ttf',
      weight: '100'
    }
  ]
})

const iranYekan = localFont({
  src: "../public/fonts/iranYekan/IRANYekanXVFaNumVF.woff",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: 'next-redux',
    template: 'next-redux | %s'
  },
  description: "next-redux",
  keywords: ['panel', 'next-redux'],
  authors: [
    {
      name: 'Arash Altafi',
    }
  ],
  icons: {
    icon: "/images/logo.png",
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f8f8' },
    { media: '(prefers-color-scheme: dark)', color: '#f8f8f8' },
  ],
  appleWebApp: {
    title: 'next-redux',
    capable: true,
    statusBarStyle: 'default',
  },
  twitter: {
    title: 'next-redux',
    description: "next-redux"
  },
  other: {
    "msapplication-TileColor": "#f8f8f8",
    "msapplication-TileImage": "/images/logo.png",
    "theme-color": "#f8f8f8",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Coffee Shop",
    "google": "notranslate",
    "charset": "UTF-8"
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vazirFont.className} ${iranYekan.className} overflow-x-hidden`}
      >
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
