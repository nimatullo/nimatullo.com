import type { GatsbyConfig } from "gatsby"
const path = require("path")

const config: GatsbyConfig = {
  siteMetadata: {
    title: `nimatullo`,
    siteUrl: `https://nimatullo.com`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`,
      },
    },
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
