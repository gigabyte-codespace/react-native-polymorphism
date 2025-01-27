// metro.config.js
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts }
    } = await getDefaultConfig();

    return {
        transformer: {
            babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
        },
        resolver: {
            assetExts: assetExts.filter(ext => ext !== 'svg'),
            sourceExts: [...sourceExts, 'svg', 'js', 'json', 'ts', 'tsx'],  // Asegúrate de incluir todas las extensiones necesarias
        },
    };
})();
