"use client";

import { SplashCursor } from "../../ui/splash-cursor";
import { useMemo } from "react";
import { dictionary } from "./effect-card.dictionaries";
import Image from "next/image";
import { useParams } from "next/navigation";

export function EffectCard(): React.ReactElement {
  const params = useParams();
  const locale = params.lang ?? "pt-BR";

  const { home } = useMemo(() => {
    return dictionary[locale as keyof typeof dictionary] || dictionary["pt-BR"];
  }, [locale]);

  return (
    <div className="relative w-full h-full min-h-[600px] flex flex-col items-center justify-center gap-8 bg-black text-center text-pretty">
      <Image
        src="https://www.meisterdrucke.pt/kunstwerke/1000px/Vincent_van_Gogh_-_Starry_Night_-_%28MeisterDrucke-11281%29.jpg"
        alt="impressionist painting"
        className="w-full h-full object-cover absolute inset-0 opacity-70"
        fill
        priority
        quality={80}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

      <div
        className="absolute inset-0 z-0"
        style={{ filter: "url(#gooey-filter-pixel-trail)" }}
      >
        <SplashCursor />
      </div>

      <div className="z-10 flex flex-col items-center justify-center p-8">
        <p className="text-white text-3xl md:text-5xl lg:text-7xl z-10 font-bold mb-4">
          {home.title}
        </p>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl">
          {home.description}
        </p>
      </div>
    </div>
  );
}
