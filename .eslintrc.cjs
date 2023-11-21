/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const OFF = 0;
const WARN = 1;
const ERROR = 2;

/**
 * Since we use `prettier`, we try to keep this config as close to `prettier`
 * standard as possible, especially in terms of spacing.
 */
const ES_RULES = {
  'array-bracket-spacing': [ERROR, 'never'],
  'arrow-body-style': [WARN, 'as-needed'],
  'array-callback-return': ERROR,
  'arrow-parens': WARN,
  'arrow-spacing': WARN,
  'block-spacing': [WARN, 'always'],
  'brace-style': OFF, // this will be managed by `prettier`
  'comma-dangle': [ERROR, 'only-multiline'],
  'comma-spacing': [WARN, { before: false, after: true }],
  'comma-style': [ERROR, 'last'],
  'consistent-return': ERROR,
  'consistent-this': [ERROR, 'self'],
  'constructor-super': ERROR,
  curly: ERROR,
  'default-case': ERROR,
  'dot-location': [ERROR, 'property'],
  'dot-notation': [ERROR, { allowKeywords: true }],
  'eol-last': [WARN, 'always'],
  eqeqeq: ERROR,
  'func-call-spacing': OFF,
  'guard-for-in': ERROR,
  'jsx-quotes': ERROR,
  'key-spacing': WARN,
  'keyword-spacing': [WARN, { before: true, after: true }],
  'no-console': WARN,
  'no-const-assign': ERROR,
  'no-debugger': WARN,
  // NOTE: this rule is useful for us to enforce usage of inline type imports and exports
  // e.g. `import { type A, B } from ...` over `import type { A } from ...; import { B } from ...;`
  // We would not need to enable rule `import/no-duplicates` anymore
  // Also we could include the duplication detection to include exports using `includeExports` flag
  // See https://github.com/typescript-eslint/typescript-eslint/issues/4338
  'no-duplicate-imports': [WARN, { includeExports: true }],
  'no-fallthrough': ERROR,
  'no-global-assign': ERROR,
  'no-invalid-regexp': ERROR,
  'no-irregular-whitespace': ERROR,
  'no-magic-numbers': [OFF, { ignore: [-1, 0, 1], enforceConst: true }],
  'no-mixed-spaces-and-tabs': ERROR,
  'no-multi-assign': WARN,
  'no-multi-spaces': WARN,
  'no-multiple-empty-lines': [WARN, { max: 1 }],
  'no-process-env': ERROR,
  'no-process-exit': ERROR,
  'no-proto': ERROR,
  'no-prototype-builtins': ERROR,
  'no-redeclare': OFF,
  'no-regex-spaces': ERROR,
  'no-return-await': ERROR,
  'no-return-assign': ERROR,
  /**
   * This is a workaround as `import/no-relative-parent-imports` is not working properly with Typescript as of 2.20.1
   * See https://github.com/benmosher/eslint-plugin-import/issues/1644
   * See https://github.com/benmosher/eslint-plugin-import/issues/834
   * See https://github.com/benmosher/eslint-plugin-import/issues/669#issuecomment-316438608
   *
   * NOTE: This is a rule that we would like to turn on by default to avoid ugly relative import paths,
   * such as `../../../../something`, but due to problem with Typescript's not resolving these to absolute
   * paths while creating type declaration files, we decided to allow relative paths
   * See https://github.com/microsoft/TypeScript/issues/30952
   * See https://github.com/microsoft/TypeScript/issues/15479
   * See https://github.com/microsoft/TypeScript/issues/26722
   */
  // 'no-restricted-imports': [WARN, { patterns: ['../*'] }],
  'no-trailing-spaces': WARN,
  'no-unused-labels': WARN,
  'no-unsafe-finally': ERROR,
  'no-unsafe-negation': WARN,
  'no-unreachable': ERROR,
  'no-var': ERROR,
  'no-void': ERROR,
  'no-whitespace-before-property': ERROR,
  'object-curly-spacing': [WARN, 'always'],
  'prefer-arrow-callback': [ERROR, { allowNamedFunctions: true }],
  'prefer-const': WARN,
  'prefer-named-capture-group': WARN,
  'prefer-template': WARN,
  quotes: [WARN, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  'require-yield': OFF,
  semi: [WARN, 'always', { omitLastInOneLineBlock: true }],
  'semi-spacing': [WARN, { after: true, before: false }],
  'semi-style': WARN,
  'space-before-blocks': WARN,
  'space-before-function-paren': [
    WARN,
    { anonymous: 'always', named: 'never' },
  ],
  'space-in-parens': [WARN, 'never'],
  'space-infix-ops': WARN,
  'space-unary-ops': WARN,
  strict: ERROR,
  'switch-colon-spacing': WARN,
  'template-curly-spacing': WARN,
  'template-tag-spacing': WARN,
};

const IMPORT_RULES = {
  // Turn off rules as per recommendation of typescript-eslint
  // See https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting
  'import/no-unresolved': OFF,
  'import/named': OFF,
  'import/namespace': OFF,
  'import/default': OFF,
  'import/export': OFF,
  'import/no-named-as-default': OFF,
  'import/no-named-as-default-member': OFF,
  'import/no-deprecated': OFF,
  'import/no-unused-modules': OFF,
  'import/no-cycle': OFF,
  'import/extensions': OFF, // we don't need this since TS already covered this check
  'import/newline-after-import': [WARN, { count: 1 }],
  'import/no-default-export': WARN,
};

const TYPESCRIPT_RULES = {
  '@typescript-eslint/ban-types': WARN,
  '@typescript-eslint/consistent-type-imports': WARN,
  '@typescript-eslint/explicit-function-return-type': [
    WARN,
    { allowExpressions: true, allowTypedFunctionExpressions: true },
  ],
  '@typescript-eslint/no-inferrable-types': [WARN, { ignoreParameters: true }],
  '@typescript-eslint/no-redeclare': [ERROR, { ignoreDeclarationMerge: true }],
  '@typescript-eslint/no-var-requires': OFF,
  '@typescript-eslint/no-unused-vars': [
    WARN,
    { args: 'none', ignoreRestSiblings: true },
  ],

  // NOTE: the following rules are stylisticc only
  '@typescript-eslint/no-extra-semi': WARN,
  '@typescript-eslint/no-shadow': WARN,
  // NOTE: since functions are hoisted in ES6, it is then advisable to enable this rule so that we can have functions that depend on each other and not causing
  // circular module dependency. It is also said to be safe to use
  // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#options
  '@typescript-eslint/no-use-before-define': [ERROR, { functions: false }],
  '@typescript-eslint/no-useless-constructor': WARN,
};

module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors', // See https://github.com/benmosher/eslint-plugin-import/blob/master/config/errors.js
    'plugin:import/typescript', // See https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
  ],
   rules: {
    ...ES_RULES,
    ...TYPESCRIPT_RULES,
    ...IMPORT_RULES,
    '@typescript-eslint/no-unsafe-argument': OFF,
    '@typescript-eslint/no-unsafe-member-access': OFF,
  },
  root: true,
};
