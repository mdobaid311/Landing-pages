"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import heroImage from "../../assets/image.png";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <div className="relative w-full  flex-1 flex flex-col items-center justify-center z-200 overflow-hidden mt-10">
        <motion.h1
          className="uppercase text-[200px] text-white font-[1000] "
          whileInView={{
            x: [-100, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          Nike Shoes
        </motion.h1>
        <motion.h1
          className="uppercase text-[200px] stroke font-[1000]"
          whileInView={{
            x: [100, 0],
            opacity: [0, 1],
            zIndex: -2,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          Collections
        </motion.h1>
        <motion.h1
          className="uppercase text-[100px] text-white font-[1000] text-right w-full mr-10"
          whileInView={{
            opacity: [0, 1],
            zIndex: -2,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          2023
        </motion.h1>
        <motion.div
          whileInView={{
            opacity: [0, 1],
            zIndex: -1,
          }}
          transition={{
            duration: 2,
          }}
          className="hero-image w-[1000px]"
        >
          <Image
            src={heroImage}
            alt="hero-shoe"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
