"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
        <div className="col-span-7 place-self-center  place-items-center grid lg:place-items-start">
          <h1 className="text-white max-w-2xl mb-4 text-4xl lg:text-6xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I'm Bhav {" "}
            </span> {" "}
            <br></br>
            <TypeAnimation
            sequence={[
              "Fullstack Developer",
              1000,
              "Freelancer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            eius!
          </p>
          <div>
          <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
            Hire Me
          </button>
          <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
            <span className="block bg-[#121212] hover:bg-slate-800 px-5 py-2 rounded-full">
              Download CV
            </span>
          </button>
        </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px]">
            <Image
              src="/images/hero-image.png"
              width={400}
              height={400}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
