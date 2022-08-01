const env = require("postcss-preset-env")
const nested = require("postcss-nested")
const variables = require("postcss-variables")

module.exports = {
  plugins: [
    nested(),
    variables({
      globals: {
        blue: "blue",
      },
    }),
    env({
      stage: 3,
      autoprefixer: {
        flexbox: "no-2009",
      },
    }),
  ],
}
