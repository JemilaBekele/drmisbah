import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const loginUrl = new URL("/login", request.url);
  const adminUrl = new URL("/admin", request.url);

 if (request.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(adminUrl);
  }

  if (request.nextUrl.pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(loginUrl);
  }


  return NextResponse.next();
}


export const config = {
  matcher: ["/admin/:path*", "/login"],
};
