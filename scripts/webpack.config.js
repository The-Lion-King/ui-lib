 const path = require("path");
const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const root = path.resolve(__dirname, "../src/components");
const buildPath = path.resolve(__dirname, "../dist");

const {  name } = require("../package.json");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "../src/components/index.tsx"),
    output: {
        libraryTarget:"umd",
        path: path.resolve(__dirname, '../dist'),
        library: name,
        filename: "index.js",
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js','jsx',".ts", ".tsx",'.scss','.css']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: "/node_modules/",
                loader: "ts-loader",
                options: {
                    configFile: 'tsconfig.umd.json',
                    transpileOnly: true
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: "url-loader?limit=8192",
                include: root
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new CleanWebpackPlugin({ buildPath }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react"
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom"
        }
    }
};
