"use client";

import React, { useState, useEffect } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { Button } from "./ui/button";

const renderer = ({
  days,
  hours,
  minutes,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return <span className="text-xl font-bold"></span>;
  } else {
    return (
      <div className="text-4xl font-extrabold text-black md:text-5xl lg:text-7xl">
        <div className="flex justify-center space-x-4">
          <div className="px-4">
            <span>{String(days).padStart(2, "0")}</span>
            <div className="mt-4 flex justify-center text-xl md:text-2xl lg:text-3xl">
              GÜN
            </div>
          </div>
          <div className="flex items-start text-center">
            <span>:</span>
          </div>
          <div className="px-4">
            <span>{String(hours).padStart(2, "0")}</span>
            <div className="mt-4 flex justify-center text-xl md:text-2xl lg:text-3xl">
              SA
            </div>
          </div>
          <div className="flex items-start text-center ">
            <span>:</span>
          </div>
          <div className="px-4">
            <span>{String(minutes).padStart(2, "0")}</span>
            <div className="mt-4 flex justify-center text-xl md:text-2xl lg:text-3xl">
              DK
            </div>
          </div>
        </div>
      </div>
    );
  }
};

function SectionDividerCountdownTop() {
  return (
    <div className="custom-shape-divider-top-1693337002">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        ></path>
      </svg>
    </div>
  );
}

function SectionDividerCountdownBottom() {
  return (
    <>
      <div className="custom-shape-divider-bottom-1693338568">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}

const MyCountdown: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const targetDate = new Date(2023, 8, 23, 0, 0, 0, 0);
  targetDate.setMonth(8);
  targetDate.setDate(23);
  targetDate.setHours(0, 0, 0, 0);

  return (
    <section className="relative bg-boyner-about">
      <div className="mx-auto max-w-7xl overflow-hidden py-24 sm:px-6 sm:py-32 lg:px-8">
        <div>
          <SectionDividerCountdownTop />
          <div className="flex justify-center p-2 text-xl font-extrabold text-black md:text-2xl lg:text-4xl">
            <h1>BOYNER DYNAMIC FEST BAŞLIYOR!</h1>
          </div>
          <div className="m-4 py-4">
            {isMounted && <Countdown date={targetDate} renderer={renderer} />}
          </div>
          <SectionDividerCountdownBottom />
        </div>
      </div>
    </section>
  );
};

export default MyCountdown;
