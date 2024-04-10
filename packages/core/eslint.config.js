import nodev20 from '@aviene/eslint-config-node/v20'
import nodeopt from '@aviene/eslint-config-node/optional'
import nodestyle from '@aviene/eslint-config-node/style'
import ts from '@aviene/eslint-config-typescript'
import tsopt from '@aviene/eslint-config-typescript/optional'
import tsstyle from '@aviene/eslint-config-typescript/style'

const files = {
  ts: '**/*.ts',
  mjs: '**/*.mjs',
}

/** @type {Array<import("eslint").Linter.FlatConfig>} */
const config = [{
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  ignores: ['**/*.js', '*.d.ts', '!.*.js', 'node_modules'],
}, {
  files: [files.ts],
  languageOptions: {
    parserOptions: { project: './tsconfig.json' },
  }
},

{ files: [files.ts], ...nodev20 },
{ files: [files.ts], ...nodeopt },
{ files: [files.ts], ...ts },
{ files: [files.ts], ...tsopt },
{ files: [files.ts], ...tsstyle },

{ files: [files.mjs], ...nodev20 },
{ files: [files.mjs], ...nodeopt },
{ files: [files.mjs], ...nodestyle }
]

export default config