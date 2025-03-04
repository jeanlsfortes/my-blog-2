import { locales } from '@/middleware'
import "./globals.css";
import { Navbar } from '@/components/ui/navbar/Navbar'
import { ReactNode } from 'react';

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { lang: string };
}) {
    const { lang } = await params;

    return (
        <html lang={lang}>
            <body>
                <Navbar lang={lang} />
                {children}
            </body>
        </html>
    );
}