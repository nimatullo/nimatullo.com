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
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.gstatic.com",
          "https://fonts.googleapis.com",
        ],
        web: [
          {
            name: "DM Serif Text",
            file: "https://fonts.googleapis.com/css2?family=DM+Serif+Text:wght@400;500;700&display=swap",
          },
          {
            name: "Overpass",
            file: "https://fonts.googleapis.com/css2?family=Overpass:wght@400;600;800&display=swap",
          },
          {
            name: "Inconsolata",
            file: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap",
          },
        ],
      },
    },
  ],
}

export default config
