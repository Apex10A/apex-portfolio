import React from 'react';
import "@/app/index.css"
import { Suspense } from 'react'


const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex items-center justify-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold text-center">Coming Soon!</h1>
    </div>
         </Suspense>
  );
};

export default Page;
