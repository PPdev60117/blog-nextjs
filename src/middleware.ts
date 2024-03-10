import authConfig from "@/lib/auth.config"
import NextAuth from "next-auth"
 
// This function can be marked `async` if using `await` inside
export default NextAuth(authConfig).auth
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}