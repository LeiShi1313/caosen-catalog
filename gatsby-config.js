module.exports = {
  siteMetadata: {
    title: "caosen-flip-gatsby",
    siteUrl: "http://192.168.1.13:8001",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
