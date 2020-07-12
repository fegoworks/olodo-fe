/** @format */

const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '<atoms>': path.resolve(__dirname, 'src/components/UI/atoms'),
      '<molecules>': path.resolve(__dirname, 'src/components/UI/molecules'),
      '<organisms>': path.resolve(__dirname, 'src/components/UI/organisms'),
      '<templates>': path.resolve(__dirname, 'src/components/UI/templates'),
      '<pages>': path.resolve(__dirname, 'src/components/pages'),
      '<styles>': path.resolve(__dirname, 'src/styles'),
      '<core>': path.resolve(__dirname, 'src/core'),
      '<helpers>': path.resolve(__dirname, 'src/helpers'),
      '<state>': path.resolve(__dirname, 'src/state'),
      '<variables>': path.resolve(__dirname, 'src/styles/variables'),
      '<api>': path.resolve(__dirname, 'src/api'),
      '<constants>': path.resolve(__dirname, 'src/constants'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
        '^<atoms>/(.*)$': '<rootDir>/src/components/UI/atoms/$1',
        '^<molecules>/(.*)$': '<rootDir>/src/components/UI/molecules/$1',
        '^<organisms>/(.*)$': '<rootDir>/src/components/UI/organisms/$1',
        '^<pages>/(.*)$': '<rootDir>/src/components/pages/$1',
        '^<helpers>/(.*)$': '<rootDir>/src/helpers/$1',
        '^<styles>/(.*)$': '<rootDir>/src/styles/$1',
      },
    },
  },
};
