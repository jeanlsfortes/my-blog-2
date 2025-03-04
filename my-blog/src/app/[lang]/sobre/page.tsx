"use client";

import SobreIntroducao from "@/components/sobre/Introducao/sobre-introducao";
import MeuPercurso from "@/components/sobre/meuPercurso/meu-percurso";
import React from "react";

export default function SobreMim(): React.ReactElement {
  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <SobreIntroducao />
      <MeuPercurso />
    </main>
  );
}