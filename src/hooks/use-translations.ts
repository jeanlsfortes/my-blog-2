"use client";

import { useCallback, useMemo } from "react";
import { get } from "lodash";
import ptBR from "@/dictionaries/pt-BR";
import enUS from "@/dictionaries/en-US";
import es from "@/dictionaries/es";

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

    console.log('dictionary', dictionary)

    const t = useCallback(
        (key: string, params?: TranslationParams): string => {
            let translation = get(dictionary, key, key);

            if (translation === undefined || translation === null) {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }

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

    const formatNumber = useCallback(
        (value: number, options?: Intl.NumberFormatOptions): string => {
            return new Intl.NumberFormat(locale, options).format(value);
        },
        [locale]
    );

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