import { prisma } from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";


export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: 'email', placeholder: 'Email'},
                password: { label: "Password", type: "password", placeholder: "Password"}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials.password) return null;

                const user = await prisma.user.findUnique( {where: {email: credentials.email}});

                if(!user) return null;
                
                const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword!)

                return passwordsMatch ? user : null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: 'jwt'
    }
};