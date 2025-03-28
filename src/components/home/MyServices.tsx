"use client";

import { useTranslations } from "@/hooks/use-translations";
import ServiceCard from "./serviceCard/ServiceCard";
import { ServiceKey } from "./serviceCard/typing/serviceCard.type";

export function MyServices({ lang }: { lang: string }): React.ReactElement {
    const { t } = useTranslations(lang);

    const services = {
        web: {
            title: t("services.web.title") || "Desenvolvimento Web",
            description: t("services.web.description") || "Criação de sites e aplicações web modernas com foco em performance e experiência do usuário.",
        },
        uxui: {
            title: t("services.uxui.title") || "UX/UI Design",
            description: t("services.uxui.description") || "Design de interfaces intuitivas e atraentes para melhorar a experiência do usuário.",
        },
        mobile: {
            title: t("services.mobile.title") || "Mobile Apps",
            description: t("services.mobile.description") || "Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android.",
        },
        software: {
            title: t("services.software.title") || "Engenharia de Software com C#",
            description: t("services.software.description") || "Desenvolvimento de software robusto e escalável utilizando C# e tecnologias relacionadas.",
        },
    };

    const icons = {
        web: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        ),
        uxui: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        mobile: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        software: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    };

    return (
        <section className="bg-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    {t("services.title") || "Meus Serviços"}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(services).map(([key, service]) => (
                        <ServiceCard
                            key={key}
                            title={service.title}
                            description={service.description}
                            icon={icons[key as ServiceKey]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}