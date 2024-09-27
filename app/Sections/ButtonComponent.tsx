"use client";

import React, { useState } from 'react';
import { Section1 } from './Section1';
import { Section3 } from './Section3'; 

export const MainComponent = () => {
    const [scenario, setScenario] = useState("Company"); // Default scenario

    return (
        <div>
            <Section1 scenario={scenario} />
            <Section3 scenario={scenario} setScenario={setScenario} />
        </div>
    );
};
