import React from "react";
import { GooeyDemo } from "@/components/home/gooey-demo";
import { getDictionary } from "@/dictionaries";
import { Metadata } from "next";

type Props = {
    params: { lang: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const dict = await getDictionary(params.lang);

    return {
        title: dict.metadata?.title || "Meu Portfólio | Desenvolvedor Web",
        description: dict.metadata?.description || "Portfólio profissional com projetos, certificados e informações de contato",
    };
}

export default async function Home({ params }: Props) {
    const dict = await getDictionary(params.lang);

    return (
        <main className="flex min-h-screen flex-col">
            <GooeyDemo lang={params.lang} />

            <section className="bg-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                        {dict.services?.title || "Meus Serviços"}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {dict.services?.web?.title || "Desenvolvimento Web"}
                            </h3>
                            <p className="text-gray-600">
                                {dict.services?.web?.description || "Criação de sites e aplicações web modernas com foco em performance e experiência do usuário."}
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {dict.services?.uxui?.title || "UX/UI Design"}
                            </h3>
                            <p className="text-gray-600">
                                {dict.services?.uxui?.description || "Design de interfaces intuitivas e atraentes para melhorar a experiência do usuário."}
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {dict.services?.mobile?.title || "Mobile Apps"}
                            </h3>
                            <p className="text-gray-600">
                                {dict.services?.mobile?.description || "Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}