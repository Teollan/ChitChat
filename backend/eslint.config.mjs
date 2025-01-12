import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { ignores: ['node_modules', 'dist/*'] },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    semi: true,
                    singleQuote: true,
                    tabWidth: 4,
                    trailingComma: 'es5',
                    printWidth: 120,
                    arrowParens: 'always',
                },
            ],
            'max-len': [
                'warn',
                {
                    code: 120,
                    ignoreComments: true,
                    ignoreUrls: true,
                },
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                { args: 'all', argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
        },
    },
];
