"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "London Weather Prediction App",
    title: "1",
    description:
      "Developed a web application that predicts the average temperature in London based on weather parameters such as cloud cover, sunshine hours, and pressure.",
    stack: [
      { name: "HTML5" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "Flask" },
    ],
    image: "/assets/work/thumb8.png",
    live: "/assets/work/proj8.MOV",
    github: "https://github.com/aroushq1/WeatherApp",
  },
  {
    num: "02",
    category: "Movie Theatre Reservation System",
    title: "2",
    description:
      "Developed a three-tier movie ticket reservation system with features for movie search, seat selection, payments, and ticket cancellations. Includes special privileges for registered users, such as early seat access and fee waivers.",
    stack: [
      { name: "HTML5" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "SpringBoot" },
      { name: "React.js" },
    ],
    image: "/assets/work/thumb1.png",
    live: "/assets/work/proj1.MOV",
    github: "https://github.com/aroushq1/MovieTheatreAcmplex",
  },
  {
    num: "03",
    category: "Rani's Rasoi Website",
    title: "3",
    description:
      "I had the pleasure of designing and developing a website for a local Calgary business during my internship with NEZDEK. I established key design elements that addressed three core areas lacking prior attention: visual appeal, mobile compatibility, and loading efficiency — all improvements leading to higher visitor satisfaction ratings!",
    stack: [
      { name: "HTML5" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "WordPress" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://ranisrasoi.ca/",
    github: "",
  },
  {
    num: "04",
    category: "Java Subway Screen",
    title: "4",
    description:
      "My team and I developed a dynamic subway display screen utilizing Java, showcasing real-time news, weather updates, time, advertisements, and a map. ",
    stack: [{ name: "Java" }, { name: "SQL" }, { name: "Unified Modeling Language" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/aroushq1/SubwayScreen",
  },
  {
    num: "05",
    category: "Flight Management Program",
    title: "5",
    description:
      "Developed a flight management program in C++ to manage flight operations and passenger details. It is an interactive interface used for displaying passenger information, seat maps, and real-time availability. It includes features for adding/removing passengers via a menu system and file handling for data persistence!",
    stack: [{ name: "C++"}],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "https://github.com/aroushq1/FlightManagementProgam",
  },
  {
    num: "06",
    category: "SWRDT Protocol",
    title: "6",
    description:
      "Developed a Stop-and-Wait Reliable Data Transfer (SWRDT) Protocol to transfer data over a channel with packet corruption and loss. Implemented features like acknowledgments (ACKs), retransmissions, timeouts, checksums, and sequence numbers to ensure reliable in-order delivery of data. The protocol sends one segment at a time, waiting for an ACK before transmitting the next segment.",
    stack: [{ name: "Python"}],
    image: "/assets/work/thumb5.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "LED Intensity Controller",
    title: "7",
    description:
      "My team and I developed an LED intensity controller using a PIC24F16KA101 microcontroller (programmed in C) and Python. We enabled brightness adjustment via PWM modulations, controlled LED states with buttons, and ensured efficient UART data transmission for real-time updates, all while focusing on power efficiency and seamless hardware-software interaction.",
    stack: [{ name: "C"}, { name: "Python"}, { name: "PIC24F16KA101 microcontroller"}],
    image: "/assets/work/thumb10.png",
    live: "",
    github: "",
  },
  {
    num: "08",
    category: "Lily Dodger Game & Console",
    title: "8",
    description:
      "My team and I developed Lily Dodger, a game programmed in C where players control a frog to avoid obstacles. We designed and 3D printed a custom video game console, integrating LCD displays and electrical components while also gaining experience in embedded systems, hardware-software integration, and game development.",
    stack: [{ name: "C"}, { name: "Arduino"}],
    image: "/assets/work/thumb6.png",
    live: "/assets/work/proj6.mov",
    github: "",
  },
  {
    num: "09",
    category: "Millarville General Store",
    title: "9",
    description:
      "I had the opportunity to design and develop the first website for Millarville General Store during my internship with NEZDEK. I focused on creating a visually appealing, mobile-compatible site with fast loading times, all of which contributed to a positive user experience and higher visitor satisfaction ratings",
    stack: [{ name: "HTML"}, { name: "CSS"}, { name: "JavaScript"}],
    image: "/assets/work/thumb7.png",
    live: "https://millarvillegeneralstore.com/",
    github: "",
  },
  {
    num: "10",
    category: "Web Proxy Server",
    title: "10",
    description:
      "Developed an HTTP Web Proxy Server in Python with local caching to enhance web traffic efficiency. Implemented support for HTTP 1.0, including handling GET requests, caching, and serving text and binary resources. Added error handling for unsupported requests and invalid server responses.",
    stack: [{ name: "Python"}],
    image: "/assets/work/thumb9.png",
    live: "",
    github: "https://github.com/aroushq1/WPS",
  },

];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
