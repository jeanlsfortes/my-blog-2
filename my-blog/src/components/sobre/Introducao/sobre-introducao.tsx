"use client";

import React from "react";
import PhotoAlbum from "../photoAlbum/photo-album";

export default function SobreIntroducao() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">Sobre Mim</h1>

                    <div className="space-y-6">
                        <p className="text-lg text-gray-700">
                            Olá! Sou um desenvolvedor web apaixonado por criar interfaces modernas e interativas. Com mais de 5 anos de experiência em desenvolvimento frontend e backend, tenho trabalhado com as mais recentes tecnologias e frameworks para entregar projetos de alta qualidade.
                        </p>

                        <p className="text-lg text-gray-700">
                            Minha jornada na programação começou durante minha graduação em Ciência da Computação, onde descobri minha paixão por criar experiências digitais. Desde então, venho aprimorando constantemente minhas habilidades e expandindo meu conhecimento técnico.
                        </p>

                        <p className="text-lg text-gray-700">
                            Atualmente, trabalho principalmente com React, Next.js, C#, Node.js e TypeScript, mas estou sempre aberto a aprender novas tecnologias e enfrentar novos desafios.
                        </p>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h2 className="text-2xl font-semibold">Principais Habilidades</h2>

                        <div className="flex flex-wrap gap-2">
                            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "HTML5", "CSS3", "Git", "MongoDB", "SQL"].map((skill) => (
                                <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
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