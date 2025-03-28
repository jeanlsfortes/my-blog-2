import { NextRequest, NextResponse } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

export const locales = ['pt-BR', 'en-US', 'es']
export const defaultLocale = 'pt-BR'

function getLocale(request: NextRequest): string {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    return matchLocale(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Skip static and API routes
    if (
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/api/') ||
        pathname.startsWith('/static/') ||
        pathname.includes('.')
    ) {
        return NextResponse.next()
    }

    // Check if pathname already has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return NextResponse.next()

    // Redirect if no locale is present
    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}${pathname}`, request.url)

    return NextResponse.redirect(newUrl)
}

// Remove this and use route segment config if needed
// export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']}