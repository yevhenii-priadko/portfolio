import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next 16 renamed middleware.ts to proxy.ts. This picks the visitor's
// language (cookie, then Accept-Language) and redirects "/" to "/en" or "/uk".
export default createMiddleware(routing);

export const config = {
  // Everything except API routes, Next internals, Vercel internals and files with an extension.
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
