import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  {
    ignores: ['public/api-docs', 'node_modules', 'dist', 'build', '**/*{.,-}min.js', '**/*{.,-}min.css']
  },

  js.configs.recommended,
  prettier,

  {
    files: ['**/*.js'],
    plugins: {
      jsdoc
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',

        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly'
      }
    },

    rules: {
      // Possible Errors
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-unreachable': 'error',

      // Best Practices
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-eval': 'error',
      'no-implied-eval': 'error',

      // Variables
      'no-use-before-define': ['error', { functions: false }],

      // Stylistic
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],

      // ES6+
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-var': 'error',
      'prefer-const': 'error',
      'object-shorthand': ['error', 'always'],

      camelcase: ['error', { properties: 'never' }],
      'no-console': ['error', { allow: ['warn', 'error'] }],

      'jsdoc/require-jsdoc': [
        'error',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: false,
            ClassDeclaration: false,
            ArrowFunctionExpression: true,
            FunctionExpression: false
          }
        }
      ],

      // optional but recommended
      'jsdoc/require-description': 'warn',
      'jsdoc/require-param': 'warn',
      'jsdoc/require-returns': 'warn'
    }
  }
];
