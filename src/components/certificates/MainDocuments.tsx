"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import FiltroCategoria from "./components/FiltroCategoria";
import CardCertificado from "./components/CardCertificado";
import { dictionaries } from "./dictionary/dictionaries";

export default function MainDocuments(): React.ReactElement {
    const params = useParams();
    const locale = (params.lang ?? 'pt-BR');
    const [filtro, setFiltro] = useState<string>("todos");

    const { certificados: texts, certificadosData } = useMemo(() => {
        return dictionaries[locale as keyof typeof dictionaries] || dictionaries["pt-BR"];
    }, [locale]);

    const certificadosFiltrados = filtro === "todos"
        ? certificadosData
        : certificadosData.filter(cert => cert.categoria === filtro);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{texts.title}</h1>
            <p className="text-lg text-gray-600 mb-12">{texts.subtitle}</p>

            <FiltroCategoria
                categorias={texts.categorias}
                filtroAtivo={filtro}
                aoFiltrar={setFiltro}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificadosFiltrados.map(certificado => (
                    <CardCertificado
                        key={certificado.id}
                        certificado={certificado}
                        nomesCategoria={texts.categorias}
                        botaoTexto={texts.verCertificado}
                    />
                ))}
            </div>

            {certificadosFiltrados.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-xl text-gray-500">{texts.nenhumCertificado}</p>
                </div>
            )}
        </div>
    );
}