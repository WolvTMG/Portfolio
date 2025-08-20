"use client";

import { ReactTyped } from "react-typed";
import Marquee from "react-fast-marquee";
import Head from 'next/head';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex items-center h-16 mt-5 justify-between px-4 md:px-10 sticky top-0 z-50 backdrop-blur">
      <h1 className="text-3xl font-bold ml-[26px] lg:ml-[12.6rem] ">WolvTMG</h1> {/* Adjusted left margin */}

      {/* Toggle button for mobile menu */}
      <button
        className="block md:hidden text-white ml-auto" // Added ml-auto to push to right
        onClick={toggleMenu}
      >
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:flex ml-auto mr-[26px] lg:mr-[12.6rem]">
        <ul className="flex space-x-8 text-white">
          <li><a href="#languages">Languages</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#pastWork">Past Work</a></li>
          <li><a href="#contacts">Contact Me</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-16 right-0 w-full md:hidden">
          <ul className="flex flex-col space-y-4 p-4 text-white text-right">
            <li><a href="#languages" onClick={toggleMenu}>Languages</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#pastWork" onClick={toggleMenu}>Past Work</a></li>
            <li><a href="#contacts" onClick={toggleMenu}>Contact Me</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

const TypeScript = () => <div><img src="/images/typescript.webp" alt="TypeScript" /></div>;
const NextJS = () => <div><img src="/images/nextjs.webp" alt="Next.js" /></div>;
const PHP = () => <div><img src="/images/php.webp" alt="PHP" /></div>;
const TailwindCSS = () => <div><img src="/images/tailwindcss.webp" alt="Tailwind CSS" /></div>;
const ReactJS = () => <div><img src="/images/react.webp" alt="React" /></div>;
const NodeJS = () => <div><img src="/images/nodejs.webp" alt="Node.js" /></div>;
const Python = () => <div><img src="/images/python.png" alt="Python"/></div>
const HTML = () => <div><img src="/images/html.png" alt="HTML"/></div>
const CSS = () => <div><img src="/images/css.png" alt="CSS"/></div>
const C = () => <div><img src="/images/c.png" alt="C#"/></div>
const GIT = () => <div><img src="/images/git.png" alt="GIT"/></div>
const Docker = () => <div><img src="/images/docker.png" alt="Docker"/></div>
const AWS = () => <div><img src="/images/aws.png" alt="AWS"/></div>

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-20 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#020617_40%,#F97316_110%)]" />
      <Head>
        <title>TMG - Portfolio</title>
        <meta name="TMG - Portfolio" content="Welcome to my portfolio" />
        <link rel="icon" href="../images/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        
        <div className="ml-10 sm:ml-10 md:ml-40 lg:ml-60   mr-10  sm:mr-10 md:mr-40 lg:mr-60     text-4xl mt-40">
          I am a <span className="text-orange-500"><ReactTyped strings={["software developer", "full stack developer", "cybersecurity enthusiast"]} typeSpeed={40} backSpeed={40} loop /></span>
        </div>
        <h2 className="ml-10 sm:ml-10 md:ml-40 lg:ml-60    mr-10 sm:mr-10 md:mr-40 lg:mr-60 mt-10 text-gray-400">Thanks for visiting my portfolio. My name is Steven, and I am a Cybersecurity developer.<br></br>
            I am also a fullstack website developer as I create premium websites and offer custom freelance work.
        </h2>

        <div className="absolute right-0 mt-20 mr-20     xs:w-[100px] md:w-[150px] lg:w-[300px] xl:w-[350px]">
          <img src="/images/tmgmidvitelogonowords.png" className="rounded-lg shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2 sm:static" alt="description" />
        </div>

        <section id="languages">
          <div className="mt-80 p-4 rounded-lg shadow-md">
            <div className="container mx-auto w-2/3">
              <Marquee>
                <div className="flex items-center">
                  <div className="flex items-center space-x-24">
                    <TypeScript />  
                    <NextJS />
                    <PHP />
                    <TailwindCSS />
                    <ReactJS />
                    <NodeJS />
                    <Python />  
                    <HTML />
                    <CSS />
                    <C />
                    <GIT />
                    <Docker />
                    <AWS />
                    <div className="w-4"></div>
                  </div>
                </div>
              </Marquee>
            </div>
          </div>

          <div className="flex flex-col items-center text-left">
            <h1 className="text-3xl mt-40 w-full max-w-4xl sm:ml-[50px] sm:text-left text-center">
              Popular frameworks, libraries, & languages.
            </h1>
            <div className="w-full max-w-4xl text-gray-400 sm:ml-[50px] sm:text-left text-center">
              <br />I have developed basic to complex websites and software solutions for years utilizing the following technologies. These
              <br />frameworks make web development powerful and easy for developers to use at the same time. All of these technologies
              <br />are being used by many of the popular and well-known tech giants! See some of my custom work with these technologies here.
            </div>
          </div>
        </section>

        <section id="about">
          <div className="w-full py-10 mt-60 mb-80">  
            <div className="max-w-6xl mx-auto text-right flex">
              <img src="images/tmgmidvitelogonowords.png" className="rounded-lg shadow-lg hidden sm:block w-1/3"></img>
              <div className="ml-[10px] sm:ml-[50px]      mr-[10px] sm:mr-[50px] lg:mr-[10px] text-right">
                <h1 className="text-4xl font-bold">About me</h1>
                <p className="flex mt-10 text-gray-400">
                  Currently studying my Bachelors degree in Cybersecurity, I have achieved my T level in Computer Science and three A Levels.
                  I gained valuable experience working with a Virtual Reality development company, and my
                  freelance work has further honed my skills in software development and cybersecurity. I am dedicated to creating high-quality
                  web solutions that meet business needs and contribute to innovative projects. I strive to grow and aim high in all my endeavors.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pastWork">
          <div className="flex items-center justify-center mb-40">
            <div className="bg-dark-gray shadow-md rounded-lg p-6 w-1/3 flex flex-col items-center">
              <h1 className="text-xl font-bold mb-4 text-center">Check out my Github!</h1>
              <p className="mb-4 text-center">This is where you can see some of my projects</p>
              <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 w-24" onClick={() => window.open('https://github.com/WolvTMG', '_blank')}>
                Click Me
              </button>
            </div>
          </div>
          
          <div className="w-full py-10 mt-40 mb-40">
            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10">
              {/* Column 1 */}
              <div className="p-4 rounded-3xl">
                <h3 className="text-xl font-bold">Fast and Reliable</h3>
                <p className="text-gray-400 mt-5">Delivering services with speed and consistent quality.</p>
              </div>
              <div className="p-4 rounded-3xl">
                <h3 className="text-xl font-bold">Anonymous Payment</h3>
                <p className="text-gray-400 mt-5">Offering secure and anonymous payment options for privacy.</p>
              </div>
              <div className="p-4 rounded-3xl">
                <h3 className="text-xl font-bold">Custom Work</h3>
                <p className="text-gray-400 mt-5">Tailored solutions to meet your specific requirements.</p>
              </div>
              <div className="p-4 rounded-3xl">
                <h3 className="text-xl font-bold">Cheap and Affordable Prices</h3>
                <p className="text-gray-400 mt-5">Competitive pricing without compromising on quality.</p>
              </div>

              {/* Column 2 */}
              <div className="p-4 rounded-3xl">
                <h3 className="text-xl font-bold">Communication</h3>
                <p className="text-gray-400 mt-5">Open and transparent communication throughout the process.</p>
              </div>
              <div className="p-4 rounded-3xl">
                <h3 className="text-xl font-bold">Security and Privacy</h3>
                <p className="text-gray-400 mt-5">Ensuring the protection of your data and privacy at all times.</p>
              </div>
              <div className="p-4 rounded-3xl">
                <h3 className="text-xl font-bold">Fast Support</h3>
                <p className="text-gray-400 mt-5">Responsive customer support available whenever you need it.</p>
              </div>
              <div className="p-4 rounded-3xl">
                <h3 className="text-xl font-bold">High Customer Satisfaction</h3>
                <p className="text-gray-400 mt-5">Prioritizing customer satisfaction with every service.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts">
          <div className="flex items-center justify-center mb-80">
            <div className="shadow-md rounded-lg p-6 w-1/3 flex flex-col items-center">
              <h1 className="text-xl font-bold mb-4 text-center">For buisness enquiries</h1>
              <p className="mb-4 text-center text-orange-400">enquiries@tmg.xyz</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-4 gap-4 px-8 max-w-screen-lg mx-auto">
          <div className="bg-dark-gray p-4 flex flex-col items-center rounded-lg shadow-lg">
            <img src="images/btc.png" className="mt-2"></img>
              <span className="mt-4 font-bold">Bitcoin</span>
          </div>
          <div className="bg-dark-gray p-4 flex flex-col items-center rounded-lg shadow-lg">
            <img src="images/eth.png" className="mt-2"></img>
              <span className="mt-4 font-bold">Etherium</span>
          </div>
          <div className="bg-dark-gray p-4 flex flex-col items-center rounded-lg shadow-lg">
            <img src="images/xrp.png" className="mt-2"></img>
              <span className="mt-4 font-bold">XRP</span>
          </div>
          <div className="bg-dark-gray p-4 flex flex-col items-center rounded-lg shadow-lg">
            <img src="images/sol.png" className="mt-2"></img>
              <span className="mt-4 font-bold">Solana</span>
          </div>
        </div>
      </main>
      
      <footer className="flex justify-center items-center h-16">
        <p>© 2024 TMG</p>
      </footer>
    </div>
  );
};
