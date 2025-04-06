import React from "react"
import { getDictionary } from "@/dictionaries"
import { Metadata } from "next"
import { MyServices } from "@/components/home/my-services/MyServices"
import { EffectCard } from "@/components/home/effect-card/EffectCard"

type Props = {
    params: { lang: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang)

    return {
        title: dict.metadata?.title || "Meu Portfólio | Desenvolvedor Web",
        description: dict.metadata?.description || "Portfólio profissional com projetos, certificados e informações de contato",
    }
}

export default async function Home({ params }: Props) {
    const { lang } = await params;

    return (
        <main className="flex min-h-screen flex-col">
            <EffectCard lang={lang} />
            <MyServices lang={lang} />
        </main>
    )
}