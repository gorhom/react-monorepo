const path = require('path');

const extraNodeModules = new Proxy(
  {
    '@demo/shared': path.resolve(__dirname, '../../shared'),
  },
  {
    get: (target, name) => {
      if (target.hasOwnProperty(name)) {
        return target[name];
      }
      return path.join(process.cwd(), `node_modules/${name}`);
    },
  },
);

const watchFolders = [
  path.resolve(__dirname, '../shared'),
  path.resolve(__dirname, '../../node_modules'),
];

module.exports = {
  projectRoot: path.resolve(__dirname),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules,
    sourceExts: ['js', 'jsx'],
  },
  watchFolders,
};
