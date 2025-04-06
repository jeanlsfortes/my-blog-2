"use client";

import React from "react";
import Link from "next/link";
import MobileMenuButton from "./mobilie/MobileMenuButton";
import { useMenu } from "./hooks/useMenu";
import { useTranslations } from "@/hooks/use-translations";
import DesktopMenu from "./desktop/DesktopMenu";
import MobileMenu from "./mobilie/MobileMenu";
import { NavItem } from "./typing/Navbar.type";
import { LanguageSwitcher } from "@/components/language-switcher/LanguageSwitcher";
import { useParams } from "next/navigation";

export function Navbar(): React.ReactElement {
  const params = useParams();
  const lang = Array.isArray(params.lang) ? params.lang[0] : (params.lang ?? 'pt-BR');

  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();
  const { t } = useTranslations(lang as string);

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: `/${lang}` },
    { label: t('nav.about'), href: `/${lang}/about` },
    { label: t('nav.certificates'), href: `/${lang}/certificates` },
    { label: t('nav.projects'), href: `https://github.com/jeanlsfortes` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-sm z-50 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href={`/${lang}`} className="text-white font-bold text-xl">
          {t('nav.portfolio')}
        </Link>

        <div className="flex items-center gap-6">
          <LanguageSwitcher currentLang={lang} />
          <DesktopMenu navItems={navItems} />
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        closeMenu={closeMenu}
      />
    </nav>
  );
}
