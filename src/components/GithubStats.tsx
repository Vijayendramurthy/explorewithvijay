"use client";
import { useState } from "react";
import { Card } from "./Card";
import GitHubCalendar from "react-github-calendar";
import StarIcon from '../../public/assets/icons/star.svg';

const GitHubContributions = ({ username }: { username: string }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const currentYear = new Date().getFullYear();

  // Years that can be selected for the calendar
  const years = [];
  for (let year = currentYear; year >= currentYear - 2; year--) {
    years.push(year);
  }

  // Custom theme for the calendar
  const theme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
  };

  return (
    <Card className="p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden w-full">
      <div className="flex flex-col">
        <div className="flex flex-col mb-5">
          <div className="inline-flex items-center gap-3">
            <StarIcon className="size-9 text-emerald-300" />
            <div>
              <h3 className="font-serif text-3xl font-medium bg-white/80 bg-clip-text text-transparent">
                GitHub Stats
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* Year Selection */}
        <div className="flex justify-start gap-3">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-2 py-1 text-xs rounded ${selectedYear === year
                ? 'bg-emerald-700 text-white'
                : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                } transition-colors`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* GitHub Calendar with completely hidden scrollbar */}
        <div className="relative">
          <style jsx global>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .calendar-container::-webkit-scrollbar,
            .calendar-container *::-webkit-scrollbar {
              display: none;
              width: 0;
              height: 0;
            }
            
            /* Hide scrollbar for IE, Edge and Firefox */
            .calendar-container,
            .calendar-container * {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
              overflow: -moz-scrollbars-none;
            }
            
            /* Additional fixes for specific elements */
            .react-github-calendar,
            .react-github-calendar > div {
              overflow: hidden !important;
            }
          `}</style>
          
          <div className="calendar-container overflow-hidden rounded-lg p-2">
            <GitHubCalendar
              username={username}
              year={selectedYear}
              colorScheme="dark"
              blockSize={14}
              blockMargin={3}
              fontSize={15}
              hideColorLegend
              style={{ 
                margin: 0, 
                overflowX: 'hidden', 
                overflowY: 'hidden'
              }}
              theme={theme}
                />
              </div>
              <div className="calendar-container">
            
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GitHubContributions;