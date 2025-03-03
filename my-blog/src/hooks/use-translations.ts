"use client";

import { useCallback, useMemo } from "react";
import { get } from "lodash";

// Importamos os dicionários diretamente no lado do cliente
import ptBR from "@/dictionaries/pt-BR.json";
import enUS from "@/dictionaries/en-US.json";
import es from "@/dictionaries/es.json";

const dictionaries = {
    "pt-BR": ptBR,
    "en-US": enUS,
    "es": es
};

type TranslationParams = Record<string, string | number>;

export function useTranslations(locale: string) {
    const dictionary = useMemo(() => {
        return dictionaries[locale as keyof typeof dictionaries] || dictionaries["pt-BR"];
    }, [locale]);

    const t = useCallback(
        (key: string, params?: TranslationParams): string => {
            // Obtém a tradução usando lodash.get para acessar propriedades aninhadas
            let translation = get(dictionary, key, key);

            // Se a tradução não for encontrada, retorna a chave como fallback
            if (translation === undefined || translation === null) {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }

            // Substitui os parâmetros na string de tradução
            if (params && typeof translation === "string") {
                Object.entries(params).forEach(([paramKey, value]) => {
                    translation = translation.replace(
                        new RegExp(`{{\\s*${paramKey}\\s*}}`, 'g'),
                        String(value)
                    );
                });
            }

            return String(translation);
        },
        [dictionary]
    );

    // Função para formatar números de acordo com o locale
    const formatNumber = useCallback(
        (value: number, options?: Intl.NumberFormatOptions): string => {
            return new Intl.NumberFormat(locale, options).format(value);
        },
        [locale]
    );

    // Função para formatar datas de acordo com o locale
    const formatDate = useCallback(
        (value: Date | string | number, options?: Intl.DateTimeFormatOptions): string => {
            const date = value instanceof Date ? value : new Date(value);
            return new Intl.DateTimeFormat(locale, options).format(date);
        },
        [locale]
    );

    return {
        t,
        formatNumber,
        formatDate,
        locale
    };
}