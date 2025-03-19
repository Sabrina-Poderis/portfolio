import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import LocaleEnum from "./ts/enums/LocalesEnum";

const locales = Object.values(LocaleEnum);
const defaultLocale = LocaleEnum.PORTUGUESE;

function getBestMatchingLocale(request: Request): string {
  const negotiatorHeaders = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };

  const negotiator = new Negotiator({ headers: negotiatorHeaders });
  const languages = negotiator.languages();

  return languages.find((lang) => locales.includes(lang as LocaleEnum)) || defaultLocale;
}

export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getBestMatchingLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: "/((?!_next).*)",
};
