import React from "react";

interface Categoria {
  id: string;
  nome: string;
}

interface FiltroCategoriaProps {
  categorias: Categoria[];
  filtroAtivo: string;
  aoFiltrar: (id: string) => void;
}

export default function CategoryFilter({
  categorias,
  filtroAtivo,
  aoFiltrar,
}: FiltroCategoriaProps) {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex space-x-2 pb-2">
        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            onClick={() => aoFiltrar(categoria.id)}
            className={`px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap ${
              filtroAtivo === categoria.id
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {categoria.nome}
          </button>
        ))}
      </div>
    </div>
  );
}
