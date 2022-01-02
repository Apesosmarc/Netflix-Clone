import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      redirect_uri: "https://affectionate-carson-970e4d.netlify.app/",
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    }),
  ],
});
