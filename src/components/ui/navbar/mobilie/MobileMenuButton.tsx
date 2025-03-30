"use client";

import React from "react";

interface MobileMenuButtonProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export default function MobileMenuButton({
    isMenuOpen,
    toggleMenu
}: MobileMenuButtonProps): React.ReactElement {
    return (
        <button
            onClick={toggleMenu}
            className="md:hidden text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
            {isMenuOpen ? (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            )}
        </button>
    );
}