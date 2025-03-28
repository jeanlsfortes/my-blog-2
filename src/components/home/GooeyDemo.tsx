"use client";

import { useTranslations } from "@/hooks/use-translations";
import { SplashCursor } from "../ui/splash-cursor";

export function GooeyDemo({ lang }: { lang: string }): React.ReactElement {
    const { t } = useTranslations(lang);

    return (
        <div className="relative w-full h-full min-h-[600px] flex flex-col items-center justify-center gap-8 bg-black text-center text-pretty">
            <img
                src="https://www.meisterdrucke.pt/kunstwerke/1000px/Vincent_van_Gogh_-_Starry_Night_-_%28MeisterDrucke-11281%29.jpg"
                alt="impressionist painting"
                className="w-full h-full object-cover absolute inset-0 opacity-70"
            />
            <div
                className="absolute inset-0 z-0"
                style={{ filter: "url(#gooey-filter-pixel-trail)" }}
            >
                <SplashCursor />
            </div>
            <div className="z-10 flex flex-col items-center justify-center p-8">
                <p className="text-white text-3xl md:text-5xl lg:text-7xl z-10 font-bold mb-4">
                    {t('home.title')}
                </p>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                    {t('home.description')}
                </p>
                <div className="mt-8">
                    <a href={`/${lang}/projects`} className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors">
                        {t('home.cta')}
                    </a>
                </div>
            </div>
        </div>
    );
}