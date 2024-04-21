/** @type {import('typedoc').TypeDocOptions} */
export default {
    "extends": ["@aviene/typedoc-config-markdown"],  
    "entryPoints": ["packages/*"],
    "name": "@aviene/node-typescript-libs",
    "entryPointStrategy": "packages",
    "out": "./docs"
  }