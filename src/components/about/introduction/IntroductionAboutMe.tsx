"use client";

import React, { useMemo } from "react";
import PhotoAlbum from "../photoAlbum/PhotoAlbum";
import { useParams } from "next/navigation";
import { dictionaries } from "./dictionary/dictionaries";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

export default function IntroductionAboutMe() {
    const params = useParams()
    const locale = (params.lang ?? 'pt-BR')

    const { aboutMe, skill } = useMemo(() => {
        return dictionaries[locale as keyof typeof dictionaries] || dictionaries["pt-BR"];
    }, [locale]);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <AboutMe title={aboutMe.title} texts={aboutMe.texts} />
                    <Skills skill={skill} />
                </div>

                <PhotoAlbum
                    urlFoto={"https://media.licdn.com/dms/image/v2/C4D03AQFMzUoA-xYQ-Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1632852895697?e=1746662400&v=beta&t=evGcntKF5E6Kb0OC5ko2wR4qUZyAfs2mH29f8AqOnP0"}
                    email={"jeanlucaseh10@gmail.com"}
                    localizacao={"Cuiabá-MT"}
                />
            </div>
        </div>
    );
}