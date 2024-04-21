/** @type {import('typedoc').TypeDocOptions} */
export default {
    "extends": ["@aviene/typedoc-config-markdown"],  
    "entryPoints": ["packages/*"],
    "name": "Packages",
    "entryPointStrategy": "packages",
    "out": "./docs"
  }