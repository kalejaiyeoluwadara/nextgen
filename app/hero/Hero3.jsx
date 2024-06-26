"use client";
import React, { useRef, useState, useEffect } from "react";
import Card from "./comp/Card";
import chev1 from "../../assets/chev1.svg";
import chev2 from "../../assets/chev2.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { courses } from "../../utils/data";
function Hero3() {
  return (
    <div
      id="courses"
      className="min-h-full  bg-[#F5F5F5] py-[80px] px-[110px] w-full"
    >
      <section>
        <h4>What course are you interested in?</h4>
        <p className="w-[605px] text-[16px]">Select the course to view more</p>
      </section>
      <section className="grid grid-cols-4  mt-[40px] gap-[20px] w-full  h-auto ">
        {courses.map((d, id) => {
          return (
            <Card
              key={id}
              img={d.image}
              desc={d.desc}
              route={d.route}
              title={d.course}
            />
          );
        })}
      </section>
      <section className="mt-[62px] items-center flex gap-[32px]"></section>
    </div>
  );
}

export default Hero3;
