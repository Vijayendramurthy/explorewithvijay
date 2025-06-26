"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from 'framer-motion';
import StarIcon from '../../public/assets/icons/star.svg';

// Define the hobby type
interface Hobby {
  title: string;
  emoji: string;
  desktopPosition: { left: string; top: string };
  tabletPosition: { left: string; top: string };
  mobilePosition: { left: string; top: string };
}

// Updated hobbies array with positions for different screen sizes
const hobbies: Hobby[] = [
  {
    title: "Exploring technews",
    emoji: "💻",
    desktopPosition: { left: "60%", top: "35%" },
    tabletPosition: { left: "55%", top: "45%" },
    mobilePosition: { left: "50%", top: "40%" }
  },
  {
    title: "Cartoons",
    emoji: "📺",
    desktopPosition: { left: "70%", top: "75%" },
    tabletPosition: { left: "65%", top: "70%" },
    mobilePosition: { left: "60%", top: "5%" }
  },
  {
    title: "Music",
    emoji: "🎵",
    desktopPosition: { left: "10%", top: "30%" },
    tabletPosition: { left: "15%", top: "45%" },
    mobilePosition: { left: "-5%", top: "10%" }
  },
  {
    title: "Gaming",
    emoji: "🎮",
    desktopPosition: { left: "35%", top: "10%" },
    tabletPosition: { left: "30%", top: "35%" },
    mobilePosition: { left: "5%", top: "45%" }
  },
  {
    title: "Sports",  
    emoji: "🏏",
    desktopPosition: { left: "0%", top: "70%" },
    tabletPosition: { left: "10%", top: "70%" },
    mobilePosition: { left: "60%", top: "90%" }
  },
  {
    title: "Art & Design",
    emoji: "🎨",
    desktopPosition: { left: "30%", top: "65%" },
    tabletPosition: { left: "40%", top: "65%" },
    mobilePosition: { left: "0%", top: "90%" }
  },
];

export const HobbiesCard = () => {
  const constraintsRef = useRef(null);
  const [screenSize, setScreenSize] = useState('desktop');

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // Set initial screen size
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Get position based on screen size
  const getPosition = (hobby: Hobby) => {
    switch (screenSize) {
      case 'mobile':
        return hobby.mobilePosition;
      case 'tablet':
        return hobby.tabletPosition;
      default:
        return hobby.desktopPosition;
    }
  };

  return (
    <div className="h-full p-0 flex flex-col">
      <div className="px-6 py-6 h-full">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2">
            <StarIcon className="size-9 text-emerald-300" />
            <h3 className="font-serif text-3xl">Beyond the code</h3>
          </div>
          <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
            Explore my interests and hobbies beyond the digital realm.
          </p>
        </div>
        <div className="relative h-[calc(100%-80px)]" ref={constraintsRef}>
          {hobbies.map((hobby) => {
            const position = getPosition(hobby);
            
            return (
              <motion.div
                key={hobby.title}
                className="inline-flex items-center gap-2 px-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                style={{ 
                  left: position.left, 
                  top: position.top,
                  zIndex: 10
                }}
                drag
                dragConstraints={constraintsRef}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{hobby.emoji}</span>
                <span className="font-medium text-gray-950 text-sm sm:text-base">{hobby.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};