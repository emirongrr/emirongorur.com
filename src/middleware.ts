import { NextResponse, NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "./app/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  if (
    pathname.startsWith("/studio") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/manifest.webmanifest") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.includes("icon") ||
    pathname.includes("chrome")
  ) {
    return NextResponse.next();
  }

  let lng = req.cookies.get(cookieName)?.value || undefined;

  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language") || "") || undefined;

  if (!lng) lng = fallbackLng;

  const isAlreadyCorrectLanguage = languages.some((loc) =>
    pathname.startsWith(`/${loc}`)
  );

  if (isAlreadyCorrectLanguage) {
    return NextResponse.next(); 
  }

  const redirectPathname = `/${lng}${pathname}`.replace(/\/$/, "");
  const redirectUrl = new URL(redirectPathname, req.url);
  redirectUrl.search = searchParams.toString(); 

  return NextResponse.redirect(redirectUrl, 308);
}