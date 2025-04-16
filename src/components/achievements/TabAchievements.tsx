"use client";
import React, { useMemo } from "react";
import { dictionaries } from "./dictionary/dictionaries";
import Stories from "./components/stories/Stories";
import { useParams } from "next/navigation";

export default function TabAchievements() {
  const params = useParams();
  const locale = params.lang ?? "pt-BR";

  const { title, data, impact } = useMemo(() => {
    return (
      dictionaries[locale as keyof typeof dictionaries] || dictionaries["pt-BR"]
    );
  }, [locale]);

  return <Stories title={title} data={data} impact={impact} />;
}
