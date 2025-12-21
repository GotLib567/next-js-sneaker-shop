import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const TEST_USER = {
  id: "1",
  email: "test@test.com",
  passwordHash: "$2b$10$SP.rBhAD4Aynn23ZQyhbiOkSYakRyhc0dfigBZU/S0NB54lmIUS6W", // 123456
  name: "Test User",
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = String(credentials?.email ?? "");
        const password = String(credentials?.password ?? "");

        if (!email || !password) return null;

        // Without DB for now: mock user
        if (email !== TEST_USER.email) return null;

        const ok = await bcrypt.compare(password, TEST_USER.passwordHash);
        if (!ok) return null;

        return { id: TEST_USER.id, email: TEST_USER.email, name: TEST_USER.name };
      },
    }),
  ],
  session: { strategy: "jwt" },
});