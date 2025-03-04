"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "../typing/Navbar.type";

interface DesktopMenuProps {
    navItems: NavItem[];
}

export default function DesktopMenu({
    navItems
}: DesktopMenuProps): React.ReactElement {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-white/80 transition-colors ${pathname === item.href
                        ? "text-white font-medium"
                        : "text-white/60"
                        }`}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
}