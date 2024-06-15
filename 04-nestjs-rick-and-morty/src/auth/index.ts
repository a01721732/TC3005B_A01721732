import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { signInSchema } from '@/schema/auth'
// adjust from your db provider
import { db } from '@/db'
import { nextAuthConfig } from '@/auth/options'

export const { handlers, signIn, signOut, auth } = NextAuth({
  // options we previously created
  ...nextAuthConfig,
  adapter: DrizzleAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        /**
         * This signInSchema is taken from here
         * https://authjs.dev/getting-started/authentication/credentials#verifying-data-with-zod
         */
        const { success, data } = signInSchema.safeParse(credentials)

        if (!success) return null
        /**
         * this function will find your username and hashed (or plain, not recommended) password on DB
         * and return null if user is not found, so create your own function to validate it.
         * On this step you have already created an schema to handle users
         */
        return await findUserByEmailAndPassword(data.email, data.password)
      },
    }),
  ],
})
