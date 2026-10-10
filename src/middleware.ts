import { NextResponse, type NextRequest } from "next/server";

const VALID_LOCALES = ["br", "en", "es"] as const;
type Locale = (typeof VALID_LOCALES)[number];

const COUNTRY_LOCALE_MAP: Record<string, Locale> = {
  // Portuguese
  BR: "br",
  PT: "br",
  // English
  US: "en",
  GB: "en",
  UK: "en",
  CA: "en",
  AU: "en",
  NZ: "en",
  IE: "en",
  ZA: "en",
  SG: "en",
  PH: "en",
  IN: "en",
  NG: "en",
  KE: "en",
  // Spanish
  MX: "es",
  AR: "es",
  CO: "es",
  ES: "es",
  CL: "es",
  PE: "es",
  EC: "es",
  VE: "es",
  UY: "es",
  PY: "es",
  BO: "es",
  CR: "es",
  PA: "es",
  DO: "es",
  GT: "es",
  HN: "es",
  SV: "es",
  NI: "es",
  CU: "es",
  PR: "es",
};

function detectLocale(request: NextRequest): Locale {
  // 1. Check preferredLocale cookie
  const cookieLocale = request.cookies.get("preferredLocale")?.value;
  if (cookieLocale && VALID_LOCALES.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // 2. Fall back to x-vercel-ip-country header
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  if (country && COUNTRY_LOCALE_MAP[country]) {
    return COUNTRY_LOCALE_MAP[country];
  }

  // 3. Default to BR
  return "br";
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Skip internal Next.js paths and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".") // static files
  ) {
    return NextResponse.next();
  }

  // Already on a locale path? Let it through
  const pathLocale = pathname.split("/")[1];
  if (VALID_LOCALES.includes(pathLocale as Locale)) {
    // Add Vary header to prevent cross-country cache pollution
    const response = NextResponse.next();
    response.headers.set("Vary", "Accept-Language, Cookie");
    return response;
  }

  // Redirect / to /{locale} preserving UTM params
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  url.search = search; // preserve UTM params

  const response = NextResponse.redirect(url);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico|.*\\..*).*)"],
};
