const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const alias = {
  "~root": resolveApp("src"),
  "~redux": resolveApp("src/redux"),
  "test-utils": resolveApp("src/tests/utils.tsx"),
};

module.exports = {
  alias,
  dotenvDev: resolveApp(".env.development"),
  dotenvProd: resolveApp(".env.production"),
  app: resolveApp("."),
  build: resolveApp("build"),
  public: resolveApp("public"),
  src: resolveApp("src"),
  html: resolveApp("public/index.html"),
  entry: resolveApp("src/index.tsx"),
  tsconfig: resolveApp("./tsconfig.json"),
};
