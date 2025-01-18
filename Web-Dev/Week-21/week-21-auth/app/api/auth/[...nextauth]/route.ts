import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    // Provider for custom email format for authentication.
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Name" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;
                
                console.log(username);
                console.log(password);
                // db request to check if this username and password are correct.

                const user = {
                    id: "1",
                    name: "Laxman",
                    username: "laxman@gmail.com"
                }
                
                if(user) {
                    return user;
                } else {
                    return null;
                }
            }
        }),
        // Provider for google authentication.
        GoogleProvider({
            clientId: "abc",
            clientSecret: "abc@123"
        }),
        // Provider for github authentication.
        GitHubProvider({
            clientId: "abcd",
            clientSecret: "abcd@123"
        })
    ]
})

export { handler as GET, handler as POST }