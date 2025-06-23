// This plugin excludes React Native modules from the build process
// by resolving them to an empty module, preventing them from being bundled.
const excludeReactNativeModulesPlugin = {
  name: "exclude-react-native-modules",
  setup(build) {
    build.onResolve({ filter: new RegExp(`^.*react-native.*$`) }, (args) => {
      return {
        path: args.path,
        namespace: "excluded-modules",
      };
    });

    build.onLoad({ filter: /.*/, namespace: "excluded-modules" }, () => ({
      contents: "module.exports = {};",
      loader: "js",
    }));
  },
};

export default excludeReactNativeModulesPlugin;
