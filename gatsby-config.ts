import type { GatsbyConfig } from "gatsby"
const path = require("path")

const config: GatsbyConfig = {
  siteMetadata: {
    title: `nimatullo`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@app": path.resolve(__dirname, "src"),
          "@styles": path.resolve(__dirname, "src/styles"),
          "@utils": path.resolve(__dirname, "src/utils"),
          "@types": path.resolve(__dirname, "src/types"),
        },
      },
    },
  ],
}

export default config
