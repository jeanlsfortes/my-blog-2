import React from "react";
import { MyServices } from "@/components/home/my-services/MyServices";
import { EffectCard } from "@/components/home/effect-card/EffectCard";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <EffectCard />
      <MyServices />
    </main>
  );
}
