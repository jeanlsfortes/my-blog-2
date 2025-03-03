import { ReactNode } from 'react'
import { locales } from '@/middleware'
import "./globals.css";
import { Navbar } from '@/components/ui/navbar/navbar'

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({
    children,
    params,
}: {
    children: ReactNode
    params: { lang: string }
}) {
    return (
        <html lang={params.lang}>
            <body>
                <Navbar lang={params.lang} />
                {children}
            </body>
        </html>
    )
}