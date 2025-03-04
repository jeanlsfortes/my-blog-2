"use client";

import React, { useState } from "react";

interface Certificado {
  id: number;
  nome: string;
  instituicao: string;
  data: string;
  descricao: string;
  imagem: string;
  categoria: string;
}

interface Categoria {
  id: string;
  nome: string;
}

const certificados: Certificado[] = [
  {
    id: 1,
    nome: "Web Development Bootcamp",
    instituicao: "Udemy",
    data: "Janeiro 2023",
    descricao: "Curso completo de desenvolvimento web com HTML, CSS, JavaScript, Node.js e MongoDB.",
    imagem: "/api/placeholder/400/300",
    categoria: "desenvolvimento"
  },
  {
    id: 2,
    nome: "React Avançado",
    instituicao: "Coursera",
    data: "Maio 2023",
    descricao: "Especialização em React com foco em hooks, context API e performance.",
    imagem: "/api/placeholder/400/300",
    categoria: "frontend"
  },
  {
    id: 3,
    nome: "TypeScript Masterclass",
    instituicao: "Frontend Masters",
    data: "Setembro 2023",
    descricao: "Curso avançado de TypeScript abordando tipos avançados, generics e integração com React.",
    imagem: "/api/placeholder/400/300",
    categoria: "linguagens"
  },
  {
    id: 4,
    nome: "AWS Certified Developer",
    instituicao: "Amazon Web Services",
    data: "Dezembro 2023",
    descricao: "Certificação oficial para desenvolvimento de aplicações na nuvem AWS.",
    imagem: "/api/placeholder/400/300",
    categoria: "cloud"
  },
  {
    id: 5,
    nome: "UI/UX Design Fundamentals",
    instituicao: "Google",
    data: "Fevereiro 2024",
    descricao: "Fundamentos de design de interface e experiência do usuário.",
    imagem: "/api/placeholder/400/300",
    categoria: "design"
  },
  {
    id: 6,
    nome: "Node.js Microservices",
    instituicao: "Pluralsight",
    data: "Julho 2024",
    descricao: "Desenvolvimento de arquiteturas baseadas em microserviços com Node.js.",
    imagem: "/api/placeholder/400/300",
    categoria: "backend"
  }
];

export default function Certificados(): React.ReactElement {
  const [filtro, setFiltro] = useState<string>("todos");
  
  const categorias: Categoria[] = [
    { id: "todos", nome: "Todos" },
    { id: "desenvolvimento", nome: "Desenvolvimento Web" },
    { id: "frontend", nome: "Frontend" },
    { id: "backend", nome: "Backend" },
    { id: "linguagens", nome: "Linguagens" },
    { id: "cloud", nome: "Cloud" },
    { id: "design", nome: "Design" }
  ];
  
  const certificadosFiltrados = filtro === "todos" 
    ? certificados 
    : certificados.filter(cert => cert.categoria === filtro);

  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Certificados</h1>
        <p className="text-lg text-gray-600 mb-12">Minha jornada de aprendizado e aprimoramento profissional contínuo.</p>
        
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categorias.map(categoria => (
              <button
                key={categoria.id}
                onClick={() => setFiltro(categoria.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap ${
                  filtro === categoria.id 
                    ? "bg-black text-white" 
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {categoria.nome}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificadosFiltrados.map(certificado => (
            <div key={certificado.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={certificado.imagem} 
                  alt={certificado.nome} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-800 mb-3">
                  {categorias.find(cat => cat.id === certificado.categoria)?.nome || certificado.categoria}
                </span>
                
                <h3 className="text-xl font-semibold mb-2">{certificado.nome}</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600">{certificado.instituicao}</p>
                  <p className="text-sm text-gray-500">{certificado.data}</p>
                </div>
                
                <p className="text-gray-700">{certificado.descricao}</p>
                
                <button className="mt-4 text-black font-medium hover:underline">
                  Ver certificado
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {certificadosFiltrados.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Nenhum certificado encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </main>
  );
}