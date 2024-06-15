import { NextAuthConfig } from 'next-auth'

export const nextAuthConfig: NextAuthConfig = {
  trustHost: true,
  session: {
    strategy: 'jwt',
  },
  // configure and create the following pages
  pages: {
    signIn: '/login', // route to customize your login page
    newUser: '/register', // route to customize your login page
  },
  callbacks: {
    authorized({
      auth,
      request: {
        nextUrl: { pathname },
      },
    }) {
      /**
       * validate routes we need to protect with authentication
       * @example /dasbboard I want to allow only authenticated
       * to view this page
       * @return false if user is not authenticated, do the same for all routes you want to protect
       */
      if (pathname === '/dashboard') return !!auth?.user
      return true
    },
    async jwt({ token, user: jwtUser, trigger }) {
      // add values to the token
      if (trigger === 'signIn') {
        token.id = jwtUser.id
      }

      return token
    },
    async session({ session, token }) {
      // send properties to the client
      session.user.id = token.sub as string
      return session
    },
  },
  // leave providers empty
  providers: [],
}
