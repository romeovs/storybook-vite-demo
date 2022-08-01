import * as path from "path"
import { promises as fs } from "fs"

import { build } from "vite"
import glob from "fast-glob"

async function main() {
  const components = (await glob("./src/*/index.tsx")).map((component) => path.basename(path.dirname(component)))
  await Promise.all(components.map(_build))

  const pkg = JSON.parse(await fs.readFile("./package.json", "utf-8"))
  pkg.exports = {}
  for (const component of components) {
    pkg.exports[component] = {
      import: `./components/${component}/index.es.js`,
      require: `./components/${component}/index.cjs.js`,
    }
  }

  fs.writeFile("./dist/package.json", JSON.stringify(pkg, null, 2))

  // TODO: generate type definitions
  // TODO: generate documentation section
}

async function _build(component: string) {
  await build({
    build: {
      outDir: path.join("dist/components", component),
      emptyOutDir: true,
      target: "esnext",
      sourcemap: true,
      cssCodeSplit: false,
      lib: {
        entry: "./src/button/index.tsx",
        formats: ["es", "cjs"],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external(id: string) {
          return !id.startsWith(".") && !path.isAbsolute(id)
        },
      },
    },
  })

  await fs.rename(`./dist/components/${component}/style.css`, `./dist/components/${component}.css`)
}

main()
