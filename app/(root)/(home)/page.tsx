import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main className="relative min-h-screen">
      {/*Seperator */}
      <div className="h-px w-full bg-blue-3 absolute md:block hidden "></div>

      <section className="code px-6 py-4 flex">
        <div>
          <h1 className="text-4xl text-blue-2 brightness-150">
            Building the web since <span className="text-4xl">2021</span>
          </h1>
          <p className="text-lg text-blue-2 w-full">
            I'm Siddiq, a web developer with over three years of experience,
            focused on building clean, well-crafted websites that leave a
            lasting impression. Whether it’s a sleek landing page or a
            meticulously optimized site, I aim for both function and aesthetics.
            Great design isn’t just inspiring—it’s a challenge to create
            something even better.
            <span className="text-sm ">
              <span className="font-extrabold">better ones.</span>
            </span>
          </p>
        </div>
        {/*Seperator */}
        {/* <div className="h-full w-px bg-blue-3 absolute right-64"></div> */}
      </section>

      {/*Seperator */}
      <div className="h-px w-full bg-blue-3 absolute md:bottom-12 bottom-2"></div>
      <div className=" text-sm text-blue-3 code font-semibold absolute bottom-0 px-6">
        2025
      </div>

      <section className="px-6 mt-24 py-6 code flex justify-center flex-col items-center">
        <div className="mt-4 lg:mt-12 mb-8">
          <p className="text-4xl text-blue-2 brightness-150 text-center">
            Latest Projects
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center overflow-hidden">
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
