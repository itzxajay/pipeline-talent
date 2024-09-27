"use client"; // This line marks the component as a Client Component

import React, { useState } from 'react';
import { Section1 } from "./Sections/Section1";
import { Section2 } from "./Sections/Section2";
import { Section3 } from "./Sections/Section3";
import { Section4 } from "./Sections/Section4";
import { Section5 } from "./Sections/Section5";
import { Footer } from "./Sections/footer";
import { Section7 } from "./Sections/Section7";
import { Section8 } from "./Sections/Section8";

export default function Home() {
  const [scenario, setScenario] = useState("Company"); // Default scenario

  return (
    <div className="">
      <Section1 scenario={scenario} />
      <Section2/>
      <Section3 scenario={scenario} setScenario={setScenario} />
      <Section4/>
      <Section5/>
      <Section7/>
      <Section8/>
      <Footer/>
    </div>
  );
}
