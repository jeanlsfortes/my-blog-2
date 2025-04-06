"use client";

import React, { useMemo } from "react";
import { convertJsonToExperience, Experience } from "./typing/my-trajectory.type";
import ExperienceItems from "./components/ExperienceItems";
import { useParams } from "next/navigation";
import { dictionaries } from "./dictionary/dictionaries";


export default function MyTrajectory() {

    const params = useParams()
    const locale = (params.lang ?? 'pt-BR')

    const { route, experience } = useMemo(() => {
        return dictionaries[locale as keyof typeof dictionaries] || dictionaries["pt-BR"];
    }, [locale]);

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center">{route}</h2>

                <div className="space-y-12">
                    {convertJsonToExperience(experience as Experience[]).map((exp, index) => (
                        <ExperienceItems
                            key={index}
                            period={exp.period}
                            position={exp.position}
                            company={exp.company}
                            description={exp.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}