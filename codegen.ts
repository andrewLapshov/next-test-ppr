import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api.tarkov.dev/graphql',
  documents: 'src/**/*.ts',
  generates: {
    'src/infrastructure/graphql/generated/': {
      preset: 'client',
      plugins: [],
      config: {
        enumsAsTypes: true,
        avoidOptionals: true,
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
    'src/infrastructure/graphql/schema/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
