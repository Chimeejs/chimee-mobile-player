import base, { banner } from './rollup.config.base';
export default Object.assign(base('es'), {
  output: {
    format: 'es',
    file: 'lib/chimee-mobile-player.mjs',
    banner,
  },
});
