const path = require("path");

// Webpack needs to export a config using nodejs modules bz node system reads and executes it.
module.exports = {
  //entry file and webpack automatically compiles the ts files in dependency tree of index.ts.
  // The path specified should be relative.
  entry: "./src/index.ts",

  // Output config - The directory where the compiled file needs to placed.
  // The path is absolute. so use path module.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  // module - contains the compilation configurations. it contains set of rules.
  module: {
    rules: [
      // This rule compiles all .ts (test property) files under absolute path (include property)
      // into js using ts-loader (use property)
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
};
