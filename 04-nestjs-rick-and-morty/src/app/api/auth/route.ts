import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUsers, addUser, getUserById } from '../../utils/userStorage' // Adjust the import path as needed

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }

        const users = getUsers()
        const user = users.find(
          (u) => u.email.toLowerCase() === credentials.email.toLowerCase(),
        )

        if (user && credentials.password === user.password) {
          return {
            id: user.id,
            email: user.email,
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Check if the user exists in the JSON file
      const existingUser = getUserById(user.id)

      // If the user does not exist, create a new entry
      if (!existingUser) {
        addUser({
          id: user.id,
          email: user.email,
          password: '123',
        })
      }

      return true
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id
      }
      // Add any other custom claims here
      return token
    },
    async session({ session, token, user }) {
      // You can also customize the session object here
      return session
    },
  },
})

export { handler as GET, handler as POST }
