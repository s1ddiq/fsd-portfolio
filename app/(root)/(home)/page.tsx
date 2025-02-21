import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main className="relative h-full  overflow-clip">
      {/*Seperator */}
      <div className="h-px w-full bg-blue-3 absolute top-64"></div>

      <section className="code px-6 py-4 md:flex justify-center items-center flex-col">
        <h1 className="text-4xl text-blue-2 brightness-150 md:text-center">
          Building the web since{" "}
          <span className="text-4xl relative">
            2021
            <p className="absolute text-xl opacity-50 top-0 -right-2 rotate-45">
              🙏
            </p>
          </span>
        </h1>
        <p className="text-lg text-blue-2 md:w-2/5 w-full">
          With 3+ years in web development, the goal is to pave the way to
          success. Seeing beautiful websites inspires the creation of even{" "}
          <span className="text-sm ">
            <span className="font-extrabold">better ones.</span>
          </span>
        </p>
      </section>

      {/*Seperator */}
      <div className="h-px w-full bg-blue-3 absolute bottom-12"></div>
      <div className=" text-sm text-blue-3 code font-semibold absolute bottom-0 px-6">
        2025
      </div>

      <section className="px-6 mt-24 py-6 code flex justify-center flex-col items-center">
        <div className="mt-4 lg:mt-12 mb-8">
          <p className="text-4xl text-blue-2 brightness-150">Latest Projects</p>
        </div>

        <div className="flex flex-wrap gap-4 md:justify-between justify-center lg:justify-start overflow-hidden">
          {projects.map((project) => (
            <div
              className="w-64 h-72 bg-noise border-2 border-blue-3 hover:-translate-y-px p-4 flex justify-between items-center flex-col mb-4"
              key={project.name}
            >
              <div>
                <h1 className="text-2xl text-blue-2 brightness-150">
                  {project.name}
                </h1>
              </div>

              <div className="flex gap-2">
                {project.icons.map((icon, index) => (
                  <Image
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    width={24}
                    height={24}
                  />
                ))}
              </div>
              <p className="text-sm text-blue-2">{project.description}</p>
              <Link
                href={project.website}
                target="_blank"
                className="cursor-pointer bg-blue-1 brightness-110 w-full p-2 text-blue-2 text-center hover:opacity-80 font-semibold hover:text-white"
              >
                Live Website
              </Link>
            </div>
          ))}
        </div>

        <section>
          {/* <div className="bg-gray-900 w-full max-w-3xl rounded-lg border-2 border-gray-700 p-6">
            <pre className="text-white text-sm font-mono whitespace-pre-wrap">
              <span className="text-yellow-300">&lt;div</span>{" "}
              <span className="text-pink-400">className</span>="flex
              justify-center items-center h-screen bg-gray-800"
              <span className="text-yellow-300">&gt;</span>
              <br />
              <span className="text-yellow-300">&lt;h1</span>{" "}
              <span className="text-pink-400">className</span>="text-white
              text-4xl font-bold"
              <span className="text-yellow-300">&gt;</span>Web Development is an
              Art!
              <span className="text-yellow-300">&lt;/h1&gt;</span>
              <br />
              <span className="text-yellow-300">&lt;p</span>{" "}
              <span className="text-pink-400">className</span>="text-gray-400"
              <span className="text-yellow-300">&gt;</span>From HTML to
              JavaScript, every line of code helps build something amazing.
              <span className="text-yellow-300">&lt;/p&gt;</span>
              <br />
              <span className="text-yellow-300">&lt;p</span>{" "}
              <span className="text-pink-400">className</span>="text-gray-400"
              <span className="text-yellow-300">&gt;</span>Embrace the{" "}
              <span className="text-blue-400">CSS</span> challenges, and conquer
              the <span className="text-green-400">JavaScript</span> hurdles.
              <span className="text-yellow-300">&lt;/p&gt;</span>
              <br />
              <span className="text-yellow-300">&lt;/div&gt;</span>
            </pre>
          </div> */}
        </section>
        {/*Seperator */}
      </section>
    </main>
  );
};

export default Home;
