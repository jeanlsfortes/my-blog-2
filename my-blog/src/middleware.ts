// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// Locales suportados
export const locales = ['pt-BR', 'en-US', 'es']
export const defaultLocale = 'pt-BR'

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest): string {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore locales are readonly
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    return matchLocale(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // `/_next/` and `/api/` são sempre ignorados
    if (
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/api/') ||
        pathname.startsWith('/static/') ||
        pathname.includes('.')
    ) {
        return NextResponse.next()
    }

    // Checa se o pathname já tem um locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return NextResponse.next()

    // Redireciona se não houver locale
    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)

    return NextResponse.redirect(newUrl)
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}