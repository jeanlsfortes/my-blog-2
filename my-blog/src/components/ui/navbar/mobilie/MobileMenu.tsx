"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "../typing/Navbar.type";

interface MobileMenuProps {
    isMenuOpen: boolean;
    navItems: NavItem[];
    closeMenu: () => void;
}

export default function MobileMenu({
    isMenuOpen,
    navItems,
    closeMenu
}: MobileMenuProps): React.ReactElement | null {
    const pathname = usePathname();

    if (!isMenuOpen) return null;

    return (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-sm py-4">
            <div className="flex flex-col space-y-4 px-4">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`hover:text-white/80 transition-colors ${pathname === item.href
                            ? "text-white font-medium"
                            : "text-white/60"
                            }`}
                        onClick={closeMenu}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}