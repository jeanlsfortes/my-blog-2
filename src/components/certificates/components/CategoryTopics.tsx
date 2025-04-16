"use client";

import React from "react";

interface CategoryTopicsProps {
  categorias: Array<{
    id: string;
    nome: string;
    topicos?: string[];
  }>;
  filtroAtivo: string;
}

export default function CategoryTopics({
  categorias,
  filtroAtivo,
}: CategoryTopicsProps) {
  const categoriaSelecionada = categorias.find((cat) => cat.id === filtroAtivo);

  if (!categoriaSelecionada || filtroAtivo === "todos") {
    return null;
  }

  return (
    <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4">
        {categoriaSelecionada.nome}
      </h2>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-700">
          Tópicos relacionados:
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          {categoriaSelecionada.topicos?.map((topico, index) => (
            <li key={index} className="text-gray-600">
              {topico}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
