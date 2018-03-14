const { version, name, author, license } = require('../package.json');
import { camelize } from 'toxic-utils';
export const banner = `
/** ${camelize(name)}
 * ${name} v${version}
 * (c) 2017-${(new Date().getFullYear())} ${author}
 * Released under ${license}
 */
`;
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import visualizer from 'rollup-plugin-visualizer';
import string from 'rollup-plugin-string';

import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

const babelConfig = {
  common: {
    presets: [
      [ 'env', {
        modules: false,
        targets: {
          browsers: [ 'last 2 versions', 'not ie <= 8' ],
        },
      }],
      'stage-0',
    ],
    plugins: [
      'transform-decorators-legacy',
      'external-helpers',
      'transform-runtime',
    ],
    include: [
      'src',
      'node_modules/chimee-plugin-mobile-controlbar/**',
      'node_modules/chimee-plugin-mobile-state/**',
    ],
    externalHelpers: true,
    runtimeHelpers: true,
    babelrc: false,
  },
  es: {
    presets: [
      [ 'env', {
        modules: false,
        targets: {
          browsers: [ 'last 2 versions', 'not ie <= 8' ],
        },
      }],
      'stage-0',
    ],
    include: [
      'src',
      'node_modules/chimee-plugin-mobile-controlbar/**',
      'node_modules/chimee-plugin-mobile-state/**',
    ],
    plugins: [
      'transform-decorators-legacy',
      'external-helpers',
      'transform-runtime',
    ],
    externalHelpers: true,
    runtimeHelpers: true,
    babelrc: false,
  },
  umd: {
    presets: [
      [ 'env', {
        modules: false,
        targets: {
          browsers: [ 'last 2 versions', 'not ie <= 8' ],
        },
      }],
      'stage-0',
    ],
    include: [
      'src',
      'node_modules/chimee-plugin-mobile-controlbar/**',
      'node_modules/chimee-plugin-mobile-state/**',
    ],
    // exclude: /node_modules\/(?!(chimee-plugin-mobile-controlbar|chimee-plugin-mobile-state)\/).*/,
    plugins: [
      'transform-decorators-legacy',
      'external-helpers',
      'transform-runtime',
    ],
    externalHelpers: true,
    runtimeHelpers: true,
    babelrc: false,
  },
  iife: {
    presets: [
      [ 'env', {
        modules: false,
        targets: {
          browsers: [ 'last 2 versions', 'not ie <= 8' ],
        },
      }],
      'stage-0',
    ],
    include: [
      'src',
      'node_modules/chimee-plugin-mobile-controlbar/**',
      'node_modules/chimee-plugin-mobile-state/**',
    ],
    plugins: [
      'transform-decorators-legacy',
      'external-helpers',
      'transform-runtime',
    ],
    externalHelpers: true,
    runtimeHelpers: true,
    babelrc: false,
  },
  min: {
    presets: [
      [ 'env', {
        modules: false,
        targets: {
          browsers: [ 'last 2 versions', 'not ie <= 8' ],
        },
      }],
      'stage-0',
    ],
    include: [
      'src',
      'node_modules/chimee-plugin-mobile-controlbar/**',
      'node_modules/chimee-plugin-mobile-state/**',
    ],
    plugins: [
      'transform-decorators-legacy',
      'external-helpers',
    ],
    runtimeHelpers: true,
    babelrc: false,
  },
};
// const externalRegExp = new RegExp(Object.key).join('|'));
// const externalRegExp = new RegExp(/chimee-helper/);
export default function(mode) {
  const config = {
    input: 'src/index.js',
    // external(id) {
    //   return !/min|umd|iife/.test(mode) && externalRegExp.test(id) && !/\.css$/.test(id);
    // },
    plugins: [
      string({
        include: '**/*.svg',
      }),
      postcss({
        plugins: [
          cssnano(),
        ],
        extensions: [ '.css' ],
        extract: true,
      }),
      babel(babelConfig[mode]),
      resolve(),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      visualizer({
        filename: `bundle-size/${mode}.html`,
      }),
    ],
  };
  return config;
}
