"use client"
import Image from 'next/image';
import StarIcon from '../../public/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import GradientText from '@/components/GradientText';
import { Texts } from '@/constants/constants';
import { MorphingText } from '@/components/magicui/morphing-text';

export const HeroSection = () => {
  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Smooth scroll to the contact section
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to open the resume PDF
  const openResume = () => {
    const pdfUrl = '/assets/vijayfinalyearresume.pdf'; // Correct path for public assets
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 mask-image:linear-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: "url('/assets/images/grain.jpg')" }}></div>
        <div className="size-[620px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="size-[820px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="size-[1020px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="size-[1220px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <HeroOrbit size={750} rotation={-72}>
          <StarIcon className="text-emerald-300 size-28" />
        </HeroOrbit>
        <HeroOrbit size={670} rotation={10}>
          <StarIcon className="text-emerald-300/10 size-12" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={84}>
          <StarIcon className="text-emerald-300 size-14" />
        </HeroOrbit>
        <HeroOrbit size={620} rotation={175}>
          <StarIcon className="text-emerald-300 size-16" />
        </HeroOrbit>
        <HeroOrbit size={680} rotation={-145}>
          <StarIcon className="text-emerald-300/10 size-24" />
        </HeroOrbit>
        <HeroOrbit size={730} rotation={-40}>
          <StarIcon className="text-emerald-300/10 size-10" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-15}>
          <StarIcon className="text-emerald-300 size-9" />
        </HeroOrbit>
        <HeroOrbit size={700} rotation={132}>
          <StarIcon className="text-emerald-300/10 size-16" />
        </HeroOrbit>
        <HeroOrbit size={400} rotation={40}>
          <StarIcon className="text-emerald-300/10 size-8" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={140}>
          <StarIcon className="text-emerald-300 size-6" />
        </HeroOrbit>
        <HeroOrbit size={510} rotation={-110}>
          <StarIcon className="text-emerald-300/10 size-8" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src="/assets/images/memoji-computer.png" alt="person peeking from behind the laptop" width={100} height={100} />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="font-serif text-3xl text-center mt-8 tracking-wide"
          >
            Hello, I'm Vijayendra Murthy
          </GradientText>
          <h1 className="font-serif text-3xl text-center mt-4 tracking-wide ">I'm a <MorphingText className="font-serif text-sm mt-4 text-3xl " texts={Texts.filter((text): text is string => text !== undefined)} /></h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">I specialize in transforming designs into functional, high-performing web applications.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            onClick={openResume}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer hover:bg-white/10 transition-colors z-10"
          >
            <span className="font-semibold">View Resume</span>
          </button>

          {/* Using a regular button with onClick handler */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer hover:bg-white/90 transition-colors z-10"
          >
            <span>👋</span>
            <span className="font-semibold">Let's connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
