const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    
    .addEntry('app', './assets/app.js') // Point d'entrée principal
    .enableSassLoader()
    
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    // Activer le runtime chunk unique recommandé
    .enableSingleRuntimeChunk()

    // Charger jQuery globalement
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
