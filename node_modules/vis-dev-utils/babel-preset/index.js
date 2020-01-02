module.exports = function(_context, { css = false, ts = false } = {}) {
  const base = {
    presets: [
      [
        require("@babel/preset-env"),
        {
          targets: {
            // A browser is polyfilled if it is supported by it's maintainers
            // or if it is used by at least one in every thousand of users.
            browsers: "> 0.1% or not dead",
            // This forces Babel to polyfill ESM as if it was UMD. The reason
            // behind this is that that Babel doesn't include IE 11 polyfills
            // in ESM builds since IE 11 can't even load them. However many of
            // our users use bundlers to bundle ESM builds into IE 11
            // compatible UMD builds. Therefore even ESM builds need IE 11
            // polyfills.
            esmodules: false
          },
          // This would pollute global scope. Babel's Transform Runtime plugin
          // is used instead.
          useBuiltIns: false
        }
      ]
    ],
    plugins: [
      require("@babel/plugin-proposal-class-properties"),
      require("@babel/plugin-proposal-object-rest-spread"),
      [
        require("@babel/plugin-transform-runtime"),
        {
          // Force corejs 3. The default corejs 2 is deprecated and doesn't
          // contain some polyfills.
          corejs: 3
        }
      ]
    ],
    env: {
      test: {
        presets: [
          [
            require("@babel/preset-env"),
            {
              // Tests run in Node so there's no need to include any other
              // polyfills (we're testing our code, not the polyfills).
              targets: "maintained node versions"
            }
          ]
        ]
      },
      "test-cov": {
        presets: [
          [
            require("@babel/preset-env"),
            {
              // dtto
              targets: "maintained node versions"
            }
          ]
        ],
        // This instruments the code to record coverage. It's more reliable if
        // done through Babel plugin.
        plugins: ["istanbul"]
      }
    }
  };

  if (css) {
    base.plugins.push(require("babel-plugin-css-modules-transform"));
  }
  if (ts) {
    base.presets.push(require("@babel/preset-typescript"));
  }

  return base;
};
