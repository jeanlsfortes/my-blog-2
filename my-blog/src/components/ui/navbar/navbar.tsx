
"use client";

import React from "react";
import Link from "next/link";
import { NavItem } from "./typing/navbar.type";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import MobileMenuButton from "./mobile-menu-button";
import { useMenu } from "./hooks/use-menu";
import { usePathname } from "next/navigation";

export function Navbar(): React.ReactElement {
  const pathname = usePathname();
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

  const navItems: NavItem[] = [
    { label: "Tela Inicial", href: "/" },
    { label: "Sobre Mim", href: "/sobre" },
    { label: "Certificados", href: "/certificados" },
    { label: "Projetos", href: "/projetos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-sm z-50 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Meu Portfólio
        </Link>

        <DesktopMenu navItems={navItems} />
        <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        closeMenu={closeMenu}
      />
    </nav>
  );
}