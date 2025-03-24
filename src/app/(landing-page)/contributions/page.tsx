// "use client"
// import React, { useState } from 'react';
// import { 
//   Calendar, 
//   Flame, 
//   GitBranch, 
//   Star, 
//   Code, 
//   CheckCircle2, 
//   BarChart3 
// } from 'lucide-react';

// const InteractiveContributionTracker = () => {
//   const [activeView, setActiveView] = useState('monthly');

//   // Simulated contribution data (you'd replace with real GitHub data)
//   const contributionData = {
//     streak: {
//       currentStreak: 84,
//       longestStreak: 92,
//       startDate: '2025-01-01',
//       endDate: '2025-03-24'
//     },
//     monthly: [
//       { month: 'January', contributions: 127, color: 'bg-green-500' },
//       { month: 'February', contributions: 112, color: 'bg-green-600' },
//       { month: 'March', contributions: 86, color: 'bg-green-700' }
//     ],
//     details: {
//       totalContributions: 491,
//       repositories: 40,
//       pullRequests: 18,
//       issuesOpened: 7
//     }
//   };

//   const renderMonthlyView = () => (
//     <div className="grid md:grid-cols-3 gap-4">
//       {contributionData.monthly.map((monthData, index) => (
//         <div 
//           key={index} 
//           className={`${monthData.color} p-4 rounded-lg shadow-md transform transition hover:scale-105`}
//         >
//           <h4 className="text-lg font-semibold mb-2">{monthData.month}</h4>
//           <div className="flex items-center gap-2">
//             <CheckCircle2 className="text-white" />
//             <span className="text-3xl font-bold">{monthData.contributions}</span>
//             <span className="text-sm">Contributions</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   const renderDetailsView = () => (
//     <div className="grid md:grid-cols-2 gap-4">
//       <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
//         <GitBranch className="text-yellow-400" size={40} />
//         <div>
//           <h4 className="text-xl font-semibold">Repositories</h4>
//           <p className="text-3xl font-bold text-yellow-400">
//             {contributionData.details.repositories}
//           </p>
//         </div>
//       </div>
//       <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
//         <Code className="text-blue-400" size={40} />
//         <div>
//           <h4 className="text-xl font-semibold">Pull Requests</h4>
//           <p className="text-3xl font-bold text-blue-400">
//             {contributionData.details.pullRequests}
//           </p>
//         </div>
//       </div>
//       <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
//         <Star className="text-purple-400" size={40} />
//         <div>
//           <h4 className="text-xl font-semibold">Total Contributions</h4>
//           <p className="text-3xl font-bold text-purple-400">
//             {contributionData.details.totalContributions}
//           </p>
//         </div>
//       </div>
//       <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
//         <BarChart3 className="text-green-400" size={40} />
//         <div>
//           <h4 className="text-xl font-semibold">Issues Opened</h4>
//           <p className="text-3xl font-bold text-green-400">
//             {contributionData.details.issuesOpened}
//           </p>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-gradient-to-b from-gray-900  min-h-screen to-black text-white p-8 rounded-lg ">
//       <div className="flex justify-between items-center mb-8 container  pt-16 lg:pt-24">
//         <h2 className="text-3xl font-bold flex items-center gap-3">
//           <Flame className="text-yellow-400" />
//           GitHub Contribution Insights
//         </h2>
//         <div className="flex gap-2">
//           <button 
//             onClick={() => setActiveView('monthly')}
//             className={`px-4 py-2 rounded-full transition ${
//               activeView === 'monthly' 
//                 ? 'bg-yellow-400 text-black' 
//                 : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400/20'
//             }`}
//           >
//             Monthly View
//           </button>
//           <button 
//             onClick={() => setActiveView('details')}
//             className={`px-4 py-2 rounded-full transition ${
//               activeView === 'details' 
//                 ? 'bg-yellow-400 text-black' 
//                 : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400/20'
//             }`}
//           >
//             Detailed Stats
//           </button>
//         </div>
//       </div>

//       <div className="mb-8 bg-gray-800 rounded-lg p-4 flex justify-between items-center">
//         <div className="flex items-center gap-4">
//           <Calendar className="text-blue-400" size={40} />
//           <div>
//             <h3 className="text-xl font-semibold">Current Contribution Streak</h3>
//             <p className="text-2xl font-bold text-blue-300">
//               {contributionData.streak.currentStreak} days
//             </p>
//             <p className="text-sm text-gray-400">
//               From {contributionData.streak.startDate} to {contributionData.streak.endDate}
//             </p>
//           </div>
//         </div>
//         <div className="text-right">
//           <h4 className="text-lg font-semibold text-green-400">Longest Streak</h4>
//           <p className="text-2xl font-bold">{contributionData.streak.longestStreak} days</p>
//         </div>
//       </div>

//       {activeView === 'monthly' ? renderMonthlyView() : renderDetailsView()}

//       <div className="mt-8 bg-gray-800 rounded-lg p-4 text-center">
//         <p className="text-gray-300">
//           Consistent coding activity demonstrates commitment to continuous learning and improvement.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default InteractiveContributionTracker;

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
