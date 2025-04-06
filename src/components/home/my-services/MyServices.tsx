"use client";

import ServiceCard from "../service-card/ServiceCard";
import { useMemo } from "react";
import { icons } from "./my-services.icons";
import { dictionary } from "./my-services.dictionaries";
import { ServiceKey } from "../service-card/typing/serviceCard.type";
import { useParams } from "next/navigation";

export function MyServices(): React.ReactElement {
    const params = useParams();
    const locale = (params.lang ?? 'pt-BR');

    const { services, title } = useMemo(() => {
        return dictionary[locale as keyof typeof dictionary] || dictionary["pt-BR"];
    }, [locale]);

    return (
        <section className="bg-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    {title}
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