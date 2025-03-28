"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function LanguageSwitcher({ currentLang }: { currentLang: string }): React.ReactElement {
    const pathname = usePathname();
    const pathnameWithoutLang = pathname.replace(`/${currentLang}`, '') || '/';

    return (
        <div className="flex items-center gap-2">
            <Link
                href={`/pt-BR${pathnameWithoutLang}`}
                className={`text-sm px-2 py-1 rounded ${currentLang === 'pt-BR' ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                    }`}
            >
                PT
            </Link>
            <Link
                href={`/en-US${pathnameWithoutLang}`}
                className={`text-sm px-2 py-1 rounded ${currentLang === 'en-US' ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                    }`}
            >
                EN
            </Link>
            <Link
                href={`/es${pathnameWithoutLang}`}
                className={`text-sm px-2 py-1 rounded ${currentLang === 'es' ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                    }`}
            >
                ES
            </Link>
        </div>
    );
}