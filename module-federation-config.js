// @ts no-nocheck
export default {
  name: 'mf_host',
  filename: 'remoteEntry.js',
  exposes: {
    './button': './src/components/button/index.tsx',
    './remote-example': './src/components/remote-example/index.tsx',
    './remote-runtime-example': './src/components/remote-runtime-example/index.tsx',
  },
  remotes: {
    provider: "provider@http://localhost:3001/mf-manifest.json",
  },
  // shared: {
  //   react: {
  //     singleton: true,
  //   },
  //   'react-dom': {
  //     singleton: true,
  //   },
  // },
};
