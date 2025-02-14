import { Addon } from '@embroider/addon-dev/rollup';
import { babel } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import cssnano from 'rollup-plugin-cssnano';
import process from 'process';

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

const plugins = [
  // These are the modules that users should be able to import from your
  // addon. Anything not listed here may get optimized away.
  addon.publicEntrypoints([
    '**/*.{js,ts}',
    'index.js',
    'template-registry.js',
    'styles/@dracoui/components.scss',
  ]),

  // These are the modules that should get reexported into the traditional
  // "app" tree. Things in here should also be in publicEntrypoints above, but
  // not everything in publicEntrypoints necessarily needs to go here.
  addon.appReexports(
    [
      'components/**/!(*types).js'
    ]
  ),

  // Follow the V2 Addon rules about dependencies. Your code can import from
  // `dependencies` and `peerDependencies` as well as standard Ember-provided
  // package names.
  addon.dependencies(),

  scss({
    fileName: 'styles/@dracoui/components.css',
    includePaths: [
      './node_modules/@dracoui/primitives/dist/css',
      './node_modules/@dracoui/primitives/dist/fonts'
    ],
  }),

  // Ensure that standalone .hbs files are properly integrated as Javascript.
  addon.hbs(),

  addon.gjs(),

  // This babel config should *not* apply presets or compile away ES modules.
  // It exists only to provide development niceties for you, like automatic
  // template colocation.
  //
  // By default, this will load the actual babel config from the file
  // babel.config.json.
  babel({
    extensions: ['.js', '.gjs', '.ts', '.gts'],
    babelHelpers: 'bundled',
  }),

  // Addons are allowed to contain imports of .css files, which we want rollup
  // to leave alone and keep in the published output.
  addon.keepAssets(['**/*.css', '**/*.scss']),

  // Copy readme and license files into published package
  copy({
    targets: [
      { src: 'README.md', dest: 'dist' },
      { src: 'LICENSE.md', dest: 'dist' },
      { src: './node_modules/geist/dist/fonts/geist-sans/Geist-variable.woff2', dest: 'dist/styles/fonts' },
    ]
  })
];

if (!process.env.development) {
  // Remove leftover build artifacts when starting a new build.
  plugins.push(addon.clean());
}

export default {
  // This provides defaults that work well alongside `publicEntrypoints` below.
  // You can augment this if you need to.
  output: addon.output(),
  plugins: plugins,
  external: ['ember-modifier', 'prismjs'],
};