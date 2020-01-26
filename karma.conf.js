const webpack = require("webpack");

module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        files: ["test/**/*"],
        mime: { 'text/x-typescript': ['ts'] },
        preprocessors: {
            "test/**/*": ["webpack", "sourcemap"],
        },
        webpack: {
            mode: 'development',
            resolve: {
                extensions: [".js", ".ts"]
            },
            module: {
                rules: [{
                    test: /\.ts?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                }]
            },
            stats: {
                colors: true,
                modules: true,
                reasons: true,
                errorDetails: true
            },
            plugins: [
                new webpack.SourceMapDevToolPlugin({
                    filename: null, // if no value is provided the sourcemap is inlined
                    test: /\.(ts|js)($|\?)/i, // process .js and .ts files only
                    exclude: [/node_modules/]
                })
            ]
        },
        reporters: ["kjhtml"],
        port: 9876,
        colors: true,
        client: {
            clearContext: false
        },
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: false,
        concurrency: Infinity
    })
}