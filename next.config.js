require("dotenv").config();

module.exports = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/awesome": { page: "/awesome" },
      "/about": { page: "/about" },
    };
  },
};
