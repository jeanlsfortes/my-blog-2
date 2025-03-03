"use client";

import React from "react";
import Link from "next/link";
import { NavItem } from "./typing/navbar.type";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import MobileMenuButton from "./mobile-menu-button";
import { useMenu } from "./hooks/use-menu";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher/language-switcher";
import { useTranslations } from "@/hooks/use-translations";

export function Navbar({ lang }: { lang: string }): React.ReactElement {
  const pathname = usePathname();
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();
  const { t } = useTranslations(lang);

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: `/${lang}` },
    { label: t('nav.about'), href: `/${lang}/sobre` },
    { label: t('nav.certificates'), href: `/${lang}/certificados` },
    { label: t('nav.projects'), href: `/${lang}/projetos` },
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
