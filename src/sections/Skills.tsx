"use client";
import { useRef, useState } from "react";
import { Sectionheader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '../../public/assets/icons/star.svg';
import Image from "next/image";
import mapImage from '../../public/assets/map1.png';
import smileMemoji from '../../public/assets/images/memoji-smile.png';
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import GitHubStats from "@/components/GithubStats";
import HtmlIcon from '../../public/assets/icons/icons8-html (1).svg';
import CssIcon from '../../public/assets/icons/icons8-css.svg';
import JavascriptIcon from '../../public/assets/icons/icons8-js.svg';
import phpIcon from '../../public/assets/icons/php.svg';
import mysqlIcon from '../../public/assets/icons/mysql-logo.svg';
import ReactIcon from '../../public/assets/icons/react.svg';
import expressIcon from '../../public/assets/icons/icons8-express-js.svg';
import nodeIcon from '../../public/assets/icons/icons8-node-js.svg';
import mongodbIcon from '../../public/assets/icons/mongodb.svg';
import nextjsIcon from '../../public/assets/icons/nextjs-icon.svg';
import vueIcon from '../../public/assets/icons/vue-svgrepo-com.svg';
import angularIcon from '../../public/assets/icons/angular-svgrepo-com.svg';
import reactnativeIcon from '../../public/assets/icons/icons8-react-native.svg';
import expoIcon from '../../public/assets/expo-go-app.svg';
import firebaseIcon from '../../public/assets/icons/firebase.svg';
import supabaseIcon from '../../public/assets/icons/icons8-supabase (1).svg';
import typescriptIcon from '../../public/assets/icons/TypeScript.svg';
import threeIcon from '../../public/assets/icons/Three.js.svg';
import postmanIcon from '../../public/assets/icons/postman-icon.svg';
import postgressIcon from '../../public/assets/icons/icons8-postgresql.svg';
import figmaIcon from '../../public/assets/figma.svg';
import bootstrapIcon from '../../public/assets/icons/icons8-bootstrap.svg';
import framerIcon from '../../public/assets/icons/framer-motion.svg';
import pythonIcon from '../../public/assets/icons/icons8-python.svg';
import javaIcon from '../../public/assets/icons/icons8-java.svg';
import fastapiIcon from '../../public/assets/icons/FastAPI.svg';
import flaskIcon from '../../public/assets/icons/Flask.svg';
import tailwindIcon from '../../public/assets/icons/icons8-tailwindcss.svg';
import { TechIcon } from "@/components/TechIcon";




const toolboxItems = [
    {
        title: "HTML",
        iconType: HtmlIcon,
    },
    {
        title: "CSS",
        iconType: CssIcon,
    },
    {
        title: "JavaScript",
        iconType: JavascriptIcon,
    },
    {
        title: "PHP",
        iconType: phpIcon,
    },
    {
        title: "MySQL",
        iconType: mysqlIcon,
    },
    {
        title: "React.js",
        iconType: ReactIcon,
    },
    {
        title: "Express.js",
        iconType: expressIcon,
    },
    {
        title: "Node.js",
        iconType: nodeIcon,
    },
    {
        title: "MongoDB",
        iconType: mongodbIcon,
    },
    {
        title: "Next.js",
        iconType: nextjsIcon,
    },
    {
        title: "Tailwind CSS",
        iconType: tailwindIcon,
    },
    {
        title: "vue.js",
        iconType: vueIcon,
    },
    {
        title: "Angular",
        iconType: angularIcon,
    },
    {
        title: "React Native CLI",
        iconType: reactnativeIcon,
    },
    {
        title: "React Native Expo",
        iconType: expoIcon,
    },
    {
        title: "Firebase",
        iconType: firebaseIcon,
    },
    {
        title: "Supabase",
        iconType: supabaseIcon,
    },
    {
        title: "Typescript",
        iconType: typescriptIcon,
    },
    {
        title: "Three.js",
        iconType: threeIcon,
    },
    {
        title: "postman",
        iconType: postmanIcon,
    },
    {
        title: "postgresql",
        iconType: postgressIcon,
    },
    {
        title: "Figma",
        iconType: figmaIcon,
    },
    {
        title: "bootstrap",
        iconType: bootstrapIcon,
    },
    {
        title: "Framer Motion",
        iconType: framerIcon,
    },
    {
        title: "python",
        iconType: pythonIcon,
    },
    {
        title: "Java",
        iconType: javaIcon,
    },
    {
        title: "FastAPI",
        iconType: fastapiIcon,
    },
    {
        title: "Flask",
        iconType: flaskIcon,
    },

];

export const Skills = () => {
    return (
        <div className="lg:py-4  lg:mb-20 sm:mb-6">
            <div className="container">
                <div className="container">
                    <div className="flex justify-center mt-32">
                        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
                            My Skill Set
                        </p>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">My Core Competencies</h2>
                    <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 mx-auto max-w-2xl mb-24">
                        A reflection of my abilities, continuously refined through learning and experience to deliver impactful results.
                    </p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-5">
                        <div className="h-[240px] md:col-span-5 lg:col-span-5 border border-white/40 overflow-hidden rounded-3xl sm:width-1">
                            <ToolboxItems toolboxItems={toolboxItems} className="mt-12" itemsWrapperClassName="animate-move-left [animation-duration:40s]" />
                            <ToolboxItems toolboxItems={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:40s]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};