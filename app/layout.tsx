import type { Metadata } from 'next';
import { Inter, Geist, JetBrains_Mono, Outfit, Lora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
});

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://siddharth-shringi.vercel.app'
      : 'http://localhost:3000'
  ),
  title: 'Siddharth Shringi',
  description: "Siddharth Shringi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lora.variable} ${outfit.variable} ${jetBrainsMono.variable} ${geist.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-[url('/fabric.svg')] dark:bg-[url('/noise.svg')] opacity-15 dark:opacity-12.5 fixed overflow-auto inset-0 pointer-events-none z-1000"></div>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 overflow-hidden">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
