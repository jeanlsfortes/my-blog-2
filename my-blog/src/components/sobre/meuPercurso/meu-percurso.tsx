"use client";

import React from "react";
import { Experiencias as Experiencia } from "./typing/meu-percurso.type";

const experiencias: Experiencia[] = [
    {
        periodo: "2021 - Presente",
        cargo: "Desenvolvedor Full Stack Sênior",
        empresa: "Empresa Tecnologia Ltda.",
        descricao: "Desenvolvimento de aplicações web e móveis para clientes de diversos setores. Liderança técnica em projetos e mentoria de desenvolvedores juniores."
    },
    {
        periodo: "2018 - 2021",
        cargo: "Desenvolvedor Frontend",
        empresa: "Agência Web Criativa",
        descricao: "Desenvolvimento de interfaces de usuário para websites e aplicações web. Implementação de designs responsivos e animações interativas."
    },
    {
        periodo: "2016 - 2018",
        cargo: "Bacharelado em Ciência da Computação",
        empresa: "Universidade Federal",
        descricao: "Formação em Ciência da Computação com foco em desenvolvimento web e engenharia de software."
    }
];

function ExperienciaItem(experiencia: Experiencia) {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
                <p className="text-xl font-semibold">{experiencia.periodo}</p>
                <p className="text-gray-600">{experiencia.cargo}</p>
            </div>
            <div className="md:w-2/3 mt-2 md:mt-0">
                <h3 className="text-xl font-semibold">{experiencia.empresa}</h3>
                <p className="mt-2 text-gray-700">{experiencia.descricao}</p>
            </div>
        </div>
    );
}

export default function MeuPercurso() {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center">Meu Percurso</h2>

                <div className="space-y-12">
                    {experiencias.map((exp, index) => (
                        <ExperienciaItem
                            key={index}
                            periodo={exp.periodo}
                            cargo={exp.cargo}
                            empresa={exp.empresa}
                            descricao={exp.descricao}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}