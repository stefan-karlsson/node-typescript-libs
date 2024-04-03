import typescript from '@aviene/eslint-config-typescript'
import optional from '@aviene/eslint-config-typescript/optional'
import style from '@aviene/eslint-config-typescript/style'

const globs = {
  ts: '**/*.ts',
}

/** @type {Array<import("eslint").Linter.FlatConfig>} */
const config = [
  { files: [globs.ts], ...typescript },
  { files: [globs.ts], ...optional },
  { files: [globs.ts], ...style },
  // Any custom settings to be applied
  { files: [globs.ts],
    languageOptions: { ecmaVersion: 2023 }
  },
]

export default config