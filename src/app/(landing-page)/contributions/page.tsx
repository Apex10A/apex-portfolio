// "use client"
// import React, { useState, useEffect } from 'react';
// import { 
//   Calendar, 
//   Flame, 
//   GitBranch, 
//   Star, 
//   Code, 
//   CheckCircle2, 
//   BarChart3,
//   Loader2
// } from 'lucide-react';

// interface ContributionData {
//   streak: {
//     currentStreak: number;
//     longestStreak: number;
//     startDate: string;
//     endDate: string;
//   };
//   monthly: Array<{
//     month: string;
//     contributions: number;
//     color: string;
//   }>;
//   details: {
//     totalContributions: number;
//     repositories: number;
//     pullRequests: number;
//     issuesOpened: number;
//   };
// }

// const InteractiveContributionTracker = () => {
//   const [activeView, setActiveView] = useState<'monthly' | 'details'>('monthly');
//   const [contributionData, setContributionData] = useState<ContributionData>({
//     streak: {
//       currentStreak: 0,
//       longestStreak: 0,
//       startDate: '',
//       endDate: ''
//     },
//     monthly: [],
//     details: {
//       totalContributions: 0,
//       repositories: 0,
//       pullRequests: 0,
//       issuesOpened: 0
//     }
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchGitHubContributions = async () => {
//     const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
//     const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

//     if (!username || !token) {
//       setError('GitHub credentials are not configured');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch('https://api.github.com/graphql', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           query: `
//             query($username: String!) {
//               user(login: $username) {
//                 contributionsCollection {
//                   contributionCalendar {
//                     totalContributions
//                     weeks {
//                       contributionDays {
//                         contributionCount
//                         date
//                         weekday
//                       }
//                     }
//                   }
//                   pullRequestContributions {
//                     totalCount
//                   }
//                   repositoryContributions(first: 100) {
//                     totalCount
//                   }
//                   issueContributions {
//                     totalCount
//                   }
//                 }
//                 repositories(first: 100, ownerAffiliations: OWNER) {
//                   totalCount
//                 }
//               }
//             }
//           `,
//           variables: {
//             username
//           }
//         })
//       });

//       const responseBody = await response.json();

//       if (!response.ok) {
//         throw new Error(`GitHub API Error: ${responseBody.message || 'Unknown error'}`);
//       }

//       if (responseBody.errors) {
//         throw new Error(responseBody.errors[0].message);
//       }

//       const userData = responseBody.data.user;
//       const contributions = userData.contributionsCollection;

//       // Process the data
//       const streakData = calculateStreak(contributions.contributionCalendar);
//       const monthlyData = processMonthlyContributions(contributions.contributionCalendar);

//       setContributionData({
//         streak: streakData,
//         monthly: monthlyData,
//         details: {
//           totalContributions: contributions.contributionCalendar.totalContributions,
//           repositories: userData.repositories.totalCount,
//           pullRequests: contributions.pullRequestContributions?.totalCount || 0,
//           issuesOpened: contributions.issueContributions?.totalCount || 0
//         }
//       });

//       setIsLoading(false);
//     } catch (err: any) {
//       console.error('Detailed Error:', err);
//       setError(`Failed to fetch GitHub contributions: ${err.message}`);
//       setIsLoading(false);
//     }
//   };

//   const processMonthlyContributions = (contributionCalendar: any) => {
//     const monthMap: {[key: string]: number} = {};
//     const colorScale = [
//       'bg-green-500', 'bg-green-600', 'bg-green-700', 
//       'bg-green-800', 'bg-green-900'
//     ];

//     contributionCalendar.weeks.forEach((week: any) => {
//       week.contributionDays.forEach((day: any) => {
//         if (day.contributionCount > 0) {
//           const month = new Date(day.date).toLocaleString('default', { month: 'long' });
//           monthMap[month] = (monthMap[month] || 0) + day.contributionCount;
//         }
//       });
//     });

//     return Object.entries(monthMap)
//       .sort((a, b) => ['January', 'February', 'March', 'April', 'May', 'June', 
//                        'July', 'August', 'September', 'October', 'November', 'December']
//         .indexOf(a[0]) - ['January', 'February', 'March', 'April', 'May', 'June', 
//                           'July', 'August', 'September', 'October', 'November', 'December']
//         .indexOf(b[0]))
//       .map((entry, index) => ({
//         month: entry[0],
//         contributions: entry[1],
//         color: colorScale[Math.min(index, colorScale.length - 1)]
//       }));
//   };

//   const calculateStreak = (contributionCalendar: any) => {
//     const allDays = contributionCalendar.weeks.flatMap((week: any) => week.contributionDays);
//     const sortedDays = [...allDays].sort((a: any, b: any) => 
//       new Date(a.date).getTime() - new Date(b.date).getTime());

//     let currentStreak = 0;
//     let longestStreak = 0;
//     let tempStreak = 0;
//     let startDate = '';
//     let endDate = '';
//     let currentStartDate = '';

//     // Calculate longest streak
//     sortedDays.forEach((day: any) => {
//       if (day.contributionCount > 0) {
//         tempStreak++;
//         if (tempStreak === 1) currentStartDate = day.date;
//         endDate = day.date;
        
//         if (tempStreak > longestStreak) {
//           longestStreak = tempStreak;
//           startDate = currentStartDate;
//         }
//       } else {
//         tempStreak = 0;
//       }
//     });

//     // Calculate current streak (most recent consecutive days)
//     tempStreak = 0;
//     currentStartDate = '';
//     const today = new Date();
//     const reversedDays = [...allDays].reverse();

//     for (const day of reversedDays) {
//       const dayDate = new Date(day.date);
//       if (dayDate > today) continue;
      
//       if (day.contributionCount > 0) {
//         tempStreak++;
//         if (tempStreak === 1) currentStartDate = day.date;
//         endDate = day.date;
//       } else {
//         break;
//       }
//     }

//     currentStreak = tempStreak;

//     return {
//       currentStreak,
//       longestStreak,
//       startDate: startDate || currentStartDate,
//       endDate: endDate || currentStartDate
//     };
//   };

//   useEffect(() => {
//     fetchGitHubContributions();
//   }, []);

//   const renderMonthlyView = () => (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {contributionData.monthly.map((monthData, index) => (
//         <div 
//           key={index} 
//           className={`${monthData.color} p-4 rounded-lg shadow-md transform transition hover:scale-105 flex flex-col items-start`}
//         >
//           <h4 className="text-base sm:text-lg font-semibold mb-2 truncate w-full">{monthData.month}</h4>
//           <div className="flex items-center gap-2 w-full">
//             <CheckCircle2 className="text-white shrink-0" />
//             <div className="flex flex-col">
//               <span className="text-2xl sm:text-3xl font-bold">{monthData.contributions}</span>
//               <span className="text-xs sm:text-sm">Contributions</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   const renderDetailsView = () => (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//       <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
//         <GitBranch className="text-yellow-400 shrink-0" size={32}  />
//         <div>
//           <h4 className="text-lg sm:text-xl font-semibold">Repositories</h4>
//           <p className="text-2xl sm:text-3xl font-bold text-yellow-400">
//             {contributionData.details.repositories}
//           </p>
//         </div>
//       </div>
//       <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
//         <Code className="text-blue-400 shrink-0" size={32}  />
//         <div>
//           <h4 className="text-lg sm:text-xl font-semibold">Pull Requests</h4>
//           <p className="text-2xl sm:text-3xl font-bold text-blue-400">
//             {contributionData.details.pullRequests}
//           </p>
//         </div>
//       </div>
//       <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
//         <Star className="text-purple-400 shrink-0" size={32}  />
//         <div>
//           <h4 className="text-lg sm:text-xl font-semibold">Total Contributions</h4>
//           <p className="text-2xl sm:text-3xl font-bold text-purple-400">
//             {contributionData.details.totalContributions}
//           </p>
//         </div>
//       </div>
//       <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
//         <BarChart3 className="text-green-400 shrink-0" size={32} />
//         <div>
//           <h4 className="text-lg sm:text-xl font-semibold">Issues Opened</h4>
//           <p className="text-2xl sm:text-3xl font-bold text-green-400">
//             {contributionData.details.issuesOpened}
//           </p>
//         </div>
//       </div>
//     </div>
//   );

//   if (isLoading) {
//     return (
//       <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white flex items-center justify-center p-4">
//         <div className="flex flex-col items-center gap-4 text-center">
//           <Loader2 className="animate-spin h-8 w-8" />
//           <p className="text-sm sm:text-base">Loading GitHub contributions...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white flex items-center justify-center p-4">
//         <div className="text-center p-6 bg-gray-800 rounded-lg max-w-md w-full">
//           <p className="text-red-500 mb-4 text-sm sm:text-base">{error}</p>
//           {/* <p className="text-xs sm:text-sm text-gray-400">
//             Please check your GitHub credentials and try again.
//           </p> */}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-b from-gray-900 min-h-screen to-black text-white p-4 md:p-8">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8 container pt-16 md:pt-16 lg:pt-24 gap-4 max-w-6xl mx-auto">
//         <h2 className="text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-3 mb-4 md:mb-0">
//           <Flame className="text-yellow-400 shrink-0" />
//           GitHub Contribution Insights
//         </h2>
//         <div className="flex gap-2 flex-wrap justify-center">
//           <button 
//             onClick={() => setActiveView('monthly')}
//             className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition text-sm sm:text-base ${
//               activeView === 'monthly' 
//                 ? 'bg-yellow-400 text-black' 
//                 : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400/20'
//             }`}
//           >
//             Monthly View
//           </button>
//           <button 
//             onClick={() => setActiveView('details')}
//             className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition text-sm sm:text-base ${
//               activeView === 'details' 
//                 ? 'bg-yellow-400 text-black' 
//                 : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400/20'
//             }`}
//           >
//             Detailed Stats
//           </button>
//         </div>
//       </div>

//       <div className="mb-8 bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
//         <div className="flex items-center gap-4 text-center sm:text-left w-full">
//           <Calendar className="text-blue-400 shrink-0" size={32}  />
//           <div>
//             <h3 className="text-lg sm:text-xl font-semibold">Current Contribution Streak</h3>
//             <p className="text-xl sm:text-2xl font-bold text-blue-300">
//               {contributionData.streak.currentStreak} days
//             </p>
//             {contributionData.streak.startDate && (
//               <p className="text-xs sm:text-sm text-gray-400">
//                 From {new Date(contributionData.streak.startDate).toLocaleDateString()} 
//                 {' '}to {new Date(contributionData.streak.endDate).toLocaleDateString()}
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="text-center sm:text-right w-full sm:w-auto mt-4 sm:mt-0">
//           <h4 className="text-base sm:text-lg font-semibold text-green-400">Longest Streak</h4>
//           <p className="text-xl sm:text-2xl font-bold">{contributionData.streak.longestStreak} days</p>
//         </div>
//       </div>

//       <div className='max-w-6xl mx-auto'>
//         {activeView === 'monthly' ? renderMonthlyView() : renderDetailsView()}
//       </div>

//       <div className="mt-8 bg-gray-800 rounded-lg p-4 text-center max-w-6xl mx-auto">
//         <p className="text-xs sm:text-sm text-gray-300">
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
