import React from "react";

interface Certificado {
    id: number;
    nome: string;
    instituicao: string;
    data: string;
    descricao: string;
    imagem: string;
    categoria: string;
    link: string;
}

interface Categoria {
    id: string;
    nome: string;
}

interface CardCertificadoProps {
    certificado: Certificado;
    nomesCategoria: Categoria[];
    botaoTexto: string;
}

const CardCertificado: React.FC<CardCertificadoProps> = ({
    certificado,
    nomesCategoria,
    botaoTexto
}) => {
    const categoriaNome = nomesCategoria.find(
        cat => cat.id === certificado.categoria
    )?.nome || certificado.categoria;

    const handleRedirect = () => {
        if (certificado.link && (certificado.link.startsWith('http://') || certificado.link.startsWith('https://'))) {
            window.open(certificado.link, '_blank');
        } else {
            console.error('Link inválido ou não fornecido');
        }
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-75 overflow-hidden">
                <img
                    src={certificado.imagem}
                    alt={certificado.nome}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-800 mb-3">
                    {categoriaNome}
                </span>

                <h3 className="text-xl font-semibold mb-2">{certificado.nome}</h3>

                <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-600">{certificado.instituicao}</p>
                    <p className="text-sm text-gray-500">{certificado.data}</p>
                </div>

                <p className="text-gray-700">{certificado.descricao}</p>

                <button onClick={handleRedirect} className="mt-4 text-black font-medium hover:underline">
                    {botaoTexto}
                </button>
            </div>
        </div>
    );
};

export default CardCertificado;