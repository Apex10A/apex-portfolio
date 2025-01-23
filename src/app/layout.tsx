import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Navigation from '@/app/components/header/Navigation';
import { LoadingProvider } from '@/components/providers/loading-apinner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
 title: 'Praise Afolabi',
 description: 'Personal portfolio website',
};

const Loading = () => (
 <div className="flex items-center justify-center min-h-screen">
   <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
 </div>
);

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
   <html lang="en">
     <body className={inter.className}>
     <Suspense fallback={<Loading />}>
       <LoadingProvider>
           <Navigation />
           {children}
           </LoadingProvider>
         </Suspense>
     </body>
   </html>
 );
}