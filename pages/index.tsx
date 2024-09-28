import { ReactTyped } from "react-typed";
import Marquee from "react-fast-marquee";
import Head from 'next/head';

const TypeScript = () => <div><img src="/images/typescript.webp" alt="TypeScript" /></div>;
const NextJs = () => <div><img src="/images/nextjs.webp" alt="Next.js" /></div>;
const PHP = () => <div><img src="/images/php.webp" alt="PHP" /></div>;
const TailwindCSS = () => <div><img src="/images/tailwindcss.webp" alt="Tailwind CSS" /></div>;
const React = () => <div><img src="/images/react.webp" alt="React" /></div>;
const NodeJS = () => <div><img src="/images/nodejs.webp" alt="Node.js" /></div>;


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>TMG - Portfolio</title>
        <meta name="TMG - Portfolio" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative flex items-center h-16 mt-5">
        <h1 className="text-3xl font-bold ml-60">WolvTMG</h1>

        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="text-1xl flex space-x-8 text-white">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#languages">Languages</a></li>
            <li><a href="#past-work">Past work</a></li>
            <li><a href="#contact-me">Contact me</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        
        <div className="h-10 absolute right-0 mt-20 mr-20">
          <img src="/images/image.gif" className="rounded-lg shadow-lg mr-20" alt="description" />
        </div>
        <div className="ml-60 text-4xl mt-40">
          I am a <span className="text-orange-500"><ReactTyped strings={["software developer", "full stack developer", "cybersecurity enthusiast"]} typeSpeed={40} backSpeed={40} loop /></span>
        </div>
        <h2 className="ml-60 mt-10 text-gray-400">Thanks for visiting my portfolio. My name is Steven, and I am a fullstack website developer.<br></br>
            I develop premium websites and offer custom freelance work.
        </h2>

        <div className="mt-80 p-4 rounded-lg shadow-md">
          <div className="container mx-auto w-1/3">
            <Marquee>
              <div className="flex space-x-12">
                <div className="pl-12">
                  <TypeScript />  
                </div>
                <NextJs />
                <PHP />
                <TailwindCSS />
                <React />
                <NodeJS />
              </div>
            </Marquee>
          </div>
        </div>

        <div className="flex flex-col items-center text-left">
          <h1 className="text-3xl mt-20 text-left w-full max-w-4xl text-left">Popular frameworks, libraries, & languages.</h1>
          <div className="w-full max-w-4xl text-left text-gray-400">
            <br></br>I have developed basic to complex websites and software solutions for years utilizing the following technologies. These<br></br>
            frameworks make web development powerful and easy for developers to use at the same time. All of these technologies<br></br>
            are being used by many of the popular and well-known tech giants! See some of my custom work with these technologies here.
          </div>
        </div>


        <div className="w-full bg-light-gray py-10 mt-60 mb-80">  
          <div className="max-w-6xl mx-auto text-right flex">
            <img src="images/image.gif" className="rounded-lg shadow-lg w-1/3"></img>
            <div className="flex flex-col ml-auto w-1/2 max-w-md text-right">
              <h1 className="text-4xl font-bold">About me</h1>
              <p className="flex mt-10 text-gray-400">
                I am an ambitious full-stack developer with a strong foundation in modern frameworks and technologies. At just 18 years old,
                I have achieved three A Levels in Computer Science and gained valuable experience working with a Virtual Reality development company.
                Additionally, my freelance work has further honed my skills in software development and cybersecurity. I am dedicated to creating
                high-quality web solutions that effectively meet business needs and contribute to innovative projects.
              </p>
            </div>
          </div>
        </div>

    





      </main>
      
      <footer className="flex justify-center items-center h-16">
        <p>© 2024 TMG</p>
      </footer>
    </div>
  );
}