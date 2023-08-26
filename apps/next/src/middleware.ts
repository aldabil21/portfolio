import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages } from '@/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
const PUBLIC_FILE = /\.(.*)$/;
const cookieName = 'i18next';

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.indexOf('icon') > -1 ||
    req.nextUrl.pathname.indexOf('chrome') > -1 ||
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  const response = NextResponse.next();

  // Setting preferred theme if not set
  if (!req.cookies.has('theme')) {
    const theme = req.headers.get('sec-ch-prefers-color-scheme') || 'dark';
    response.cookies.set({
      name: 'theme',
      value: theme,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });
  }

  // Redirect if locale in path is not supported
  const hasValidLocale = languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`));
  if (!hasValidLocale) {
    let locale;
    if (req.cookies.has(cookieName)) {
      locale = acceptLanguage.get(req.cookies.get(cookieName)?.value);
    }
    if (!locale) {
      locale = acceptLanguage.get(req.headers.get('Accept-Language'));
    }
    if (!locale) {
      locale = fallbackLng;
    }
    const pathname = req.nextUrl.pathname;
    const search = req.nextUrl.search;
    return NextResponse.redirect(new URL(`/${locale}/${pathname}${search}`, req.url));
  }

  return response;
}
